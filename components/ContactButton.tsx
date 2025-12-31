
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPrompt = localStorage.getItem('hasSeenContactPrompt');
      if (!hasSeenPrompt) {
        setShowPrompt(true);
      }
    }, 20000); // 20 seconds auto-popup

    return () => clearTimeout(timer);
  }, []);

  const dismissPrompt = () => {
    setShowPrompt(false);
    localStorage.setItem('hasSeenContactPrompt', 'true');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Auto Prompt */}
      <AnimatePresence>
        {showPrompt && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-4 rounded-2xl shadow-2xl border border-brand-primary/10 mb-4 max-w-[280px] relative"
          >
            <button 
              onClick={dismissPrompt}
              className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 text-gray-500"
            >
              <X size={14} />
            </button>
            <div className="flex gap-3 items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark">Need help planning?</p>
                <p className="text-xs text-gray-500">I'm Naveen, your local expert.</p>
              </div>
            </div>
            <button 
              onClick={() => { setIsOpen(true); setShowPrompt(false); }}
              className="w-full bg-brand-success text-white py-2 rounded-lg text-sm font-bold hover:bg-brand-success/90 transition-colors"
            >
              Chat on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl border border-brand-primary/10 mb-4 overflow-hidden w-[300px]"
          >
            <div className="bg-brand-primary p-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-1">Contact Us</h3>
              <p className="text-sm text-white/80">Available 24/7 for our guests.</p>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-success/5 hover:bg-brand-success/10 text-brand-success transition-all border border-brand-success/10"
              >
                <MessageCircle fill="currentColor" className="text-brand-success" />
                <div className="text-left">
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-xs opacity-70">Instant Response</p>
                </div>
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-info/5 hover:bg-brand-info/10 text-brand-info transition-all border border-brand-info/10"
              >
                <Phone fill="currentColor" className="text-brand-info" />
                <div className="text-left">
                  <p className="font-bold">Call Now</p>
                  <p className="text-xs opacity-70">+91 98765 43210</p>
                </div>
              </a>
              <a 
                href="mailto:contact@agratourguides.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-dark/5 hover:bg-brand-dark/10 text-brand-dark transition-all border border-brand-dark/10"
              >
                <Mail fill="currentColor" className="text-brand-dark" />
                <div className="text-left">
                  <p className="font-bold">Email Us</p>
                  <p className="text-xs opacity-70">Query in 2 hours</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          isOpen ? 'bg-brand-dark text-white rotate-90' : 'bg-brand-success text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default ContactButton;
