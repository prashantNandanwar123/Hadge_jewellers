import { Instagram } from 'lucide-react';
import siteConfig from '../data/siteConfig.js';
import SectionHeading from './SectionHeading.jsx';
import SmartImage from './SmartImage.jsx';

// Grid of authorised images (set in siteConfig.instagramImages). No scraping, no fake posts.
export default function InstagramSection() {
  return (
    <section className="section bg-cream" id="instagram">
      <div className="container-x">
        <SectionHeading title="Follow Our Jewellery Journey" text={`New designs and showroom moments at ${siteConfig.instagramHandle}.`} />
        <div className="grid grid-cols-2 gap-2 overflow-hidden sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {siteConfig.instagramImages.map((img, i) => (
            <a key={img + i} href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Open Hadge Jewellers on Instagram" className="group relative block">
              <SmartImage name={img} alt="Hadge Jewellers jewellery photo" className="aspect-square" imgClassName="transition-transform duration-[1100ms] group-hover:scale-[1.07]" />
              <span className="absolute inset-0 flex items-center justify-center bg-maroon-900/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Instagram className="text-gold-300" size={28} strokeWidth={1.4} />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="btn-maroon"><Instagram size={18} strokeWidth={1.5} />Follow Us on Instagram</a>
        </div>
      </div>
    </section>
  );
}
