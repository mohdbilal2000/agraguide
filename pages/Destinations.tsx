
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import { MapPin, ArrowRight } from 'lucide-react';

const Destinations: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold playfair text-brand-dark mb-6">Our Heritage Cities</h1>
          <p className="text-xl text-gray-500 leading-relaxed inter">
            From the bustling markets of Delhi to the royal forts of Jaipur, explore the cities that define India's glorious history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="h-72 overflow-hidden relative">
                <OptimizedImage src={dest.image} alt={dest.name} className="group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <MapPin size={14} className="text-brand-primary" />
                  <span className="text-xs font-bold text-brand-dark uppercase tracking-widest">{dest.toursCount} Plans</span>
                </div>
              </div>
              <div className="p-10">
                <h2 className="text-3xl font-bold playfair text-brand-dark mb-4">{dest.name}</h2>
                <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed">{dest.description}</p>
                <Link 
                  to={`/destinations/${dest.id}`}
                  className="inline-flex items-center gap-2 text-brand-primary font-bold border-b-2 border-brand-primary/20 hover:border-brand-primary pb-1 transition-all"
                >
                  Explore {dest.name} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
