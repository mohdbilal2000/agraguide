
import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Star, MessageCircle, Quote } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Reviews: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center gap-1 text-brand-gold mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={28} />)}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold playfair text-brand-dark mb-6">Guest Stories</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto inter">Real feedback from travelers who have experienced the soul of India with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl relative border border-brand-dark/5 group hover:bg-brand-primary transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-white/20 transition-colors" size={64} />
              <div className="flex gap-1 text-brand-gold mb-6 group-hover:text-white transition-colors">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-lg text-gray-600 mb-8 italic leading-relaxed group-hover:text-white/90 transition-colors">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary/20 group-hover:border-white transition-all shrink-0">
                  <OptimizedImage 
                    src={`https://i.pravatar.cc/150?img=${review.id}`}
                    alt={review.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark group-hover:text-white transition-colors">{review.author}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase group-hover:text-white/60 transition-colors">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Partners Section */}
        <div className="mt-24">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-brand-dark/5">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold playfair text-brand-dark mb-4">Trusted by Travelers Worldwide</h3>
              <p className="text-gray-500">Also featured on leading travel platforms</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'TripAdvisor', image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=300&q=80' },
                { name: 'Google Local', image: 'https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=300&q=80' },
                { name: 'Expedia', image: 'https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=300&q=80' },
                { name: 'Viator', image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=300&q=80' }
              ].map((partner, i) => (
                <div key={i} className="text-center group">
                  <div className="rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all">
                    <OptimizedImage 
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-32 object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-sm font-bold text-brand-dark uppercase tracking-widest">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
