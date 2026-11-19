import { Helmet } from 'react-helmet-async';
import siteConfig, { fullAddress } from '../data/siteConfig.js';

// Built from verified details in siteConfig only (no hours, ratings or founding year).
const jewelryStoreSchema = () => {
  const a = siteConfig.address;
  return {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.seo.ogImage}`,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.line1,
      addressLocality: a.locality,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    areaServed: [a.locality, a.district],
    sameAs: [siteConfig.instagram],
  };
};

export default function Seo({ title, description, path = '/', schema = false }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Jewellery Showroom in Lakhandur, Bhandara`;
  const url = `${siteConfig.siteUrl}${path}`;
  const image = `${siteConfig.siteUrl}${siteConfig.seo.ogImage}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.seo.keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="geo.placename" content={fullAddress()} />
      {schema && <script type="application/ld+json">{JSON.stringify(jewelryStoreSchema())}</script>}
    </Helmet>
  );
}
