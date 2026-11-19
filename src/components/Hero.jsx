import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getImage } from '../utils/images.js';
import siteConfig, { mapDirectionsUrl } from '../data/siteConfig.js';
import useCarousel from '../hooks/useCarousel.js';

const ease = [0.22, 1, 0.36, 1];

function SlideCta({ cta }) {
  if (cta.href === 'directions') {
    return <a href={mapDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="btn-gold">{cta.label}</a>;
  }
  return <Link to={cta.to} className="btn-gold">{cta.label}</Link>;
}

function Slide({ slide, active, reduce }) {
  const src = getImage(slide.image);
  return (
    <div className="absolute inset-0">
      {/* Background */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={active ? 'eager' : 'lazy'}
        fetchPriority={active ? 'high' : 'auto'}
        draggable="false"
        className={`absolute inset-0 h-full w-full object-cover ${slide.full ? 'object-[70%_center]' : 'scale-110 opacity-60 blur-sm lg:blur-2xl'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/75 to-maroon-950/20 md:via-maroon-950/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-maroon-950/30" />

      {/* Framed photo for portrait images (desktop) */}
      {!slide.full && (
        <div className="container-x pointer-events-none absolute inset-0 hidden items-center justify-end lg:flex">
          <div className="arch mr-6 h-[78%] max-h-[520px] aspect-[3/4] border border-gold-400/70 p-2">
            <img src={src} alt={slide.alt} draggable="false" className="arch h-full w-full object-cover" />
          </div>
        </div>
      )}

      {/* Text */}
      <div className="container-x relative flex h-full items-center pb-16 pt-6">
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="eyebrow !text-gold-300"
          >
            {siteConfig.brandName}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-4 text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {slide.heading}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-5 max-w-lg text-base leading-relaxed text-ivory/80 sm:text-lg"
          >
            {slide.text}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="mt-8 flex"
          >
            <SlideCta cta={slide.cta} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const slides = siteConfig.heroSlides;
  // Autoplay every 4s; disabled for users who prefer reduced motion.
  const c = useCarousel(slides.length, { interval: 4000, auto: !reduce });

  const variants = {
    enter: (d) => ({ opacity: 0, x: reduce ? 0 : d * 80 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: reduce ? 0 : d * -80 }),
  };

  const onDragEnd = (_, info) => {
    if (info.offset.x < -60 || info.velocity.x < -400) c.next();
    else if (info.offset.x > 60 || info.velocity.x > 400) c.prev();
  };

  return (
    <section
      className="relative isolate h-[calc(100svh-7.25rem)] min-h-[540px] max-h-[760px] overflow-hidden bg-maroon-950"
      aria-roledescription="carousel"
      aria-label="Featured jewellery"
      onMouseEnter={c.pause}
      onMouseLeave={c.resume}
      onFocus={c.pause}
      onBlur={c.resume}
      onKeyDown={(e) => { if (e.key === 'ArrowRight') c.next(); if (e.key === 'ArrowLeft') c.prev(); }}
    >
      <AnimatePresence initial={false} custom={c.dir}>
        <motion.div
          key={c.index}
          custom={c.dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reduce ? 0.2 : 0.8, ease }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragStart={c.pause}
          onDragEnd={(e, i) => { onDragEnd(e, i); c.resume(); }}
          className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
          role="group"
          aria-roledescription="slide"
          aria-label={`${c.index + 1} of ${slides.length}`}
        >
          <Slide slide={slides[c.index]} active reduce={reduce} />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button onClick={c.prev} aria-label="Previous slide" className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-gold-400/60 bg-maroon-950/40 p-3 text-gold-300 backdrop-blur transition hover:bg-gold-500 hover:text-maroon-900 sm:block md:left-6">
        <ChevronLeft size={22} strokeWidth={1.5} />
      </button>
      <button onClick={c.next} aria-label="Next slide" className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-gold-400/60 bg-maroon-950/40 p-3 text-gold-300 backdrop-blur transition hover:bg-gold-500 hover:text-maroon-900 sm:block md:right-6">
        <ChevronRight size={22} strokeWidth={1.5} />
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-3" role="tablist" aria-label="Choose slide">
        {slides.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === c.index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => c.go(i)}
            className="group p-1.5"
          >
            <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === c.index ? 'w-8 bg-gold-400' : 'w-1.5 bg-ivory/50 group-hover:bg-ivory'}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
