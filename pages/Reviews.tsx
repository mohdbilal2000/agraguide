
import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Star, MessageCircle, Quote } from 'lucide-react';

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
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold group-hover:bg-white group-hover:text-brand-primary transition-all">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark group-hover:text-white transition-colors">{review.author}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase group-hover:text-white/60 transition-colors">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-brand-dark font-bold mb-8">Also seen on</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
             <span className="text-2xl font-bold tracking-tighter inter">TripAdvisor</span>
             <span className="text-2xl font-bold tracking-tighter inter">Google Local</span>
             <span className="text-2xl font-bold tracking-tighter inter">Expedia</span>
             <span className="text-2xl font-bold tracking-tighter inter">Viator</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
