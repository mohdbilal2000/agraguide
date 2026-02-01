
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TourCard from '../components/TourCard';
import OptimizedImage from '../components/OptimizedImage';
import { TOURS } from '../constants';
import { Search, SlidersHorizontal, ChevronRight, Car, Building, Users, Utensils } from 'lucide-react';
/* Fix: Import Link from react-router-dom */
import { Link } from 'react-router-dom';

const Plans: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Agra', 'Delhi', 'Jaipur', 'Multi-Day', 'Luxury'];

  const filteredTours = useMemo(() => {
    return TOURS.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || 
                            tour.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-brand-dark font-medium">Tour Plans</span>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold playfair text-brand-dark mb-6">Our Travel Plans</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed inter mb-12">
            Thoughtfully crafted itineraries for the modern explorer. From sunrise wonders to grand multi-city expeditions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Car, title: 'Private Fleet', desc: 'Luxury AC vehicles with professional uniformed chauffeurs.' },
              { icon: Building, title: 'Boutique Stays', desc: 'Handpicked heritage properties and luxury 5-star hotels.' },
              { icon: Users, title: 'Master Guides', desc: 'History experts providing deep cultural insights.' },
              { icon: Utensils, title: 'Authentic Meals', desc: 'The best of Mughlai and Rajasthani cuisine experiences.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-brand-dark/5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <feature.icon size={24} />
                </div>
                <h4 className="font-bold text-brand-dark mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 md:px-8 py-2 md:py-3 rounded-full font-bold transition-all border-2 text-sm md:text-base ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg' 
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
              className="w-full bg-white border-2 border-brand-dark/5 p-4 pl-14 rounded-2xl outline-none focus:border-brand-primary/30 transition-all text-brand-dark font-medium shadow-sm"
            />
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between px-2">
          <span className="text-gray-500 font-medium text-sm">{filteredTours.length} Experiences Available</span>
          <button className="flex items-center gap-2 text-brand-primary font-bold text-sm">
            <SlidersHorizontal size={18} /> Sort
          </button>
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
                <Search size={48} className="mx-auto text-gray-300 mb-6" />
                <h3 className="text-2xl font-bold playfair text-brand-dark mb-2">No plans found</h3>
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
             <OptimizedImage src="https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=1200&q=80" alt="Background" className="h-full w-full" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold playfair mb-6 leading-tight">Need a Custom Itinerary?</h2>
            <p className="text-white/70 text-base md:text-lg mb-10 md:mb-12 inter leading-relaxed">
              Our travel experts can create a personalized journey based on your interests, timeframe, and budget. Perfect for families, photographers, and history buffs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <h4 className="font-bold mb-1 text-sm md:text-base">Any Duration</h4>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">3 Days to 3 Weeks</p>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <h4 className="font-bold mb-1 text-sm md:text-base">Premium Hotels</h4>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Heritage & 5-Star</p>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <h4 className="font-bold mb-1 text-sm md:text-base">Special Focus</h4>
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
