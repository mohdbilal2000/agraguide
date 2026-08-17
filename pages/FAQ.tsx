import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Search, MessageSquare } from 'lucide-react';
import { FAQS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import SEO, { SITE_URL } from '../components/SEO';

const WHATSAPP_NUMBER = '919217519989';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  // Schema always describes the FULL list, never the filtered view — the
  // crawler sees the unfiltered page, and markup must match that.
  const faqSchema = useMemo(
    () => ({
      '@id': `${SITE_URL}/faq#webpage`,
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    }),
    []
  );

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      FAQS.map((faq, i) => ({ ...faq, i })).filter(
        (faq) =>
          !q ||
          faq.question.toLowerCase().includes(q) ||
          faq.answer.toLowerCase().includes(q)
      ),
    [q]
  );

  return (
    <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
      <SEO
        title="Taj Mahal & Golden Triangle Tour FAQs — Tickets, Timings & Safety"
        description="Taj Mahal ticket prices and timings for 2026, Friday closures, sunrise pickups, Gatimaan vs car, cancellation policy, female guides and solo travel safety — answered plainly."
        canonical="/faq"
        pageType="FAQPage"
        breadcrumbs={[{ name: 'FAQ' }]}
        schema={faqSchema}
      />
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
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
            <h1 className="display-lg font-bold playfair text-brand-dark mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-500 text-lg">
              Tickets, timings, safety and cancellations — the practical details, answered straight.
            </p>
          </div>

          {/* Search — genuinely useful once the list passes ~10 questions */}
          <div className="relative mb-8">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions — tickets, Friday, sunrise, cancellation…"
              aria-label="Search frequently asked questions"
              className="w-full bg-white border-2 border-brand-dark/5 p-4 pl-14 rounded-2xl outline-none focus:border-brand-primary/40 transition-all text-brand-dark font-medium shadow-soft"
            />
          </div>

          {query && (
            <p className="text-sm text-gray-500 mb-6 px-2" role="status">
              {visible.length} of {FAQS.length} questions match "{query}"
            </p>
          )}

          <div className="space-y-4">
            {visible.map((faq) => {
              const isOpen = openIndex === faq.i;
              return (
                <div
                  key={faq.i}
                  className="bg-white rounded-2xl border border-brand-dark/5 shadow-soft overflow-hidden hover:shadow-lift transition-shadow"
                >
                  <h2>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : faq.i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.i}`}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-brand-bg/50 transition-colors"
                    >
                      <span className="font-bold text-brand-dark text-lg">{faq.question}</span>
                      {isOpen ? (
                        <Minus className="text-brand-primary shrink-0" aria-hidden="true" />
                      ) : (
                        <Plus className="text-brand-primary shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  </h2>

                  {/* The answer stays mounted and is collapsed with height, rather than
                      unmounted. Structured data must correspond to content that is
                      actually in the HTML — and AI answer engines read the DOM, not
                      the click. */}
                  <motion.div
                    id={`faq-answer-${faq.i}`}
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    aria-hidden={!isOpen}
                  >
                    <p className="p-6 pt-0 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </div>
              );
            })}

            {visible.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-brand-dark/10">
                <p className="text-gray-500 mb-6">
                  No question matches "{query}" — but we'll happily answer it directly.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-success text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-success/90 transition-all"
                >
                  <MessageSquare size={18} aria-hidden="true" /> Ask on WhatsApp
                </a>
              </div>
            )}
          </div>

          <p className="mt-8 text-xs text-gray-400 leading-relaxed text-center">
            Monument ticket prices and timings are set by the Archaeological Survey of India and
            change from time to time. Figures above were current in 2026 — we confirm the exact
            amounts with you before your tour.
          </p>
        </div>

        {/* Still have questions */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-lift border border-brand-dark/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold playfair text-brand-dark mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Message us on WhatsApp and you'll reach the people who actually run the tours —
                  not a call centre. We usually reply within a couple of hours.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-lg"
                >
                  <MessageSquare size={18} aria-hidden="true" /> Chat with Us
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=600&q=75"
                  alt="Hawa Mahal in Jaipur, one of the Golden Triangle stops we cover"
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
