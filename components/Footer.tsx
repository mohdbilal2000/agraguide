
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

import OptimizedImage from './OptimizedImage';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-bold playfair text-brand-gold">Guide India Tours</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">Heritage Excellence Since 1998</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              India's premier heritage collective. We specialize in providing authentic local perspectives across the Golden Triangle and beyond.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 hover:bg-brand-primary hover:text-white rounded-full transition-all border border-white/10"><Instagram size={18} /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-brand-primary hover:text-white rounded-full transition-all border border-white/10"><Facebook size={18} /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-brand-primary hover:text-white rounded-full transition-all border border-white/10"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold playfair mb-10 text-brand-gold">Discover</h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li><Link to="/plans" className="hover:text-brand-gold transition-colors">Tour Plans</Link></li>
              <li><Link to="/guide-booking" className="hover:text-brand-gold transition-colors">Book a Guide</Link></li>
              <li><Link to="/destinations" className="hover:text-brand-gold transition-colors">Destinations</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Our Services</Link></li>
              <li><Link to="/reviews" className="hover:text-brand-gold transition-colors">Guest Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold playfair mb-10 text-brand-gold">Company</h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Heritage Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Support</Link></li>
              <li><Link to="/faq" className="hover:text-brand-gold transition-colors">Travel FAQs</Link></li>
              <li><Link to="/digital-card" className="hover:text-brand-gold transition-colors">Digital ID</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold playfair mb-10 text-brand-gold">Head Office</h4>
            <ul className="space-y-6 text-sm text-white/70">
              <li className="flex gap-4 items-start">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                <span>Fatehabad Road, Opposite Gateway Hotel, Agra, UP 282001, India</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <a href="tel:+919876543210" className="hover:text-brand-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <a href="mailto:hello@guideindiatours.com" className="hover:text-brand-gold transition-colors">hello@guideindiatours.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 Guide India Tours. Crafted with Heritage Pride.</p>
          <div className="flex gap-10">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
