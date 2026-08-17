// prerender.mjs
// Build-time static prerender for the Indiventure SPA.
// Runs after `vite build`: serves dist/ locally, renders every sitemap route
// in headless Chromium, and writes real HTML per route for crawlers.
import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const HOST = '127.0.0.1';
const PORT = 4317;
const ORIGIN = `http://${HOST}:${PORT}`;
const SITE_ORIGIN = 'https://indiventuretravellers.com';

// Warn by default; set STRICT_SEO=1 in CI once every route has <SEO>.
const ALLOW_MISSING_SEO = process.env.STRICT_SEO !== '1';

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json',
};

if (!existsSync(DIST)) {
  console.error('[prerender] dist/ not found — run "vite build" first.');
  process.exit(1);
}

// Hold the original SPA shell in memory so our per-route writes never affect routing mid-crawl.
const shell = await readFile(join(DIST, 'index.html'), 'utf-8');

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      const pathname = decodeURIComponent(new URL(req.url, ORIGIN).pathname);
      const filePath = join(DIST, pathname);
      if (extname(pathname) && existsSync(filePath) && statSync(filePath).isFile()) {
        try {
          const data = await readFile(filePath);
          res.writeHead(200, { 'Content-Type': MIME[extname(pathname)] || 'application/octet-stream' });
          return res.end(data);
        } catch { /* fall through to shell */ }
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(shell);
    });
    server.listen(PORT, HOST, () => resolve(server));
  });
}

async function getRoutes() {
  const routes = new Set(['/']);
  const sitemapPath = join(DIST, 'sitemap.xml');
  if (existsSync(sitemapPath)) {
    const xml = await readFile(sitemapPath, 'utf-8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      try { routes.add(new URL(m[1].trim()).pathname || '/'); } catch { /* skip bad loc */ }
    }
  } else {
    console.warn('[prerender] dist/sitemap.xml not found — only "/" will be rendered.');
  }
  return [...routes];
}

const server = await startServer();
const routes = await getRoutes();
console.log(`[prerender] rendering ${routes.length} routes`);

chromium.setGraphicsMode = false;
const browser = await puppeteer.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless,
  defaultViewport: { width: 1280, height: 1800 },
});

let ok = 0;
let failed = 0;
const missingSeo = [];
const badCanonical = [];

for (const route of routes) {
  const page = await browser.newPage();
  page.setDefaultTimeout(45000);
  await page.setViewport({ width: 1280, height: 1800 });
  try {
    await page.goto(`${ORIGIN}${route}`, { waitUntil: 'domcontentloaded', timeout: 45000 });

    // Wait until the lazy chunk has mounted (loading spinner gone) and real content exists.
    await page.waitForFunction(() => {
      const loading = document.querySelector('[aria-label="Loading page"]');
      const root = document.getElementById('root');
      const text = root ? (root.innerText || '').trim() : '';
      return !loading && text.length > 120;
    }, { timeout: 45000 });

    // The <SEO> component writes the head inside useEffect. Without this wait the
    // snapshot can be taken first, baking the homepage title/canonical into every route.
    try {
      await page.waitForSelector('html[data-seo-ready="true"]', { timeout: 10000 });
    } catch {
      missingSeo.push(route);
      console.warn(`  ! ${route} — no <SEO> mounted; head falls back to the homepage's`);
    }

   // Trigger any in-view (framer-motion) sections, then let it settle.
    // Hard-capped: scrollHeight can keep growing (lazy images, marquees), and an
    // uncapped loop here hangs the whole build with no timeout to save it.
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        let steps = 0;
        const MAX_STEPS = 60;          // 60 × 700px ≈ 42,000px of page
        const step = () => {
          window.scrollBy(0, 700);
          y += 700;
          steps++;
          if (steps >= MAX_STEPS || y >= document.body.scrollHeight) {
            window.scrollTo(0, 0);
            resolve();
          } else {
            setTimeout(step, 40);
          }
        };
        step();
      });
    });
    await new Promise((r) => setTimeout(r, 350));

    // Verify the canonical actually points at this route — the exact bug that
    // silently de-indexed 8 pages. Cheap to check, so check every build.
    const canonical = await page.evaluate(
      () => document.querySelector('link[rel="canonical"]')?.getAttribute('href') || ''
    );
    const expected = `${SITE_ORIGIN}${route === '/' ? '/' : route}`;
    if (canonical.replace(/\/$/, '') !== expected.replace(/\/$/, '')) {
      badCanonical.push({ route, canonical: canonical || '(none)' });
      console.warn(`  ! ${route} — canonical is "${canonical || '(none)'}", expected "${expected}"`);
    }

    const html = await page.content();
    const outPath = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');
    console.log(`  ✓ ${route}`);
    ok++;
  } catch (err) {
    console.warn(`  ✗ ${route} — ${err.message}`);
    failed++;
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

console.log(`\n[prerender] done — ${ok} rendered, ${failed} failed`);

if (ok === 0) {
  console.error('[prerender] nothing rendered; failing build.');
  process.exit(1);
}

// ---- SEO gate -------------------------------------------------------------
let fatal = false;

if (missingSeo.length) {
  console.error(`\n[prerender] ${missingSeo.length} route(s) have no <SEO> component:`);
  missingSeo.forEach((r) => console.error(`    ${r}`));
  console.error('  These inherit the homepage title, description and canonical, so Google');
  console.error('  treats them as duplicates of "/" and drops them from the index.');
  console.error('  Fix: render <SEO title=… description=… canonical="…" /> in each page.');
  fatal = true;
}

if (badCanonical.length) {
  console.error(`\n[prerender] ${badCanonical.length} route(s) have a wrong canonical:`);
  badCanonical.forEach(({ route, canonical }) => console.error(`    ${route}  ->  ${canonical}`));
  fatal = true;
}

if (fatal) {
  if (ALLOW_MISSING_SEO) {
    console.warn('\n[prerender] PRERENDER_ALLOW_MISSING_SEO=1 set — shipping anyway.');
  } else {
    console.error('\n[prerender] failing build. Set PRERENDER_ALLOW_MISSING_SEO=1 to override.');
    process.exit(1);
  }
}
