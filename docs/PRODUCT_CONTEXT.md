# Umap — Product Context

## What this is

Umap (`umap.kz`) is a web map and local-place discovery service that is **still being developed**. The requested output is a **separate public-facing landing page** introducing the product, not the map application itself.

Target visitor: a person who wants to understand what Umap does in 5–10 seconds and then open the actual map.

Landing job to be done: communicate the product's usefulness and credibility through precise copy and real interface imagery. The primary conversion is **opening the map**, not downloading an app, creating an account, subscribing, or contacting sales.

## Features explicitly confirmed by the product owner

- Interactive map.
- Place/business categories.
- Businesses / organizations on the map.
- Route building.
- Search.
- Place detail cards.

These features can be shown and described, preferably anchored in real screenshots. **Do not assert any other feature as production-ready without evidence.**

## Important product constraints

- Product is pre-release/in development; avoid language implying a mature, widely adopted platform.
- Some underlying map/business data may still be mock/demo data. Do not represent example listings or numbers as independently verified facts.
- Do not invent app-store availability, mobile applications, popularity statistics, years of operation, awards, live traffic accuracy, AI features, partnerships or geographic coverage.
- A visual mockup for layout purposes is fine only if it is clearly treated as a design asset, not a factual claim.

## Brand and tone

- Brand name: **Umap** (retain the capitalization as supplied).
- Visual color direction: **light gray + white + blue**.
- Copy language: **Russian**.
- Voice: clear, modern, confident but not inflated. Short sentences. Product-specific phrases, no startup clichés.

## Deployment assumption to verify

`umap.kz` currently points at the map experience. The landing should normally live as a separate Next.js frontend/domain or at a separate route (e.g., `/info`) so it cannot accidentally displace the map. Check actual repository/routing before choosing. Configure the `Открыть карту` destination via environment variable rather than guessing a new URL.

## Not the scope of this task

No map implementation or data fixes; no backend/API/database; no admin panel; no login flows; no real-time map functionality inside the landing; no invented product roadmap.
