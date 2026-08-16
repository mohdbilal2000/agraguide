import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Calendar, Users, ArrowRight, ArrowLeft, MessageSquare } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';
import { TOURS } from '../constants';

const WHATSAPP_NUMBER = '919217519989';
const steps = ['Details', 'Dates', 'Review'];

/** Optional: free key from web3forms.com to also receive each request by email. */
const WEB3FORMS_KEY = '';

const priceOf = (id: string) => {
  const t = TOURS.find((x) => x.id === id);
  return typeof t?.price === 'number' ? t.price : null;
};

const Booking: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    tourId: TOURS[0]?.id ?? '',
    name: '',
    email: '',
    date: '',
    guests: 2,
    notes: '',
  });

  const set = (k: keyof typeof form, v: string | number) => {
    setForm((f) => ({ ...f, [k]: v }));
    setError('');
  };

  const selectedTour = TOURS.find((t) => t.id === form.tourId);
  const unitPrice = priceOf(form.tourId);
  const estimate = unitPrice != null ? unitPrice * Math.max(1, Number(form.guests) || 1) : null;

  const today = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }, []);

  const whatsappUrl = () => {
    const lines = [
      'Booking request from your website:',
      '',
      `Tour: ${selectedTour?.title ?? '—'}`,
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : '',
      `Travel date: ${form.date || 'flexible'}`,
      `Guests: ${form.guests}`,
      estimate != null ? `Estimate: $${estimate} (${form.guests} × $${unitPrice})` : '',
      form.notes ? `\nNotes: ${form.notes}` : '',
    ].filter(Boolean);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const validateStep = () => {
    if (step === 0) {
      if (!form.name.trim()) return 'Please enter your name.';
      if (!form.tourId) return 'Please choose a tour.';
    }
    if (step === 1 && !form.date) return 'Please pick a travel date.';
    return '';
  };

  const nextStep = async () => {
    const problem = validateStep();
    if (problem) { setError(problem); return; }

    if (step < steps.length - 1) { setStep(step + 1); return; }

    // Final step — actually deliver the request.
    if (WEB3FORMS_KEY) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `[Booking] ${selectedTour?.title ?? 'Tour'} — ${form.name}`,
            from_name: form.name,
            email: form.email,
            message:
              `Tour: ${selectedTour?.title}\nDate: ${form.date}\nGuests: ${form.guests}\n` +
              `Estimate: ${estimate != null ? `$${estimate}` : 'on request'}\nNotes: ${form.notes}`,
          }),
        });
      } catch {
        // WhatsApp remains the primary channel; never block on the email copy.
      }
    }

    window.open(whatsappUrl(), '_blank', 'noopener');
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="pt-40 pb-20 container mx-auto px-4 text-center">
        <SEO
          title="Booking Request Sent"
          description="Your booking request has been sent to our team on WhatsApp."
          canonical="/booking"
          noindex
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl max-w-xl mx-auto"
        >
          <div className="w-20 h-20 bg-brand-success rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Check size={40} />
          </div>
          <h1 className="text-3xl font-bold playfair text-brand-dark mb-4">Request Sent</h1>
          <p className="text-gray-500 mb-8">
            We've opened WhatsApp with your booking details. Send the message and our team will
            confirm availability, usually within 30 minutes.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-success text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-success/90 transition-all mb-4 w-full"
          >
            <MessageSquare size={20} /> Open WhatsApp again
          </a>
          <Link
            to="/"
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
      <SEO
        title="Book Your Private Tour"
        description="Reserve a private Taj Mahal or Golden Triangle tour. Send your dates and group size — confirmation on WhatsApp, usually within 30 minutes."
        canonical="/booking"
        breadcrumbs={[{ name: 'Booking' }]}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="rounded-2xl overflow-hidden shadow-xl h-48 w-full max-w-md mx-auto">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=80"
                alt="The Taj Mahal at sunrise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold playfair text-brand-dark mb-4">Book Your Heritage Journey</h1>
          <p className="text-gray-500 text-lg">Free cancellation up to 24 hours before departure</p>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    i <= step ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {i + 1}
                </div>
                <span className={`text-sm font-bold hidden sm:block ${i <= step ? 'text-brand-dark' : 'text-gray-400'}`}>{s}</span>
                {i < steps.length - 1 && <div className="w-12 h-px bg-gray-200 hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-8"
            >
              {step === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label htmlFor="tour" className="text-sm font-bold mb-2 block">Select Tour</label>
                    <select
                      id="tour"
                      name="tour"
                      value={form.tourId}
                      onChange={(e) => set('tourId', e.target.value)}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-primary outline-none bg-white"
                    >
                      {TOURS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title}{typeof t.price === 'number' ? ` — from $${t.price}` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className="text-sm font-bold mb-2 block">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-primary outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-bold mb-2 block">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-primary outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="text-sm font-bold mb-2 block">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} aria-hidden="true" />
                      <input
                        id="date"
                        name="date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => set('date', e.target.value)}
                        className="w-full p-4 pl-12 rounded-xl border border-gray-200 focus:border-brand-primary outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="guests" className="text-sm font-bold mb-2 block">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} aria-hidden="true" />
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min={1}
                        max={30}
                        value={form.guests}
                        onChange={(e) => set('guests', Number(e.target.value))}
                        className="w-full p-4 pl-12 rounded-xl border border-gray-200 focus:border-brand-primary outline-none"
                      />
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label htmlFor="notes" className="text-sm font-bold mb-2 block">Anything we should know? <span className="font-normal text-gray-400">(optional)</span></label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={form.notes}
                      onChange={(e) => set('notes', e.target.value)}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-primary outline-none"
                      placeholder="Hotel name, pickup city, dietary needs, mobility requirements…"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="bg-brand-bg p-6 rounded-2xl border border-brand-dark/5 space-y-3">
                    {[
                      ['Tour', selectedTour?.title ?? '—'],
                      ['Name', form.name],
                      ['Travel date', form.date],
                      ['Guests', String(form.guests)],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-brand-dark/5 pb-2 last:border-0">
                        <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{k}</span>
                        <span className="font-bold text-brand-dark text-sm text-right">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-primary/5 p-6 rounded-2xl border border-brand-primary/10">
                    <p className="text-sm text-brand-primary font-bold mb-2">How payment works</p>
                    <p className="text-xs text-brand-primary/70">
                      Nothing is charged now. We confirm guide and vehicle availability first, then send a
                      secure payment link or bank details on WhatsApp.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="font-medium block">Estimated total</span>
                      {estimate != null && (
                        <span className="text-xs text-gray-400">{form.guests} × ${unitPrice} per person</span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-brand-dark">
                      {estimate != null ? `$${estimate}` : 'On request'}
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <p role="alert" className="text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <div className="flex gap-4">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-4 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all flex items-center gap-2"
                  >
                    <ArrowLeft size={18} /> Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20"
                >
                  {step === steps.length - 1
                    ? <><MessageSquare size={20} /> Send Request on WhatsApp</>
                    : <>Next Step <ArrowRight size={20} /></>}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Booking;
