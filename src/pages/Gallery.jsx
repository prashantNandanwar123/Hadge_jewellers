import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import SmartImage from '../components/SmartImage.jsx';
import { getImage } from '../utils/images.js';
import { galleryItems, galleryFilters } from '../data/gallery.js';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const items = galleryItems.filter((i) => filter === 'All' || i.tags.includes(filter));

  const step = useCallback((d) => setActive((a) => (a === null ? a : (a + d + items.length) % items.length)), [items.length]);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [active, step]);

  return (
    <>
      <Seo title="Jewellery Gallery" path="/gallery" description="Browse the Hadge Jewellers gallery: gold jewellery, bridal jewellery, traditional designs, earrings, bangles and necklaces from our Lakhandur showroom." />
      <section className="bg-maroon-900 py-16 text-center text-ivory md:py-20">
        <div className="container-x">
          <h1 className="text-5xl md:text-6xl">Gallery</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ivory/75">A closer look at our jewellery.</p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery">
            {galleryFilters.map((f) => (
              <button key={f} onClick={() => { setFilter(f); setActive(null); }} aria-pressed={filter === f}
                className={`border px-5 py-2.5 text-[15px] transition-colors ${filter === f ? 'border-maroon-800 bg-maroon-800 text-ivory' : 'border-gold-500/60 text-maroon-800 hover:border-maroon-800'}`}>{f}</button>
            ))}
          </div>

          {items.length === 0 ? (
            <p className="py-16 text-center text-lg text-ink/60">No photos in this category yet.</p>
          ) : (
            <div className="columns-2 gap-3 md:columns-3 md:gap-4">
              {items.map((it, i) => (
                <button key={it.image} onClick={() => setActive(i)} className="group mb-3 block w-full break-inside-avoid border border-gold-500/50 p-1 md:mb-4" aria-label={`View larger: ${it.alt}`}>
                  <SmartImage name={it.image} alt={it.alt} className="min-h-[10rem]" imgClassName="h-auto transition-transform duration-[900ms] group-hover:scale-105" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && items[active] && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-950/95 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setActive(null)}>
            <button onClick={() => setActive(null)} aria-label="Close" className="absolute right-4 top-4 p-2 text-gold-300"><X size={30} strokeWidth={1.4} /></button>
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-2 p-3 text-gold-300 md:left-6"><ChevronLeft size={34} strokeWidth={1.4} /></button>
            <img src={getImage(items[active].image)} alt={items[active].alt} onClick={(e) => e.stopPropagation()} className="max-h-[88vh] max-w-full border border-gold-500 object-contain" />
            <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-2 p-3 text-gold-300 md:right-6"><ChevronRight size={34} strokeWidth={1.4} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
