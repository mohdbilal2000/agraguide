
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TourCard from '../components/TourCard';
import { TOURS } from '../constants';
import { Search, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Plans: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Same Day Tours', 'Two Day Tours', 'Golden Triangle', 'Royal Rajasthan', 'Photography Tours'];

  const filteredTours = useMemo(() => {
    return TOURS.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || tour.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-primary">Home</Link>
          <ChevronRight size={14} />
          <span className="text-brand-dark font-medium">Tour Plans</span>
        </div>

        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold playfair text-brand-dark mb-6">Expert Tour Plans</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed inter">
            Discover India's heritage through our carefully curated itineraries, ranging from sunrise wonders to epic multi-city adventures.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all border-2 ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white border-brand-primary shadow-xl scale-105' 
                    : 'bg-white text-brand-dark border-brand-dark/5 hover:border-brand-primary/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search tours or cities..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-brand-dark/5 p-4 pl-14 rounded-2xl outline-none focus:border-brand-primary/30 transition-all text-brand-dark font-medium"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mb-8 flex items-center justify-between">
          <span className="text-gray-500 font-medium">{filteredTours.length} Experiences Found</span>
          <button className="flex items-center gap-2 text-brand-primary font-bold">
            <SlidersHorizontal size={18} /> Sort by Popularity
          </button>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredTours.length > 0 ? (
              filteredTours.map(tour => (
                <motion.div 
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center bg-white rounded-[2rem] border-2 border-dashed border-brand-dark/10">
                <Search size={48} className="mx-auto text-gray-300 mb-6" />
                <h3 className="text-2xl font-bold playfair text-brand-dark mb-2">No plans found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                  className="mt-6 text-brand-primary font-bold border-b-2 border-brand-primary"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Plans;
