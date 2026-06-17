import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TourCard from '../components/TourCard';
import OptimizedImage from '../components/OptimizedImage';
import SEO, { SITE_URL } from '../components/SEO';
import { TOURS, REVIEWS, GUIDE_PACKAGES, DESTINATIONS, FAQS, PRICE_DISCLAIMER } from '../constants';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, Car, Utensils, Crown, ShieldCheck,
  TrendingUp, Star, Users, MapPin, Quote, Sparkles, Plus
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Users, Car, Utensils, Crown };

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const }
};

const Home: React.FC = () => {
  const featuredTours = [...TOURS]
    .sort((a, b) => (b.isMostBooked ? 1 : 0) - (a.isMostBooked ? 1 : 0) || b.reviewsCount - a.reviewsCount)
    .slice(0, 6);

  const categories = [
    { name: 'Same Day Tours', desc: 'Delhi → Taj Mahal & back', image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=75' },
    { name: 'Golden Triangle', desc: 'Delhi · Agra · Jaipur', image: 'https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=800&q=75' },
    { name: 'Royal Rajasthan', desc: 'Palaces, forts & deserts', image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=800&q=75' },
    { name: 'Photography Tours', desc: 'Golden-hour led shoots', image: 'https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=800&q=75' }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Indiventure Travellers",
      "url": SITE_URL,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE_URL}/plans?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Featured Taj Mahal & Golden Triangle Tours",
      "itemListElement": featuredTours.map((tour, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": tour.title,
        "url": `${SITE_URL}/plans/${tour.id}`
      }))
    }
  ];

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <SEO
        title="Taj Mahal & Golden Triangle Tours with Local Experts"
        description="Private Taj Mahal, Agra, Delhi & Jaipur tours from $40 with government-licensed local guides. Sunrise tours, same-day trips from Delhi, and luxury Golden Triangle packages since 1998."
        canonical="/"
        schema={schema}
      />
      <Hero />

      {/* Trust band */}
      <section className="bg-brand-dark py-12 md:py-16 overflow-hidden" aria-label="Trusted by travellers">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="flex items-center gap-5 shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-brand-gold/20 flex flex-col items-center justify-center text-brand-gold border border-brand-gold/30 shadow-2xl">
                <TrendingUp size={20} aria-hidden="true" />
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">Growth</span>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white playfair">1,786</p>
                <p className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.2em] mt-1">Tours Booked Last Month</p>
              </div>
            </div>
            <div className="relative flex-grow w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="marquee-track items-center gap-14 opacity-40">
                {[...Array(2)].flatMap((_, copy) =>
                  ['Viator', 'Tripadvisor', 'Klook', 'GetYourGuide', 'Expedia', 'Lonely Planet'].map(brand => (
                    <span key={`${copy}-${brand}`} className="text-white text-lg md:text-xl font-bold tracking-tight whitespace-nowrap pr-14">
                      {brand}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured tours */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="featured-heading">
        <div className="page-container">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 block">Traveller Favourites</span>
              <h2 id="featured-heading" className="display-lg font-bold playfair text-brand-dark mb-4">Most-Booked Experiences</h2>
              <p className="text-gray-500 text-sm md:text-lg">Our highest-rated private tours — from sunrise at the Taj Mahal to multi-day royal circuits. Free cancellation up to 24 hours before.</p>
            </div>
            <Link to="/plans" className="shrink-0 inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest border-b-2 border-brand-primary pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors">
              All {TOURS.length} Tours <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredTours.map((tour, i) => (
              <motion.div key={tour.id} {...fadeUp} transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: 'easeOut' }}>
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category explorer */}
      <section className="py-16 md:py-24 bg-brand-bg" aria-labelledby="categories-heading">
        <div className="page-container">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-brand-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 block">Find Your Journey</span>
            <h2 id="categories-heading" className="display-lg font-bold playfair text-brand-dark mb-4">Explore by Style</h2>
            <p className="text-gray-500 text-sm md:text-lg">Whether you have twelve hours or twelve days, there is a route built for you.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={cat.name} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}>
                <Link
                  to="/plans"
                  className="group relative block h-80 rounded-[2rem] overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500"
                >
                  <OptimizedImage
                    src={cat.image}
                    alt={`${cat.name} — ${cat.desc}`}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold playfair text-white mb-1">{cat.name}</h3>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-widest">{cat.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-brand-gold text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      View Tours <ArrowRight size={12} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide packages */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="packages-heading">
        <div className="page-container">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-brand-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 block">Simple Pricing</span>
            <h2 id="packages-heading" className="display-lg font-bold playfair text-brand-dark mb-4">Hire a Licensed Local Guide</h2>
            <p className="text-gray-500 text-sm md:text-lg">Government-approved heritage experts. Pick the level of service you need — from a guide-only walk to a fully inclusive day.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUIDE_PACKAGES.map((pkg, i) => {
              const Icon = iconMap[pkg.icon] ?? Users;
              const highlight = pkg.id === 'guide-taxi-meals';
              return (
                <motion.div
                  key={pkg.id}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                  className={`relative rounded-[2rem] p-8 border flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                    highlight
                      ? 'bg-brand-dark text-white border-brand-gold/40 shadow-lift'
                      : 'bg-brand-bg text-brand-dark border-brand-dark/5 shadow-soft hover:shadow-lift'
                  }`}
                >
                  {highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg flex items-center gap-1">
                      <Sparkles size={10} aria-hidden="true" /> Popular
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${highlight ? 'bg-brand-gold/20 text-brand-gold' : 'bg-brand-primary/10 text-brand-primary'}`}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${highlight ? 'text-white/50' : 'text-gray-400'}`}>From</p>
                  <p className={`text-3xl font-bold playfair mb-6 ${highlight ? 'text-brand-gold' : 'text-brand-primary'}`}>
                    {pkg.price}<span className={`text-xs font-sans font-medium ${highlight ? 'text-white/50' : 'text-gray-400'}`}> /day*</span>
                  </p>
                  <ul className={`space-y-3 text-sm mb-8 ${highlight ? 'text-white/80' : 'text-gray-600'}`}>
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={16} className={`shrink-0 mt-0.5 ${highlight ? 'text-brand-gold' : 'text-brand-success'}`} aria-hidden="true" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/guide-booking"
                    className={`mt-auto block text-center py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                      highlight
                        ? 'bg-brand-gold text-brand-dark hover:bg-white'
                        : 'bg-brand-primary text-white hover:bg-brand-dark'
                    }`}
                  >
                    Book {pkg.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
            *{PRICE_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 md:py-24 bg-brand-bg" aria-labelledby="destinations-heading">
        <div className="page-container">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 block">The Golden Triangle</span>
              <h2 id="destinations-heading" className="display-lg font-bold playfair text-brand-dark mb-4">Three Cities, One Story</h2>
              <p className="text-gray-500 text-sm md:text-lg">Mughal Agra, imperial Delhi, and royal Jaipur — each within a few hours of the next.</p>
            </div>
            <Link to="/destinations" className="shrink-0 inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest border-b-2 border-brand-primary pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors">
              All Destinations <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {DESTINATIONS.map((dest, i) => (
              <motion.div key={dest.id} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}>
                <Link to="/destinations" className="group block bg-white rounded-[2rem] overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500 border border-brand-dark/5">
                  <div className="relative h-60 overflow-hidden">
                    <OptimizedImage
                      src={dest.image}
                      alt={`${dest.name} — ${dest.description}`}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="h-full w-full group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-dark text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow">
                      {dest.toursCount} Tours
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-bold playfair text-brand-dark mb-2 flex items-center gap-2">
                      <MapPin size={18} className="text-brand-primary" aria-hidden="true" /> {dest.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{dest.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden" aria-labelledby="reviews-heading">
        <div className="page-container relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-brand-gold font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 block">Guest Stories</span>
            <h2 id="reviews-heading" className="display-lg font-bold playfair text-white mb-4">Rated 4.9 by 1,560+ Travellers</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {REVIEWS.map((review, i) => (
              <motion.figure
                key={review.id}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm"
              >
                <Quote size={28} className="text-brand-gold mb-4" aria-hidden="true" />
                <blockquote className="text-white/85 leading-relaxed mb-6">{review.text}</blockquote>
                <figcaption className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{review.author}</p>
                    <p className="text-white/50 text-xs uppercase tracking-widest">{review.location}</p>
                  </div>
                  <div className="flex text-brand-gold" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, s) => (
                      <Star key={s} size={14} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-white hover:border-white transition-colors">
              Read All Reviews <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="faq-heading">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <span className="text-brand-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 block">Before You Fly</span>
              <h2 id="faq-heading" className="display-lg font-bold playfair text-brand-dark mb-4">Common Questions, Straight Answers</h2>
              <p className="text-gray-500 text-sm md:text-lg mb-8">Friday closures, sunrise timings, female guides — the practical details that make or break a Taj Mahal visit.</p>
              <Link to="/faq" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg">
                All FAQs <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
            <div className="lg:col-span-7 space-y-4">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                  className="bg-brand-bg rounded-2xl p-6 border border-brand-dark/5"
                >
                  <h3 className="font-bold text-brand-dark mb-2 flex items-start gap-3">
                    <Plus size={18} className="text-brand-primary shrink-0 mt-0.5" aria-hidden="true" /> {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-8">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-brand-bg" aria-labelledby="cta-heading">
        <div className="page-container">
          <motion.div {...fadeUp} className="bg-brand-dark rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1587474260584-1f35a4088f1c?auto=format&fit=crop&w=1600&q=75"
                alt=""
                sizes="100vw"
                className="h-full w-full"
              />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <ShieldCheck size={40} className="text-brand-gold mx-auto mb-6" aria-hidden="true" />
              <h2 id="cta-heading" className="display-lg font-bold playfair mb-6">Your India Story Starts Here</h2>
              <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed">
                Talk to a local expert on WhatsApp, get a same-day quote, and reserve with free cancellation up to 24 hours before your tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/plans" className="bg-brand-gold text-brand-dark px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl hover:bg-white transition-all">
                  Browse All Tours
                </Link>
                <a
                  href="https://wa.me/919217519989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
                >
                  WhatsApp an Expert
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
