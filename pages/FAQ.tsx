import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
      <SEO
        title="Taj Mahal & Golden Triangle Tour FAQs — Timings, Tickets & Safety"
        description="Is the Taj Mahal closed on Fridays? Best time for photos? Female guides available? Direct answers to the most common questions about visiting Agra and the Golden Triangle."
        canonical="/faq"
        schema={faqSchema}
      />
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="rounded-[2rem] overflow-hidden shadow-lift h-64 w-full max-w-md mx-auto">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=75"
                  alt="The Taj Mahal in Agra at dawn"
                  sizes="(min-width: 768px) 28rem, 100vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="display-lg font-bold playfair text-brand-dark mb-6">Frequently Asked Questions</h1>
            <p className="text-gray-500 text-lg">Everything you need to know about planning your heritage journey with us.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="bg-white rounded-2xl border border-brand-dark/5 shadow-soft overflow-hidden hover:shadow-lift transition-shadow">
                  <h2>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-brand-bg/50 transition-colors"
                    >
                      <span className="font-bold text-brand-dark text-lg">{faq.question}</span>
                      {isOpen
                        ? <Minus className="text-brand-primary shrink-0" aria-hidden="true" />
                        : <Plus className="text-brand-primary shrink-0" aria-hidden="true" />}
                    </button>
                  </h2>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="p-6 pt-0 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Help Section with Image */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-lift border border-brand-dark/5">
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
                  className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-lg"
                >
                  Chat with Us
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=600&q=75"
                  alt="Hawa Mahal in Jaipur — part of our Golden Triangle support coverage"
                  sizes="(min-width: 768px) 50vw, 100vw"
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
