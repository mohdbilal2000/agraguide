
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  schema, 
  canonical, 
  type = 'website',
  image = 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80'
}) => {
  useEffect(() => {
    // Update Document Title
    document.title = `${title} | Guide India Tours`;
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Handle JSON-LD Schema
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) existingScript.remove();

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/json+ld';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    
    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image);

  }, [title, description, schema, image]);

  return null;
};

export default SEO;
