
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Car, Utensils, Camera, Map, 
  ShieldCheck, Globe, Clock, Coffee, Train 
} from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Services: React.FC = () => {
  const serviceList = [
    {
      icon: Users,
      title: 'Heritage Guiding',
      desc: 'UNESCO-specialized guides who bring the stones of Agra and Jaipur to life with authentic storytelling.',
      color: 'bg-brand-primary/10 text-brand-primary',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Car,
      title: 'Private Transfers',
      desc: 'Fleet of luxury AC sedans and SUVs with professional uniformed chauffeurs for your comfort.',
      color: 'bg-brand-info/10 text-brand-info',
      image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Utensils,
      title: 'Culinary Experiences',
      desc: 'Curated food walks and lunch reservations at the best traditional and luxury 5-star establishments.',
      color: 'bg-brand-gold/10 text-brand-gold',
      image: 'https://images.unsplash.com/photo-1601050638917-3d9197176192?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-6xl font-bold playfair text-brand-dark mb-6">Concierge Services</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Beyond standard tours, we offer a full suite of services to ensure your Indian journey is refined, safe, and unforgettable.
          </p>
        </div>

        {/* Featured Service Row with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-brand-dark/5"
            >
              <div className="h-48 relative">
                <OptimizedImage src={service.image} alt={service.title} className="h-full w-full" />
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors" />
                <div className={`absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center ${service.color} shadow-lg backdrop-blur-md`}>
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold playfair text-brand-dark mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm">{service.desc}</p>
                <div className="flex items-center gap-2 text-brand-primary font-bold text-sm cursor-pointer hover:gap-4 transition-all">
                  Details <Clock size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Camera, title: 'Photo Concierge', desc: 'Expert assistance in finding the best lighting and angles.' },
            { icon: Train, title: 'Rail Assistance', desc: 'Gatimaan Express booking and platform assistance.' },
            { icon: ShieldCheck, title: 'Safety Guarantee', desc: 'Government-approved verified partners only.' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-brand-dark/5 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary shrink-0">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <OptimizedImage src="https://images.unsplash.com/photo-1590050752117-23a97b62b423?auto=format&fit=crop&w=1200&q=80" alt="Background" className="h-full w-full" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold playfair mb-6">Custom Requirements?</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">Whether you are planning a corporate retreat, a destination wedding photography session, or a long-duration academic study tour, our team can provide the logistical backbone you need.</p>
              <button className="bg-brand-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all">Request Custom Quote</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <Coffee className="text-brand-gold mb-3" />
                <h4 className="font-bold mb-1">Corporate</h4>
                <p className="text-xs text-white/40">Meetings & Incentives</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <Map className="text-brand-gold mb-3" />
                <h4 className="font-bold mb-1">Academic</h4>
                <p className="text-xs text-white/40">University Study Tours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
