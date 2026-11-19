import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SmartImage from './SmartImage.jsx';
import Reveal from './Reveal.jsx';

const ease = [0.22, 1, 0.36, 1];

// Consistent 4:5 card. Image zooms gently on hover (Framer Motion variants, skipped for reduced motion).
export default function CollectionCard({ title, image, to, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <Reveal delay={delay}>
      <Link to={to} className="group block" aria-label={`${title} — explore collection`}>
        <motion.div initial="rest" whileHover="hover" whileFocus="hover" animate="rest">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <motion.div className="h-full w-full" variants={{ rest: { scale: 1 }, hover: { scale: reduce ? 1 : 1.07 } }} transition={{ duration: 1.1, ease }}>
              <SmartImage name={image} alt={`${title} at Hadge Jewellers`} className="h-full w-full" />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-950/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <div className="pt-5 text-center">
            <h3 className="text-2xl text-maroon-800 md:text-[1.7rem]">{title}</h3>
            <span className="mt-2 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-gold-700 transition-all duration-300 group-hover:gap-3 group-hover:text-maroon-800">
              Explore Collection <ArrowRight size={14} strokeWidth={1.8} />
            </span>
          </div>
        </motion.div>
      </Link>
    </Reveal>
  );
}
