
import React from 'react';
/* Fix: Import useParams and Link from react-router-dom */
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Clock, Users, MapPin, 
  ChevronRight, Star, Calendar, MessageCircle, Info
} from 'lucide-react';
import { TOURS } from '../constants';
import OptimizedImage from '../components/OptimizedImage';

const TourDetail: React.FC = () => {
  const { id } = useParams();
  const tour = TOURS.find(t => t.id === id);

  if (!tour) return <div className="pt-32 text-center">Tour not found.</div>;

  return (
    <div className="pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <OptimizedImage src={tour.image} alt={tour.title} priority className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80" />
        <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-col justify-end pb-12">
          <div className="flex items-center gap-2 text-brand-gold mb-4">
            <Star size={18} fill="currentColor" />
            <span className="font-bold">{tour.rating} Rating • {tour.reviewsCount} Reviews</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold playfair text-white mb-6 max-w-4xl">{tour.title}</h1>
          <div className="flex flex-wrap gap-6 text-white/90 font-medium">
            <div className="flex items-center gap-2"><Clock size={20} className="text-brand-gold" /> {tour.duration}</div>
            <div className="flex items-center gap-2"><Users size={20} className="text-brand-gold" /> Private Group</div>
            <div className="flex items-center gap-2"><MapPin size={20} className="text-brand-gold" /> {tour.category}</div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-brand-dark/5 py-4">
        <div className="container mx-auto px-4 md:px-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-primary">Home</Link>
          <ChevronRight size={14} />
          <Link to="/plans" className="hover:text-brand-primary">Tours</Link>
          <ChevronRight size={14} />
          <span className="text-brand-dark font-medium">{tour.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold playfair text-brand-dark mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{tour.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-brand-dark/5">
                    <CheckCircle2 className="text-brand-success shrink-0" />
                    <span className="text-brand-dark font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-brand-dark/5 shadow-sm">
              <h2 className="text-3xl font-bold playfair text-brand-dark mb-6">What's Included</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  'Professional Heritage Guide',
                  'Pick-up & Drop-off (Hotel/Station)',
                  'Private AC Vehicle',
                  'Toll, Parking & Fuel Charges',
                  'Bottled Mineral Water',
                  'Monument Entry Fees (Optional)',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold playfair text-brand-dark mb-6">Local Expert Tips</h2>
              <div className="bg-brand-info/5 border-l-4 border-brand-info p-6 rounded-r-2xl">
                <div className="flex gap-4">
                  <Info className="text-brand-info shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-info mb-1">Photography Tip</h4>
                    <p className="text-sm text-brand-info/80">For the best Taj Mahal photos, the marble terrace near the main mausoleum offers incredible symmetry during the first 30 minutes of sunrise.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl border border-brand-dark/10 shadow-2xl p-8 overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-2 bg-brand-primary" />
               <div className="mb-6">
                 <span className="text-sm text-gray-500 block">From</span>
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-bold text-brand-dark">${tour.price}</span>
                   <span className="text-gray-500">/ person</span>
                 </div>
               </div>

               <div className="space-y-4 mb-8">
                 <div className="p-4 border border-brand-dark/10 rounded-xl flex items-center gap-3">
                   <Calendar className="text-brand-primary" />
                   <div>
                     <p className="text-xs text-gray-500">Availability</p>
                     <p className="text-sm font-bold">Daily Except Friday</p>
                   </div>
                 </div>
                 <div className="p-4 border border-brand-dark/10 rounded-xl flex items-center gap-3">
                   <MessageCircle className="text-brand-primary" />
                   <div>
                     <p className="text-xs text-gray-500">Live Support</p>
                     <p className="text-sm font-bold">Instant Confirmation</p>
                   </div>
                 </div>
               </div>

               <Link 
                 to="/booking"
                 className="block w-full bg-brand-primary hover:bg-brand-primary/90 text-white text-center py-4 rounded-xl font-bold text-lg mb-4 transition-all shadow-xl shadow-brand-primary/20"
               >
                 Reserve My Spot
               </Link>
               
               <a 
                 href={`https://wa.me/919876543210?text=I'm interested in the ${tour.title}`}
                 className="block w-full border-2 border-brand-success text-brand-success text-center py-4 rounded-xl font-bold transition-all hover:bg-brand-success/5"
               >
                 Inquire via WhatsApp
               </a>

               <p className="text-center text-xs text-gray-400 mt-6">
                 Secure Payments • Best Price Guarantee • No Hidden Fees
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
