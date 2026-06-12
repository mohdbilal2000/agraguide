# AEO Plan (Answer Engine Optimization) — 2025–2026 & Ongoing

**Goal:** Win featured snippets, People-Also-Ask boxes, voice answers (Google Assistant/Siri/Alexa), and AI-overview citations for question-shaped travel queries: *"Is the Taj Mahal closed on Fridays?"*, *"What is the best time to visit the Taj Mahal?"*, *"How much does a Taj Mahal guide cost?"*

---

## 1. Audit

- FAQ content existed but had **no `FAQPage` schema** — invisible to answer engines.
- The schema that did exist was injected with a wrong MIME type (`application/json+ld`), so no page was answer-eligible.
- Answers weren't structured as extractable units (question heading → 40–60-word direct answer).
- No breadcrumbs, no entity-rich intro paragraphs answer engines can lift.

## 2. Executed in this overhaul

1. **`FAQPage` JSON-LD on /faq** generated from the FAQ data — every Q&A is now snippet/PAA/voice eligible.
2. **Direct-answer formatting:** each FAQ answer leads with the verdict in the first sentence ("Yes, the Taj Mahal is closed every Friday…") — the format answer engines extract.
3. **Homepage FAQ teaser section** with the top questions + link to /faq — question coverage on the highest-authority URL.
4. **`BreadcrumbList` schema** on tour pages — improves answer-box source attribution.
5. **`Product`/`Offer`/`AggregateRating`** per tour — enables price/rating answer units ("From $40 · ★4.9 · 1,420 reviews").
6. **Statically-served `TravelAgency` schema** in `index.html` with geo, hours, phone — powers "travel agency in Agra" entity answers without JS execution.
7. Stable, question-aligned headings (h2s phrased as user questions where natural).

## 3. Roadmap

### 2025 H2
- Expand FAQ bank 3 → 30+ questions, clustered by intent (tickets, timing, safety, pricing, logistics), each with a ≤ 50-word direct answer + expandable detail.
- Add per-tour FAQ blocks (with scoped `FAQPage` schema): "What's included?", "Where do you pick up?", "Can I cancel?"
- `HowTo` schema for planning content ("How to visit the Taj Mahal at sunrise").
- `Speakable` schema on FAQ + key blog answers for voice assistants.

### 2026
- Q&A-format blog series targeting PAA clusters scraped from Search Console + AlsoAsked.
- Comparison answer pages ("Car vs. Gatimaan Express to Agra", "Sunrise vs. sunset Taj visit") — tables + verdict-first copy.
- Monitor AI Overviews / Bing Copilot citations monthly; reformat pages that get summarized but not cited.

### Ongoing
- Every new page ships with: one primary question in the h1/h2, a 40–60-word extractable answer in the first paragraph, and matching schema.
- Quarterly Rich Results Test validation; track snippet wins per query cluster.

**KPIs:** 10+ featured snippets/PAA wins by mid-2026, FAQ rich results on 100 % of eligible URLs, measurable AI-overview citations for brand + "Agra tour" queries.
