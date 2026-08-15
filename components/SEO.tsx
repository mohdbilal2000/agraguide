import React, { useEffect, useMemo } from 'react';

export const SITE_URL = 'https://indiventuretravellers.com';
export const SITE_NAME = 'Indiventure Travellers';

/** Self-hosted. Replace the Unsplash default — see note at the bottom. */
const DEFAULT_IMAGE = `${SITE_URL}/img/og-default-1200x630.jpg`;

export type Crumb = { name: string; path?: string };

export type PageType =
  | 'WebPage' | 'AboutPage' | 'ContactPage'
  | 'CollectionPage' | 'ItemPage' | 'FAQPage';

interface SEOProps {
  title: string;
  description: string;
  /** One or more JSON-LD schema objects for this page */
  schema?: object | object[];
  /** Path ("/plans") or absolute URL. Defaults to the current path. */
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  /** Trail after Home, e.g. [{name:'Tour Plans', path:'/plans'}, {name:'Sunrise Taj'}] */
  breadcrumbs?: Crumb[];
  /** schema.org type of the auto-generated WebPage node */
  pageType?: PageType;
  noindex?: boolean;
}

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const removeMeta = (attr: 'name' | 'property', key: string) => {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  schema,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  breadcrumbs,
  pageType = 'WebPage',
  noindex = false,
}) => {
  // Stable serialisation → effect only re-runs when content actually changes.
  const schemaKey = useMemo(() => (schema ? JSON.stringify(schema) : ''), [schema]);
  const crumbKey = useMemo(() => (breadcrumbs ? JSON.stringify(breadcrumbs) : ''), [breadcrumbs]);

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = canonical
      ? canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    if (noindex) {
      upsertMeta('name', 'robots', 'noindex, follow');
    } else {
      upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1');
    }

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:type', type === 'product' ? 'website' : type);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    // ---- build the page graph -------------------------------------------
    const crumbs: Crumb[] = [{ name: 'Home', path: '/' }, ...(breadcrumbs ?? [])];

    const breadcrumbNode =
      crumbs.length > 1
        ? {
            '@type': 'BreadcrumbList',
            '@id': `${url}#breadcrumb`,
            itemListElement: crumbs.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.name,
              // final item deliberately omits `item` — Google's documented pattern
              ...(i < crumbs.length - 1 && c.path ? { item: `${SITE_URL}${c.path}` } : {}),
            })),
          }
        : null;

    const webPage: Record<string, unknown> = {
      '@type': pageType,
      '@id': `${url}#webpage`,
      url,
      name: fullTitle,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
      primaryImageOfPage: { '@type': 'ImageObject', url: image },
      ...(breadcrumbNode ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    };

    const extra = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

    // strip @context from caller nodes so the graph declares it exactly once
    const cleaned = extra.map((n) => {
      const { ['@context']: _drop, ...rest } = n as Record<string, unknown>;
      return rest;
    });

    // if a caller node IS the page (same @id), merge instead of duplicating
    const pageId = `${url}#webpage`;
    const merged: Record<string, unknown>[] = [];
    let pageNode = webPage;
    cleaned.forEach((n) => {
      if ((n as any)['@id'] === pageId) pageNode = { ...pageNode, ...n };
      else merged.push(n);
    });

    const graph = {
      '@context': 'https://schema.org',
      '@graph': [pageNode, ...(breadcrumbNode ? [breadcrumbNode] : []), ...merged],
    };

    document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', 'true');
    script.text = JSON.stringify(graph);
    document.head.appendChild(script);

    // Signal for the prerenderer that head injection has completed.
    document.documentElement.setAttribute('data-seo-ready', 'true');

    return () => {
      document.documentElement.removeAttribute('data-seo-ready');
    };
  }, [title, description, schemaKey, crumbKey, canonical, type, image, pageType, noindex]);

  return null;
};

export default SEO;
