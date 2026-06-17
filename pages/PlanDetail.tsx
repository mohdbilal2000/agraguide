import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Clock, MapPin,
  Star, MessageCircle, ArrowLeft, Shield, Award, CalendarCheck
} from 'lucide-react';
import { TOURS, PRICE_DISCLAIMER } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import SEO, { SITE_URL } from '../components/SEO';

const PlanDetail: React.FC = () => {
  const { id } = useParams();
  const [showStickyBar, setShowStickyBar] = useState(false);
  const tour = TOURS.find(t => t.id === id);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!tour) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen bg-brand-bg">
        <h1 className="text-3xl font-bold playfair text-brand-dark mb-4">Tour plan not found</h1>
        <Link to="/plans" className="text-brand-primary font-bold border-b-2 border-brand-primary">Browse all tours</Link>
      </div>
    );
  }

  const tourUrl = `${SITE_URL}/plans/${tour.id}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": tour.title,
      "image": tour.image,
      "description": tour.description,
      "brand": { "@type": "Brand", "name": "Indiventure Travellers" },
      "offers": {
        "@type": "Offer",
        "url": tourUrl,
        "priceCurrency": "USD",
        "price": typeof tour.price === 'number' ? tour.price : undefined,
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Tour Plans", "item": `${SITE_URL}/plans` },
        { "@type": "ListItem", "position": 3, "name": tour.title, "item": tourUrl }
      ]
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO
        title={tour.title}
        description={tour.description.substring(0, 160)}
        image={tour.image}
        type="product"
        canonical={`/plans/${tour.id}`}
        schema={schema}
      />

      <div className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">
        <OptimizedImage src={tour.image} alt={`${tour.title} — ${tour.category}`} priority sizes="100vw" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90" />

        <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-50">
          <Link to="/plans" aria-label="Back to all tours" className="p-2 md:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
            <ArrowLeft size={20} className="md:w-6 md:h-6" aria-hidden="true" />
          </Link>
          <Link to="/" className="playfair text-sm md:text-xl font-bold text-white tracking-widest uppercase">Indiventure Travellers</Link>
          <Link to="/contact" aria-label="Contact us" className="p-2 md:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
            <MessageCircle size={20} className="md:w-6 md:h-6" aria-hidden="true" />
          </Link>
        </div>

        <div className="absolute inset-0 page-container flex flex-col justify-end pb-12 md:pb-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/plans" className="hover:text-white transition-colors">Tours</Link>
            <span aria-hidden="true">/</span>
            <span className="text-brand-gold">{tour.category}</span>
          </nav>
          <h1 className="display-lg font-bold playfair text-white mb-6 max-w-5xl">
            {tour.title}
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-4 text-white/90 font-bold text-[10px] md:text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 md:px-5 py-2 md:py-3 rounded-xl border border-white/20">
              <Clock size={14} className="text-brand-gold" aria-hidden="true" /> {tour.duration}
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 md:px-5 py-2 md:py-3 rounded-xl border border-white/20">
              <Star size={14} className="text-brand-gold" fill="currentColor" aria-hidden="true" /> {tour.rating} ({tour.reviewsCount.toLocaleString()} reviews)
            </div>
            {tour.pickup !== 'N/A' && (
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 md:px-5 py-2 md:py-3 rounded-xl border border-white/20">
                <MapPin size={14} className="text-brand-gold" aria-hidden="true" /> Hotel Pickup Included
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="page-container mt-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            <section className="bg-white rounded-[2rem] p-8 md:p-14 shadow-soft border border-brand-dark/5" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-3xl font-bold playfair mb-6">Experience Overview</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{tour.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-brand-bg rounded-xl border border-brand-primary/10">
                    <CheckCircle2 className="text-brand-primary shrink-0" size={20} aria-hidden="true" />
                    <span className="font-bold text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {tour.itinerary && tour.itinerary.length > 0 && (
              <section className="bg-white rounded-[2rem] p-8 md:p-14 shadow-soft border border-brand-dark/5" aria-labelledby="itinerary-heading">
                <h2 id="itinerary-heading" className="text-3xl font-bold playfair mb-10">Hour-by-Hour Itinerary</h2>
                <ol className="relative border-l-2 border-brand-primary/15 ml-3 space-y-8">
                  {tour.itinerary.map((step, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="pl-8 relative"
                    >
                      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-primary border-4 border-white shadow" aria-hidden="true" />
                      <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-1">{step.time}</p>
                      <p className="text-gray-700 font-medium">{step.activity}</p>
                    </motion.li>
                  ))}
                </ol>
              </section>
            )}

            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="Booking assurances">
              {[
                { icon: Shield, title: 'Free Cancellation', desc: 'Up to 24 hours before tour start' },
                { icon: Award, title: 'Licensed Guides', desc: 'Government-approved heritage experts' },
                { icon: CalendarCheck, title: 'Reserve Now, Pay Later', desc: 'Flexible booking on most day tours' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-brand-dark/5 shadow-soft text-center">
                  <item.icon size={24} className="text-brand-primary mx-auto mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-sm text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-8 bg-white p-8 md:p-10 rounded-[2rem] shadow-lift border border-brand-dark/5 text-center">
              {tour.discount && (
                <span className="inline-block bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full mb-4">
                  {tour.discount} — Limited Time
                </span>
              )}
              <span className="text-xs uppercase font-bold text-gray-400 tracking-widest mb-2 block">Starting From</span>
              <p className="mb-2">
                {tour.originalPrice && (
                  <span className="text-gray-400 text-xl line-through mr-3 align-middle">${tour.originalPrice}</span>
                )}
                <span className="text-5xl font-bold playfair text-brand-dark align-middle">
                  {typeof tour.price === 'number' ? `$${tour.price}` : tour.price}
                </span>
              </p>
              <p className="text-xs text-gray-400 mb-5">per person · private tour</p>
              <p className="text-[11px] text-gray-500 leading-relaxed bg-brand-bg rounded-xl p-3 mb-6 text-left">
                {PRICE_DISCLAIMER}
              </p>
              <Link to="/booking" className="block w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-dark transition-all mb-3">
                Book This Experience
              </Link>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(`I'd like to book: ${tour.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-success/10 text-brand-success py-4 rounded-2xl font-bold hover:bg-brand-success hover:text-white transition-all"
              >
                Ask on WhatsApp
              </a>
              <p className="text-[11px] text-gray-400 mt-6 flex items-center justify-center gap-1.5">
                <Shield size={12} aria-hidden="true" /> Free cancellation · No prepayment on day tours
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky mobile booking bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden bg-white/95 backdrop-blur-md border-t border-brand-dark/10 px-4 py-3 flex items-center justify-between gap-4 shadow-[0_-8px_30px_rgb(28_25_23_/_0.12)]"
            style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">From</p>
              <p className="text-2xl font-bold playfair text-brand-dark leading-none">
                {typeof tour.price === 'number' ? `$${tour.price}` : tour.price}
              </p>
            </div>
            <Link to="/booking" className="flex-1 max-w-xs bg-brand-primary text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest text-center shadow-lg">
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanDetail;
