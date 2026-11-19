import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import logo from '../assets/logo/hadge-logo.jpg';
import siteConfig, { fullAddress, mapDirectionsUrl, whatsappLink } from '../data/siteConfig.js';

const quick = [
  ['Home', '/'], ['About Us', '/about'], ['Gold Jewellery', '/collections?c=gold'], ['Silver Jewellery', '/collections?c=silver'],
  ['Bridal Collection', '/collections?c=bridal'], ['Gallery', '/gallery'], ['Contact Us', '/contact'],
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold-500 bg-maroon-950 text-ivory/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="" className="h-20 w-20 rounded-full object-cover" />
            <span className="flex flex-col leading-none"><span className="brand-name text-2xl text-gold-300">{siteConfig.brandName}</span><span className="mt-2 text-[11px] uppercase tracking-[0.5em] text-gold-400">{siteConfig.brandSubtitle}</span></span>
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed">{siteConfig.tagline}. Visit our showroom in {siteConfig.address.locality}, {siteConfig.address.region}.</p>
        </div>
        <div>
          <h3 className="mb-5 text-2xl text-gold-300">Explore</h3>
          <ul className="space-y-2.5">
            {quick.map(([label, to]) => (
              <li key={label}><Link to={to} className="transition-colors hover:text-gold-300">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-2xl text-gold-300">Visit and contact</h3>
          <ul className="space-y-4">
            <li className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-gold-400" /><a href={mapDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">{fullAddress()}</a></li>
            <li className="flex gap-3"><Phone size={18} className="mt-1 shrink-0 text-gold-400" /><a href={siteConfig.phoneHref} className="hover:text-gold-300">{siteConfig.phone}</a></li>
            <li className="flex gap-3"><MessageCircle size={18} className="mt-1 shrink-0 text-gold-400" /><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">WhatsApp us</a></li>
            <li className="flex gap-3"><Instagram size={18} className="mt-1 shrink-0 text-gold-400" /><a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">{siteConfig.instagramHandle}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold-500/20 py-5 text-center text-sm text-ivory/55">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
