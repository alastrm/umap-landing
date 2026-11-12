# Asset Manifest and Handling

## Important

The owner has **prepared asset files**, but this instruction kit does not contain their actual binary data. The image supplied in the conversation is a **screenshot of the asset directory**, not the individual PNG/SVG files. The implementation agent must verify the real assets exist before referencing them.

## Production assets: copy into `public/assets/`

| Filename | Role | Preferred usage |
|---|---|---|
| `umap-logo.svg` | Umap brand mark | Header and footer; examine the actual file before selecting a size or background |
| `umap-map.png` | Main Umap map screenshot | Main hero visual and/or large product illustration |
| `umap-card.png` | Umap UI / place card screenshot | Place detail storytelling; crop carefully so interface content remains legible |
| `umap-catalogue.png` | Umap catalogue/categories sidebar screenshot | Search/categories feature surface; can be used as a tall visual |

Call assets by these **exact filenames**, including `catalogue` (not `catalog`). Use paths like `/assets/umap-map.png`.

## Reference-only assets: place outside public, e.g. `design-references/`

| Filename | Role |
|---|---|
| `2gis-hero.png` | Reference hero composition, scale and spacing |
| `2gis-1.png` | Reference bento/editorial grid balance |
| `2gis-2.png` | Reference feature sections |

- References must **never** be rendered on the Umap landing.
- Do not ship or copy reference images into `public/` as website content.
- No unauthorized logo, image or copy reuse from 2GIS.

## Before implementation

1. List real image files and inspect dimensions/aspect ratios.
2. Inspect the SVG in a safe viewer; check whether it is actually the intended original Umap logo. The supplied thumbnail resembles a familiar browser-style swirl, so confirm its originality/licensing with the owner before publishing it as a brand mark. Do not silently redesign the logo.
3. If a required asset is absent, report its exact missing filename and choose a neutral layout fallback. Do not fetch replacements from stock libraries.
4. Avoid `object-fit: cover` when it would crop key UI elements. Use contained images or crop through a deliberate frame.
5. Optimize delivery via `next/image` where appropriate. Preserve accessible alt descriptions.

## Suggested folder structure (only if creating a new repository)

```text
project-root/
├─ AGENTS.md
├─ docs/
│  ├─ PRODUCT_CONTEXT.md
│  ├─ DESIGN_BRIEF.md
│  ├─ ASSET_MANIFEST.md
│  ├─ COPY_AND_SECTIONS.md
│  └─ ACCEPTANCE_CHECKLIST.md
├─ design-references/
│  ├─ 2gis-hero.png
│  ├─ 2gis-1.png
│  └─ 2gis-2.png
├─ public/
│  └─ assets/
│     ├─ umap-logo.svg
│     ├─ umap-map.png
│     ├─ umap-card.png
│     └─ umap-catalogue.png
└─ src/app/... (or app/, depending on repository)
```

These files in the manifest are **expected user-provided files**, not files included in this context kit.
