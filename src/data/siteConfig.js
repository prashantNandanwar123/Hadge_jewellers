// ─────────────────────────────────────────────────────────────
// Central business configuration. Edit here — the whole site updates.
// Only publish facts confirmed by the owner.
// ─────────────────────────────────────────────────────────────
const siteConfig = {
  name: "Hadge Jewellers",
  brandName: "HADGE JEWELLERS",
  brandSubtitle: "LAKHANDUR",
  tagline: "Timeless elegance for every celebration",
  // TODO: replace with the real domain before deploying (used for canonical URLs & structured data)
  siteUrl: "https://www.example.com",

  phone: "+91 87676 71367",
  phoneHref: "tel:+918767671367",
  whatsappNumber: "918767671367", // country code + number, no "+" or spaces
  instagram: "https://www.instagram.com/hadge_jewellers_lakhandur/",
  instagramHandle: "@hadge_jewellers_lakhandur",

  // Paste the official Google Business "reviews" link here once the owner confirms it
  // (Google Maps > the business > Share > copy link). Leave "" until verified.
  googleReviewsUrl: "",

  address: {
    line1: "Chatrapati Shivaji Maharaj Chowk",
    locality: "Lakhandur",
    district: "Bhandara",
    region: "Maharashtra",
    postalCode: "441803",
    country: "IN",
  },

  announcements: [
    "Welcome to Hadge Jewellers",
    "Premium jewellery collection",
    "Visit our showroom in Lakhandur",
  ],

  // Hero slider. `image` = file name in src/assets/images (no extension).
  // `full: true` means the photo is wide enough to be used edge-to-edge; others use a framed layout so
  // portrait photos are never stretched or pixelated.
  // `cta.to` is an internal route; `cta.href: "directions"` opens the showroom on Google Maps.
  heroSlides: [
    {
      id: "celebration",
      image: "hero",
      full: true,
      alt: "Layered gold necklace with ruby pendant on a deep maroon background",
      heading: "Every Celebration Deserves Something Precious",
      text: "Discover timeless elegance and beautiful jewellery at Hadge Jewellers.",
      cta: { label: "Explore Collections", to: "/collections" },
    },
    {
      id: "occasion",
      image: "earrings-1",
      alt: "Traditional gold jhumka earrings",
      heading: "Elegance Crafted for Every Occasion",
      text: "Discover beautiful traditional and contemporary jewellery designs.",
      cta: { label: "Explore Gold Jewellery", to: "/collections?c=gold" },
    },
    {
      id: "wedding",
      image: "bridal-1",
      alt: "Five-layer bridal necklace",
      heading: "Make Your Wedding Moments Precious",
      text: "Discover stunning bridal jewellery for your special celebrations.",
      cta: { label: "Explore Bridal Collection", to: "/collections?c=bridal" },
    },
    {
      id: "tradition",
      image: "necklace-1",
      alt: "Temple style gold necklace",
      heading: "Tradition Meets Timeless Beauty",
      text: "Find beautiful jewellery for every special moment.",
      cta: { label: "Visit Our Showroom", href: "directions" },
    },
  ],

  // Shown in "Why choose us". Edit freely; publish only what the owner confirms.
  whyChooseUs: [
    {
      icon: "gem",
      title: "Beautiful jewellery designs",
      text: "Gold, silver and bridal designs chosen with care for every occasion.",
    },
    {
      icon: "heart",
      title: "Personalised assistance",
      text: "Our team helps you find the piece that suits your celebration and your taste.",
    },
    {
      icon: "sparkles",
      title: "Traditional and contemporary",
      text: "Classic Indian styles alongside lighter, modern designs for everyday wear.",
    },
    {
      icon: "store",
      title: "A local showroom experience",
      text: "Visit us at Chatrapati Shivaji Maharaj Chowk and see the collection in person.",
    },
  ],

  // Images shown in the Instagram section (names from src/assets/images).
  // Replace with photos you are authorised to use from the official Instagram account.
  instagramImages: [
    "necklace-1",
    "bangles-1",
    "earrings-1",
    "bridal-2",
    "mangalsutra-1",
    "rings-2",
  ],

  seo: {
    keywords:
      "jewellery shop in Lakhandur, gold jewellery Lakhandur, silver jewellery Bhandara, bridal jewellery Maharashtra, mangalsutra, gold necklace, gold earrings, gold bangles, jewellers in Bhandara, Hadge Jewellers",
    ogImage: "/og-image.jpg",
  },
};

export const fullAddress = () => {
  const a = siteConfig.address;
  return `${a.line1}, ${a.locality}, ${a.region} ${a.postalCode}`;
};

const mapQuery = () => encodeURIComponent(`Hadge Jewellers, ${fullAddress()}`);
export const mapEmbedUrl = () =>
  `https://www.google.com/maps?q=${mapQuery()}&output=embed`;
export const mapDirectionsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${mapQuery()}`;

export const whatsappLink = (message) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message ??
      "Hello Hadge Jewellers, I would like to enquire about your jewellery collection.",
  )}`;

export const productEnquiryLink = (productName) =>
  whatsappLink(
    `Hello Hadge Jewellers, I would like to enquire about "${productName}".`,
  );

export default siteConfig;
