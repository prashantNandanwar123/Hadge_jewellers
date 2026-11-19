// ─────────────────────────────────────────────────────────────
// CUSTOMER REVIEWS — owner-editable.
//
// Only add REAL reviews that customers have publicly posted on Google, copied exactly as written.
// Never invent names, ratings, dates or text.
//
// How to add a review (example — remove the comment markers and fill with the real values):
//
// {
//   id: 'g1',
//   name: 'Name exactly as shown on Google',   // required
//   rating: 5,                                  // only if shown on Google; omit otherwise
//   date: 'October 2026',                       // only if shown on Google; omit otherwise
//   text: 'Review text exactly as posted…',     // required
//   url: 'https://maps.app.goo.gl/…',           // link to that review / the Google listing (optional)
// },
// ─────────────────────────────────────────────────────────────

export const verifiedReviews = [
  // No verified Google reviews have been added yet.
];

// Layout previews ONLY. They carry no name, rating or date and are labelled on screen as samples.
// Set `showDemoPlaceholders` to false before launch if you prefer to hide the section until real reviews exist.
export const reviewsConfig = {
  showDemoPlaceholders: true,
};

export const demoPlaceholders = [
  { id: 'demo-1', isDemo: true, text: 'Sample card to preview the layout. A real customer review from Google will appear here.' },
  { id: 'demo-2', isDemo: true, text: 'Sample card to preview the layout. Add verified reviews in src/data/reviews.js.' },
  { id: 'demo-3', isDemo: true, text: 'Sample card to preview the layout. Names, stars and dates are shown only for real reviews.' },
  { id: 'demo-4', isDemo: true, text: 'Sample card to preview the layout. This is not a customer review.' },
];
