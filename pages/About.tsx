
import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import { Award, ShieldCheck, Heart, History, Users, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-brand-primary font-bold tracking-widest text-xs uppercase block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-bold playfair text-brand-dark leading-tight">Authentic Heritage Since 1998</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light italic">"We don't just show you the Taj Mahal; we reveal the stories etched in its marble."</p>
            <p className="text-lg text-gray-500 leading-relaxed inter">Guide India Tours began as a small collective of history enthusiasts in Agra. Today, we have grown into a premier network of government-licensed guides covering the entire Golden Triangle.</p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-4xl font-bold playfair text-brand-primary">25+</h4>
                <p className="text-sm font-bold text-brand-dark uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold playfair text-brand-primary">150k+</h4>
                <p className="text-sm font-bold text-brand-dark uppercase tracking-widest">Happy Guests</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[600px] relative">
              <OptimizedImage src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1000&q=80" alt="Guide Team in front of Taj Mahal" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl max-w-xs border border-brand-dark/5 z-10">
              <Award className="text-brand-gold mb-4" size={32} />
              <h4 className="font-bold text-brand-dark mb-2">UNESCO Specialists</h4>
              <p className="text-sm text-gray-500">Our guides undergo rigorous training in Indian architecture and heritage history.</p>
            </div>
            <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-brand-dark/5 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary/20">
                  <OptimizedImage 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Expert Guide"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm">Expert Guides</p>
                  <p className="text-xs text-gray-500">Licensed Professionals</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Heritage Gallery Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold playfair text-brand-dark mb-6">Our Perspective</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Capturing the soul of India through our expert lens and deep local knowledge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-80 rounded-[2rem] overflow-hidden shadow-lg">
              <OptimizedImage src="https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=600&q=80" alt="Amber Fort Jaipur" />
            </div>
            <div className="h-80 rounded-[2rem] overflow-hidden shadow-lg md:translate-y-8">
              <OptimizedImage src="https://images.unsplash.com/photo-1587474260584-1f35a4088f1c?auto=format&fit=crop&w=600&q=80" alt="Humayun Tomb Delhi" />
            </div>
            <div className="h-80 rounded-[2rem] overflow-hidden shadow-lg">
              <OptimizedImage src="https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=600&q=80" alt="Taj Mahal Detail" />
            </div>
          </div>
        </section>

        <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-xl mb-32 border border-brand-dark/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold playfair text-brand-dark mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: 'Absolute Integrity', desc: 'No hidden shopping stops, no commissions, just pure historical discovery and transparency.' },
              { icon: Heart, title: 'Local Impact', desc: 'We support local artisan communities and traditional craftsmen directly through our cultural initiatives.' },
              { icon: History, title: 'Historical Accuracy', desc: 'Every date, name, and story shared is cross-verified with official archaeological records.' }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto">
                  <value.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold playfair text-brand-dark">{value.title}</h4>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
