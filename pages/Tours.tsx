
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TourCard from '../components/TourCard';
import { TOURS } from '../constants';
import { Filter } from 'lucide-react';

const Tours: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Day', 'Same Day Delhi', 'Multi-Day', 'Cultural'];

  const filteredTours = filter === 'All' ? TOURS : TOURS.filter(t => t.category === filter);

  return (
    <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold playfair text-brand-dark mb-4">Our Tour Plans</h1>
          <p className="text-gray-500 max-w-2xl mx-auto inter">
            Explore our curated selection of heritage experiences. From sunrise wonders to multi-city expeditions, discover the soul of India.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all border ${
                filter === cat 
                  ? 'bg-brand-primary text-white border-brand-primary shadow-lg' 
                  : 'bg-white text-brand-dark border-brand-dark/10 hover:border-brand-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTours.map(tour => (
            <motion.div 
              key={tour.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tours;
