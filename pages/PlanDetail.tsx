
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Fixed: Added Shield and Award to the lucide-react imports
import { 
  CheckCircle2, Clock, Users, MapPin, 
  Star, Calendar, MessageCircle, Info, ArrowLeft,
  X, Check, Sparkles, Shield, Award
} from 'lucide-react';
import { TOURS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';

const PlanDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const tour = TOURS.find(t => t.id === id);

  if (!tour) return <div className="pt-32 text-center h-screen">Tour plan not found.</div>;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'faq', label: 'Details & FAQ' }
  ];

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Immersive Header (No Global Navbar) */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <OptimizedImage src={tour.image} alt={tour.title} priority className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90" />
        
        {/* Custom Detail Nav */}
        <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
          <Link to="/plans" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
            <ArrowLeft size={24} />
          </Link>
          <Link to="/" className="playfair text-xl font-bold text-white tracking-widest uppercase">Guide India Tours</Link>
          <Link to="/contact" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
            <MessageCircle size={24} />
          </Link>
        </div>

        <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-col justify-end pb-16">
          <div className="flex items-center gap-3 text-brand-gold mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="font-bold text-xs tracking-[0.2em] uppercase">{tour.rating} • {tour.reviewsCount} Trusted Reviews</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold playfair text-white mb-8 max-w-5xl leading-tight">
            {tour.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/90 font-bold">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
              <Clock size={18} className="text-brand-gold" /> {tour.duration}
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
              <Users size={18} className="text-brand-gold" /> Private Luxury Experience
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
              <MapPin size={18} className="text-brand-gold" /> {tour.category}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-10 relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-14">
              {/* Tab Navigation */}
              <div className="flex gap-10 border-b border-brand-dark/5 mb-12 overflow-x-auto no-scrollbar">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-5 text-lg font-bold transition-all whitespace-nowrap relative ${
                      activeTab === tab.id ? 'text-brand-primary' : 'text-gray-400 hover:text-brand-dark'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-12">
                      <p className="text-2xl text-gray-700 leading-relaxed playfair italic mb-8">
                        "{tour.description}"
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tour.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-4 p-6 bg-brand-bg rounded-2xl border border-brand-primary/10">
                            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                              <CheckCircle2 size={20} />
                            </div>
                            <span className="text-brand-dark font-bold inter">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-10 bg-brand-dark text-white rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Sparkles size={120} />
                        </div>
                        <div className="w-24 h-24 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/30">
                          <Info size={40} />
                        </div>
                        <div className="relative z-10">
                          <h4 className="text-2xl font-bold playfair mb-3 text-brand-gold">Heritage Expert Note</h4>
                          <p className="text-white/80 inter leading-relaxed">
                            This tour is architecturally synchronized. We time each visit to ensure the monument is seen in its historical and aesthetic context. Our guides are local historians, not just narrators.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'itinerary' && (
                    <div className="space-y-10">
                      {tour.itinerary ? tour.itinerary.map((item, idx) => (
                        <div key={idx} className="flex gap-10 group">
                          <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-brand-primary ring-8 ring-brand-primary/10 mb-2 shadow-lg" />
                            {idx < tour.itinerary!.length - 1 && <div className="w-1 grow bg-brand-dark/5 rounded-full" />}
                          </div>
                          <div className="pb-12">
                            <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-2 block">{item.time}</span>
                            <h4 className="text-3xl font-bold playfair text-brand-dark group-hover:text-brand-primary transition-colors">{item.activity}</h4>
                            <p className="text-gray-500 mt-2 inter max-w-lg">Exclusive guided session focusing on heritage, architecture, and untold stories of the Mughal era.</p>
                          </div>
                        </div>
                      )) : (
                        <div className="text-center py-20 bg-brand-bg rounded-3xl border-2 border-dashed border-brand-dark/10">
                          <p className="text-gray-500 italic font-bold">Standard heritage itinerary applies. Contact us for custom timing.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'faq' && (
                    <div className="space-y-8">
                      {[
                        { q: "What should I bring?", a: "Comfortable walking shoes, a hat, and a camera. We provide bottled water and hand umbrellas for sun protection." },
                        { q: "Is transport really private?", a: "Yes, you will have a dedicated AC luxury sedan or SUV exclusively for your party throughout the duration." },
                        { q: "Can we add extra monuments?", a: "Absolutely. Our plans are flexible. Just talk to your guide on the day or inform us during booking." }
                      ].map((faq, i) => (
                        <div key={i} className="p-8 bg-brand-bg rounded-3xl border border-brand-primary/5 hover:border-brand-primary/20 transition-all">
                          <h4 className="font-bold text-xl mb-4 text-brand-dark playfair">{faq.q}</h4>
                          <p className="text-gray-600 inter leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-12 space-y-8">
              <div className="bg-white rounded-[3rem] shadow-2xl border border-brand-dark/5 overflow-hidden">
                <div className="bg-brand-primary p-12 text-white">
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest block mb-2">Private Tour From</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold font-serif">${tour.price}</span>
                    <span className="text-white/60 text-sm font-bold">/ guest</span>
                  </div>
                </div>
                
                <div className="p-10 space-y-6">
                  <Link 
                    to="/booking"
                    className="block w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-center text-xl hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/30"
                  >
                    Reserve Now
                  </Link>
                  <a 
                    href={`https://wa.me/919876543210?text=I'm interested in: ${tour.title}`}
                    className="block w-full border-2 border-brand-success text-brand-success py-5 rounded-2xl font-bold text-center flex items-center justify-center gap-3 hover:bg-brand-success/5 transition-all text-xl"
                  >
                    <MessageCircle size={24} /> Chat with Expert
                  </a>
                  
                  <div className="pt-8 border-t border-brand-dark/5 space-y-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 font-bold">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                        <Check size={20} />
                      </div>
                      Instant Confirmation
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 font-bold">
                      <div className="w-10 h-10 rounded-full bg-brand-info/10 flex items-center justify-center text-brand-info">
                        <Shield size={20} />
                      </div>
                      Govt. Approved Experts
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 font-bold">
                      <div className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success">
                        <Sparkles size={20} />
                      </div>
                      No Hidden Fees
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide Highlight Card */}
              <div className="bg-brand-dark rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award size={150} />
                </div>
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-brand-gold/30 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Local Guide" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-2xl font-bold playfair">Raj Kumar</h5>
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-1">20+ Years Expertise</p>
                  </div>
                </div>
                <p className="text-white/70 text-base leading-relaxed mb-8 italic relative z-10">
                  "Architecture is frozen music. I look forward to helping you hear the melodies of Agra's heritage."
                </p>
                <Link to="/digital-card" className="block text-center py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all relative z-10">
                  View Professional Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
