
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

import OptimizedImage from '../components/OptimizedImage';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl h-64 w-full max-w-md mx-auto">
                <OptimizedImage 
                  src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=80"
                  alt="Taj Mahal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold playfair text-brand-dark mb-6">Frequently Asked Questions</h1>
            <p className="text-gray-500 text-lg">Everything you need to know about planning your heritage journey with us.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-brand-dark/5 shadow-sm overflow-hidden hover:shadow-lg transition-all">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-bg/50 transition-colors"
                >
                  <span className="font-bold text-brand-dark text-lg inter">{faq.question}</span>
                  {openIndex === i ? <Minus className="text-brand-primary" /> : <Plus className="text-brand-primary" />}
                </button>
                {openIndex === i && (
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-brand-dark/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Help Section with Image */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-brand-dark/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold playfair text-brand-dark mb-4">Still Have Questions?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our travel consultants are available 24/7 to help you plan your perfect heritage journey. Reach out anytime!
                </p>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg"
                >
                  Chat with Us
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <OptimizedImage 
                  src="https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=600&q=80"
                  alt="Travel Support"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
