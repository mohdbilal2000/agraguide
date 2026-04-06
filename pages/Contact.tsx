
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h1 className="text-5xl font-bold playfair text-brand-dark mb-6">Let's Design Your Dream Journey</h1>
              <p className="text-lg text-gray-600 mb-12 inter leading-relaxed">
                Have specific requirements or a custom group size? Our travel consultants are ready to assist you. 
                We usually respond within 2 hours.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Direct Call</h4>
                    <p className="text-gray-500 font-medium">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">WhatsApp Chat</h4>
                    <p className="text-gray-500 font-medium">Available 24/7 for urgent queries</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-info/10 flex items-center justify-center text-brand-info shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Email Support</h4>
                    <p className="text-gray-500 font-medium">hello@indiventuretravellers.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-dark/5 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-dark/5 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-dark/5 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-brand-dark/5 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold playfair mb-8">Send an Inquiry</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="text-xs font-bold mb-2 block uppercase tracking-widest text-gray-400">Name</label>
                      <input type="text" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:bg-white focus:border-brand-primary transition-all font-medium" placeholder="Your Full Name" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="text-xs font-bold mb-2 block uppercase tracking-widest text-gray-400">Email</label>
                      <input type="email" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:bg-white focus:border-brand-primary transition-all font-medium" placeholder="email@address.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold mb-2 block uppercase tracking-widest text-gray-400">Subject</label>
                    <select className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 font-medium">
                      <option>Custom Tour Inquiry</option>
                      <option>Booking Modification</option>
                      <option>Corporate Events</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold mb-2 block uppercase tracking-widest text-gray-400">Message</label>
                    <textarea rows={4} className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:bg-white focus:border-brand-primary transition-all font-medium" placeholder="Tell us about your travel dates and group size..."></textarea>
                  </div>
                  <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 text-lg">Send Message</button>
                </form>
              </div>
            </div>
          </div>

          {/* Map and Location Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="rounded-[3rem] overflow-hidden h-96 relative shadow-2xl">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                alt="Agra City View" 
                className="h-full w-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold playfair text-white mb-2">Agra Office</h3>
                <p className="text-white/90 text-sm">Fatehabad Road, Opposite Gateway Hotel</p>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden h-96 relative shadow-2xl">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=800&q=80" 
                alt="Jaipur Heritage" 
                className="h-full w-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold playfair text-white mb-2">Heritage Network</h3>
                <p className="text-white/90 text-sm">Covering the entire Golden Triangle region</p>
              </div>
            </div>
          </div>

          {/* Illustrative Footer Image for Contact */}
          <div className="rounded-[3rem] overflow-hidden h-96 relative shadow-2xl">
            <OptimizedImage src="https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=1200&q=80" alt="Taj Mahal" className="h-full w-full" />
            <div className="absolute inset-0 bg-brand-dark/50 flex items-center justify-center text-center p-8">
               <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold playfair text-white mb-4">Visit Us in Agra</h3>
                  <p className="text-white/90 text-lg mb-4">Located just minutes from the Taj Mahal, we are in the heart of Agra's heritage district.</p>
                  <p className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Agra • Delhi • Jaipur</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
