/** Contact facts, from web-info/contact.md. Language-neutral. */
export const SITE = {
  name: 'Alli Fasi 1907',
  address: {
    street: 'Rhodes to Lindos Road',
    locality: 'Kalathos',
    region: 'Rhodes',
    postalCode: '85102',
    country: 'GR',
  },
  phoneGreek: { display: '+30 22440 31098', tel: '+302244031098' },
  phoneEnglish: { display: '+30 694 7654 800', tel: '+306947654800', wa: '306947654800' },
  email: 'allifasi1907@gmail.com',
  hours: {
    days: 'Mo-Sa',
    opens: '18:00',
    lastKitchenOrder: '22:45',
  },
  /** Not provided yet: shown only once filled in. */
  instagram: '',
  facebook: '',
  pdfMenu: '',
  mapsQuery: 'Alli Fasi 1907, Kalathos, Rhodes, Greece',
} as const;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;
export const GOOGLE_REVIEWS_URL = `https://www.google.com/search?q=${encodeURIComponent('Alli Fasi 1907 Kalathos reviews')}`;
export const TRIPADVISOR_URL = `https://www.tripadvisor.com/Search?q=${encodeURIComponent('Alli Fasi Kalathos')}`;
export const WHATSAPP_URL = `https://wa.me/${SITE.phoneEnglish.wa}`;
