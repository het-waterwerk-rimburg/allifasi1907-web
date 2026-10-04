---
name: Alli Fasi 1907
description: A Rhodian meze house set like a 1907 grocer's olive-oil tin label - framed, sealed, dated, proud.
colors:
  aegean-teal: "#0e3b43"
  teal-deep: "#0a2c32"
  teal-line: "#2a5a63"
  ancient-gold: "#c09a58"
  gold-ink: "#7a5c25"
  olive: "#6b705c"
  olive-dark: "#4a503d"
  warm-beige: "#d8c3a5"
  soft-cream: "#fafaed"
  cream-deep: "#f1eedb"
  deep-charcoal: "#1c2426"
  muted-slate: "#5a6b70"
  on-tin-muted: "#c9d3cf"
  brick: "#8a3b24"
typography:
  display:
    fontFamily: "GFS Didot (Greek only), Cinzel, serif"
    fontSize: "clamp(2.125rem, 1.4rem + 3.2vw, 3.875rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.01em"
  headline:
    fontFamily: "GFS Didot (Greek only), Cinzel, serif"
    fontSize: "clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.01em"
  title:
    fontFamily: "GFS Didot (Greek only), Cinzel, serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.01em"
  body:
    fontFamily: "Commissioner (Greek only), Plus Jakarta Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Commissioner (Greek only), Plus Jakarta Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Commissioner (Greek only), Plus Jakarta Sans, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  small:
    fontFamily: "Commissioner (Greek only), Plus Jakarta Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  tab: "2px"
spacing:
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
  section: "clamp(4rem, 2.8rem + 6vw, 8rem)"
  container-max: "1200px"
  frame-cut: "18px"
  panel-cut: "24px"
components:
  button-primary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.soft-cream}"
    rounded: "{rounded.tab}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.olive-dark}"
    textColor: "{colors.soft-cream}"
  button-line-on-tin:
    backgroundColor: "transparent"
    textColor: "{colors.soft-cream}"
    rounded: "{rounded.tab}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-line-on-paper:
    backgroundColor: "transparent"
    textColor: "{colors.aegean-teal}"
    rounded: "{rounded.tab}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-line-on-paper-hover:
    backgroundColor: "{colors.aegean-teal}"
    textColor: "{colors.soft-cream}"
  button-gold:
    backgroundColor: "{colors.ancient-gold}"
    textColor: "{colors.deep-charcoal}"
    rounded: "{rounded.tab}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  chip:
    backgroundColor: "{colors.soft-cream}"
    textColor: "{colors.aegean-teal}"
    rounded: "{rounded.tab}"
    padding: "0 16px"
    height: "44px"
  chip-pressed:
    backgroundColor: "{colors.aegean-teal}"
    textColor: "{colors.soft-cream}"
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.gold-ink}"
    rounded: "{rounded.tab}"
    padding: "0.2em 0.6em"
  input:
    backgroundColor: "{colors.soft-cream}"
    textColor: "{colors.deep-charcoal}"
    rounded: "{rounded.tab}"
    padding: "10px 12px"
    height: "48px"
  label-panel:
    backgroundColor: "{colors.soft-cream}"
    textColor: "{colors.deep-charcoal}"
    padding: "clamp(1.75rem, 1.2rem + 2vw, 2.75rem)"
---

# Design System: Alli Fasi 1907

## Overview

**Creative North Star: "The Olive Oil Tin Label"**

The site is lithographed, not photographed-and-overlaid. Every surface is either a solid Aegean-teal tin field or a sheet of cream label paper, and the two alternate down the page the way a printed tin wraps its label. On those fields sit the label's printed furniture: ancient-gold double rules with cut octagonal corners, Greek meander bands as borders, an oval gold 1907 seal, and dotted price leaders. Photographs only ever appear inside gold-framed label windows.

Density is calm and generous: long section padding, one idea per band, copy held to a reading measure. The display voice is Cinzel set in capitals (GFS Didot, uppercased, for Greek); the working voice is Plus Jakarta Sans (Commissioner for Greek). Colour is flat and solid. There is no glass, no gradient, no emoji. The site refuses the category default of a full-bleed food photo under a dark overlay with a centred script headline.

