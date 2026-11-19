# Hadge Jewellers Website

React + Vite + Tailwind CSS website for **Hadge Jewellers, Lakhandur, Maharashtra**.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the build
```
Requires Node.js 18+.

## What to edit

| What | Where |
|---|---|
| Phone, WhatsApp number, address, Instagram, announcement bar, "Why choose us", SEO keywords | `src/data/siteConfig.js` |
| Products (name, category, image) | `src/data/products.js` |
| Home page collection tiles | `src/data/collections.js` |
| Gallery photos and filters | `src/data/gallery.js` |
| Instagram grid photos | `instagramImages` in `src/data/siteConfig.js` |
| Colours and fonts | `tailwind.config.js` |

## Replacing the dummy jewellery photos
All photos in `src/assets/images/` are **generated placeholder illustrations**. To use real photos:
1. Add your JPG to `src/assets/images/` (for example `gold-necklace-01.jpg`).
2. Use the file name without `.jpg` as the `image` value in the data files.
3. Replace `hero.jpg` (recommended 1920×1080, jewellery on the right so the headline stays readable) and `public/og-image.jpg` (1200×630).

Only use photos you own or that the owner has authorised, including for the Instagram section.

## Logo
`src/assets/logo/hadge-logo.jpg` is the supplied logo (150×150 px). It is shown at small sizes; for sharper display, replace it with a higher-resolution file of the **same name**, and replace `public/favicon.png`.

## Before going live
- Set `siteUrl` in `src/data/siteConfig.js` to the real domain.
- Replace `https://www.example.com` in `public/sitemap.xml` and `public/robots.txt`.
- Review the "Why choose us" and About text, and publish only facts the owner confirms.
- Host with SPA fallback (all routes serve `index.html`): Netlify `_redirects` with `/* /index.html 200`, or Vercel rewrites.

## Notes
- WhatsApp links use `https://wa.me/<number>?text=...`; product buttons add the product name automatically.
- The contact form has no backend. It opens WhatsApp with the enquiry pre-filled.
- No prices, stock, reviews, awards, certifications or business history are shown.
- Structured data (JewelryStore) uses only the verified name, address, phone and Instagram.

## Upgrade notes
- Hero slides: `src/data/siteConfig.js` → `heroSlides`.
- Reviews: add real Google reviews to `src/data/reviews.js` (`verifiedReviews`). Until then, clearly labelled sample cards show. Set `showDemoPlaceholders: false` to hide them.
- Set `googleReviewsUrl` in `siteConfig.js` once the owner confirms the official Google review link.
