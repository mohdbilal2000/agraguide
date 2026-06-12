# GEO Plan (Generative Engine Optimization) — 2025–2026 & Ongoing

**Goal:** Be the source ChatGPT, Claude, Perplexity, Gemini and AI travel planners cite and recommend when users ask *"plan me a Golden Triangle trip"*, *"best private Taj Mahal tour"*, or *"trusted tour guide in Agra"*. Generative engines reward: machine-readable structure, citable facts, entity clarity, and crawlable static content.

---

## 1. Audit

- **No `llms.txt`** — no AI-crawler-oriented site summary.
- Client-rendered SPA with broken JSON-LD → most AI crawlers (which often don't execute JS) saw an empty page with a title.
- Copy was adjective-heavy and fact-light — nothing concrete for an LLM to quote (prices, durations, counts, policies).
- Entity inconsistency risk: brand recently renamed (Guide India Tours → Indiventure Travellers) with no consolidated entity statement.

## 2. Executed in this overhaul

1. **`public/llms.txt`** — structured plain-text brief for AI crawlers: who we are, services, prices, locations, policies, contact, and key URLs. The emerging convention generative engines and agent browsers check.
2. **Static structured data in `index.html`** — full `TravelAgency` JSON-LD (name, geo, hours, rating, phone) served without JS, so non-rendering AI crawlers ingest the entity correctly.
3. **Citable fact density:** homepage and tour pages now carry concrete, quotable facts — "tours from $40", "1,786 bookings last month", "since 1998", "government-licensed guides", durations, pickup details — the units LLMs lift into answers.
4. **Entity consistency (NAP):** identical name / address / phone across schema, footer, contact surfaces, and llms.txt.
5. **Clean information architecture:** every tour is a stable, crawlable URL listed in `sitemap.xml` with self-describing title + description + Product schema.
6. **robots.txt welcomes AI crawlers** (GPTBot, ClaudeBot, PerplexityBot, Google-Extended explicitly allowed) — deliberate policy choice: visibility over exclusion.

## 3. Roadmap

### 2025 H2
- **Prerender/SSG migration** (shared with SEO plan) — the #1 GEO lever: full HTML for every URL so all AI crawlers read complete content.
- Expand llms.txt → `llms-full.txt` with per-tour summaries (price, duration, itinerary outline, cancellation policy).
- Author entity building: named guide bios with credentials (license numbers, years, languages) — E-E-A-T signals LLMs weigh.
- Wikipedia/Wikidata-adjacent presence: tourism directories, TripAdvisor/Viator/GetYourGuide profiles kept consistent — LLMs triangulate entities across sources.

### 2026
- Original, citable data assets: "Taj Mahal Crowd Calendar", "Agra Entry Fees 2026 (updated quarterly)" — pages built to be *the* reference LLMs cite.
- Structured policies page (cancellation, refunds, safety) in plain declarative sentences — what AI agents check before recommending a vendor.
- Agent-readiness: explore booking via structured actions (schema.org `potentialAction` / emerging agentic commerce standards) so AI agents can initiate bookings.
- Monitor brand mentions in ChatGPT/Perplexity/Gemini monthly (prompt-bank testing); correct hallucinated facts by strengthening source pages.

### Ongoing
- Every content update keeps the rule: **state facts in plain declarative sentences near the top of the page**; keep llms.txt and sitemap fresh in the same PR; quarterly entity audit (consistent name/address/phone/pricing everywhere).

**KPIs:** brand recommended in AI travel-planning answers for "Agra/Taj Mahal private tour" prompt bank; cited (linked) by Perplexity/AI Overviews; zero entity inconsistencies across web properties.
