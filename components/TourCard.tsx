import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ArrowRight, Tag, MessageCircle } from 'lucide-react';
import { Tour } from '../types';
import OptimizedImage from './OptimizedImage';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <article className="group bg-white rounded-[2rem] overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500 border border-brand-dark/5 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {tour.discount && (
            <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
              {tour.discount}
            </span>
          )}
          {tour.isMostBooked && (
            <span className="bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full flex items-center gap-1 shadow-lg">
              <Star size={10} fill="currentColor" aria-hidden="true" /> Most Booked
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 z-10 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
          {tour.category}
        </div>
        <OptimizedImage
          src={tour.image}
          alt={`${tour.title} — ${tour.category}`}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="group-hover:scale-105 transition-transform duration-700 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-7 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-brand-gold" aria-label={`Rated ${tour.rating} out of 5 from ${tour.reviewsCount} reviews`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} aria-hidden="true" fill={i < Math.floor(typeof tour.rating === 'number' ? tour.rating : 0) ? "currentColor" : "none"} />
            ))}
            {/* <span className="text-[10px] text-gray-400 font-bold ml-2">({tour.reviewsCount.toLocaleString()})</span> */}
          </div>
          <div className="text-right">
            {typeof tour.price === 'number' && (
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest block leading-none mb-0.5">From</span>
            )}
            {tour.originalPrice && (
              <span className="text-gray-400 text-xs line-through block">${tour.originalPrice}</span>
            )}
            <span className="text-brand-primary font-bold playfair text-xl">
              {typeof tour.price === 'number' ? `$${tour.price}` : tour.price}
              {typeof tour.price === 'number' && <span className="text-[10px] text-gray-400 font-sans font-medium uppercase tracking-wide"> /person*</span>}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold playfair mb-3 text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">
          <Link to={`/plans/${tour.id}`} className="focus-visible:outline-none">{tour.title}</Link>
        </h3>

        <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">
          <span className="flex items-center gap-1.5"><Clock size={12} className="text-brand-primary" aria-hidden="true" /> {tour.duration}</span>
          <span className="flex items-center gap-1.5"><Tag size={12} className="text-brand-primary" aria-hidden="true" /> Private Tour</span>
        </div>
        <p className="text-[10px] text-gray-400 leading-snug mb-5 pb-5 border-b border-brand-dark/5">
          {typeof tour.price === 'number'
            ? '*Entry fees & optional add-ons extra. Final quote shared before payment.'
            : 'Tailored itinerary — we’ll share a full quote before payment.'}
        </p>

        <div className="flex gap-3 mt-auto">
          <Link
            to={`/plans/${tour.id}`}
            className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-all hover:bg-brand-dark shadow-lg shadow-brand-primary/10 flex items-center justify-center gap-2"
          >
            View Details <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <a
            href={`https://wa.me/919217519989?text=${encodeURIComponent(`I'm interested in: ${tour.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about ${tour.title} on WhatsApp`}
            className="p-4 bg-brand-success/10 text-brand-success rounded-xl hover:bg-brand-success hover:text-white transition-all"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
