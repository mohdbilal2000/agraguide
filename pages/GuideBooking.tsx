
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fixed: Added Crown and Check to the lucide-react imports
import { MapPin, Clock, Languages, Shield, CheckCircle, MessageSquare, ArrowRight, ArrowLeft, Crown, Check } from 'lucide-react';
import { GUIDE_PACKAGES } from '../constants';

const GuideBooking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState<any>({
    city: '',
    time: '',
    package: '',
    language: 'English'
  });

  const steps = [
    { id: 1, label: 'City', icon: MapPin },
    { id: 2, label: 'Time', icon: Clock },
    { id: 3, label: 'Package', icon: Shield },
    { id: 4, label: 'Ready', icon: CheckCircle }
  ];

  const cities = [
    { name: 'Agra', img: 'https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=400&q=80' },
    { name: 'Delhi', img: 'https://images.unsplash.com/photo-1587474260584-1f35a4088f1c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Jaipur', img: 'https://images.unsplash.com/photo-1477584264176-51fa4e89f40c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mathura', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc183f27?auto=format&fit=crop&w=400&q=80' }
  ];

  const times = [
    { label: 'Sunrise (05:30 AM)', note: 'Best for photography' },
    { label: 'Morning (09:00 AM)', note: 'Avoid mid-day heat' },
    { label: 'Afternoon (01:00 PM)', note: 'Historical focus' },
    { label: 'Full Day (Intensive)', note: 'Most complete' }
  ];

  const handleSelect = (key: string, value: string) => {
    setSelection({ ...selection, [key]: value });
    if (step < 4) setStep(step + 1);
  };

  const generateWhatsAppMsg = () => {
    const msg = `Heritage Inquiry from Website:
City: ${selection.city}
Time: ${selection.time}
Package: ${selection.package}
Language: ${selection.language}`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-[0.3em] text-xs uppercase mb-3 block">Expert Concierge</span>
          <h1 className="text-5xl font-bold playfair text-brand-dark mb-4">Book Your Heritage Expert</h1>
          <p className="text-gray-500 inter max-w-xl mx-auto">Customize your local discovery in four simple steps.</p>
        </div>

        {/* Stepper Header */}
        <div className="flex justify-between items-center mb-16 max-w-2xl mx-auto relative px-4">
          <div className="absolute top-6 left-12 right-12 h-0.5 bg-gray-200 -z-10" />
          {steps.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                step >= s.id ? 'bg-brand-primary text-white scale-110 shadow-xl' : 'bg-white text-gray-300 border border-gray-100'
              }`}>
                <s.icon size={20} />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s.id ? 'text-brand-dark' : 'text-gray-400'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-brand-dark/5 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="h-full"
            >
              {step === 1 && (
                <div className="space-y-10">
                  <h2 className="text-3xl font-bold playfair text-brand-dark text-center">Which city are you visiting?</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {cities.map((city) => (
                      <button
                        key={city.name}
                        onClick={() => handleSelect('city', city.name)}
                        className="group flex flex-col items-center gap-4 transition-all"
                      >
                        <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all relative">
                          <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
                        </div>
                        <span className="font-bold text-xl playfair">{city.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-10">
                   <h2 className="text-3xl font-bold playfair text-brand-dark text-center">Preferred Starting Time?</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                     {times.map((t) => (
                       <button
                        key={t.label}
                        onClick={() => handleSelect('time', t.label)}
                        className="p-8 rounded-[2rem] border-2 border-brand-dark/5 hover:border-brand-primary/30 hover:bg-brand-bg transition-all text-left flex justify-between items-center group"
                       >
                         <div>
                            <span className="font-bold text-2xl text-brand-dark group-hover:text-brand-primary transition-colors block mb-1">{t.label}</span>
                            <span className="text-sm text-gray-400 font-medium">{t.note}</span>
                         </div>
                         <ArrowRight size={24} className="text-brand-primary opacity-0 group-hover:opacity-100 transition-all" />
                       </button>
                     ))}
                   </div>
                   <button onClick={() => setStep(1)} className="mx-auto flex items-center gap-2 text-gray-400 font-bold hover:text-brand-dark transition-colors">
                     <ArrowLeft size={16} /> Change City
                   </button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-10">
                   <h2 className="text-3xl font-bold playfair text-brand-dark text-center">Select Your Service Level</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {GUIDE_PACKAGES.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => handleSelect('package', p.name)}
                          className="p-10 rounded-[2.5rem] border-2 border-brand-dark/5 hover:border-brand-primary text-left transition-all relative group overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                             <Crown size={80} />
                          </div>
                          <h4 className="text-2xl font-bold text-brand-dark mb-2">{p.name}</h4>
                          <p className="text-brand-primary font-bold text-xl mb-4">{p.price} <span className="text-gray-400 text-sm font-normal">/ guest</span></p>
                          <ul className="space-y-3">
                            {p.features.slice(0, 3).map((f, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                <Check size={16} className="text-brand-success" /> {f}
                              </li>
                            ))}
                          </ul>
                        </button>
                      ))}
                   </div>
                </div>
              )}

              {step === 4 && (
                <div className="text-center space-y-10 max-w-2xl mx-auto">
                   <div className="w-24 h-24 bg-brand-success/10 rounded-full flex items-center justify-center text-brand-success mx-auto mb-8 shadow-inner">
                      <CheckCircle size={48} />
                   </div>
                   <h2 className="text-4xl font-bold playfair text-brand-dark">Your Itinerary is Ready!</h2>
                   <p className="text-lg text-gray-500 inter leading-relaxed">
                     You have selected a <strong>{selection.package}</strong> experience in <strong>{selection.city}</strong> for a <strong>{selection.time}</strong> session. Click below to finalize your private heritage journey with our head office.
                   </p>
                   
                   <div className="bg-brand-bg p-8 rounded-[2rem] border border-brand-primary/10 text-left space-y-4">
                      <div className="flex justify-between border-b border-brand-dark/5 pb-3">
                        <span className="text-gray-400 font-bold uppercase text-[10px]">Location</span>
                        <span className="font-bold text-brand-dark">{selection.city}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-dark/5 pb-3">
                        <span className="text-gray-400 font-bold uppercase text-[10px]">Schedule</span>
                        <span className="font-bold text-brand-dark">{selection.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 font-bold uppercase text-[10px]">Package</span>
                        <span className="font-bold text-brand-dark">{selection.package}</span>
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button onClick={() => setStep(1)} className="flex-1 py-5 rounded-2xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all">Start Over</button>
                      <a 
                        href={generateWhatsAppMsg()}
                        className="flex-[2] py-5 rounded-2xl font-bold bg-brand-success text-white flex items-center justify-center gap-3 hover:bg-brand-success/90 transition-all shadow-2xl shadow-brand-success/20 text-lg"
                      >
                        <MessageSquare size={24} /> Confirm on WhatsApp
                      </a>
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GuideBooking;