Motion is printing, not performance: the hero label prints once (outer gold rule, inner rule, photo) and the seal stamps once; everything else rises in with a short fade on section entry. Under reduced motion it is all static.

**Key Characteristics:**
- Solid teal tin fields alternating with cream label paper; never a gradient between them.
- Gold double-rule octagon frames around every photograph.
- Meander bands as printed borders at the edges of tin fields.
- The oval 1907 seal as the one stamped mark per view.
- Cinzel capitals for display; Plus Jakarta Sans for everything you read or press.
- Square-shouldered tabs (2px) for buttons, chips, badges and fields.

## Colors

A two-field palette (teal tin, cream paper) printed in ancient gold, with olive reserved for the act of booking.

### Primary
- **Aegean Teal** (aegean-teal): the tin. Header, hero, page heroes, story and reserve bands, and the drawer. Also the ink of headings and prices on paper, and the focus colour inside paper.
- **Deep Tin** (teal-deep): the darker tin of the footer and deep bands.
- **Tin Hairline** (teal-line): hairline dividers and outlines on teal (header bottom edge, drawer rows, footer legal rule).

### Secondary
- **Ancient Gold** (ancient-gold): the printing ink. Double rules, frame rules, meander bands, the seal, heading ornaments, link underlines, dotted price leaders, focus rings on teal, selection. Decorative and large-text use only on cream.
- **Gold Ink** (gold-ink): gold darkened for small text on cream (badges, dish numbers, counts, filter labels, required markers), so gold can carry text at AA.

### Tertiary
- **Olive Tab** (olive): the primary call to action ("Reserve a table"), and form accent-color.
- **Dark Olive** (olive-dark): olive hover and the dietary badge ink.
- **Brick** (brick): the spicy badge and form error text. A status ink, not a decorative colour.

### Neutral
- **Soft Cream** (soft-cream): page background, label paper, text on tin, the seal's ground.
- **Deep Cream** (cream-deep): alternate paper bands so consecutive paper sections read as separate sheets.
- **Warm Beige** (warm-beige): quiet text on teal (location line, footer tagline, arrow links on tin).
- **Deep Charcoal** (deep-charcoal): body text on paper; text on gold.
- **Muted Slate** (muted-slate): secondary text on paper (descriptions, notes, inactive category tabs).
- **Tin Mist** (on-tin-muted): secondary text and inactive nav on teal.

### Named Rules
**The Two Fields Rule.** Every band is either solid teal tin or solid cream paper (or their deep variants). No photo backgrounds, no overlays, no gradients.

**The Gold Is Ink Rule.** Ancient Gold draws rules, borders, ornaments and marks. When gold must carry small text on cream, use Gold Ink instead.

**The Olive Means Book Rule.** Olive fills are reserved for the booking action and its echoes; nothing decorative is olive.

## Typography

**Display Font:** Cinzel (500/600/700), with GFS Didot ahead of it for Greek glyphs only, serif fallback
**Body Font:** Plus Jakarta Sans (400 to 700), with Commissioner ahead of it for Greek glyphs only, sans-serif fallback

**Character:** Cinzel is an inscriptional capital face, so the display voice reads as lettering cut or printed on a label; the sans body keeps menus, prices and forms plain and fast on a phone. All four faces are self-hosted at build time.

### Hierarchy
- **Display** (600, clamp 2.125 to 3.875rem, 1.15): H1 on the hero and page heroes, held to about 16 to 22ch. Greek H1 on the home hero is stepped down to clamp(1.875rem, 1.3rem + 2.2vw, 3.125rem).
- **Headline** (600, clamp 1.75 to 2.75rem, 1.15): H2 section titles and menu category heads (teal on paper).
- **Title** (600, clamp 1.375 to 1.75rem, 1.15): H3; dish names drop to about 1.125 to 1.375rem.
- **Lead** (400, 1.25rem, 1.55): hero and page-hero subtitles.
- **Body** (400, 1.0625rem, 1.65): running copy, held to 50 to 62ch.
- **Label** (600, 0.8125rem, 0.08 to 0.12em tracking, uppercase): navigation, category tabs, counts, footer column titles. Buttons use the same voice at 0.9375rem, 0.06em.
- **Price** (600, tabular lining numerals, teal): every price.

