
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1920&q=80',
    title: 'Wonders of the Taj Mahal',
    subtitle: 'Step beyond the crowds with Agra’s premier heritage storytellers.'
  },
  {
    image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=1920&q=80',
    title: 'Imperial Golden Triangle',
    subtitle: 'A seamless luxury passage through Delhi, Agra, and Jaipur.'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden bg-brand-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 hero-overlay z-10" />
          <img src={slides[current].image} alt="Background" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-4 py-1.5 rounded-full mb-8 shadow-xl">
              <Star size={12} fill="currentColor" />
              <span className="text-[10px] font-bold uppercase tracking-widest inter">TripAdvisor 2024 Gold Winner</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white playfair mb-6 leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-2xl text-white/80 jakarta mb-10 max-w-xl leading-relaxed">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/plans"
                className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl hover:bg-white hover:text-brand-dark transition-all group text-sm uppercase tracking-widest"
              >
                Explore Plans <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/guide-booking"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all text-center text-sm uppercase tracking-widest"
              >
                Custom Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
