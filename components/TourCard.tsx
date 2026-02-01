
import React from 'react';
/* Fix: Import Link from react-router-dom */
import { Link } from 'react-router-dom';
import { Star, Clock, Check, ArrowRight, Tag } from 'lucide-react';
import { Tour } from '../types';
import OptimizedImage from './OptimizedImage';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-dark/5 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        {tour.isMostBooked && (
          <div className="absolute top-4 left-4 z-10 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full flex items-center gap-1 shadow-lg">
            <Star size={10} fill="currentColor" /> Most Booked
          </div>
        )}
        <div className="absolute top-4 right-4 z-10 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
          {tour.category}
        </div>
        <OptimizedImage 
          src={tour.image} 
          alt={tour.title}
          className="group-hover:scale-110 transition-transform duration-700 h-full w-full" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(tour.rating) ? "currentColor" : "none"} />
            ))}
            <span className="text-[10px] text-gray-400 font-bold ml-2">({tour.reviewsCount})</span>
          </div>
          <div className="text-brand-primary font-bold playfair text-xl">
            ${tour.price}
          </div>
        </div>

        <h3 className="text-2xl font-bold playfair mb-3 text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">
          <Link to={`/plans/${tour.id}`}>{tour.title}</Link>
        </h3>

        <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6 pb-6 border-b border-brand-dark/5">
          <span className="flex items-center gap-1.5"><Clock size={12} className="text-brand-primary" /> {tour.duration}</span>
          <span className="flex items-center gap-1.5"><Tag size={12} className="text-brand-primary" /> Private Tour</span>
        </div>

        <div className="flex gap-3 mt-auto">
          <Link 
            to={`/plans/${tour.id}`}
            className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-all hover:bg-brand-dark shadow-lg shadow-brand-primary/10"
          >
            Details
          </Link>
          <a 
            href={`https://wa.me/919876543210?text=I'm interested in: ${tour.title}`}
            className="p-4 bg-brand-success/10 text-brand-success rounded-xl hover:bg-brand-success hover:text-white transition-all"
          >
            <Check size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
