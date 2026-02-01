
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Plans', path: '/plans' },
    { name: 'Experts', path: '/guide-booking' },
    { name: 'Cities', path: '/destinations' },
    { name: 'Reviews', path: '/reviews' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled || !isHome ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="page-container flex items-center justify-between">
        <Link to="/" className="group flex flex-col shrink-0">
          <span className={`text-xl md:text-2xl font-bold playfair transition-colors ${
            isScrolled || !isHome ? 'text-brand-dark' : 'text-white'
          }`}>
            Guide India Tours
          </span>
          <span className={`text-[8px] uppercase tracking-[0.4em] font-bold ${
            isScrolled || !isHome ? 'text-brand-primary' : 'text-white/60'
          }`}>
            Heritage Excellence
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-brand-gold ${
                isScrolled || !isHome ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking"
            className="bg-brand-primary text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg"
          >
            Book Experience
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            isScrolled || !isHome ? 'text-brand-dark bg-brand-dark/5' : 'text-white bg-white/10'
          }`}
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[110]"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-bg z-[120] p-8 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-bold playfair text-brand-primary">Navigation</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-brand-dark/5 rounded-full hover:bg-brand-dark/10 transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="flex justify-between items-center text-lg font-bold text-brand-dark border-b border-gray-100 pb-4"
                  >
                    {link.name} <ChevronRight size={18} className="text-brand-primary" />
                  </Link>
                ))}
                <Link to="/booking" className="block w-full bg-brand-primary text-white py-4 rounded-2xl text-center font-bold shadow-xl">
                  Start Planning
                </Link>
              </div>
              <div className="mt-auto p-6 bg-white rounded-3xl border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Help Desk</p>
                  <p className="font-bold text-brand-dark text-sm">+91 98765 43210</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
