import SmartImage from './SmartImage.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { typeLabels, collectionLabels } from '../data/products.js';

export default function ProductCard({ product }) {
  const category = `${collectionLabels[product.collection]} ${typeLabels[product.type]}`;
  return (
    <article className="group flex flex-col">
      <div className="border border-gold-500/60 p-1.5">
        <SmartImage name={product.image} alt={product.name} className="aspect-[4/5]" imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-sm tracking-luxe text-gold-600">{category}</p>
        <h3 className="mt-1 text-2xl leading-snug text-maroon-800">{product.name}</h3>
        <WhatsAppButton product={product.name} variant="outline" className="mt-4 w-full !py-3" />
      </div>
    </article>
  );
}
