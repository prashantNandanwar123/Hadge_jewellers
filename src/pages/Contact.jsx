import { useState } from 'react';
import { Instagram, MapPin, MessageCircle, Phone, Navigation, Store } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import siteConfig, { fullAddress, mapDirectionsUrl, mapEmbedUrl, whatsappLink } from '../data/siteConfig.js';

const interests = ['Gold jewellery', 'Silver jewellery', 'Bridal jewellery', 'Mangalsutra', 'Something else'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: interests[0], message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Enter your name.';
    if (!/^[+\d][\d\s-]{8,14}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number.';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // No backend: the enquiry opens in WhatsApp, addressed to the showroom.
    const msg = `Hello Hadge Jewellers, my name is ${form.name.trim()}. I am interested in: ${form.interest}.${form.message.trim() ? `\n${form.message.trim()}` : ''}\nMy phone number: ${form.phone.trim()}`;
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const details = [
    { icon: Store, label: 'Business', value: siteConfig.name },
    { icon: MapPin, label: 'Address', value: fullAddress(), href: mapDirectionsUrl() },
    { icon: Phone, label: 'Phone', value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: Instagram, label: 'Instagram', value: siteConfig.instagramHandle, href: siteConfig.instagram },
  ];

  return (
    <>
      <Seo title="Contact Us" path="/contact" description="Contact Hadge Jewellers at Chatrapati Shivaji Maharaj Chowk, Lakhandur, Maharashtra 441803. Call +91 87676 71367 or enquire on WhatsApp." />
      <section className="bg-maroon-900 py-16 text-center text-ivory md:py-20">
        <div className="container-x">
          <h1 className="text-5xl md:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ivory/75">Visit the showroom, call us or message us on WhatsApp.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-4xl text-maroon-800">Showroom details</h2>
            <ul className="mt-8 divide-y divide-gold-500/30 border-y border-gold-500/30">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 py-5">
                  <Icon className="mt-1 shrink-0 text-gold-600" size={22} strokeWidth={1.4} />
                  <div>
                    <p className="text-sm text-ink/55">{label}</p>
                    {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-lg hover:text-maroon-700">{value}</a> : <p className="text-lg">{value}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton variant="solid" label="WhatsApp enquiry" />
              <a href={mapDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline"><Navigation size={17} strokeWidth={1.6} />Get Directions</a>
            </div>
          </div>

          <div>
            <h2 className="text-4xl text-maroon-800">Send an enquiry</h2>
            <form onSubmit={submit} noValidate className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-ink/70">Your name</label>
                <input id="name" className="field" value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} />
                {errors.name && <p className="mt-1 text-sm text-maroon-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm text-ink/70">Phone number</label>
                <input id="phone" type="tel" className="field" value={form.phone} onChange={set('phone')} autoComplete="tel" aria-invalid={!!errors.phone} />
                {errors.phone && <p className="mt-1 text-sm text-maroon-600">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="interest" className="mb-1.5 block text-sm text-ink/70">I am interested in</label>
                <select id="interest" className="field" value={form.interest} onChange={set('interest')}>
                  {interests.map((i) => <option key={i}>{i}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-ink/70">Message (optional)</label>
                <textarea id="message" rows={4} className="field" value={form.message} onChange={set('message')} />
              </div>
              <button type="submit" className="btn-maroon w-full sm:w-auto"><MessageCircle size={17} strokeWidth={1.6} />Send on WhatsApp</button>
              {sent && <p className="text-maroon-700" role="status">WhatsApp has opened with your enquiry. Press send there to reach us.</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="relative h-[420px] border border-gold-500 p-1.5">
            {!mapLoaded && <div className="skeleton absolute inset-1.5" aria-hidden="true" />}
            <iframe title="Hadge Jewellers location on Google Maps" src={mapEmbedUrl()} loading="lazy" referrerPolicy="no-referrer-when-downgrade" onLoad={() => setMapLoaded(true)} className="relative h-full w-full border-0" />
          </div>
        </div>
      </section>
    </>
  );
}
