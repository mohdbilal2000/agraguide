
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Clock, Users, MapPin, 
  Star, Calendar, MessageCircle, Info, ArrowLeft,
  X, Check, Sparkles, Shield, Award
} from 'lucide-react';
import { TOURS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const PlanDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const tour = TOURS.find(t => t.id === id);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!tour) return <div className="pt-32 text-center h-screen">Tour plan not found.</div>;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": tour.title,
    "image": tour.image,
    "description": tour.description,
    "brand": {
      "@type": "Brand",
      "name": "Guide India Tours"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "USD",
      "price": tour.price,
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tour.rating,
      "reviewCount": tour.reviewsCount
    }
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      <SEO 
        title={tour.title}
        description={tour.description.substring(0, 160)}
        image={tour.image}
        type="product"
        schema={productSchema}
      />
      
      <div className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">
        <OptimizedImage src={tour.image} alt={tour.title} priority className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90" />
        
        <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-50">
          <Link to="/plans" className="p-2 md:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
            <ArrowLeft size={20} className="md:w-6 md:h-6" />
          </Link>
          <span className="playfair text-sm md:text-xl font-bold text-white tracking-widest uppercase">Guide India Tours</span>
          <Link to="/contact" className="p-2 md:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
            <MessageCircle size={20} className="md:w-6 md:h-6" />
          </Link>
        </div>

        <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold playfair text-white mb-6 md:mb-8 max-w-5xl leading-tight">
            {tour.title}
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-4 text-white/90 font-bold text-[10px] md:text-base">
            <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-white/20">
              <Clock size={14} className="text-brand-gold md:w-[18px]" /> {tour.duration}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-2xl">
              <h2 className="text-3xl font-bold playfair mb-6">Experience Overview</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">{tour.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-brand-bg rounded-xl border border-brand-primary/10">
                    <CheckCircle2 className="text-brand-primary" size={20} />
                    <span className="font-bold text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
             <div className="sticky top-28 bg-white p-10 rounded-[2rem] shadow-2xl border border-brand-dark/5 text-center">
                <span className="text-xs uppercase font-bold text-gray-400 tracking-widest mb-2 block">Starting From</span>
                <p className="text-5xl font-bold playfair text-brand-dark mb-8">${tour.price}</p>
                <Link to="/booking" className="block w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-xl shadow-xl">Book This Experience</Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
