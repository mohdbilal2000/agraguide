export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number | 'Custom Quote';
  originalPrice?: number;
  discount?: string;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
  highlights: string[];
  itinerary?: { time: string; activity: string }[];
  isMostBooked?: boolean;
  pickup?: 'Available' | 'N/A';
  tags?: string[];
}

export interface GuidePackage {
  id: string;
  name: string;
  price: string;
  color: string;
  features: string[];
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  toursCount: number;
}

export interface Review {
  id: string;
  author: string;
  /** Google does not publish reviewer location, so this is omitted rather than guessed. */
  location?: string;
  rating: number;
  text: string;
  /** Month-level: Google only exposes relative timestamps ("2 months ago"). */
  date: string;
  /** Platform the review was left on, shown when no location is available. */
  source?: 'Google';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

/* ── Travel guides (evergreen reference content at /guides) ──────────────
   Deliberately structured rather than one content string: these pages carry
   H2/H3 hierarchy, comparison tables and callouts, none of which survive a
   flat string. */

export interface GuideTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface GuideSection {
  /** Rendered as an <h2>. Used to build the on-page contents list. */
  heading: string;
  /** Anchor id — keep short, lowercase, hyphenated. */
  id: string;
  /** Paragraphs, in order. */
  body?: string[];
  /** Bulleted list rendered after the paragraphs. */
  list?: string[];
  table?: GuideTable;
  /** Highlighted aside — use sparingly, for the one thing people miss. */
  callout?: { title: string; text: string };
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideLink {
  label: string;
  to: string;
  /** One line on why this tour answers what they just read. */
  note: string;
}

export interface Guide {
  slug: string;
  /** <title> tag — may differ from the on-page H1. */
  metaTitle: string;
  metaDescription: string;
  /** Single on-page H1. */
  h1: string;
  /** Card title on the index page. */
  cardTitle: string;
  cardSummary: string;
  image: string;
  /** ISO date, e.g. '2026-09-16'. Shown to readers and used in schema. */
  updated: string;
  /** Lead paragraph — answers the query in the first two sentences. */
  intro: string[];
  sections: GuideSection[];
  faqs?: GuideFaq[];
  /** Commercial links, shown after the informational job is done. */
  related: GuideLink[];
  /** Other guides worth reading next. */
  seeAlso?: { label: string; to: string }[];
}
