# AGENTS.md — Umap Landing

## Mission and source of truth

Build a polished **marketing/product landing page** for Umap, an in-development web mapping service. This repository task is **frontend only**. It is not a task to rebuild the map product.

Read these files before planning or editing:

1. `docs/PRODUCT_CONTEXT.md` — what Umap is, what is confirmed, what must not be claimed.
2. `docs/DESIGN_BRIEF.md` — visual direction, composition, responsive principles.
3. `docs/ASSET_MANIFEST.md` — real assets versus reference-only images.
4. `docs/COPY_AND_SECTIONS.md` — page structure and Russian copy.
5. `docs/ACCEPTANCE_CHECKLIST.md` — definition of done.

If any of these conflict with the latest explicit user request, follow the user request and note the divergence. Do not quietly invent product facts to fill gaps.

## Technology and scope

- Next.js + TypeScript, using the App Router in a new project. If the repository already exists, inspect it before changing conventions and preserve its functioning structure.
- Use the existing package manager, tooling and styling conventions if present. For a new scaffold, prefer Next.js App Router + TypeScript + ESLint; Tailwind CSS is acceptable but not mandatory.
- Strictly frontend. No backend, database, authentication, payments, map SDK integration, geolocation collection, fake APIs, analytics or CMS unless explicitly requested.
- Landing can use static data for the **presentation** of confirmed features, but never fabricate business listings, reviews, awards, usage numbers or functionality.
- Do not modify, replace or refactor the working Umap map application. If this is the existing map repository, isolate the landing page under a non-conflicting route such as `/info` unless the user explicitly specifies otherwise.

## Work protocol

1. Inspect the repository, assets, existing scripts, and routing. Report concise findings and any blockers.
2. Before coding, briefly describe the component/section plan and any assumptions. If the user's current instruction asks you to implement, continue after this short plan rather than waiting for ceremonial approval.
3. Implement in small, coherent components. Prefer straightforward readable code over abstractions and new dependencies.
4. Validate with the repository's available lint/typecheck/build scripts. Run the app and visually inspect desktop/tablet/mobile if browser tooling is available. Do not claim visual verification if it was not done.
5. Finish with a concise summary: what changed, what was tested, what remains to connect (especially the map URL and assets).

## Design quality bar

- The inspiration is `info.2gis.ru` at the level of **craft, hierarchy, spacing, and editorial composition**, not a pixel-perfect clone.
- Original Umap identity: light-gray and white surfaces, blue accents, dark typography. Do not copy 2GIS's green color scheme, layout exactly, texts, logo or illustrations.
- Use **actual Umap assets** to make the product itself the visual focus.
- Avoid generic SaaS boilerplate: three or six identical icon cards, arbitrary gradients, glassmorphism, gratuitous floating badges, excessive shadows, enormous whitespace with no content, and pointless motion.
- Distinguish sections through layout and content, not just repeated containers.
- Keep design intentional and restrained; deliver strong typography, visual rhythm and hierarchy.
- Mobile is a first-class layout, not a reduced-width desktop screenshot.

## Code quality and accessibility

- Write idiomatic, typed React/TypeScript. Avoid `any`, dead code, duplicated markup and unnecessary state.
- Prefer Server Components. Use Client Components only for real interactions.
- Use `next/image` for raster screenshots where appropriate; preserve readable framing and aspect ratio. Never distort assets with `object-fit: cover` when it would crop key UI details.
- Ensure real anchor targets, working link destinations, semantic headings, keyboard accessibility, visible focus, meaningful alt text and sufficient contrast.
- Respect `prefers-reduced-motion`. Animations should clarify, not distract.
- Use responsive sizing and avoid horizontal overflow at narrow viewport widths.
- Provide correct Russian-language HTML metadata and basic Open Graph metadata using real, supportable copy. Do not invent company statistics or awards.
- No image hotlinks, stock photography, speculative logos or unapproved external asset downloads.
- Avoid adding production dependencies unless there is a clear technical need; explain any additions.

## Content and links

- Main CTA: `Открыть карту`. Destination should be configurable via `NEXT_PUBLIC_MAP_URL`, with a documented default only if it does not create a self-link loop in the chosen deployment layout.
- Do not add fake download buttons, 'coming soon' registrations, app-store badges or inactive controls.
- Keep copy in Russian, short and concrete. Do not make unsupported promises about national coverage, transit schedules, AI assistants, popularity or precision.
- External inspiration images under `design-references/` are **not production assets**. Never place them in the rendered website or ship them as the site's visual content.

## Completion criteria

Apply `docs/ACCEPTANCE_CHECKLIST.md`. Report any unmet criteria honestly, with the reason.
