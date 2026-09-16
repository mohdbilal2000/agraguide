import React, { useState } from 'react';
import {
  Phone, Mail, Globe, MapPin,
  Share2, Check, ShieldCheck, Instagram
} from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const PHONE = '+919217519989';
const CARD_URL = 'https://indiventuretravellers.com/digital-card';
const INSTAGRAM = 'https://www.instagram.com/indiventuretravellers/';

const DigitalCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Web Share where the device supports it; clipboard everywhere else.
  // The old button did nothing at all, which is worse than either.
  const handleShare = async () => {
    const data = {
      title: 'Indiventure Travellers — Hemant Kumar',
      text: 'Licensed heritage guide in Agra & Delhi',
      url: CARD_URL
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(CARD_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* user dismissed the share sheet, or clipboard is unavailable */
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
      <div className="bg-brand-bg w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden relative">
        <div className="h-32 bg-brand-primary" />
        <div className="px-8 pb-10 -mt-16 text-center">
          <div className="w-32 h-32 rounded-full border-4 border-brand-bg shadow-xl mx-auto overflow-hidden bg-white mb-6 flex items-center justify-center p-3">
            <OptimizedImage
              src="/logo-512.png"
              alt="Indiventure Travellers"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold playfair text-brand-dark mb-1">Hemant Kumar</h1>
          <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-4">
            Heritage Guide &middot; Indiventure Travellers
          </p>

          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-1.5 bg-brand-success/10 text-brand-success px-4 py-1.5 rounded-full text-xs font-bold">
              <ShieldCheck size={13} aria-hidden="true" /> Ministry of Tourism Licensed
            </div>
          </div>

          <div className="space-y-3">
            <a href={`tel:${PHONE}`} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-dark/5 hover:bg-brand-primary hover:text-white transition-all group">
              <Phone className="text-brand-primary group-hover:text-white shrink-0" size={20} aria-hidden="true" />
              <span className="font-bold inter">+91 92175 19989</span>
            </a>
            <a
              href={`https://wa.me/919217519989`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-dark/5 hover:bg-brand-success hover:text-white transition-all group"
            >
              <Globe className="text-brand-success group-hover:text-white shrink-0" size={20} aria-hidden="true" />
              <span className="font-bold inter">Chat on WhatsApp</span>
            </a>
            <a href="mailto:indiventuretravellers@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-dark/5 hover:bg-brand-primary hover:text-white transition-all group">
              <Mail className="text-brand-primary group-hover:text-white shrink-0" size={20} aria-hidden="true" />
              <span className="font-bold inter break-all">indiventuretravellers@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-dark/5">
              <MapPin className="text-brand-gold shrink-0" size={20} aria-hidden="true" />
              <span className="font-medium inter text-gray-500">Agra &amp; Delhi, India</span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-brand-dark/5 flex justify-center gap-10">
            <button
              onClick={handleShare}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors"
            >
              {copied ? <Check size={24} className="text-brand-success" aria-hidden="true" /> : <Share2 size={24} aria-hidden="true" />}
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {copied ? 'Link copied' : 'Share card'}
              </span>
            </button>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors"
            >
              <Instagram size={24} aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Follow</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;
