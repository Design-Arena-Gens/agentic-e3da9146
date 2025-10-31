## Atelier M · Menswear Trousers Ecommerce

Atelier M is a premium menswear shopping experience focused on tailored trousers. The site is built with Next.js App Router and TypeScript, delivering a Vercel-ready storefront with curated products, lookbook imagery, and concierge support messaging.

### Features
- Hero narrative introducing the SS25 trouser collection and atelier differentiators.
- Product grid with rich cards, dynamic palette swatches, and quick add actions.
- Detailed product pages generated statically from a shared data source.
- Tailored fit matrix, lookbook gallery, testimonials, and concierge CTA.
- Responsive layout and modern styling driven by CSS modules.

### Scripts

```bash
npm run dev     # start development server on http://localhost:3000
npm run lint    # run ESLint with Next.js configuration
npm run build   # create production build
npm start       # run production build locally
```

### Tech Stack
- Next.js 14 App Router with TypeScript
- CSS Modules with design tokens defined in `globals.css`
- Image optimization via Next.js `Image` component with Unsplash sources

### Project Structure
- `src/app/page.tsx` – homepage composed of modular sections.
- `src/app/products/[slug]/page.tsx` – statically generated product detail pages.
- `src/components/*` – UI components for hero, showcase, fit matrix, testimonials, and footer/header.
- `src/data/products.ts` – product catalog, editorial highlights, testimonials, and lookbook content.

### Deployment

The site is configured for seamless deployment to Vercel. Run `npm run build` locally before deploying to ensure the production bundle compiles successfully.
