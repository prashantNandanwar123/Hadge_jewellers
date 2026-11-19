import { useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import ProductCard from '../components/ProductCard.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { products } from '../data/products.js';
import { collectionFilters, typeFilters, collectionMeta } from '../data/collections.js';

const chip = (active) =>
  `border px-5 py-2.5 text-[15px] transition-colors ${active ? 'border-maroon-800 bg-maroon-800 text-ivory' : 'border-gold-500/60 text-maroon-800 hover:border-maroon-800'}`;

export default function Collections() {
  const [params, setParams] = useSearchParams();
  const c = params.get('c') ?? 'all';
  const t = params.get('t') ?? 'all';

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    value === 'all' ? next.delete(key) : next.set(key, value);
    setParams(next, { replace: true });
  };

  const list = products.filter((p) => (c === 'all' || p.collection === c) && (t === 'all' || p.type === t));
  const meta = collectionMeta[c] ?? collectionMeta.all;

  return (
    <>
      <Seo
        title={meta.title}
        path="/collections"
        description={`${meta.title} at Hadge Jewellers, Lakhandur, Bhandara. Gold, silver and bridal jewellery, rings, earrings, necklaces, bangles and mangalsutra. Enquire on WhatsApp.`}
      />
      <section className="bg-maroon-900 py-16 text-center text-ivory md:py-20">
        <div className="container-x">
          <h1 className="text-5xl md:text-6xl">{meta.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ivory/75">{meta.text}</p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-x">
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by collection">
              {collectionFilters.map((f) => <button key={f.id} onClick={() => update('c', f.id)} aria-pressed={c === f.id} className={chip(c === f.id)}>{f.label}</button>)}
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
              {typeFilters.map((f) => <button key={f.id} onClick={() => update('t', f.id)} aria-pressed={t === f.id} className={chip(t === f.id)}>{f.label}</button>)}
            </div>
          </div>

          {list.length === 0 ? (
            <div className="mx-auto max-w-md border border-gold-500/60 px-6 py-16 text-center">
              <h2 className="text-3xl text-maroon-800">No designs listed here yet</h2>
              <p className="mt-3 text-ink/70">Try another filter, or ask us on WhatsApp. We may have it in the showroom.</p>
              <div className="mt-7 flex flex-col gap-3">
                <button onClick={() => setParams({}, { replace: true })} className="btn-outline">Show all jewellery</button>
                <WhatsAppButton variant="solid" label="Ask on WhatsApp" />
              </div>
            </div>
          ) : (
            <>
              <p className="mb-8 text-ink/60" aria-live="polite">{list.length} {list.length === 1 ? 'design' : 'designs'}</p>
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
