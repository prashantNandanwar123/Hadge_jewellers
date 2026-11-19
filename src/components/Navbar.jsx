import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, Menu, MessageCircle, X } from 'lucide-react';
import logo from '../assets/logo/hadge-logo.jpg';
import siteConfig, { whatsappLink } from '../data/siteConfig.js';
import WhatsAppButton from './WhatsAppButton.jsx';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Gold Jewellery', to: '/collections?c=gold' },
  { label: 'Silver Jewellery', to: '/collections?c=silver' },
  { label: 'Bridal Collection', to: '/collections?c=bridal' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
];

function AnnouncementBar() {
  const [i, setI] = useState(0);
  const items = siteConfig.announcements;
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <div className="bg-maroon-900 py-2 text-center text-[13px] uppercase tracking-[0.2em] text-gold-300">
      <AnimatePresence mode="wait">
        <motion.p key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35 }}>
          {items[i]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, search } = useLocation();

  useEffect(() => setOpen(false), [pathname, search]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  // Query-string links need a manual active check
  const isActive = (to) => {
    const [path, qs] = to.split('?');
    if (qs) return pathname === path && search.includes(qs);
    return to === '/' ? pathname === '/' : pathname.startsWith(to);
  };

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-40 border-b border-gold-500/30 bg-ivory/95 shadow-[0_1px_0_rgba(201,164,92,0.15)] backdrop-blur">
        <div className="container-x flex h-[4.75rem] items-center justify-between gap-4">
          <Link to="/" aria-label={`${siteConfig.name}, ${siteConfig.brandSubtitle} — home`} className="flex shrink-0 items-center gap-3">
            <img src={logo} alt="" width="56" height="56" className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14" />
            <span className="flex flex-col leading-none">
              <span className="brand-name text-[17px] text-maroon-800 sm:text-[22px]">{siteConfig.brandName}</span>
              <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.5em] text-gold-600">{siteConfig.brandSubtitle}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`relative py-1 text-[14px] tracking-luxe transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 ${
                  isActive(l.to) ? 'text-maroon-800 after:w-full' : 'text-ink/75 after:w-0 hover:text-maroon-800 hover:after:w-full'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Hadge Jewellers on Instagram" className="hidden p-2 text-maroon-800 hover:text-gold-600 sm:block">
              <Instagram size={21} strokeWidth={1.5} />
            </a>
            <WhatsAppButton variant="solid" label="WhatsApp enquiry" className="hidden !px-5 !py-2.5 2xl:inline-flex" />
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp enquiry" className="hidden p-2 text-maroon-800 hover:text-gold-600 xl:block 2xl:hidden"><MessageCircle size={21} strokeWidth={1.5} /></a>
            <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className="p-2 text-maroon-800 xl:hidden">
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-maroon-900 text-ivory"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog" aria-modal="true" aria-label="Menu"
          >
            <div className="flex h-[4.75rem] items-center justify-between border-b border-gold-500/30 px-5">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="" className="h-12 w-12 rounded-full object-cover" />
                <span className="flex flex-col leading-none"><span className="brand-name text-lg text-gold-300">{siteConfig.brandName}</span><span className="mt-1.5 text-[10px] uppercase tracking-[0.5em] text-gold-400">{siteConfig.brandSubtitle}</span></span>
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-gold-300"><X size={28} strokeWidth={1.5} /></button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8 py-6" aria-label="Mobile navigation">
              {links.map((l, i) => (
                <motion.div key={l.label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.05 }}>
                  <Link to={l.to} className={`block border-b border-gold-500/15 py-3 font-display text-3xl ${isActive(l.to) ? 'text-gold-400' : 'text-ivory'}`}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center gap-4 border-t border-gold-500/30 p-6">
              <WhatsAppButton variant="solid" label="WhatsApp enquiry" className="flex-1" />
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-gold-500 p-3.5 text-gold-300">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
