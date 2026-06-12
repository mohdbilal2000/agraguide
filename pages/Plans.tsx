import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TourCard from '../components/TourCard';
import OptimizedImage from '../components/OptimizedImage';
import SEO, { SITE_URL } from '../components/SEO';
import { TOURS } from '../constants';
import { Search, ChevronRight, Car, Building, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

type SortKey = 'popular' | 'price-asc' | 'price-desc' | 'rating';

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceOf = (t: typeof TOURS[number]) => (typeof t.price === 'number' ? t.price : Number.MAX_SAFE_INTEGER);

const Plans: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortKey, setSortKey] = useState<SortKey>('popular');
  const categories = ['All', 'Same Day Tours', 'Two Day Tours', 'Golden Triangle', 'Royal Rajasthan', 'Photography Tours'];

  const filteredTours = useMemo(() => {
    const filtered = TOURS.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' ||
                            tour.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    return [...filtered].sort((a, b) => {
      switch (sortKey) {
        case 'price-asc': return priceOf(a) - priceOf(b);
        case 'price-desc': return priceOf(b) - priceOf(a);
        case 'rating': return b.rating - a.rating || b.reviewsCount - a.reviewsCount;
        default: return b.reviewsCount - a.reviewsCount;
      }
    });
  }, [searchTerm, activeCategory, sortKey]);

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Taj Mahal, Agra & Golden Triangle Tour Packages",
    "numberOfItems": TOURS.length,
    "itemListElement": TOURS.map((tour, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": tour.title,
      "url": `${SITE_URL}/plans/${tour.id}`
    }))
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-brand-bg min-h-screen">
      <SEO
        title="Tour Packages & Prices — Taj Mahal, Agra & Golden Triangle"
        description={`Compare ${TOURS.length} private tours: same-day Taj Mahal trips from $40, Golden Triangle packages, Rajasthan circuits and photography tours. Licensed guides, free cancellation.`}
        canonical="/plans"
        schema={listSchema}
      />
      <div className="page-container">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-brand-dark font-medium" aria-current="page">Tour Plans</span>
        </nav>

        <div className="mb-16">
          <h1 className="display-lg font-bold playfair text-brand-dark mb-6">Our Travel Plans</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed mb-12">
            {TOURS.length} thoughtfully crafted private itineraries — from a sunrise hour at the Taj Mahal to twelve days across Rajasthan. All with licensed guides and free 24-hour cancellation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Car, title: 'Private Fleet', desc: 'Luxury AC vehicles with professional uniformed chauffeurs.' },
              { icon: Building, title: 'Boutique Stays', desc: 'Handpicked heritage properties and luxury 5-star hotels.' },
              { icon: Users, title: 'Master Guides', desc: 'History experts providing deep cultural insights.' },
              { icon: Utensils, title: 'Authentic Meals', desc: 'The best of Mughlai and Rajasthani cuisine experiences.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-soft border border-brand-dark/5 hover:shadow-lift hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <feature.icon size={24} aria-hidden="true" />
                </div>
                <h2 className="font-bold text-brand-dark mb-2 text-lg">{feature.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-10 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-2 md:gap-3" role="group" aria-label="Filter by category">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 md:px-7 py-2 md:py-3 rounded-full font-bold transition-all border-2 text-sm ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg'
                    : 'bg-white text-brand-dark border-brand-dark/5 hover:border-brand-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors" size={20} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search tours or cities..."
              aria-label="Search tours"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-brand-dark/5 p-4 pl-14 rounded-2xl outline-none focus:border-brand-primary/40 transition-all text-brand-dark font-medium shadow-soft"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 px-2">
          <p className="text-gray-500 font-medium text-sm" role="status">
            {filteredTours.length} {filteredTours.length === 1 ? 'experience' : 'experiences'} available
          </p>
          <label className="flex items-center gap-3 text-sm font-bold text-brand-dark">
            <span className="text-gray-400 uppercase tracking-widest text-[10px]">Sort by</span>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="bg-white border-2 border-brand-dark/5 rounded-xl px-4 py-2.5 font-bold text-brand-dark outline-none focus:border-brand-primary/40 cursor-pointer shadow-soft"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredTours.length > 0 ? (
              filteredTours.map(tour => (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-24 md:py-32 text-center bg-white rounded-[2rem] border-2 border-dashed border-brand-dark/10">
                <Search size={48} className="mx-auto text-gray-300 mb-6" aria-hidden="true" />
                <h2 className="text-2xl font-bold playfair text-brand-dark mb-2">No plans found</h2>
                <p className="text-gray-500 mb-6 px-4">Try adjusting your filters or search terms for better results.</p>
                <button
                  onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                  className="text-brand-primary font-bold border-b-2 border-brand-primary hover:text-brand-dark hover:border-brand-dark transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 bg-brand-dark rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <OptimizedImage src="https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=1200&q=75" alt="" sizes="100vw" className="h-full w-full" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="display-lg font-bold playfair mb-6">Need a Custom Itinerary?</h2>
            <p className="text-white/70 text-base md:text-lg mb-10 md:mb-12 leading-relaxed">
              Our travel experts can create a personalized journey based on your interests, timeframe, and budget. Perfect for families, photographers, and history buffs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <h3 className="font-bold mb-1 text-sm md:text-base">Any Duration</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">3 Days to 3 Weeks</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <h3 className="font-bold mb-1 text-sm md:text-base">Premium Hotels</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Heritage & 5-Star</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <h3 className="font-bold mb-1 text-sm md:text-base">Special Focus</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Culture & Arts</p>
              </div>
            </div>
            <Link to="/contact" className="inline-block bg-brand-gold text-brand-dark px-10 md:px-14 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:bg-white transition-all">Request Custom Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
