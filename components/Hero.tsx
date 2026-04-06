
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1920&q=80',
    title: 'Experience The Taj Mahal',
    subtitle: 'With Agra\'s most trusted heritage guides at your side.'
  },
  {
    image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=1920&q=80',
    title: 'The Golden Triangle',
    subtitle: 'Discover Delhi, Agra, and Jaipur in ultimate comfort.'
  },
  {
    image: 'https://images.unsplash.com/photo-1477584264176-51fa4e89f40c?auto=format&fit=crop&w=1920&q=80',
    title: 'Rajasthan Royal Heritage',
    subtitle: 'Step back in time through the palaces of the Pink City.'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-brand-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/70 z-10" />
          <OptimizedImage 
            src={slides[current].image} 
            alt={slides[current].title}
            className="w-full h-full object-cover"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30 px-3 py-1 rounded-full mb-6 w-fit">
            <Star size={14} className="text-brand-gold fill-brand-gold" />
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest inter">TripAdvisor 2024 Award Winner</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white playfair mb-6 leading-tight">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 inter mb-10 max-w-lg leading-relaxed">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/tours"
              className="group bg-brand-primary hover:bg-white text-white hover:text-brand-primary px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-2xl"
            >
              Explore Tours
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold transition-all text-center"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? 'bg-brand-gold w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
