import { useState } from 'react';
import { Gem } from 'lucide-react';
import { getImage } from '../utils/images.js';

// Image with loading skeleton and graceful fallback (no broken-image icons).
export default function SmartImage({ name, alt, className = '', imgClassName = '', eager = false }) {
  const src = getImage(name);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const missing = !src || failed;

  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      {!loaded && !missing && <div className="skeleton absolute inset-0" aria-hidden="true" />}
      {missing ? (
        <div className="flex h-full min-h-[8rem] w-full items-center justify-center text-gold-500" role="img" aria-label={alt}>
          <Gem size={28} strokeWidth={1.2} />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        />
      )}
    </div>
  );
}
