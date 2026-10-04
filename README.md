# Alli Fasi 1907 — website

The website for the traditional Greek meze restaurant and cafe bar in Kalathos, Rhodes. It is built with [Astro](https://astro.build) and outputs plain static files.

## Pages and languages

| Page | English | Greek | German | French |
| --- | --- | --- | --- | --- |
| Home | `/` | `/el/` | `/de/` | `/fr/` |
| Menu | `/menu` | `/el/menu` | `/de/menu` | `/fr/menu` |
| Our Story | `/our-story` | … | … | … |
| Restaurant | `/restaurant` | … | … | … |
| Rhodian Cuisine | `/rhodian-cuisine` | … | … | … |
| Reviews | `/reviews` | … | … | … |
| Reservations / Contact | `/reservations` | … | … | … |
| Privacy / Cookie Policy | `/privacy-policy`, `/cookie-policy` | … | … | … |

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/ locally
```

Node 22.12 or newer is required.

## Where things live

- **`src/data/menu.ts`** holds the full menu: 66 dishes, prices and tags.
  - Names and prices come from `../web-info/menu.md`.
  - Descriptions are written in all four languages.
- **`src/data/site.ts`** holds the address, phone numbers, email and opening hours.
  - The empty `instagram`, `facebook` and `pdfMenu` fields keep those links hidden until a value is filled in.
- **`src/i18n/strings/*.ts`** holds all page text per language. `en.ts` defines the shape the other languages must follow.
- **`src/styles/global.css`** holds the brand tokens and the "tin label" building blocks (frames, label panels, buttons, price rows).
- **`src/assets/`** holds the logo mark and the photos, which Astro optimises at build time.

## How it works

- **Reservations:** the form has no backend. It builds a WhatsApp message to +30 694 7654 800, and the visitor sends it themselves.
- **Fonts:** Cinzel and Plus Jakarta Sans are used for Latin text, and GFS Didot and Commissioner for Greek. Astro downloads them at build time and serves them from the site itself.
- **Privacy:** no cookies and no analytics. Google Maps loads only after the visitor clicks "Show map".

## To do

- Set the production domain as `site` in `astro.config.mjs`, for absolute canonical and hreflang URLs.
- Add the PDF menu, the Instagram and Facebook URLs, real guest reviews and historic family photos once they are available.
