
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TourCard from '../components/TourCard';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';
import { TOURS, REVIEWS, GUIDE_PACKAGES } from '../constants';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Car, Utensils, Crown,
  Navigation, Compass, Flame, TrendingUp, ChevronLeft, ChevronRight, Star, Users
} from 'lucide-react';

const iconMap: any = { Users, Car, Utensils, Crown };

const Home: React.FC = () => {
  const heritageScrollRef = useRef<HTMLDivElement>(null);

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Guide India Tours",
    "description": "Premium heritage tour agency specializing in the Golden Triangle and Agra regions.",
    "url": "https://agratourguides.com",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fatehabad Road",
      "addressLocality": "Agra",
      "addressRegion": "UP",
      "postalCode": "282001",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1560"
    }
  };

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <SEO 
        title="Heritage & Luxury Golden Triangle Tours"
        description="Explore India with expert local guides. Since 1998, offering the most authentic tours of the Taj Mahal, Delhi, and Jaipur."
        schema={businessSchema}
      />
      <Hero />

      {/* Booking Statistics */}
      <section className="bg-brand-dark py-12 md:py-16">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
            <div className="flex items-center gap-4 md:gap-6 shrink-0 w-full lg:w-auto justify-center lg:justify-start">
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-brand-gold/20 flex flex-col items-center justify-center text-brand-gold border border-brand-gold/30 shadow-2xl">
                  <TrendingUp size={20} className="md:mb-1" />
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Growth</span>
               </div>
               <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white playfair">1,786</h3>
                  <p className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.2em] mt-1">Booked Last Month</p>
               </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6 md:gap-10 lg:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 flex-grow">
               {['Viator', 'Tripadvisor', 'Klook', 'GetYourGuide', 'Expedia'].map(brand => (
                 <span key={brand} className="text-white text-base md:text-xl font-bold inter tracking-tighter">{brand}</span>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections... (rest of your Home.tsx component remains similar) */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="page-container">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-brand-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 block">Special Selection</span>
                <h2 className="text-3xl md:text-5xl font-bold playfair text-brand-dark mb-4 leading-tight">Heritage Highlights</h2>
                <p className="text-gray-500 inter text-sm md:text-lg">One-Day Tours of Iconic Monuments. Perfect for travelers looking to explore cultural gems in a short time.</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {TOURS.filter(t => t.category === 'Heritage Highlights').map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
