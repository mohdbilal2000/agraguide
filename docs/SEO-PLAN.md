# SEO Plan — 2025–2026 & Ongoing

**Goal:** Rank for high-intent queries — "Taj Mahal sunrise tour", "same day Agra tour from Delhi", "Golden Triangle tour package", "Taj Mahal private guide" — for international searchers.

---

## 1. Audit — what was wrong

| # | Finding | Impact |
|---|---------|--------|
| 1 | JSON-LD injected with `type="application/json+ld"` (instead of `application/ld+json`) — **all structured data was invisible to search engines** | Critical |
| 2 | No `robots.txt`, no `sitemap.xml` | Critical |
| 3 | No canonical URLs anywhere | High |
| 4 | All schema injected client-side only — nothing for crawlers that don't execute JS; no static fallback in HTML | High |
| 5 | OG tags only *updated* if present — `og:title`/`og:image` didn't exist in HTML, so most updates were no-ops; no Twitter cards, no `og:url` | High |
| 6 | Tailwind CDN + single 475 KB bundle → poor Core Web Vitals (ranking factor) | High |
| 7 | Rotating `<h1>` on homepage (unstable primary heading) | Medium |
| 8 | No image `srcset`, no preload for LCP hero image | Medium |
| 9 | `/plans` listing page had no SEO component at all | Medium |

## 2. Executed in this overhaul

### Technical
- Fixed `application/ld+json` MIME type — structured data is now machine-readable.
- **`public/robots.txt`** — allow all, sitemap reference.
- **`public/sitemap.xml`** — all static routes + every tour detail page + blog posts.
- **Rewritten `SEO.tsx`:** creates-or-updates title, meta description, canonical `<link>`, full OG set (`og:title/description/url/image/type/site_name/locale`), Twitter cards (`summary_large_image`), supports multiple JSON-LD blocks per page.
- **Static head in `index.html`:** complete default meta + `TravelAgency` JSON-LD (with geo coordinates, opening hours, aggregate rating) embedded statically so non-JS crawlers and AI bots get it.
- Canonical host fixed to `https://indiventuretravellers.com`.
- Zoom-enabled viewport, `theme-color`, `geo.region`/`geo.placename` meta.

### Performance (Core Web Vitals)
- Tailwind v4 compiled build (CDN script removed) → eliminates render-blocking JS.
- Route-based code splitting (`React.lazy`) → smaller initial bundle.
- Hero LCP image `<link rel="preload" fetchpriority="high">`; responsive `srcset/sizes` on all images; `decoding="async"`; lazy-load below the fold.

### On-page
- Stable keyword-rich `<h1>` per page; one `<h1>` per page; logical h2/h3 hierarchy.
- Breadcrumbs (visible + `BreadcrumbList` schema) on tour detail pages.
- `Product` + `Offer` + `AggregateRating` schema per tour; `ItemList` schema on /plans.
- Descriptive, keyword-bearing alt text on all imagery.
- Internal linking: homepage → category-filtered tours, destinations, FAQ, blog.

## 3. Roadmap

### 2025 H2 (next)
- **Prerendering/SSG** — the site is a client-rendered SPA; migrate to static prerendering (vite-plugin-prerender or Astro/Next migration) so every URL ships full HTML. Single biggest remaining SEO lever.
- Keyword mapping doc: 1 primary + 3 secondary keywords per URL; rewrite titles/descriptions accordingly.
- Google Business Profile (Agra address), Search Console + sitemap submission, Bing Webmaster.
- Blog cadence 2 posts/month targeting long-tail ("Taj Mahal tickets price 2026", "Delhi to Agra Gatimaan Express guide").

### 2026
- Dedicated landing pages per destination × tour-type (programmatic SEO from `constants.tsx` data).
- Digital PR / backlinks: travel-blogger fam trips, HARO, tourism-board citations.
- hreflang once i18n ships; `VideoObject` schema for tour reels.

### Ongoing
- Monthly: Search Console coverage + CWV report; fix regressions within sprint.
- Quarterly: content refresh of top-10 pages, schema validation (Rich Results Test), broken-link audit.

**KPIs:** indexed pages 100 %, CWV "Good" on all URLs, +50 % YoY organic clicks, top-3 for 5 money keywords by end-2026.
