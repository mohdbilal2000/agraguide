# UI/UX Overhaul Plan — 2025–2026 & Ongoing

**Product:** Indiventure Travellers — Golden Triangle heritage tours
**Audience:** International travellers (US/UK/EU/AU) researching Taj Mahal & Golden Triangle trips on mobile

---

## 1. Audit — what was wrong

| # | Finding | Severity |
|---|---------|----------|
| 1 | Homepage tour grid filtered by category `Heritage Highlights`, which **no tour has** — the landing page rendered an empty product section | Critical |
| 2 | Tailwind loaded from CDN `<script>` — render-blocking, ~300 KB JS, no purging, explicitly unsupported in production | Critical |
| 3 | `user-scalable=no, maximum-scale=1` viewport — pinch-zoom disabled (WCAG 1.4.4 failure, Lighthouse a11y fail) | High |
| 4 | Mobile menu scroll-lock effect keyed on `location.pathname` with stale `isMenuOpen` — body never actually locked | High |
| 5 | "Sort" button on /plans did nothing | High |
| 6 | PlanDetail `showStickyBar` state wired to scroll but the sticky bar was never rendered; itinerary data existed but was never displayed | High |
| 7 | All routes imported eagerly — `Suspense` wrapper did nothing, single 475 KB bundle | Medium |
| 8 | No skip link, no `aria-expanded`/`aria-label` on interactive controls, icon-only buttons unlabeled | Medium |
| 9 | No `prefers-reduced-motion` handling on auto-rotating hero / animations | Medium |
| 10 | Images had no `srcset`/`sizes`/explicit dimensions → CLS + oversized downloads | Medium |
| 11 | Dead files (`pages/Tours.tsx`, `pages/TourDetail.tsx`, `dev-output.txt`) | Low |

## 2. Design direction — "Modern Heritage" (2025–2026)

- **Tokens, not magic values.** Tailwind v4 `@theme` design tokens (`index.css`): brand palette, font stacks, custom shadows. Single source of truth.
- **Typography:** Playfair Display (display serif) + Plus Jakarta Sans (UI sans), fluid `clamp()` scale so headlines breathe on every viewport.
- **Palette:** warm parchment `#FAF7F2`, ink `#1C1917`, bronze `#8B5E3C`, gold `#C9A227` — heritage-luxury without skeuomorphism.
- **Surfaces:** large radii (`2rem` cards), soft layered shadows, glassmorphism reserved for nav/overlays only.
- **Motion:** purposeful micro-interactions (hover lifts, scroll-reveals via `whileInView`, spring drawer) — all gated behind `prefers-reduced-motion`.
- **Mobile-first conversion:** thumb-zone CTAs, sticky booking bar on tour pages, WhatsApp one-tap everywhere, safe-area insets.

## 3. Executed in this overhaul

1. **Build system:** Tailwind v4 via `@tailwindcss/vite`, tokens + base styles in `index.css`, CDN removed.
2. **Homepage rebuilt:** hero → trust band → featured tours (top-rated, never empty) → category explorer → guide packages → destinations → testimonials → FAQ teaser → CTA. Scroll-reveal animations throughout.
3. **Hero:** fixed keyword-rich `<h1>` (SEO-stable), rotating imagery with slide indicators, pause for reduced-motion, preloaded LCP image with `fetchpriority=high`.
4. **Navigation:** working scroll lock, focus management, `aria-expanded`/`aria-controls`, active-route states, escape-to-close.
5. **Tour cards:** semantic `<article>`, real WhatsApp affordance with label, price anchoring (strike-through + discount chip), clearer hierarchy.
6. **/plans:** functional sort (popularity / price ↑ / price ↓ / rating), live result count, accessible filter chips (`aria-pressed`).
7. **Tour detail:** itinerary timeline rendered from data, sticky mobile booking bar, breadcrumbs, trust signals (free cancellation, licensed guides), discount display.
8. **FAQ:** accessible accordion (`aria-expanded`, keyboard), animated height.
9. **A11y baseline:** zoom restored, skip-to-content link, visible `:focus-visible` rings, labeled icon buttons, `aria-hidden` on decorative icons, reduced-motion media query in CSS.
10. **Performance:** route-level code splitting via `React.lazy`, responsive `srcset/sizes` on all Unsplash images, `decoding=async`, dead code removed.

## 4. Ongoing roadmap (2026+)

- **Q1 2026:** booking funnel v2 (date picker, party size, price calculator), dark-mode token layer, View Transitions API for route transitions.
- **Q2 2026:** real reviews integration (TripAdvisor/Google), interactive itinerary map (MapLibre), saved tours / compare.
- **Q3 2026:** i18n (ES/FR/DE), currency switcher (USD/EUR/GBP/INR), PWA offline itineraries.
- **Continuous:** Lighthouse budget in CI (Perf ≥ 90, A11y ≥ 95), quarterly heuristic review, A/B test CTA copy & price anchoring.

**KPIs:** LCP < 2.0 s, CLS < 0.05, INP < 200 ms, booking-intent CTR (hero → /plans) +30 %, WhatsApp conversions +25 %.
