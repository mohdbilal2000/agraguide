import React from 'react';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

type LegalProps = {
  title: string;
  /** '/privacy' or '/terms' — needed so each page self-canonicalises. */
  canonical?: string;
  variant?: 'privacy' | 'terms';
};

const PRIVACY_SECTIONS = [
  {
    h: '1. What We Collect',
    p: 'We collect your name, email address, phone number and travel dates solely to arrange and confirm your tour. We do not sell your information, and we do not share it with third-party marketing firms.',
  },
  {
    h: '2. How We Use It',
    p: 'Your details are used to confirm availability with guides and drivers, send booking confirmations, and contact you about your trip. Enquiries sent through this website reach us on WhatsApp and email.',
  },
  {
    h: '3. Payment Information',
    p: 'No payment is taken on this website. Payments are arranged directly after confirmation, and we do not store card details on our servers.',
  },
  {
    h: '4. Your Rights',
    p: 'You can ask us to show, correct or delete the personal information we hold about you at any time. Write to indiventuretravellers@gmail.com and we will action the request.',
  },
];

const TERMS_SECTIONS = [
  {
    h: '1. Bookings & Confirmation',
    p: 'A booking request through this website is an enquiry, not a confirmed reservation. Your tour is confirmed only once we have replied confirming guide and vehicle availability for your dates.',
  },
  {
    h: '2. Cancellations & Changes',
    p: 'You may cancel or modify a confirmed booking up to 24 hours before the tour start time at no charge, subject to availability. Changes made inside 24 hours may incur costs already committed to drivers or monuments.',
  },
  {
    h: '3. Prices & Inclusions',
    p: 'Prices shown are per person and indicative, and vary with group size, season and vehicle type. Monument entry tickets are excluded unless the tour page states otherwise. Your final quote is confirmed in writing before the tour.',
  },
  {
    h: '4. Liability',
    p: 'We hold our guides and vehicle partners to licensed, verified standards. We are not liable for personal injury, illness or loss of property during a tour, and we strongly recommend comprehensive travel insurance for every traveller.',
  },
  {
    h: '5. Monument Access',
    p: 'Monument opening hours, closures and ticket prices are set by the authorities, not by us. The Taj Mahal is closed every Friday. Where a closure affects your itinerary we will propose an alternative.',
  },
];

const Legal: React.FC<LegalProps> = ({ title, canonical, variant }) => {
  const kind: 'privacy' | 'terms' =
    variant ?? (/(privacy)/i.test(title) ? 'privacy' : 'terms');
  const sections = kind === 'privacy' ? PRIVACY_SECTIONS : TERMS_SECTIONS;
  const path = canonical ?? (kind === 'privacy' ? '/privacy' : '/terms');

  const description =
    kind === 'privacy'
      ? 'How Indiventure Travellers collects, uses and protects your personal information.'
      : 'Booking, cancellation, pricing and liability terms for Indiventure Travellers tours.';

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <SEO
        title={title}
        description={description}
        canonical={path}
        breadcrumbs={[{ name: title }]}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-brand-dark/5">
          <div className="flex items-center gap-4 mb-10 text-brand-primary">
            <Shield size={40} aria-hidden="true" />
            <h1 className="text-4xl font-bold playfair text-brand-dark">{title}</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8 inter">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-2xl font-bold playfair text-brand-dark mb-4">{s.h}</h2>
                <p>{s.p}</p>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-brand-dark/5 text-sm text-gray-400">
            Questions about this page? Write to{' '}
            <a href="mailto:indiventuretravellers@gmail.com" className="underline hover:text-brand-primary">
              indiventuretravellers@gmail.com
            </a>{' '}
            or message us on WhatsApp at +91 92175 19989.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
