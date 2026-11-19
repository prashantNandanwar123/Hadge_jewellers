// Featured collection tiles on the home page and the filter chips on the Collections page.
export const collections = [
  { id: 'necklaces', title: 'Gold Necklace', image: 'necklace-1', to: '/collections?c=gold&t=necklaces' },
  { id: 'earrings', title: 'Gold Earrings', image: 'earrings-1', to: '/collections?c=gold&t=earrings' },
  { id: 'bangles', title: 'Gold Bangles', image: 'bangles-1', to: '/collections?c=gold&t=bangles' },
  { id: 'rings', title: 'Gold Rings', image: 'rings-2', to: '/collections?c=gold&t=rings' },
  { id: 'mangalsutra', title: 'Mangalsutra', image: 'mangalsutra-1', to: '/collections?t=mangalsutra' },
  { id: 'bridal', title: 'Bridal Jewellery', image: 'bridal-1', to: '/collections?c=bridal' },
  { id: 'silver', title: 'Silver Jewellery', image: 'silver-1', to: '/collections?c=silver' },
];

export const collectionFilters = [
  { id: 'all', label: 'All jewellery' },
  { id: 'gold', label: 'Gold Jewellery' },
  { id: 'silver', label: 'Silver Jewellery' },
  { id: 'bridal', label: 'Bridal Jewellery' },
];

export const typeFilters = [
  { id: 'all', label: 'All types' },
  { id: 'rings', label: 'Rings' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'bangles', label: 'Bangles' },
  { id: 'mangalsutra', label: 'Mangalsutra' },
];

export const collectionMeta = {
  all: { title: 'Our Jewellery', text: 'Browse the collection and enquire on WhatsApp about any piece you like.' },
  gold: { title: 'Gold Jewellery', text: 'Necklaces, earrings, bangles and rings for everyday wear and celebrations.' },
  silver: { title: 'Silver Jewellery', text: 'Light, graceful silver pieces for gifting and daily wear.' },
  bridal: { title: 'Bridal Jewellery', text: 'Traditional and wedding jewellery for the most important day.' },
};
