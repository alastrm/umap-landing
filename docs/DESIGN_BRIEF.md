# Design Brief — Umap Marketing Landing

## Overall direction

Build a restrained, premium-feeling **product landing page** with the craft level of `info.2gis.ru` and a clearly original Umap identity. The reference is about hierarchy and execution, not copying composition pixel by pixel.

The experience should feel credible, modern and useful. Favor clear visual storytelling of Umap over decorative web trends.

## Core palette (starting point, adjust for accessible contrast)

- Page: `#FFFFFF`
- Light section surface: `#F3F5F7`
- Alternative light surface: `#EEF2F6`
- Cards: `#FFFFFF`
- Primary blue: `#2563EB`
- Strong blue / hover: `#1D4ED8`
- Main text: `#151A23`
- Secondary text: `#647084`
- Soft border: `#DFE5ED`

Avoid green as the main interface accent; green may appear naturally *inside actual map screenshots*.

## Typography and spacing

- Use a modern sans typeface (e.g., Inter or Manrope) with solid Cyrillic support; avoid loading many font families.
- Desktop hero heading should be dominant but not oversized to the point of awkward line breaks; use fluid typography via `clamp()`.
- Set a consistent content container around 1160–1240px, with comfortable side padding.
- Larger section spacing than ordinary dashboard UI; clear rhythm from hero to features to CTA.
- Generous rounded corners for main presentation surfaces (roughly 24–36px), smaller ones for buttons/content frames.
- Keep body copy narrow enough to read.

## Recommended page composition

### A. Header

- Left: authentic Umap mark + wordmark where appropriate.
- Right: anchor navigation to existing sections, primary `Открыть карту` CTA.
- Clean white background; sticky navigation is optional only if it improves use and works on mobile.

### B. Hero (most important)

- Spacious light-gray rounded hero section on desktop.
- Text side: concise high-impact title, one supporting paragraph, primary blue CTA.
- Visual side: a large, well-composed arrangement featuring **real Umap map imagery**. Make the map dominate, optionally pair a cropped detail/card image with it if readable.
- Avoid using the 2GIS floating 3D logo concept directly. Umap's interface is its strongest proof.
- Suggested headline: `Город ближе, чем кажется`.
- Suggested subheading: `Находите места и организации, выбирайте маршруты и исследуйте город на одной карте.`
- Avoid fake UI badges, floating review counts, excessive shadows, manufactured phone mockups.

### C. Product capability section: editorial bento grid

Instead of identical feature cards, compose 3–4 varied-sized surfaces with real Umap screenshots:

1. **Находите нужное** — search and place discovery; image: `umap-catalogue.png` if visual crop makes sense.
2. **Места и организации** — explore detail cards; image: `umap-card.png`.
3. **Маршруты по городу** — routing (only show a route screenshot if a genuine asset is available; otherwise use a clean text treatment and the existing map imagery without fabricating a route).
4. **Карта, которую удобно изучать** — map imagery from `umap-map.png`.

Visual balance: mix image-heavy and type-heavy cards. Give each item a purpose and a different composition; do not force four identical layouts.

### D. Feature storytelling

Use 1–2 spacious split sections with explanatory text and prominent images:

- One for searching/exploring places.
- One for place cards and/or navigation.

Avoid repeating exactly the same screenshot, crop, or descriptive content used above without reason. It is better to have fewer strong sections than a long repetitive page.

### E. Final CTA + footer

- Final strong, clear CTA: `Исследуйте город с Umap` → `Открыть карту`.
- Minimal footer: brand, neutral product description and only real, existing links.
- Do not add fake social links, legal pages or support addresses.

## Imagery principles

- Source imagery solely from the included Umap assets, unless the owner supplies more.
- Build compositions through CSS backgrounds, cropping, layering and intentional framing.
- Screenshots of map/UI may be relatively small. Preserve clarity rather than scaling them until pixelated. Use texture/background/whitespace instead of fake high-resolution enhancement.
- Do not rebuild mock interfaces with false information or invent maps.
- The reference screenshots are internal **composition inspiration only**.

## Motion

- Prefer simple opacity/translate transitions or a restrained entrance effect for selected elements.
- Hover states should be tactile and restrained.
- No heavy scroll-driven animation, autoplay carousels, parallax, random blur blobs or motion needed to understand content.
- Reduced motion must be respected.

## Mobile layout

- Mobile first with deliberate visual priorities: title, value proposition, CTA, recognizable map image.
- Stack content in a logical order, preserve safe gutters and image cropping.
- Avoid huge empty hero space, tiny navigation, overflowing screenshots and hidden primary CTA.
- Use simple navigation; no complex menu if it is not necessary.

## Anti-pattern checklist

- Pixel-perfect imitation of 2GIS.
- 'We are a top platform' claims without evidence.
- Layouts composed of equal-height cards with repeated blue icons.
- Uniform pale-gray pills everywhere.
- Generic stock images of phones, buildings or smiling people unrelated to Umap.
- Decorative dark sections added merely for contrast.
- Unnecessary second or third CTA type.
