import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while menu is open, close on Escape
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Tours', path: '/plans' },
    { name: 'Guides', path: '/guide-booking' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isHome = location.pathname === '/';
  const solid = isScrolled || !isHome;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        solid ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="page-container flex items-center justify-between">
        <Link to="/" className="group flex flex-col shrink-0" aria-label="Indiventure Travellers — home">
          <span className={`text-xl md:text-2xl font-bold playfair transition-colors ${
            solid ? 'text-brand-dark' : 'text-white'
          }`}>
            Indiventure Travellers
          </span>
          <span className={`text-[8px] uppercase tracking-[0.4em] font-bold ${
            solid ? 'text-brand-primary' : 'text-white/60'
          }`}>
            Adventure Awaits
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `relative text-[11px] font-bold uppercase tracking-widest transition-all hover:text-brand-gold ${
                solid ? 'text-brand-dark' : 'text-white'
              } ${isActive ? 'text-brand-gold after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-brand-gold after:rounded-full' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/booking"
            className="bg-brand-primary text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-brand-dark hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-primary/25"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            solid ? 'text-brand-dark bg-brand-dark/5' : 'text-white bg-white/10'
          }`}
        >
          <Menu size={24} aria-hidden="true" />
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
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-bg z-[120] p-8 shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-bold playfair text-brand-primary">Navigation</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 bg-brand-dark/5 rounded-full hover:bg-brand-dark/10 transition-colors"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex justify-between items-center text-lg font-bold text-brand-dark border-b border-brand-dark/5 pb-4 hover:text-brand-primary transition-colors"
                  >
                    {link.name} <ChevronRight size={18} className="text-brand-primary" aria-hidden="true" />
                  </Link>
                ))}
                <Link to="/booking" className="block w-full bg-brand-primary text-white py-4 rounded-2xl text-center font-bold shadow-xl hover:bg-brand-dark transition-colors">
                  Start Planning
                </Link>
              </div>
              <div className="mt-auto pt-8">
                <a href="tel:+919876543210" className="p-6 bg-white rounded-3xl border border-brand-dark/5 flex items-center gap-4 hover:shadow-soft transition-shadow">
                  <span className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success">
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">24/7 Help Desk</span>
                    <span className="block font-bold text-brand-dark text-sm">+91 98765 43210</span>
                  </span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
