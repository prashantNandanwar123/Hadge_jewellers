import { MapPin, Phone, Navigation } from 'lucide-react';
import siteConfig, { fullAddress, mapDirectionsUrl } from '../data/siteConfig.js';
import WhatsAppButton from './WhatsAppButton.jsx';
import Reveal from './Reveal.jsx';
import logo from '../assets/logo/hadge-logo.jpg';

export default function ShowroomSection() {
  return (
    <section className="section bg-ivory">
      <div className="container-x">
        <div className="grid items-center gap-10 border border-gold-500/50 bg-cream p-8 md:grid-cols-[1fr_auto] md:gap-16 md:p-14">
          <Reveal>
            <p className="eyebrow">Showroom</p>
            <h2 className="mt-3 text-4xl text-maroon-800 md:text-5xl">Visit Our Showroom in Lakhandur</h2>
            <ul className="mt-8 space-y-5 text-lg">
              <li className="flex gap-4"><MapPin className="mt-1 shrink-0 text-gold-600" size={22} strokeWidth={1.5} /><span>{fullAddress()}</span></li>
              <li className="flex gap-4"><Phone className="mt-1 shrink-0 text-gold-600" size={22} strokeWidth={1.5} /><a href={siteConfig.phoneHref} className="hover:text-maroon-700">{siteConfig.phone}</a></li>
            </ul>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={mapDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="btn-maroon"><Navigation size={17} strokeWidth={1.6} />Get Directions</a>
              <WhatsAppButton variant="outline" label="Message us on WhatsApp" />
            </div>
          </Reveal>
          <div className="mx-auto hidden md:block">
            <div className="arch border border-gold-500 p-2">
              <div className="arch flex h-72 w-56 items-center justify-center bg-ink">
                <img src={logo} alt="" aria-hidden="true" className="h-40 w-40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
