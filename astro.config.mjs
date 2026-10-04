// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: set the production domain here once it is known (enables absolute
  // canonical / hreflang / Open Graph URLs).
  // site: 'https://www.example.com',
  i18n: {
    locales: ['en', 'el', 'de', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  // Fonts are downloaded at build time and served from this site: visitors'
  // browsers never contact Google Fonts.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cinzel',
      cssVariable: '--font-cinzel',
      weights: [500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['serif'],
    },
    {
      // Cinzel has no Greek glyphs; GFS Didot covers Greek headings.
      provider: fontProviders.google(),
      name: 'GFS Didot',
      cssVariable: '--font-didot',
      weights: [400],
      styles: ['normal'],
      subsets: ['greek'],
      // Greek-only face, listed before Cinzel: no fallback face, or it would capture Latin text.
      fallbacks: [],
      optimizedFallbacks: false,
    },
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['sans-serif'],
    },
    {
      // Plus Jakarta Sans has no Greek glyphs; Commissioner covers Greek body text.
      provider: fontProviders.google(),
      name: 'Commissioner',
      cssVariable: '--font-commissioner',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['greek'],
      fallbacks: [],
      optimizedFallbacks: false,
    },
  ],
});
