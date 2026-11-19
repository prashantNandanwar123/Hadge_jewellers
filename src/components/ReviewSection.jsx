import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import useCarousel from '../hooks/useCarousel.js';
import { verifiedReviews, demoPlaceholders, reviewsConfig } from '../data/reviews.js';
import siteConfig, { mapDirectionsUrl } from '../data/siteConfig.js';

function usePerView() {
  const calc = () => (typeof window === 'undefined' ? 1 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
  const [n, setN] = useState(calc);
  useEffect(() => {
    const on = () => setN(calc());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return n;
}

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={16} strokeWidth={1.5} className={n <= rating ? 'fill-gold-500 text-gold-500' : 'text-gold-500/40'} />
      ))}
    </div>
  );
}

function ReviewCard({ r }) {
  return (
    <article className="flex h-full flex-col bg-white p-7 md:p-8">
      <Quote size={28} strokeWidth={1.2} className="text-gold-500" aria-hidden="true" />
      {r.isDemo && (
        <p className="mt-4 inline-block self-start border border-maroon-800/30 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-maroon-800">
          Sample layout — not a customer review
        </p>
      )}
      {!r.isDemo && r.rating ? <div className="mt-4"><Stars rating={r.rating} /></div> : null}
      <p className={`mt-4 flex-1 leading-relaxed ${r.isDemo ? 'text-ink/50 italic' : 'text-ink/80'}`}>{r.text}</p>
      {!r.isDemo && (
        <footer className="mt-6 border-t border-gold-500/30 pt-4">
          <p className="font-display text-xl text-maroon-800">{r.name}</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/60">
            {r.date && <span>{r.date}</span>}
            <span>Google review</span>
            {r.url && (
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gold-700 hover:text-maroon-800">
                View <ExternalLink size={13} />
              </a>
            )}
          </div>
        </footer>
      )}
    </article>
  );
}

export default function ReviewSection() {
  const reduce = useReducedMotion();
  const perView = usePerView();
  const hasVerified = verifiedReviews.length > 0;
  const items = hasVerified ? verifiedReviews : reviewsConfig.showDemoPlaceholders ? demoPlaceholders : [];
  const reviewsUrl = siteConfig.googleReviewsUrl || mapDirectionsUrl();
  const verifiedLink = Boolean(siteConfig.googleReviewsUrl);

  const scroll = items.length > perView;
  const c = useCarousel(items.length || 1, { interval: 5000, auto: scroll && !reduce });
  const visible = scroll ? Array.from({ length: perView }, (_, k) => items[(c.index + k) % items.length]) : items;

  return (
    <section className="section bg-ivory" aria-labelledby="reviews-heading">
      <div className="container-x">
        <SectionHeading title="What Our Customers Say" text="Experiences and feedback from customers of Hadge Jewellers." />

        {items.length === 0 ? (
          <p className="mx-auto max-w-xl text-center text-ink/70">
            Customer reviews will appear here. You are welcome to share your experience on Google after your visit.
          </p>
        ) : (
          <div onMouseEnter={c.pause} onMouseLeave={c.resume} onFocus={c.pause} onBlur={c.resume} className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" initial={false} custom={c.dir}>
                <motion.ul
                  key={c.index}
                  initial={reduce ? false : { opacity: 0, x: c.dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, x: c.dir * -40 }}
                  transition={{ duration: 0.35 }}
                  drag={scroll ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, i) => { if (i.offset.x < -50) c.next(); else if (i.offset.x > 50) c.prev(); }}
                  className="grid touch-pan-y gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  aria-live="off"
                >
                  {visible.map((r, k) => (
                    <li key={`${r.id}-${k}`} className="min-h-[260px]"><ReviewCard r={r} /></li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>

            {scroll && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button onClick={c.prev} aria-label="Previous reviews" className="rounded-full border border-gold-500 p-3 text-maroon-800 transition hover:bg-maroon-800 hover:text-ivory"><ChevronLeft size={20} strokeWidth={1.5} /></button>
                <span className="min-w-[3.5rem] text-center text-sm tracking-widest text-ink/60">{c.index + 1} / {items.length}</span>
                <button onClick={c.next} aria-label="Next reviews" className="rounded-full border border-gold-500 p-3 text-maroon-800 transition hover:bg-maroon-800 hover:text-ivory"><ChevronRight size={20} strokeWidth={1.5} /></button>
              </div>
            )}
          </div>
        )}

        <div className="mt-10 text-center">
          <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All Google Reviews <ExternalLink size={15} strokeWidth={1.6} />
          </a>
          {!verifiedLink && (
            <p className="mt-3 text-xs text-ink/50">Opens Hadge Jewellers on Google Maps. Owner: add the verified review link in siteConfig.js.</p>
          )}
        </div>
      </div>
    </section>
  );
}
