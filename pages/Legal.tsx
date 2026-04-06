
import React from 'react';
import { Shield, FileText, Lock } from 'lucide-react';

const Legal: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-brand-dark/5">
          <div className="flex items-center gap-4 mb-10 text-brand-primary">
            <Shield size={40} />
            <h1 className="text-4xl font-bold playfair text-brand-dark">{title}</h1>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8 inter">
            <section>
              <h2 className="text-2xl font-bold playfair text-brand-dark mb-4">1. Data Collection</h2>
              <p>We collect personal information such as name, email, and travel dates solely for the purpose of booking and facilitating our tour services. We do not sell or share your information with third-party marketing firms.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold playfair text-brand-dark mb-4">2. Payment Security</h2>
              <p>All financial transactions are processed through secure, encrypted gateways. Indiventure Travellers does not store full credit card details on its servers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold playfair text-brand-dark mb-4">3. Booking Modifications</h2>
              <p>Clients are entitled to modify their bookings up to 48 hours prior to service commencement without penalty, subject to availability. Changes made within 48 hours may incur service fees.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold playfair text-brand-dark mb-4">4. Liability Statement</h2>
              <p>While we ensure the highest standards of safety and vetting for all our partners, Indiventure Travellers is not liable for personal injury or property loss during tours. We strongly recommend all guests possess comprehensive travel insurance.</p>
            </section>
          </div>
          
          <div className="mt-16 pt-10 border-t border-brand-dark/5 text-sm text-gray-400">
            Last updated: October 2024. For further inquiries, contact legal@indiventuretravellers.com.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
