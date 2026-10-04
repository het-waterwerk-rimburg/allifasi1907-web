import en from './strings/en';
import el from './strings/el';
import de from './strings/de';
import fr from './strings/fr';

export const LANGS = ['en', 'el', 'de', 'fr'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_META: Record<Lang, { label: string; short: string; htmlLang: string; locale: string }> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', locale: 'en-GB' },
  el: { label: 'Ελληνικά', short: 'ΕΛ', htmlLang: 'el', locale: 'el-GR' },
  de: { label: 'Deutsch', short: 'DE', htmlLang: 'de', locale: 'de-DE' },
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr', locale: 'fr-FR' },
};

const STRINGS = { en, el, de, fr };

export type Strings = typeof en;

export function t(lang: Lang): Strings {
  return STRINGS[lang];
}

/** Page keys and their (language-independent) slugs. */
export const PAGES = {
  home: '',
  menu: 'menu',
  story: 'our-story',
  restaurant: 'restaurant',
  cuisine: 'rhodian-cuisine',
  reviews: 'reviews',
  reservations: 'reservations',
  privacy: 'privacy-policy',
  cookies: 'cookie-policy',
} as const;
export type PageKey = keyof typeof PAGES;

/** URL of a page in a language: English lives at the root, others under /el/, /de/, /fr/. */
export function href(lang: Lang, page: PageKey, hash = ''): string {
  const slug = PAGES[page];
  const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
  const path = slug ? `${prefix}/${slug}` : prefix || '/';
  return `${path === '' ? '/' : path}${hash ? `#${hash}` : ''}`;
}

/** getStaticPaths for every page: one route per language. */
export function langPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === DEFAULT_LANG ? undefined : lang },
    props: { lang },
  }));
}

export function formatPrice(value: number, lang: Lang): string {
  return new Intl.NumberFormat(LANG_META[lang].locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(value);
}
