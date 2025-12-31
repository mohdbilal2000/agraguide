
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Added ChevronRight to the import list from lucide-react
import { Menu, X, Phone, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Tour Plans', path: '/plans' },
    { name: 'Book a Guide', path: '/guide-booking' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start">
          <span className={`text-2xl font-bold playfair leading-none tracking-tight ${isScrolled || !isHome ? 'text-brand-primary' : 'text-white'}`}>
            Guide India Tours
          </span>
          <span className={`text-[9px] uppercase tracking-[0.3em] inter font-bold mt-1.5 ${isScrolled || !isHome ? 'text-brand-dark/70' : 'text-white/80'}`}>
            Heritage Expertise Since 1998
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-bold text-sm uppercase tracking-widest transition-colors hover:text-brand-gold ${
                isScrolled || !isHome ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-brand-primary/30"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-md" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled || !isHome ? 'text-brand-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled || !isHome ? 'text-brand-dark' : 'text-white'} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 bg-brand-bg z-[60] lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="text-2xl font-bold playfair text-brand-primary">Guide India Tours</span>
               <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-brand-dark/5 rounded-full"><X size={24} /></button>
            </div>
            <div className="flex flex-col space-y-8 text-2xl font-bold playfair">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-brand-dark flex items-center justify-between border-b border-brand-dark/5 pb-4">
                  {link.name} <ChevronRight size={20} className="text-brand-primary" />
                </Link>
              ))}
              <Link 
                to="/booking"
                className="bg-brand-primary text-white py-5 rounded-[2rem] font-bold text-center text-xl shadow-2xl"
              >
                Start Planning
              </Link>
            </div>
            <div className="mt-auto pt-10 border-t border-brand-dark/10 grid grid-cols-2 gap-4">
              <a href="tel:+919876543210" className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl">
                <Phone size={20} className="text-brand-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Call Expert</span>
              </a>
              <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl">
                <Globe size={20} className="text-brand-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">EN | ES | FR</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
