import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Star, Quote, MessageSquare, ShieldCheck, BadgeCheck, Languages } from 'lucide-react';
import SEO from '../components/SEO';

const WHATSAPP_NUMBER = '919217519989';

/** Paste the Google Business Profile review link once it exists, e.g.
 *  https://g.page/r/XXXXXXXX/review  — leave empty to hide the button. */
const GOOGLE_REVIEW_URL = '';

const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const average =
  REVIEWS.length > 0
    ? (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1)
    : '0.0';

const Reviews: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <SEO
        title="Traveller Reviews — Taj Mahal & Golden Triangle Tours"
        description="Real feedback from travellers who toured the Taj Mahal, Agra, Delhi and Jaipur with our government-licensed local guides."
        canonical="/reviews"
        breadcrumbs={[{ name: 'Reviews' }]}
      />
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center gap-1 text-brand-gold mb-6" aria-hidden="true">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={28} />)}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold playfair text-brand-dark mb-6">Guest Stories</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto inter">
            Real feedback from travellers who have experienced the soul of India with us.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-primary">
            {average} average · {REVIEWS.length} {REVIEWS.length === 1 ? 'review' : 'reviews'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REVIEWS.map((review, idx) => (
            <motion.figure
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl relative border border-brand-dark/5 group hover:bg-brand-primary transition-all duration-500 flex flex-col"
            >
              <Quote
                className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-white/20 transition-colors"
                size={64}
                aria-hidden="true"
              />
              <div
                className="flex gap-1 text-brand-gold mb-6 group-hover:text-white transition-colors"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-lg text-gray-600 mb-8 italic leading-relaxed group-hover:text-white/90 transition-colors flex-grow">
                "{review.text}"
              </blockquote>

              <figcaption className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-white/20 group-hover:text-white transition-all">
                  {initials(review.author)}
                </div>
                <div>
                  <p className="font-bold text-brand-dark group-hover:text-white transition-colors">
                    {review.author}
                  </p>
                  <p className="text-xs text-gray-400 font-bold uppercase group-hover:text-white/60 transition-colors">
                    {review.location}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Why travellers trust us — verifiable claims only */}
        <div className="mt-24">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-brand-dark/5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold playfair text-brand-dark mb-4">Why Travellers Trust Us</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                No call centre, no commission stops, no surprises. You book directly with the people who guide you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: BadgeCheck,
                  title: 'Government-Licensed Guides',
                  desc: 'Every guide holds a Ministry of Tourism licence. Ask to see it — we are happy to show you.',
                },
                {
                  icon: ShieldCheck,
                  title: 'No Shopping Commissions',
                  desc: 'We never route your day through emporiums. Your time is spent on monuments, not showrooms.',
                },
                {
                  icon: Languages,
                  title: 'You Talk to the Owner',
                  desc: 'The person answering your WhatsApp is the person arranging your tour. Same number, start to finish.',
                },
              ].map((item) => (
                <div key={item.title} className="text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mx-auto">
                    <item.icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-dark text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-dark/5 pt-10 text-center">
              <h3 className="text-xl font-bold playfair text-brand-dark mb-3">Travelled with us?</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
                A few honest lines about your day help the next traveller decide — and mean a great deal to a small team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {GOOGLE_REVIEW_URL && (
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-lg"
                  >
                    <Star size={18} /> Leave a Google Review
                  </a>
                )}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-success text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-success/90 transition-all shadow-lg"
                >
                  <MessageSquare size={18} /> Share Feedback on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
