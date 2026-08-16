import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';
import { MapPin, ArrowRight } from 'lucide-react';

/** Wikidata IDs disambiguate a place for search engines and AI answer engines —
 *  the cheapest, highest-leverage entity signal available. */
const WIKIDATA: Record<string, string> = {
  Delhi: 'https://www.wikidata.org/wiki/Q1353',
  'New Delhi': 'https://www.wikidata.org/wiki/Q987',
  Agra: 'https://www.wikidata.org/wiki/Q42941',
  Jaipur: 'https://www.wikidata.org/wiki/Q47037',
  Udaipur: 'https://www.wikidata.org/wiki/Q200019',
  Jodhpur: 'https://www.wikidata.org/wiki/Q200016',
  Mathura: 'https://www.wikidata.org/wiki/Q216236',
};

const GEO: Record<string, { latitude: number; longitude: number }> = {
  Delhi: { latitude: 28.6139, longitude: 77.209 },
  'New Delhi': { latitude: 28.6139, longitude: 77.209 },
  Agra: { latitude: 27.1767, longitude: 78.0081 },
  Jaipur: { latitude: 26.9124, longitude: 75.7873 },
  Udaipur: { latitude: 24.5854, longitude: 73.7125 },
  Jodhpur: { latitude: 26.2389, longitude: 73.0243 },
  Mathura: { latitude: 27.4924, longitude: 77.6737 },
};

const ATTRACTIONS: Record<string, { name: string; sameAs?: string }[]> = {
  Agra: [
    { name: 'Taj Mahal', sameAs: 'https://www.wikidata.org/wiki/Q9141' },
    { name: 'Agra Fort', sameAs: 'https://www.wikidata.org/wiki/Q131013' },
    { name: 'Fatehpur Sikri', sameAs: 'https://www.wikidata.org/wiki/Q220981' },
  ],
  Jaipur: [
    { name: 'Amber Fort', sameAs: 'https://www.wikidata.org/wiki/Q1815898' },
    { name: 'Hawa Mahal', sameAs: 'https://www.wikidata.org/wiki/Q1568363' },
    { name: 'City Palace, Jaipur' },
  ],
  Delhi: [
    { name: "Humayun's Tomb", sameAs: 'https://www.wikidata.org/wiki/Q212047' },
    { name: 'Qutub Minar', sameAs: 'https://www.wikidata.org/wiki/Q170374' },
    { name: 'India Gate', sameAs: 'https://www.wikidata.org/wiki/Q1637790' },
  ],
};

const destinationsSchema = {
  '@type': 'ItemList',
  name: 'Heritage Destinations We Cover',
  numberOfItems: DESTINATIONS.length,
  itemListElement: DESTINATIONS.map((dest, i) => {
    const attractions = ATTRACTIONS[dest.name];
    return {
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristDestination',
        name: dest.name,
        description: dest.description,
        image: dest.image,
        ...(WIKIDATA[dest.name] ? { sameAs: WIKIDATA[dest.name] } : {}),
        ...(GEO[dest.name] ? { geo: { '@type': 'GeoCoordinates', ...GEO[dest.name] } } : {}),
        ...(attractions
          ? {
              includesAttraction: attractions.map((a) => ({
                '@type': 'TouristAttraction',
                name: a.name,
                ...(a.sameAs ? { sameAs: a.sameAs } : {}),
              })),
            }
          : {}),
        touristType: ['Heritage travellers', 'Families', 'Photography enthusiasts'],
      },
    };
  }),
};

const Destinations: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <SEO
        title="Destinations — Delhi, Agra & Jaipur Heritage Cities"
        description="Explore the cities we cover: Mughal Agra and the Taj Mahal, imperial Delhi, and royal Jaipur — each within a few hours of the next, all with licensed local guides."
        canonical="/destinations"
        pageType="CollectionPage"
        breadcrumbs={[{ name: 'Destinations' }]}
        schema={destinationsSchema}
      />
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold playfair text-brand-dark mb-6">Our Heritage Cities</h1>
          <p className="text-xl text-gray-500 leading-relaxed inter">
            From the bustling markets of Delhi to the royal forts of Jaipur, explore the cities that
            define India's glorious history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, idx) => (
            <motion.article
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col"
            >
              <Link to={`/plans?q=${encodeURIComponent(dest.name)}`} className="block h-72 overflow-hidden relative">
                <OptimizedImage
                  src={dest.image}
                  alt={`${dest.name} — ${dest.description}`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <MapPin size={14} className="text-brand-primary" aria-hidden="true" />
                  <span className="text-xs font-bold text-brand-dark uppercase tracking-widest">
                    {dest.toursCount} Plans
                  </span>
                </div>
              </Link>

              <div className="p-10 flex flex-col flex-grow">
                <h2 className="text-3xl font-bold playfair text-brand-dark mb-4">{dest.name}</h2>
                <p className="text-gray-500 mb-8 leading-relaxed flex-grow">{dest.description}</p>

                {ATTRACTIONS[dest.name] && (
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {ATTRACTIONS[dest.name].map((a) => (
                      <li
                        key={a.name}
                        className="text-[11px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 rounded-full px-3 py-1.5"
                      >
                        {a.name}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to={`/plans?q=${encodeURIComponent(dest.name)}`}
                  className="inline-flex items-center gap-2 text-brand-primary font-bold border-b-2 border-brand-primary/20 hover:border-brand-primary pb-1 transition-all self-start"
                >
                  Explore {dest.name} <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
