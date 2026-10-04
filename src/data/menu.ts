/**
 * The full Alli Fasi menu, transcribed from web-info/menu.md (the source of
 * truth for names, numbers and prices). Dish names stay as printed on the
 * menu; descriptions are translated. Tags are only set where the menu text
 * itself says so (gluten free, vegan, spicy, "Father's Speciality", etc.).
 */
import type { Lang } from '../i18n/config';

export type Tag = 'father' | 'chef' | 'vegan' | 'glutenFree' | 'spicy' | 'friSat';

type Text = Record<Lang, string>;

export interface PriceOption {
  label: Text;
  price: number;
}

export interface MenuItem {
  n: number;
  name: string;
  desc: Text;
  /** Single price in euro, or several portion options. */
  price: number | PriceOption[];
  tags?: Tag[];
  /** Extra note printed under the description (e.g. allergen remark). */
  note?: Text;
}

export interface MenuCategory {
  id: string;
  title: Text;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: 'starters',
    title: {
      en: 'Starters & Side Dishes',
      el: 'Ορεκτικά & Συνοδευτικά',
      de: 'Vorspeisen & Beilagen',
      fr: 'Entrées & accompagnements',
    },
    items: [
      {
        n: 1,
        name: 'Rhodian Pita Bread',
        price: 3.0,
        desc: {
          en: 'Local Rhodian thin oil pita (2 pitas / pieces)',
          el: 'Τοπική λεπτή ροδίτικη πίτα με λάδι (2 πίτες / κομμάτια)',
          de: 'Dünnes Fladenbrot aus Rhodos mit Olivenöl (2 Stück)',
          fr: 'Fine pita rhodienne à l’huile d’olive (2 pitas / pièces)',
        },
      },
      {
        n: 2,
        name: 'Perikafti - Grilled Bread',
        price: 3.0,
        desc: {
          en: 'Greek village bread with olive oil, salt and oregano (8 pieces)',
          el: 'Χωριάτικο ψωμί με ελαιόλαδο, αλάτι και ρίγανη (8 κομμάτια)',
          de: 'Griechisches Dorfbrot mit Olivenöl, Salz und Oregano (8 Stück)',
          fr: 'Pain de campagne grec à l’huile d’olive, sel et origan (8 morceaux)',
        },
      },
      {
        n: 3,
        name: 'Mix of Breads',
        price: 3.0,
        desc: {
          en: 'Pita and Perikafti (8 pieces)',
          el: 'Πίτα και περικαυτή (8 κομμάτια)',
          de: 'Pita und Perikafti (8 Stück)',
          fr: 'Pita et perikafti (8 morceaux)',
        },
      },
      {
        n: 4,
        name: 'Gluten Free Pita',
        price: 3.5,
        tags: ['glutenFree'],
        desc: {
          en: '1 pita',
          el: '1 πίτα',
          de: '1 Pita',
          fr: '1 pita',
        },
      },
      {
        n: 5,
        name: 'Tzatziki',
        price: 4.9,
        desc: {
          en: 'Traditional Greek yogurt, cucumber and garlic dip',
          el: 'Παραδοσιακό ντιπ με ελληνικό γιαούρτι, αγγούρι και σκόρδο',
          de: 'Traditioneller Dip aus griechischem Joghurt, Gurke und Knoblauch',
          fr: 'Sauce traditionnelle au yaourt grec, concombre et ail',
        },
      },
      {
        n: 6,
        name: 'Fava',
        price: 5.5,
        desc: {
          en: 'Yellow split pea puree drizzled with olive oil',
          el: 'Πουρές από φάβα με ελαιόλαδο',
          de: 'Püree aus gelben Spalterbsen mit Olivenöl',
          fr: 'Purée de pois cassés jaunes arrosée d’huile d’olive',
        },
      },
      {
        n: 7,
        name: 'Eggplant Salad',
        price: 5.0,
        desc: {
          en: 'Traditional smoked eggplant dip',
          el: 'Παραδοσιακή μελιτζανοσαλάτα από καπνιστή μελιτζάνα',
          de: 'Traditioneller Dip aus geräucherter Aubergine',
          fr: 'Caviar d’aubergine fumée traditionnel',
        },
      },
      {
        n: 8,
        name: 'Eggplant Salad with Feta',
        price: 5.8,
        desc: {
          en: 'Eggplant salad topped with crumbled feta',
          el: 'Μελιτζανοσαλάτα με τριμμένη φέτα',
          de: 'Auberginen-Dip mit zerbröseltem Feta',
          fr: 'Caviar d’aubergine parsemé de feta émiettée',
        },
      },
      {
        n: 9,
        name: 'Spicy Mixed Cheese Dip',
        price: 4.9,
        tags: ['spicy'],
        desc: {
          en: 'Tirokafteri - spicy cheese spread',
          el: 'Τυροκαυτερή - πικάντικη αλοιφή τυριών',
          de: 'Tirokafteri – scharfer Käseaufstrich',
          fr: 'Tirokafteri – crème de fromages relevée',
        },
      },
      {
        n: 10,
        name: 'Taramasalata',
        price: 4.9,
        desc: {
          en: 'Fish roe dip',
          el: 'Ντιπ από αυγοτάραχο (ταραμάς)',
          de: 'Dip aus Fischrogen',
          fr: 'Crème d’œufs de poisson',
        },
      },
      {
        n: 11,
        name: 'Mix Dip Plate',
        price: [
          { label: { en: '4 dips', el: '4 ντιπ', de: '4 Dips', fr: '4 sauces' }, price: 10.9 },
          { label: { en: '5 dips', el: '5 ντιπ', de: '5 Dips', fr: '5 sauces' }, price: 12.9 },
        ],
        desc: {
          en: 'Choice of dips (Tzatziki, Fava, Eggplant Salad, Spicy Mix Cheese Dip, Taramasalata) served with olives',
          el: 'Επιλογή από ντιπ (τζατζίκι, φάβα, μελιτζανοσαλάτα, τυροκαυτερή, ταραμοσαλάτα) με ελιές',
          de: 'Auswahl an Dips (Tzatziki, Fava, Auberginen-Dip, scharfer Käse-Dip, Taramasalata) mit Oliven',
          fr: 'Choix de sauces (tzatziki, fava, caviar d’aubergine, crème de fromages relevée, tarama) servies avec des olives',
        },
      },
      {
        n: 12,
        name: 'Fried Mushrooms with Garlic',
        price: 7.9,
        desc: {
          en: 'Mushrooms sautéed with garlic',
          el: 'Μανιτάρια σοταρισμένα με σκόρδο',
          de: 'In Knoblauch gebratene Pilze',
          fr: 'Champignons sautés à l’ail',
        },
      },
      {
        n: 13,
        name: 'Fasolada',
        price: 7.9,
        tags: ['father'],
        desc: {
          en: 'Beans in tomato sauce with carrot, onion, garlic and herbs',
          el: 'Φασόλια σε σάλτσα ντομάτας με καρότο, κρεμμύδι, σκόρδο και μυρωδικά',
          de: 'Bohnen in Tomatensauce mit Karotte, Zwiebel, Knoblauch und Kräutern',
          fr: 'Haricots à la sauce tomate, carotte, oignon, ail et herbes',
        },
      },
      {
        n: 14,
        name: 'Zucchini Balls',
        price: 7.5,
        desc: {
          en: 'Delicious zucchini fritters (6 pieces)',
          el: 'Λαχταριστοί κολοκυθοκεφτέδες (6 τεμάχια)',
          de: 'Köstliche Zucchinibällchen (6 Stück)',
          fr: 'Délicieux beignets de courgette (6 pièces)',
        },
      },
      {
        n: 15,
        name: 'Cheese Balls',
        price: 6.0,
        desc: {
          en: 'Delicious mix of cheeses with crumb coating (6 pieces)',
          el: 'Τυροκροκέτες από μείγμα τυριών με πανάρισμα (6 τεμάχια)',
          de: 'Panierte Bällchen aus einer Käsemischung (6 Stück)',
          fr: 'Croquettes panées à base de plusieurs fromages (6 pièces)',
        },
      },
      {
        n: 16,
        name: 'Bouyiourdi / Spicy Bouyiourdi',
        price: 7.9,
        tags: ['spicy'],
        desc: {
          en: 'Feta baked on cooktop with tomatoes, onions, garlic and peppers, topped with olive oil & oregano (Spicy version includes spicy peppers and chili flakes)',
          el: 'Φέτα ψημένη με ντομάτα, κρεμμύδι, σκόρδο και πιπεριές, με ελαιόλαδο και ρίγανη (η πικάντικη εκδοχή έχει καυτερές πιπεριές και νιφάδες τσίλι)',
          de: 'Auf dem Herd gebackener Feta mit Tomaten, Zwiebeln, Knoblauch und Paprika, mit Olivenöl und Oregano (die scharfe Variante mit scharfen Paprika und Chiliflocken)',
          fr: 'Feta cuite avec tomates, oignons, ail et poivrons, arrosée d’huile d’olive et d’origan (version relevée avec piments et flocons de chili)',
        },
      },
      {
        n: 17,
        name: 'Feta in Phyllo Pastry Parcel',
        price: 8.5,
        desc: {
          en: 'Feta wrapped in phyllo pastry topped with honey and sesame seeds (sweet & salty)',
          el: 'Φέτα τυλιγμένη σε φύλλο με μέλι και σουσάμι (γλυκό & αλμυρό)',
          de: 'Feta im Filoteig mit Honig und Sesam (süß & salzig)',
          fr: 'Feta en feuille de filo, miel et graines de sésame (sucré-salé)',
        },
      },
      {
        n: 18,
        name: 'Cook Top Spicy Feta',
        price: 6.9,
        tags: ['spicy'],
        desc: {
          en: 'Feta baked on cooktop with spicy peppers, olive oil and oregano',
          el: 'Φέτα ψημένη με καυτερές πιπεριές, ελαιόλαδο και ρίγανη',
          de: 'Auf dem Herd gebackener Feta mit scharfen Paprika, Olivenöl und Oregano',
          fr: 'Feta cuite avec piments, huile d’olive et origan',
        },
      },
      {
        n: 19,
        name: 'Feta Cheese',
        price: 4.9,
        desc: {
          en: 'Served with a drizzle of fresh olive oil and oregano',
          el: 'Σερβίρεται με φρέσκο ελαιόλαδο και ρίγανη',
          de: 'Mit frischem Olivenöl und Oregano serviert',
          fr: 'Servie avec un filet d’huile d’olive et de l’origan',
        },
      },
      {
        n: 20,
        name: 'Fresh Scrambled Eggs with Feta',
        price: 6.9,
        desc: {
          en: 'Scrambled eggs cooked with feta cheese',
          el: 'Ομελέτα «στραπατσάδα» με φέτα',
          de: 'Rührei mit Feta',
          fr: 'Œufs brouillés à la feta',
        },
      },
      {
        n: 21,
        name: 'Fresh Scrambled Eggs with Sausages',
        price: 6.9,
        desc: {
          en: 'Scrambled eggs cooked with Greek sausages',
          el: 'Αυγά στραπατσάδα με ελληνικά λουκάνικα',
          de: 'Rührei mit griechischen Würstchen',
          fr: 'Œufs brouillés aux saucisses grecques',
        },
      },
      {
        n: 22,
        name: 'Fresh Scrambled Eggs with Feta & Sausages',
        price: 9.5,
        desc: {
          en: 'Scrambled eggs with both feta cheese and sausages',
          el: 'Αυγά στραπατσάδα με φέτα και λουκάνικα',
          de: 'Rührei mit Feta und Würstchen',
          fr: 'Œufs brouillés à la feta et aux saucisses',
        },
      },
      {
        n: 23,
        name: 'Plain Omelette',
        price: 7.0,
        desc: {
          en: 'Classic egg omelette',
          el: 'Κλασική ομελέτα',
          de: 'Klassisches Omelett',
          fr: 'Omelette classique',
        },
      },
      {
        n: 24,
        name: 'Omelette with Feta',
        price: 8.0,
        desc: {
          en: 'Omelette with specially grilled feta',
          el: 'Ομελέτα με ειδικά ψημένη φέτα',
          de: 'Omelett mit besonders gegrilltem Feta',
          fr: 'Omelette à la feta grillée',
        },
      },
      {
        n: 25,
        name: 'Omelette Special',
        price: 9.9,
        desc: {
          en: 'Omelette with specially grilled feta and grilled sausage',
          el: 'Ομελέτα με ειδικά ψημένη φέτα και ψητό λουκάνικο',
          de: 'Omelett mit gegrilltem Feta und gegrillter Wurst',
          fr: 'Omelette à la feta grillée et saucisse grillée',
        },
      },
      {
        n: 26,
        name: 'Plain Boiled Rice',
        price: 3.9,
        desc: {
          en: 'Side dish',
          el: 'Συνοδευτικό',
          de: 'Beilage',
          fr: 'Accompagnement',
        },
      },
      {
        n: 27,
        name: 'French Fries',
        price: 4.8,
        desc: {
          en: 'Fresh hand-cut potatoes with salt and oregano',
          el: 'Φρέσκες πατάτες κομμένες στο χέρι με αλάτι και ρίγανη',
          de: 'Frische, handgeschnittene Kartoffeln mit Salz und Oregano',
          fr: 'Pommes de terre fraîches coupées main, sel et origan',
        },
      },
      {
        n: 28,
        name: 'French Fries & 3 Fresh Fried Eggs',
        price: 9.9,
        desc: {
          en: 'Fresh hand-cut fries topped with 3 fried eggs',
          el: 'Φρέσκες πατάτες με 3 τηγανητά αυγά',
          de: 'Frische Pommes mit 3 Spiegeleiern',
          fr: 'Frites fraîches coupées main et 3 œufs au plat',
        },
      },
      {
        n: 29,
        name: 'French Fries, 3 Eggs & Sausage',
        price: 12.5,
        desc: {
          en: 'Fresh hand-cut fries, 3 fried eggs and grilled sausage',
          el: 'Φρέσκες πατάτες, 3 τηγανητά αυγά και ψητό λουκάνικο',
          de: 'Frische Pommes, 3 Spiegeleier und gegrillte Wurst',
          fr: 'Frites fraîches, 3 œufs au plat et saucisse grillée',
        },
      },
      {
        n: 30,
        name: 'Alli Fasi Homemade Green Olives',
        price: 4.0,
        desc: {
          en: 'Locally prepared green olives',
          el: 'Πράσινες ελιές τοπικής παρασκευής',
          de: 'Hier vor Ort eingelegte grüne Oliven',
          fr: 'Olives vertes préparées sur place',
        },
      },
      {
        n: 31,
        name: 'Spicy Grilled Peppers',
        price: 4.0,
        tags: ['spicy'],
        desc: {
          en: 'Served with olive oil and vinegar',
          el: 'Σερβίρονται με ελαιόλαδο και ξίδι',
          de: 'Mit Olivenöl und Essig serviert',
          fr: 'Servis avec huile d’olive et vinaigre',
        },
      },
    ],
  },
  {
    id: 'salads',
    title: {
      en: 'Salads & Greens',
      el: 'Σαλάτες & Χόρτα',
      de: 'Salate & Grünes',
      fr: 'Salades & légumes verts',
    },
    items: [
      {
        n: 32,
        name: 'Seasonal Fresh Green Beans or Horta',
        price: 6.9,
        desc: {
          en: 'Fresh green beans from our farm OR Horta (seasonal boiled wild greens) drizzled with olive oil',
          el: 'Φρέσκα φασολάκια από το κτήμα μας Ή χόρτα (βραστά άγρια χόρτα εποχής) με ελαιόλαδο',
          de: 'Frische grüne Bohnen von unserem Hof ODER Horta (gekochtes Wildgemüse der Saison) mit Olivenöl',
          fr: 'Haricots verts frais de notre ferme OU horta (herbes sauvages bouillies de saison), arrosés d’huile d’olive',
        },
      },
      {
        n: 33,
        name: 'Patzaria - Beetroot Slices',
        price: 6.9,
        desc: {
          en: 'Beetroot slices served with a garlic sauce',
          el: 'Παντζάρια σε φέτες με σκορδαλιά',
          de: 'Rote-Bete-Scheiben mit Knoblauchsauce',
          fr: 'Tranches de betterave, sauce à l’ail',
        },
      },
      {
        n: 34,
        name: 'Greek Salad',
        price: 9.9,
        desc: {
          en: 'Tomatoes, onions, cucumber, rocket, peppers, olives, spearmint, feta, olive oil and oregano',
          el: 'Ντομάτα, κρεμμύδι, αγγούρι, ρόκα, πιπεριά, ελιές, δυόσμος, φέτα, ελαιόλαδο και ρίγανη',
          de: 'Tomaten, Zwiebeln, Gurke, Rucola, Paprika, Oliven, grüne Minze, Feta, Olivenöl und Oregano',
          fr: 'Tomates, oignons, concombre, roquette, poivrons, olives, menthe verte, feta, huile d’olive et origan',
        },
      },
      {
        n: 35,
        name: 'Dakos Salad',
        price: 9.9,
        desc: {
          en: 'Traditional dried Cretan barley rusk topped with tomatoes, feta, olive oil and oregano',
          el: 'Παραδοσιακό κρητικό κριθαρένιο παξιμάδι με ντομάτα, φέτα, ελαιόλαδο και ρίγανη',
          de: 'Traditioneller kretischer Gerstenzwieback mit Tomaten, Feta, Olivenöl und Oregano',
          fr: 'Biscotte d’orge crétoise traditionnelle, tomates, feta, huile d’olive et origan',
        },
      },
      {
        n: 36,
        name: 'Green Salad',
        price: 8.9,
        desc: {
          en: 'Lettuce, rocket, spinach, dill and spring onions topped with olive oil, vinegar and balsamic vinegar',
          el: 'Μαρούλι, ρόκα, σπανάκι, άνηθος και φρέσκα κρεμμυδάκια με ελαιόλαδο, ξίδι και βαλσάμικο',
          de: 'Kopfsalat, Rucola, Spinat, Dill und Frühlingszwiebeln mit Olivenöl, Essig und Balsamico',
          fr: 'Laitue, roquette, épinards, aneth et oignons nouveaux, huile d’olive, vinaigre et vinaigre balsamique',
        },
      },
      {
        n: 37,
        name: 'Tuna Salad',
        price: 13.5,
        desc: {
          en: 'Tomatoes, onions, cucumber, rocket, peppers, spearmint, lettuce, olives and tuna, topped with olive oil & oregano',
          el: 'Ντομάτα, κρεμμύδι, αγγούρι, ρόκα, πιπεριά, δυόσμος, μαρούλι, ελιές και τόνος, με ελαιόλαδο και ρίγανη',
          de: 'Tomaten, Zwiebeln, Gurke, Rucola, Paprika, grüne Minze, Kopfsalat, Oliven und Thunfisch mit Olivenöl und Oregano',
          fr: 'Tomates, oignons, concombre, roquette, poivrons, menthe verte, laitue, olives et thon, huile d’olive et origan',
        },
      },
    ],
  },
  {
    id: 'seafood',
    title: {
      en: 'Seafood',
      el: 'Θαλασσινά',
      de: 'Fisch & Meeresfrüchte',
      fr: 'Produits de la mer',
    },
    items: [
      {
        n: 38,
        name: 'Whole Calamari',
        price: 17.8,
        desc: {
          en: 'Large whole calamari fried, juicy and tender',
          el: 'Μεγάλο ολόκληρο καλαμάρι τηγανητό, ζουμερό και τρυφερό',
          de: 'Großer ganzer Tintenfisch, frittiert, saftig und zart',
          fr: 'Grand calamar entier frit, juteux et tendre',
        },
      },
      {
        n: 39,
        name: 'Cuttlefish with Orzo in Squid Ink',
        price: 16.5,
        tags: ['father'],
        desc: {
          en: 'Slow-cooked cuttlefish with klitharaki (Orzo pasta) in natural squid ink',
          el: 'Σουπιά σιγομαγειρεμένη με κριθαράκι στο μελάνι της',
          de: 'Langsam geschmorte Sepia mit Kritharaki (Orzo-Nudeln) in natürlicher Tintenfischtinte',
          fr: 'Seiche mijotée avec des kritharaki (pâtes orzo) à l’encre naturelle',
        },
      },
      {
        n: 40,
        name: 'Steamed Mussels',
        price: 14.9,
        desc: {
          en: 'In signature "Alli Fasi" garlic, herb and white wine broth',
          el: 'Σε ζωμό «Alli Fasi» με σκόρδο, μυρωδικά και λευκό κρασί',
          de: 'Im Sud nach Art des Hauses „Alli Fasi“ mit Knoblauch, Kräutern und Weißwein',
          fr: 'Dans le bouillon maison « Alli Fasi » à l’ail, aux herbes et au vin blanc',
        },
      },
      {
        n: 41,
        name: 'Octopus in Vinegar',
        price: 14.0,
        desc: {
          en: 'Octopus slow-cooked with olive oil vinaigrette',
          el: 'Χταπόδι σιγομαγειρεμένο με λαδόξιδο',
          de: 'Langsam gegarter Oktopus mit Olivenöl-Vinaigrette',
          fr: 'Poulpe mijoté, vinaigrette à l’huile d’olive',
        },
      },
      {
        n: 42,
        name: 'Fried Shrimps from Lindos',
        price: 14.9,
        desc: {
          en: 'Speciality of local tiny shrimps eaten whole with shell (without head)',
          el: 'Σπεσιαλιτέ με τοπικές μικρές γαρίδες που τρώγονται ολόκληρες με το κέλυφος (χωρίς κεφάλι)',
          de: 'Spezialität aus kleinen lokalen Garnelen, die ganz mit Schale gegessen werden (ohne Kopf)',
          fr: 'Spécialité de petites crevettes locales qui se mangent entières avec la carapace (sans tête)',
        },
      },
      {
        n: 43,
        name: 'Shrimp Saganaki',
        price: 14.0,
        tags: ['chef'],
        desc: {
          en: 'Shrimps combined with fresh tomato, onion, peppers and feta (without shell and head)',
          el: 'Γαρίδες με φρέσκια ντομάτα, κρεμμύδι, πιπεριές και φέτα (χωρίς κέλυφος και κεφάλι)',
          de: 'Garnelen mit frischer Tomate, Zwiebel, Paprika und Feta (ohne Schale und Kopf)',
          fr: 'Crevettes à la tomate fraîche, oignon, poivrons et feta (sans carapace ni tête)',
        },
      },
      {
        n: 44,
        name: 'Fried Fish',
        price: 9.9,
        desc: {
          en: 'Small whitebait fishes fried crisp',
          el: 'Μικρά ψαράκια (μαρίδα) τηγανητά και τραγανά',
          de: 'Kleine, knusprig frittierte Fischchen',
          fr: 'Petits poissons (friture) frits et croustillants',
        },
      },
      {
        n: 45,
        name: 'Salted Anchovies',
        price: 4.5,
        desc: {
          en: 'Whole salted anchovies',
          el: 'Ολόκληροι αλατισμένοι γαύροι',
          de: 'Ganze gesalzene Sardellen',
          fr: 'Anchois entiers salés',
        },
      },
      {
        n: 46,
        name: 'Marinated Anchovies',
        price: 6.5,
        desc: {
          en: 'Fillets in garlic and parsley infused oil',
          el: 'Φιλέτα σε λάδι αρωματισμένο με σκόρδο και μαϊντανό',
          de: 'Filets in Öl mit Knoblauch und Petersilie',
          fr: 'Filets dans une huile parfumée à l’ail et au persil',
        },
      },
      {
        n: 47,
        name: 'Smoked Marinated Mackerel',
        price: 7.5,
        desc: {
          en: 'Smoked mackerel preserved in oil',
          el: 'Καπνιστό σκουμπρί διατηρημένο σε λάδι',
          de: 'Geräucherte Makrele in Öl eingelegt',
          fr: 'Maquereau fumé conservé à l’huile',
        },
      },
      {
        n: 48,
        name: 'Kolios',
        price: 6.9,
        tags: ['father'],
        desc: {
          en: 'Fillet of mackerel fish cured in salt for a minimum of 2 years',
          el: 'Φιλέτο κολιού παστωμένο στο αλάτι για τουλάχιστον 2 χρόνια',
          de: 'Makrelenfilet, mindestens 2 Jahre in Salz gereift',
          fr: 'Filet de maquereau affiné au sel pendant au moins 2 ans',
        },
      },
      {
        n: 49,
        name: 'Mixed Plate of Salted & Marinated Fish',
        price: 14.5,
        desc: {
          en: 'Selection of cured and marinated fish delicacies',
          el: 'Ποικιλία από παστά και μαριναρισμένα ψάρια',
          de: 'Auswahl an gesalzenen und marinierten Fischspezialitäten',
          fr: 'Assortiment de poissons salés et marinés',
        },
      },
    ],
  },
  {
    id: 'meat',
    title: {
      en: 'Meat Dishes',
      el: 'Κρεατικά',
      de: 'Fleischgerichte',
      fr: 'Viandes',
    },
    items: [
      {
        n: 50,
        name: 'Pork Tigania',
        price: 14.9,
        desc: {
          en: 'Pan-fried pork with mushrooms, onion, and green peppers (300g meat)',
          el: 'Χοιρινή τηγανιά με μανιτάρια, κρεμμύδι και πράσινες πιπεριές (300 γρ. κρέας)',
          de: 'In der Pfanne gebratenes Schweinefleisch mit Pilzen, Zwiebeln und grüner Paprika (300 g Fleisch)',
          fr: 'Porc poêlé aux champignons, oignon et poivrons verts (300 g de viande)',
        },
      },
      {
        n: 51,
        name: 'Chicken Tigania with Feta',
        price: 16.0,
        desc: {
          en: 'Pan-fried chicken with coloured peppers, mushrooms, garlic and melted feta (300g meat)',
          el: 'Κοτόπουλο τηγανιά με χρωματιστές πιπεριές, μανιτάρια, σκόρδο και λιωμένη φέτα (300 γρ. κρέας)',
          de: 'In der Pfanne gebratenes Hähnchen mit bunter Paprika, Pilzen, Knoblauch und geschmolzenem Feta (300 g Fleisch)',
          fr: 'Poulet poêlé aux poivrons colorés, champignons, ail et feta fondue (300 g de viande)',
        },
      },
      {
        n: 52,
        name: 'Chicken Tigania',
        price: 15.5,
        desc: {
          en: 'Pan-fried chicken with coloured peppers, mushrooms and garlic (300g meat)',
          el: 'Κοτόπουλο τηγανιά με χρωματιστές πιπεριές, μανιτάρια και σκόρδο (300 γρ. κρέας)',
          de: 'In der Pfanne gebratenes Hähnchen mit bunter Paprika, Pilzen und Knoblauch (300 g Fleisch)',
          fr: 'Poulet poêlé aux poivrons colorés, champignons et ail (300 g de viande)',
        },
      },
      {
        n: 53,
        name: 'Grilled Sausage',
        price: [
          { label: { en: '1 piece', el: '1 τεμάχιο', de: '1 Stück', fr: '1 pièce' }, price: 3.5 },
          { label: { en: '2 pieces', el: '2 τεμάχια', de: '2 Stück', fr: '2 pièces' }, price: 7.0 },
        ],
        desc: {
          en: 'Traditional grilled Greek sausage',
          el: 'Παραδοσιακό ελληνικό λουκάνικο στη σχάρα',
          de: 'Traditionelle gegrillte griechische Wurst',
          fr: 'Saucisse grecque traditionnelle grillée',
        },
      },
      {
        n: 54,
        name: 'Spetsofai',
        price: 9.8,
        tags: ['father', 'spicy'],
        desc: {
          en: 'Spicy sausages with peppers and onions in a rich tomato sauce',
          el: 'Πικάντικα λουκάνικα με πιπεριές και κρεμμύδια σε πλούσια σάλτσα ντομάτας',
          de: 'Würzige Würstchen mit Paprika und Zwiebeln in kräftiger Tomatensauce',
          fr: 'Saucisses relevées aux poivrons et oignons dans une riche sauce tomate',
        },
      },
      {
        n: 55,
        name: 'Sheftalia',
        price: 9.6,
        desc: {
          en: 'Traditional Cypriot pork herbed sausages (3 pieces)',
          el: 'Παραδοσιακές κυπριακές σεφταλιές από χοιρινό με μυρωδικά (3 τεμάχια)',
          de: 'Traditionelle zypriotische Schweinswürstchen mit Kräutern (3 Stück)',
          fr: 'Saucisses chypriotes traditionnelles de porc aux herbes (3 pièces)',
        },
      },
    ],
  },
  {
    id: 'mama',
    title: {
      en: 'Mama’s Specialities',
      el: 'Οι σπεσιαλιτέ της μαμάς',
      de: 'Mamas Spezialitäten',
      fr: 'Les spécialités de maman',
    },
    items: [
      {
        n: 56,
        name: 'Dolmathes',
        price: 8.9,
        desc: {
          en: 'Hand-rolled homemade grape vine leaves stuffed with rice and ground beef',
          el: 'Σπιτικά αμπελόφυλλα τυλιγμένα στο χέρι, γεμιστά με ρύζι και μοσχαρίσιο κιμά',
          de: 'Handgerollte hausgemachte Weinblätter, gefüllt mit Reis und Rinderhack',
          fr: 'Feuilles de vigne maison roulées à la main, farcies de riz et de bœuf haché',
        },
      },
      {
        n: 57,
        name: 'Lahanodolmathes',
        price: 8.5,
        desc: {
          en: 'Hand-rolled homemade cabbage leaves stuffed with rice, ground beef and pork',
          el: 'Σπιτικά λαχανοντολμάδες τυλιγμένοι στο χέρι, με ρύζι, μοσχαρίσιο και χοιρινό κιμά',
          de: 'Handgerollte hausgemachte Kohlblätter, gefüllt mit Reis, Rinder- und Schweinehack',
          fr: 'Feuilles de chou maison roulées à la main, farcies de riz, de bœuf et de porc hachés',
        },
      },
      {
        n: 58,
        name: 'Dolmathes Mixed Plate',
        price: 9.9,
        desc: {
          en: 'Combination of stuffed grape leaves and stuffed cabbage leaves',
          el: 'Συνδυασμός από ντολμάδες και λαχανοντολμάδες',
          de: 'Kombination aus gefüllten Wein- und Kohlblättern',
          fr: 'Assortiment de feuilles de vigne et de feuilles de chou farcies',
        },
      },
      {
        n: 59,
        name: 'Vegan Lahanodolmathes',
        price: 8.5,
        tags: ['vegan'],
        desc: {
          en: 'Hand-rolled homemade cabbage leaves stuffed with rice and vegetables (Vegan friendly)',
          el: 'Σπιτικά λαχανοντολμάδες τυλιγμένοι στο χέρι, γεμιστοί με ρύζι και λαχανικά (κατάλληλοι για vegan)',
          de: 'Handgerollte hausgemachte Kohlblätter, gefüllt mit Reis und Gemüse (vegan)',
          fr: 'Feuilles de chou maison roulées à la main, farcies de riz et de légumes (végan)',
        },
      },
      {
        n: 60,
        name: 'Soustzoukakia',
        price: 9.9,
        desc: {
          en: 'Hand-rolled homemade beef meatballs served in a rich spiced tomato sauce',
          el: 'Σπιτικά σουτζουκάκια από μοσχαρίσιο κιμά σε πλούσια μυρωδάτη σάλτσα ντομάτας',
          de: 'Handgerollte hausgemachte Rindfleischbällchen in kräftig gewürzter Tomatensauce',
          fr: 'Boulettes de bœuf maison roulées à la main, dans une sauce tomate épicée',
        },
      },
    ],
  },
  {
    id: 'desserts',
    title: {
      en: 'Desserts',
      el: 'Γλυκά',
      de: 'Desserts',
      fr: 'Desserts',
    },
    items: [
      {
        n: 61,
        name: 'Traditional Greek Chocolate Cake',
        price: 7.5,
        desc: {
          en: 'Homemade rich eggless chocolate cake with brownie texture, served with chocolate sauce and vanilla ice cream',
          el: 'Σπιτικό πλούσιο κέικ σοκολάτας χωρίς αυγά, με υφή brownie, σάλτσα σοκολάτας και παγωτό βανίλια',
          de: 'Hausgemachter, saftiger Schokoladenkuchen ohne Ei mit Brownie-Textur, Schokoladensauce und Vanilleeis',
          fr: 'Gâteau au chocolat maison sans œufs, texture brownie, sauce chocolat et glace vanille',
        },
      },
      {
        n: 62,
        name: 'Lemon Cake',
        price: 7.5,
        desc: {
          en: 'Homemade lemon drizzle cake served with vanilla ice cream',
          el: 'Σπιτικό κέικ λεμονιού με σιρόπι, με παγωτό βανίλια',
          de: 'Hausgemachter Zitronenkuchen mit Zitronenguss und Vanilleeis',
          fr: 'Gâteau au citron maison nappé de sirop, servi avec une glace vanille',
        },
      },
      {
        n: 63,
        name: 'Traditional Baklava',
        price: 7.5,
        desc: {
          en: 'Layered phyllo pastry filled with chopped walnuts/almonds, sweetened with syrup, served with ice cream',
          el: 'Φύλλα κρούστας με καρύδια/αμύγδαλα και σιρόπι, με παγωτό',
          de: 'Filoteig-Schichten mit gehackten Walnüssen/Mandeln, mit Sirup gesüßt, mit Eis serviert',
          fr: 'Feuilles de filo garnies de noix/amandes hachées, imbibées de sirop, servies avec une glace',
        },
      },
      {
        n: 64,
        name: 'Gluten Free & Vegan Chocolate Cake',
        price: 8.0,
        tags: ['glutenFree', 'vegan'],
        desc: {
          en: 'Homemade GF version of Greek chocolate cake (egg/lactose free) served with vanilla ice cream',
          el: 'Σπιτικό κέικ σοκολάτας χωρίς γλουτένη (χωρίς αυγά/λακτόζη) με παγωτό βανίλια',
          de: 'Hausgemachte glutenfreie Variante des griechischen Schokoladenkuchens (ohne Ei/Laktose) mit Vanilleeis',
          fr: 'Version maison sans gluten du gâteau au chocolat grec (sans œufs ni lactose), servie avec une glace vanille',
        },
        note: {
          en: 'Note: ice cream contains dairy',
          el: 'Σημείωση: το παγωτό περιέχει γαλακτοκομικά',
          de: 'Hinweis: Das Eis enthält Milchprodukte',
          fr: 'Remarque : la glace contient des produits laitiers',
        },
      },
      {
        n: 65,
        name: 'Gluten & Lactose Free Lemon Cake',
        price: 8.0,
        tags: ['glutenFree'],
        desc: {
          en: 'Homemade gluten-free lemon drizzle cake served with ice cream',
          el: 'Σπιτικό κέικ λεμονιού χωρίς γλουτένη και λακτόζη, με παγωτό',
          de: 'Hausgemachter gluten- und laktosefreier Zitronenkuchen mit Eis',
          fr: 'Gâteau au citron maison sans gluten ni lactose, servi avec une glace',
        },
      },
      {
        n: 66,
        name: 'Caramel Cheesecake Special',
        price: 8.0,
        tags: ['friSat'],
        desc: {
          en: 'Alli Fasi signature homemade caramel cheesecake',
          el: 'Το σπιτικό cheesecake καραμέλας του Alli Fasi',
          de: 'Hausgemachter Karamell-Cheesecake nach Art des Alli Fasi',
          fr: 'Le cheesecake caramel maison signature d’Alli Fasi',
        },
      },
    ],
  },
];

/** All items, flat, for lookups by number. */
export const MENU_ITEMS = MENU.flatMap((c) => c.items.map((item) => ({ ...item, category: c.id })));

export function itemByNumber(n: number) {
  const item = MENU_ITEMS.find((i) => i.n === n);
  if (!item) throw new Error(`Menu item ${n} not found`);
  return item;
}
