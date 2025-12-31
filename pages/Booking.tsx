
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, Users, MapPin, CreditCard, ArrowRight } from 'lucide-react';

const steps = ['Details', 'Dates', 'Payment'];

const Booking: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="pt-40 pb-20 container mx-auto px-4 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl max-w-xl mx-auto"
        >
          <div className="w-20 h-20 bg-brand-success rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Check size={40} />
          </div>
          <h1 className="text-3xl font-bold playfair text-brand-dark mb-4">Booking Requested!</h1>
          <p className="text-gray-500 mb-8">Our expert team is reviewing your request. You'll receive a confirmation on WhatsApp/Email within 30 minutes.</p>
          <button onClick={() => window.location.href='/'} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold">Return Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i <= step ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {i + 1}
                </div>
                <span className={`text-sm font-bold hidden sm:block ${i <= step ? 'text-brand-dark' : 'text-gray-400'}`}>{s}</span>
                {i < steps.length - 1 && <div className="w-12 h-px bg-gray-200 hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-8"
            >
              {step === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="text-sm font-bold mb-2 block">Select Tour</label>
                    <select className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-primary outline-none appearance-none bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==')]">
                      <option>Sunrise Taj Mahal Tour</option>
                      <option>Same Day Agra from Delhi</option>
                      <option>Golden Triangle 4 Days</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-bold mb-2 block">Full Name</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-gray-200" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-bold mb-2 block">Email Address</label>
                    <input type="email" className="w-full p-4 rounded-xl border border-gray-200" placeholder="john@example.com" />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold mb-2 block">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input type="date" className="w-full p-4 pl-12 rounded-xl border border-gray-200" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold mb-2 block">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input type="number" min="1" className="w-full p-4 pl-12 rounded-xl border border-gray-200" placeholder="2" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="bg-brand-primary/5 p-6 rounded-2xl border border-brand-primary/10">
                    <p className="text-sm text-brand-primary font-bold mb-2">Secure Booking Notice</p>
                    <p className="text-xs text-brand-primary/70">Payment will be handled via a secure WhatsApp link or Bank Transfer after guide confirmation to ensure availability.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                    <span className="font-medium">Total Estimate</span>
                    <span className="text-2xl font-bold text-brand-dark">$90.00</span>
                  </div>
                </div>
              )}

              <button 
                onClick={nextStep}
                className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20"
              >
                {step === steps.length - 1 ? 'Complete Booking' : 'Next Step'} <ArrowRight size={20} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Booking;
