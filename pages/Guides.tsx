import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { GUIDES } from '../guides';
import OptimizedImage from '../components/OptimizedImage';
import SEO, { SITE_URL } from '../components/SEO';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

const Guides: React.FC = () => {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Taj Mahal, Agra & Delhi Travel Guides',
      description:
        'Practical, regularly updated guides to the Taj Mahal, Agra and Delhi — timings, gates, transport, safety and getting around.',
      url: `${SITE_URL}/guides`,
      hasPart: GUIDES.map(g => ({
        '@type': 'Article',
        headline: g.h1,
        url: `${SITE_URL}/guides/${g.slug}`,
        dateModified: g.updated
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Travel Guides', item: `${SITE_URL}/guides` }
      ]
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <SEO
        title="Taj Mahal, Agra &amp; Delhi Travel Guides"
        description="Straight answers about the Taj Mahal, Agra and Delhi — sunrise timings month by month, getting between the two cities, Friday closures, safety and getting around Delhi."
        canonical="/guides"
        schema={schema}
      />

      <div className="page-container">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-brand-primary">Travel Guides</span>
        </nav>

        <h1 className="display-lg font-bold playfair text-brand-dark mb-6 max-w-4xl">
          Taj Mahal, Agra &amp; Delhi travel guides
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed mb-16">
          Written by guides who work these monuments and streets every week — the timings, the gates,
          the trains, and the practical details that decide how a day goes. Agra and Delhi both, and no
          booking required to read any of it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GUIDES.map((guide, i) => (
            <motion.article
              key={guide.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500 border border-brand-dark/5 flex flex-col h-full"
            >
              <Link to={`/guides/${guide.slug}`} className="block h-52 overflow-hidden">
                <OptimizedImage
                  src={guide.image}
                  alt={guide.cardTitle}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                  <CalendarDays size={12} aria-hidden="true" />
                  Updated {formatDate(guide.updated)}
                </p>
                <h2 className="text-xl font-bold playfair text-brand-dark mb-3 leading-snug">
                  <Link to={`/guides/${guide.slug}`} className="hover:text-brand-primary transition-colors">
                    {guide.cardTitle}
                  </Link>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{guide.cardSummary}</p>
                <Link
                  to={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest"
                >
                  Read guide <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <section className="mt-20 bg-white rounded-[2rem] p-10 md:p-14 shadow-soft border border-brand-dark/5 text-center">
          <h2 className="text-3xl font-bold playfair text-brand-dark mb-4">Rather have someone plan it?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Every guide above links to the tour that solves the same problem. If you would rather
            describe your dates and let us build the day around them, we do that too.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/plans" className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-brand-dark transition-all">
              Browse tour plans
            </Link>
            <Link to="/contact" className="bg-brand-bg text-brand-dark px-8 py-4 rounded-2xl font-bold border border-brand-dark/10 hover:border-brand-primary transition-all">
              Ask a question
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guides;