### Named Rules
**The Greek Capitals Rule.** Under `lang="el"`, display headings and drawer links are set in GFS Didot capitals with 0.035em tracking, letting the browser drop the tonos accents as Greek typesetting requires.

**The Display-Is-Display Rule.** Cinzel sets headings, the brand name, the seal and the hero lockup line only. Paragraphs, prices, buttons and form text are always the body face.

## Layout

A single centred container (max 1200px, fluid gutter) inside full-bleed colour bands. Sections breathe on a fluid section padding (4 to 8rem; tight bands at 0.6x). Content bands are mostly asymmetric two-column grids that collapse to one column under 960px: copy against a framed photo (roughly 5fr/7fr or 1.05fr/1fr), with the framed photo sticky on the home dishes band. The header is sticky at 72px with a full nav from 1120px and a native-dialog drawer below it; the menu adds a sticky, horizontally scrolling category bar under the header. Forms run one, two (600px) and three (1200px) columns.

The home hero lockup line sits directly under the H1: gold Cinzel capitals with a short double rule on the left and a stretching double rule on the right; under 600px the side rules give way to full-width gold hairlines above and below so the line can wrap. The pillars strip is compact: three columns separated by gold hairlines on desktop, a stacked ruled list on mobile.

## Elevation & Depth

Flat by default; depth comes from the alternation of tin and paper and from nested gold rules, not from shadow. Three ambient shadows exist, each tied to something that genuinely sits above the page.

### Shadow Vocabulary
- **Seal drop** (`filter: drop-shadow(0 10px 18px rgb(5 25 29 / 0.45))`): the stamped seal lifting off the hero frame.
- **Dropdown** (`box-shadow: 0 12px 30px -12px rgb(10 44 50 / 0.45)`): the language menu.
- **Sticky edge** (`box-shadow: 0 8px 16px -14px rgb(10 44 50 / 0.5)`): the sticky menu category bar.

### Named Rules
**The Printed Depth Rule.** Panels, frames and cards never take a shadow; they are printed on the field. Shadows belong only to things that float (seal, dropdown, sticky bar).

## Shapes

Two shape languages, both printed. Large framed things (photo windows, label panels) take octagonal cut corners via clip-path: frames cut 18px, label panels 24px, and each nested inset shortens its cut by inset x (sqrt 2 - 1) so diagonals stay parallel. Small interactive things (buttons, chips, badges, fields) are square-shouldered tabs with a 2px radius. The only round forms are the oval seal and the map dots. Ornament is the gold 7px diamond and the meander key.

**The Parallel Diagonals Rule.** A nested octagon's cut is the outer cut minus inset x 0.414; never eyeball it, or the double rule pinches at the corners.

## Components

### Buttons
Olive tabs with a gold keyline, like a pressed price tag.
- **Shape:** square-shouldered tab (2px), min height 48px (44px in the header).
- **Primary:** olive fill, cream uppercase label (600, 0.9375rem, 0.06em), 1px gold border plus an inset second keyline (3px of fill, then 1px gold at 55%).
- **Hover / Active:** fill deepens to dark olive over 320ms; active presses down 1px. Focus is the global 2px gold outline, 3px offset (teal inside paper).
- **Line on tin:** transparent with gold border and cream text; hover tints with 16% gold.
- **Line on paper:** transparent with teal border and teal text; hover fills teal with cream text.
- **Gold:** gold fill, charcoal text, charcoal-tinted inner keyline; secondary highlight action.
- **Arrow link:** teal (beige on tin) 600 text with a gold underline; the arrow slides 4px on hover.

