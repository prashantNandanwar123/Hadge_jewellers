import { Link } from 'react-router-dom';
import { Gem, HeartHandshake, Sparkles, Store } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CollectionCard from '../components/CollectionCard.jsx';
import SmartImage from '../components/SmartImage.jsx';
import Reveal from '../components/Reveal.jsx';
import InstagramSection from '../components/InstagramSection.jsx';
import ReviewSection from '../components/ReviewSection.jsx';
import ShowroomSection from '../components/ShowroomSection.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { collections } from '../data/collections.js';
import siteConfig from '../data/siteConfig.js';

const icons = { gem: Gem, heart: HeartHandshake, sparkles: Sparkles, store: Store };

// Editorial grid: spans give the rhythm. Edit names to change photos.
const featured = [
  { img: 'necklace-2', alt: 'Layered gold necklace', cls: 'md:col-span-2 md:row-span-2' },
  { img: 'earrings-2', alt: 'Gold drop earrings', cls: '' },
  { img: 'bangles-2', alt: 'Stacked gold bangles', cls: 'md:row-span-2' },
  { img: 'rings-1', alt: 'Gold rings', cls: '' },
  { img: 'mangalsutra-2', alt: 'Mangalsutra', cls: '' },
  { img: 'silver-3', alt: 'Silver earrings', cls: '' },
];

export default function Home() {
  return (
    <>
      <Seo
        description="Hadge Jewellers is a jewellery showroom at Chatrapati Shivaji Maharaj Chowk, Lakhandur, Bhandara. Explore gold, silver and bridal jewellery and enquire on WhatsApp."
        path="/"
        schema
      />
      <Hero />

      <section className="section bg-ivory">
        <div className="container-x">
          <SectionHeading title="Featured Collections" text="From everyday gold to wedding jewellery, find the piece for your next celebration." />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-12">
            {collections.map((c, i) => (
              <div key={c.id} className="w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]">
                <CollectionCard {...c} delay={(i % 4) * 0.06} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our promise</p>
            <h2 className="mt-3 text-4xl text-maroon-800 md:text-5xl">Why Choose Hadge Jewellers</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">Jewellery is personal. We help you choose with care, at a showroom you can visit in person.</p>
          </Reveal>
          <ul className="divide-y divide-gold-500/40 border-y border-gold-500/40">
            {siteConfig.whyChooseUs.map((w) => {
              const Icon = icons[w.icon] ?? Gem;
              return (
                <li key={w.title}>
                  <Reveal className="flex gap-5 py-7">
                    <Icon className="mt-1 shrink-0 text-gold-600" size={28} strokeWidth={1.2} />
                    <div>
                      <h3 className="text-2xl text-maroon-800">{w.title}</h3>
                      <p className="mt-1.5 text-ink/70">{w.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-x">
          <SectionHeading title="Featured Jewellery Gallery" text="A closer look at designs from the showroom." />
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[270px] md:grid-cols-4 md:gap-4">
            {featured.map((f) => (
              <Link key={f.img} to="/gallery" className={`group block overflow-hidden ${f.cls}`} aria-label={`${f.alt} — view gallery`}>
                <SmartImage name={f.img} alt={f.alt} className="h-full w-full" imgClassName="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]" />
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center"><Link to="/gallery" className="btn-outline">View Full Gallery</Link></div>
        </div>
      </section>

      <section className="section bg-maroon-900 text-ivory">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow !text-gold-300">Bridal jewellery</p>
            <h2 className="mt-3 text-4xl leading-tight md:text-6xl">Make Your Special Day More Precious</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/75">Bridal necklaces, traditional jewellery and wedding collections, with personal help from our team in choosing the right set.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/collections?c=bridal" className="btn-gold">View Bridal Collection</Link>
              <WhatsAppButton variant="light" label="Ask about bridal jewellery" message="Hello Hadge Jewellers, I would like to enquire about your bridal jewellery collection." />
            </div>
          </Reveal>
          <div className="grid grid-cols-5 items-end gap-4">
            <div className="arch col-span-3 border border-gold-400/60 p-1.5"><SmartImage name="bridal-1" alt="Bridal necklace" className="arch aspect-[3/4]" /></div>
            <div className="col-span-2 space-y-4">
              <div className="overflow-hidden"><SmartImage name="bridal-3" alt="Bridal earrings" className="aspect-square" /></div>
              <div className="overflow-hidden"><SmartImage name="bridal-2" alt="Bridal choker" className="aspect-square" /></div>
            </div>
          </div>
        </div>
      </section>

      <ReviewSection />
      <InstagramSection />
      <ShowroomSection />
    </>
  );
}
