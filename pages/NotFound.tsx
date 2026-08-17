import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => (
  <div className="pt-40 pb-24 bg-brand-bg min-h-screen">
    <SEO
      title="Page Not Found"
      description="This page could not be found."
      noindex
    />
    <div className="container mx-auto px-4 text-center max-w-lg">
      <p className="text-brand-primary font-bold tracking-[0.3em] text-xs uppercase mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold playfair text-brand-dark mb-4">
        This page has moved on
      </h1>
      <p className="text-gray-500 mb-10">
        The link may be old or mistyped. Start from the tours, or ask us directly on WhatsApp.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/plans" className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all">
          Browse Tours
        </Link>
        <Link to="/" className="bg-white border border-brand-dark/10 text-brand-dark px-8 py-4 rounded-2xl font-bold hover:border-brand-primary transition-all">
          Go Home
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
