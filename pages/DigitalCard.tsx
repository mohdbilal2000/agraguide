
import React from 'react';
import { 
  Phone, Mail, Globe, MapPin, 
  Share2, Award, ShieldCheck, Instagram
} from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const DigitalCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
      <div className="bg-brand-bg w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden relative">
        <div className="h-32 bg-brand-primary" />
        <div className="px-8 pb-10 -mt-16 text-center">
          <div className="w-32 h-32 rounded-full border-4 border-brand-bg shadow-xl mx-auto overflow-hidden bg-white mb-6">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
              alt="Guide Profile" 
            />
          </div>
          <h1 className="text-3xl font-bold playfair text-brand-dark mb-1">Raj Kumar</h1>
          <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-4">Master Heritage Guide</p>
          
          <div className="flex justify-center gap-2 mb-8">
            <div className="flex items-center gap-1 bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-bold">
              <Award size={12} /> UNESCO Expert
            </div>
            <div className="flex items-center gap-1 bg-brand-success/10 text-brand-success px-3 py-1 rounded-full text-xs font-bold">
              <ShieldCheck size={12} /> Govt. Licensed
            </div>
          </div>

          <div className="space-y-3">
            <a href="tel:+919217519989" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-dark/5 hover:bg-brand-primary hover:text-white transition-all group">
               <Phone className="text-brand-primary group-hover:text-white" size={20} />
               <span className="font-bold inter">+91 98765 43210</span>
            </a>
            <a href="https://wa.me/919217519989" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-dark/5 hover:bg-brand-success hover:text-white transition-all group">
               <Globe className="text-brand-success group-hover:text-white" size={20} />
               <span className="font-bold inter">Chat on WhatsApp</span>
            </a>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-dark/5">
               <MapPin className="text-brand-gold" size={20} />
               <span className="font-medium inter text-gray-500">Agra, Uttar Pradesh</span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-brand-dark/5 flex justify-center gap-6">
            <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors">
              <Share2 size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Share Card</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors">
              <Instagram size={24} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Follow</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;
