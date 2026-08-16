import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Instagram, Send, Loader2, Check } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';

const WHATSAPP_NUMBER = '919217519989';
const EMAIL = 'indiventuretravellers@gmail.com';

/**
 * Optional: paste a Web3Forms access key (free, no backend — web3forms.com)
 * to also receive every enquiry by email. Leave empty to use WhatsApp only.
 */
const WEB3FORMS_KEY = '';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const SUBJECTS = [
  'Custom Tour Inquiry',
  'Booking Modification',
  'Corporate Events',
  'Other',
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: SUBJECTS[0],
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const whatsappText = () =>
    encodeURIComponent(
      `Hello Indiventure Travellers,\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Subject: ${form.subject}\n\n` +
        `${form.message}`
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.message.trim()) {
      setError('Please add your name and a short message.');
      return;
    }

    setStatus('sending');

    // Send a copy by email when a Web3Forms key is configured.
    if (WEB3FORMS_KEY) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            from_name: form.name,
            email: form.email,
            subject: `[Website enquiry] ${form.subject}`,
            message: form.message,
          }),
        });
      } catch {
        // Email is the backup channel — never block the WhatsApp handoff on it.
      }
    }

    // Open WhatsApp with the enquiry pre-filled. This is the channel the team
    // actually answers on, so it converts far better than a silent form post.
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText()}`, '_blank', 'noopener');
    setStatus('sent');
  };

  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <SEO
        title="Contact Indiventure Travellers — WhatsApp, Phone & Email"
        description="Reach our Delhi-based team on WhatsApp at +91 92175 19989 or by email. We usually respond within 2 hours, seven days a week."
        canonical="/contact"
        pageType="ContactPage"
        breadcrumbs={[{ name: 'Contact' }]}
      />
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
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Direct Call</h4>
                    <p className="text-gray-500 font-medium">+91 92175 19989</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success shrink-0 group-hover:bg-brand-success group-hover:text-white transition-all">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">WhatsApp Chat</h4>
                    <p className="text-gray-500 font-medium">Available 24/7 for urgent queries</p>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-brand-info/10 flex items-center justify-center text-brand-info shrink-0 group-hover:bg-brand-info group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Email Support</h4>
                    <p className="text-gray-500 font-medium">{EMAIL}</p>
                  </div>
                </a>
              </div>
              {/* Social Links — only real, live profiles */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/indiventuretravellers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Indiventure Travellers on Instagram"
                  className="w-10 h-10 rounded-full bg-white border border-brand-dark/5 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-brand-dark/5 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold playfair mb-2">Send an Inquiry</h2>
                <p className="text-sm text-gray-500 mb-8">
                  Fill this in and we'll continue on WhatsApp — that's where we reply fastest.
                </p>

                {status === 'sent' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center mx-auto mb-6">
                      <Check size={32} />
                    </div>
                    <h3 className="text-xl font-bold playfair text-brand-dark mb-2">WhatsApp is opening…</h3>
                    <p className="text-gray-500 text-sm mb-6">
                      If it didn't open, tap the button below or message us at +91 92175 19989.
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all"
                    >
                      Open WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="block mx-auto mt-6 text-sm text-gray-400 underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="name" className="text-xs font-bold mb-2 block uppercase tracking-widest text-gray-400">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={form.name}
                          onChange={update('name')}
                          className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:bg-white focus:border-brand-primary transition-all font-medium"
                          placeholder="Your Full Name"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="email" className="text-xs font-bold mb-2 block uppercase tracking-widest text-gray-400">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={update('email')}
                          className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:bg-white focus:border-brand-primary transition-all font-medium"
                          placeholder="email@address.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="text-xs font-bold mb-2 block uppercase tracking-widest text-gray-400">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={update('subject')}
                        className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 font-medium outline-none focus:bg-white focus:border-brand-primary transition-all"
                      >
                        {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="text-xs font-bold mb-2 block uppercase tracking-widest text-gray-400">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={update('message')}
                        className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:bg-white focus:border-brand-primary transition-all font-medium"
                        placeholder="Tell us about your travel dates and group size..."
                      />
                    </div>

                    {error && (
                      <p role="alert" className="text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 text-lg flex items-center justify-center gap-3 disabled:opacity-60"
                    >
                      {status === 'sending'
                        ? <><Loader2 size={20} className="animate-spin" /> Sending…</>
                        : <><Send size={20} /> Send Message</>}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      Prefer email? Write to{' '}
                      <a href={`mailto:${EMAIL}`} className="underline hover:text-brand-primary">{EMAIL}</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Where we operate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="rounded-[3rem] overflow-hidden h-96 relative shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Delhi city view"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold playfair text-white mb-2">Delhi Base</h3>
                <p className="text-white/90 text-sm">Mourya House, 299/A, DDA Flats, Munirka, New Delhi</p>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden h-96 relative shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1599661046289-e3189785002a?auto=format&fit=crop&w=800&q=80"
                alt="Jaipur heritage architecture"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold playfair text-white mb-2">Heritage Network</h3>
                <p className="text-white/90 text-sm">Covering the entire Golden Triangle region</p>
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden h-96 relative shadow-2xl">
            <OptimizedImage src="https://images.unsplash.com/photo-1564507592333-c60657451dc6?auto=format&fit=crop&w=1200&q=80" alt="The Taj Mahal at dawn" className="h-full w-full" />
            <div className="absolute inset-0 bg-brand-dark/50 flex items-center justify-center text-center p-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold playfair text-white mb-4">We Meet You Where You Are</h3>
                <p className="text-white/90 text-lg mb-4">
                  Hotel pickups across Delhi, Agra and Jaipur — your guide meets you at your door, not at an office.
                </p>
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
