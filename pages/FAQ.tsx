
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-5xl font-bold playfair text-brand-dark text-center mb-16">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-brand-dark/5 shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
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
    </div>
  );
};

export default FAQ;
