
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TourCard from '../components/TourCard';
import OptimizedImage from '../components/OptimizedImage';
import { TOURS, DESTINATIONS, REVIEWS, GUIDE_PACKAGES } from '../constants';
import { Link } from 'react-router-dom';
import { Shield, MapPin, Users, Award, Star, ArrowRight, Check, Car, Utensils, Crown } from 'lucide-react';

const iconMap: any = { Users, Car, Utensils, Crown };

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      <Hero />

      {/* Trust Badges */}
      <section className="bg-brand-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=2000&q=80"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: 'Government Approved', image: 'https://images.unsplash.com/photo-1587474260584-1f35a4088f1c?auto=format&fit=crop&w=200&q=80' },
              { icon: MapPin, label: 'Verified Experts', image: 'https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=200&q=80' },
              { icon: Award, label: 'Premium Quality', image: 'https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=200&q=80' },
              { icon: Users, label: 'Private Groups', image: 'https://images.unsplash.com/photo-1524492707947-2f85a64b6bb1?auto=format&fit=crop&w=200&q=80' }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-gold/30 group-hover:border-brand-gold transition-all">
                  <OptimizedImage 
                    src={badge.image}
                    alt={badge.label}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <badge.icon className="text-brand-gold" size={32} strokeWidth={1.5} />
                  </div>
                </div>
                <span className="text-white font-medium text-xs tracking-widest uppercase">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=2000&q=80"
            alt="Taj Mahal background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <span className="text-brand-primary font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Welcome to Heritage</span>
              <h2 className="text-4xl md:text-6xl font-bold playfair text-brand-dark mb-8 leading-tight">
                Discover India Through Local Expert Eyes
              </h2>
              <p className="text-xl text-gray-600 inter leading-relaxed mb-12">
                Since 1998, Guide India Tours has been the premier choice for travelers seeking more than just a tour. We offer deep cultural dives, historical revelations, and seamless luxury logistics in Agra, Delhi, and Jaipur.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/plans" className="bg-brand-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all">Explore Plans</Link>
                <Link to="/about" className="bg-white border-2 border-brand-primary/10 text-brand-primary px-10 py-4 rounded-xl font-bold hover:bg-brand-primary/5 transition-all">Our Story</Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <OptimizedImage 
                  src="https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=800&q=80"
                  alt="Amber Fort Jaipur"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-dark/5 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-primary">25+</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark uppercase tracking-widest">Years of Excellence</p>
                    <p className="text-xs text-gray-500">Since 1998</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3 block">Flexible Options</span>
            <h2 className="text-4xl md:text-5xl font-bold playfair text-brand-dark">Our Guide Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUIDE_PACKAGES.map((pkg) => {
              const IconComp = iconMap[pkg.icon] || Users;
              return (
                <motion.div 
                  key={pkg.id}
                  whileHover={{ y: -10 }}
                  className={`relative p-8 rounded-[2.5rem] border-2 transition-all flex flex-col h-full bg-brand-bg ${
                    pkg.id === 'all-inclusive' ? 'border-brand-primary shadow-2xl' : 'border-brand-dark/5 shadow-lg'
                  }`}
                >
                  {pkg.id === 'all-inclusive' && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
                      Most Booked
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    pkg.id === 'all-inclusive' ? 'bg-brand-primary text-white' : 'bg-brand-primary/10 text-brand-primary'
                  }`}>
                    <IconComp size={28} />
                  </div>
                  <h3 className="text-2xl font-bold playfair mb-2 text-brand-dark">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-brand-dark">{pkg.price}</span>
                    <span className="text-gray-400 text-sm ml-1">/ person</span>
                  </div>
                  <ul className="space-y-3 mb-10 flex-grow">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check size={16} className="text-brand-success mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/guide-booking"
                    className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                      pkg.id === 'all-inclusive' 
                      ? 'bg-brand-primary text-white hover:bg-brand-primary/90' 
                      : 'bg-white border border-brand-primary/20 text-brand-primary hover:border-brand-primary'
                    }`}
                  >
                    Select Plan
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tours Grid */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3 block">Bestsellers</span>
              <h2 className="text-4xl md:text-5xl font-bold playfair text-brand-dark">Featured Tour Plans</h2>
            </div>
            <Link to="/plans" className="group flex items-center gap-2 text-brand-primary font-bold border-b-2 border-brand-primary/20 hover:border-brand-primary pb-1 transition-all">
              View All Tours <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURS.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations (City Hubs) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-3 block">Regional Guide</span>
              <h2 className="text-4xl md:text-5xl font-bold playfair text-brand-dark">Explore Heritage Cities</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DESTINATIONS.map((dest) => (
                <Link 
                  key={dest.id}
                  to={`/destinations/${dest.id}`}
                  className="group relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
                >
                  <OptimizedImage 
                    src={dest.image} 
                    alt={dest.name} 
                    className="group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent flex flex-col justify-end p-10" />
                  <div className="absolute bottom-12 left-12 right-12 z-10">
                    <span className="text-brand-gold font-bold text-sm mb-4 block tracking-[0.2em] uppercase">{dest.toursCount} Experiences</span>
                    <h3 className="text-4xl font-bold text-white mb-4 playfair">{dest.name}</h3>
                    <p className="text-white/80 text-sm line-clamp-2 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {dest.description}
                    </p>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col items-center text-center mb-16">
              <div className="flex gap-1 text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold playfair mb-6 tracking-tight">Trusted by 15,000+ Guests</h2>
              <p className="text-white/60 max-w-xl inter text-lg">Read about the memories created by travelers from across the globe who joined our expert heritage guides.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
                   <p className="text-xl italic mb-10 leading-relaxed opacity-90 text-white/90">"{review.text}"</p>
                   <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold playfair text-2xl mb-1">{review.author}</h4>
                        <p className="text-sm text-brand-gold font-bold tracking-widest uppercase">{review.location}</p>
                      </div>
                      <span className="text-xs text-white/40">{review.date}</span>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="mt-16 text-center">
             <Link to="/reviews" className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-white/20 hover:border-brand-gold hover:text-brand-gold pb-1 transition-all">
               Read All Reviews <ArrowRight size={20} />
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
