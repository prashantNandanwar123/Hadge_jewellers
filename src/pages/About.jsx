import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';
import ShowroomSection from '../components/ShowroomSection.jsx';
import logo from '../assets/logo/hadge-logo.jpg';

// Copy contains no establishment year, family history or heritage claims. Add only what the owner confirms.
const pillars = [
  { title: 'Craft and design', text: 'We care about how a piece looks and feels: the detail in a necklace, the finish of a bangle, the balance of a pair of earrings.' },
  { title: 'Traditional Indian jewellery', text: 'Temple designs, mangalsutra and bridal sets sit alongside lighter styles that work for everyday wear.' },
  { title: 'Celebrations that matter', text: 'Weddings, festivals, engagements and gifts: we help you choose jewellery for the moments you will remember.' },
  { title: 'Relationships with customers', text: 'We take time to listen. Come in, look at the designs and ask us anything.' },
];

export default function About() {
  return (
    <>
      <Seo title="About Us" path="/about" description="About Hadge Jewellers, a jewellery showroom in Lakhandur, Bhandara, Maharashtra, offering gold, silver and bridal jewellery for every celebration." />
      <section className="bg-maroon-900 py-20 text-center text-ivory md:py-28">
        <div className="container-x">
          <img src={logo} alt="Hadge Jewellers logo" className="mx-auto h-28 w-28 rounded-full" />
          <h1 className="mx-auto mt-8 max-w-3xl text-5xl leading-tight md:text-6xl">Jewellery for the moments that matter</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="mx-auto w-full max-w-md">
            <div className="arch border border-gold-500 p-2"><SmartImage name="necklace-2" alt="Gold necklace from Hadge Jewellers" className="arch aspect-[3/4]" /></div>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl text-maroon-800 md:text-5xl">Welcome to Hadge Jewellers</h2>
            <div className="mt-6 space-y-5 text-lg leading-[1.8] text-ink/75">
              <p>Hadge Jewellers is a jewellery showroom in Lakhandur, Maharashtra. We offer gold, silver and bridal jewellery for people who want beautiful pieces for weddings, festivals and everyday life.</p>
              <p>Our collection brings together traditional Indian designs and contemporary styles. Whether you are looking for a mangalsutra, a bridal set or a simple pair of earrings, we are happy to guide you.</p>
              <p>We would love to meet you at our showroom, or you can message us on WhatsApp to ask about a design.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x grid gap-x-16 gap-y-10 md:grid-cols-2">
          {pillars.map((p) => (
            <Reveal key={p.title} className="border-l-2 border-gold-500 pl-6">
              <h3 className="text-3xl text-maroon-800">{p.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink/70">{p.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center"><Link to="/collections" className="btn-maroon">Explore the Collection</Link></div>
      </section>
      <ShowroomSection />
    </>
  );
}
