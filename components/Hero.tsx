import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1600&q=75',
    alt: 'The Taj Mahal at sunrise reflected in the long pool, Agra, India',
    eyebrow: 'Agra · Sunrise Tours',
    subtitle: 'Step beyond the crowds with Agra’s premier heritage storytellers.'
  },
  {
    image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=1600&q=75',
    alt: 'Hawa Mahal palace facade in Jaipur on the Golden Triangle route',
    eyebrow: 'Delhi · Agra · Jaipur',
    subtitle: 'A seamless luxury passage through Delhi, Agra, and Jaipur.'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section className="relative h-[92vh] md:h-screen w-full overflow-hidden bg-brand-dark" aria-label="Featured tours">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: 'linear' } }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 hero-overlay z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
            fetchPriority={current === 0 ? 'high' : undefined}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center">
        <div className="page-container w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-4 py-1.5 rounded-full mb-6 shadow-xl">
              <Star size={12} fill="currentColor" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Rated 5.0/5 on Google</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`eyebrow-${current}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-brand-gold font-bold uppercase tracking-[0.35em] text-[10px] md:text-xs mb-4"
              >
                {slides[current].eyebrow}
              </motion.p>
            </AnimatePresence>

            <h1 className="display-xl font-bold text-white playfair mb-6">
              Taj Mahal &amp; Golden Triangle Tours, <em className="text-brand-gold not-italic">Guided by Locals</em>
            </h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-2xl text-white/80 mb-10 max-w-xl leading-relaxed"
              >
                {slides[current].subtitle}
              </motion.p>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/plans"
                className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl hover:bg-white hover:text-brand-dark hover:-translate-y-0.5 transition-all group text-sm uppercase tracking-widest"
              >
                Explore Tours from $40 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                to="/guide-booking"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all text-center text-sm uppercase tracking-widest"
              >
                Hire a Licensed Guide
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/70 text-xs md:text-sm font-medium">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-gold" aria-hidden="true" /> Government-licensed guides</span>
              <span className="flex items-center gap-2"><Users size={16} className="text-brand-gold" aria-hidden="true" /> Private tours since 1998</span>
              <span className="flex items-center gap-2"><Star size={16} className="text-brand-gold" aria-hidden="true" /> Free cancellation 24h</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="page-container flex gap-3">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show slide: ${slide.eyebrow}`}
              aria-current={current === i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                current === i ? 'w-12 bg-brand-gold' : 'w-6 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
