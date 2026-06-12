import React, { useEffect } from 'react';

export const SITE_URL = 'https://indiventuretravellers.com';
export const SITE_NAME = 'Indiventure Travellers';

interface SEOProps {
  title: string;
  description: string;
  /** One or more JSON-LD schema objects for this page */
  schema?: object | object[];
  /** Path ("/plans") or absolute URL. Defaults to the current path. */
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
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
  image = 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80'
}) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = canonical
      ? canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:type', type === 'product' ? 'website' : type);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    // Page-level JSON-LD (organization schema stays static in index.html)
    document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());
    if (schema) {
      const blocks = Array.isArray(schema) ? schema : [schema];
      blocks.forEach(block => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', 'true');
        script.text = JSON.stringify(block);
        document.head.appendChild(script);
      });
    }
  }, [title, description, schema, canonical, type, image]);

  return null;
};

export default SEO;