### Chips
- **Style:** square 2px tab, cream fill, teal text, 1px teal border at 35%, 44px tall, optional 18px icon.
- **State:** pressed fills teal with cream text; hover firms the border to full teal; the reset chip is dashed and slate.

### Badges
- **Style:** square 2px outline in currentColor, 0.75rem 600 text, inline icon. Gold Ink by default (chef or family recommendations), Dark Olive for dietary, Brick for spicy.

### Cards / Containers
- **Label panel:** cream paper with 24px octagon cut and an inner gold hairline octagon 8px in; generous fluid padding. Sits on tin and may overlap a neighbouring frame on desktop.
- **Frame (label window):** nested octagons: 1px gold rule, 4px ground gap, 1px gold rule, 4px ground gap, photo. The gap takes the ground colour of the band it sits on.
- **Shadow Strategy:** none (see Elevation).

### Inputs / Fields
- **Style:** cream fill, 1px teal border at 30%, 2px radius, 48px min height, 1rem text; teal 600 labels above at 0.875rem, required marker in Gold Ink.
- **Native controls:** selects drop the native arrow for a teal chevron; the date input uses a teal calendar glyph.
- **Focus:** border becomes full teal with a 3px gold halo at 45%.
- **Error:** brick border and brick 600 message beneath.

### Navigation
- **Header:** teal tin, logo mark plus "Alli Fasi" in Cinzel with "Rodos · 1907" in tracked gold capitals. Nav links are uppercase labels in tin mist; hover and current turn cream and draw a gold 1px underline from the left.
- **Language switch:** a details menu opening a cream sheet with a gold rule border.
- **Mobile:** a left drawer (native dialog) in teal with Cinzel/Didot links on teal hairlines, menu categories indented on a gold left rule, and a full-width Reserve tab.
- **Menu category bar:** sticky cream bar, uppercase slate labels, active tab teal with a 3px gold underline.

### Price Row (signature)
Dish name, a dotted gold leader that fills the gap, then a tabular teal price, with the description in slate beneath and gold hairlines between rows. Category heads are teal headlines over a 2px teal rule doubled by a 1px gold rule beneath.

### Seal (signature)
An oval cartouche: cream ground, gold double ring and inner thin ring, "ALLI FASI · KALATHOS" and "RODOS" set on the arcs in tracked Cinzel, "1907" in teal at the centre. It overlaps the hero frame's lower-left corner and stacks above it.

### Meander Band (signature)
A 24px Greek key pattern in gold (1.6px stroke) running full width at the edges of tin fields: the hero and page heroes.

### Heading Ornament
A gold 7px diamond between two 40px hairlines, placed above section headings; decorative and hidden from assistive tech, never carrying text.

### Motion
One reveal grammar: fade plus 18px rise over 800ms on the expo-out curve, staggered 90ms, played once from a visible default. The hero prints once (gold rules ink in from teal, the photo settles from 1.04 scale, the seal stamps from 1.35x and -8 degrees). Everything is static under reduced motion.

## Do's and Don'ts

### Do:
- **Do** alternate solid teal tin and cream paper bands; use the deep variants to separate two neighbouring bands of the same field.
- **Do** put every photograph in the gold double-rule octagon frame, with its gap matching the band behind it.
- **Do** set prices with a dotted gold leader and tabular lining numerals in teal.
- **Do** use Gold Ink, not Ancient Gold, for any small text on cream.
- **Do** keep buttons, chips, badges and fields as square 2px tabs with a 44 to 48px target.
- **Do** set Greek display headings in GFS Didot capitals.
- **Do** keep motion to the one reveal grammar and the single hero print, and make both static under reduced motion.

### Don't:
- **Don't** use a full-bleed photo with a dark overlay and a centred script headline.
- **Don't** use glass, backdrop blur, gradients or emoji.
- **Don't** round the frames or panels; large forms take octagonal cuts, never radii.
- **Don't** give printed panels or frames a shadow; shadows are for floating things only.
- **Don't** fill decorative elements with olive; olive means booking.
- **Don't** set paragraphs, prices or form text in Cinzel.
