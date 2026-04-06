
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Check, ArrowRight } from 'lucide-react';
import { Tour } from '../types';
import OptimizedImage from './OptimizedImage';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-dark/5 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {tour.discount && (
            <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
              {tour.discount}
            </span>
          )}
          {tour.isMostBooked && (
            <span className="bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full flex items-center gap-1 shadow-lg">
              <Star size={10} fill="currentColor" /> Most Booked
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md text-right">
          {tour.originalPrice && (
            <span className="text-gray-400 text-xs line-through block">${tour.originalPrice}</span>
          )}
          <span className="text-brand-primary font-bold text-sm">${tour.price}<span className="text-gray-400 text-xs font-normal">/ person</span></span>
        </div>
        <OptimizedImage 
          src={tour.image} 
          alt={tour.title}
          className="group-hover:scale-110 transition-transform duration-700" 
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(tour.rating) ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-xs text-gray-400">({tour.reviewsCount} Reviews)</span>
        </div>

        <h3 className="text-xl font-bold playfair mb-2 text-brand-dark group-hover:text-brand-primary transition-colors">
          {tour.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <Clock size={14} /> {tour.duration}
        </div>

        <ul className="space-y-2 mb-6 flex-grow">
          {tour.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <Check size={14} className="text-brand-success mt-0.5 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <Link 
            to={`/plans/${tour.id}`}
            className="flex-1 bg-white border border-brand-primary/20 hover:border-brand-primary text-brand-primary py-3 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2"
          >
            Details
            <ArrowRight size={14} />
          </Link>
          <a 
            href={`https://wa.me/919876543210?text=Hi, I want to book the ${tour.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white py-3 rounded-xl font-bold text-sm text-center transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
