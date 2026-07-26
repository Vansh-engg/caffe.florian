export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=1400&q=85",
  about: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=85",
  interior: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=85",
  pastry: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=85",
  espresso: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85",
  breakfast: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=85",
  exterior: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=85",
  latte: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=85",
  croissant: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=85",
  pour: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=85",
  beans: "https://images.unsplash.com/photo-1447933603533-0f668893de01?w=600&q=85",
  events: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85",
  stickyChaiCup: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=85",
  stickyBun: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=85",
  stickySandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=85",
  stickySweets: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&q=85",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Specials", href: "/#specials" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Reservations", href: "/#reservations" },
  { label: "Visit Us", href: "/#visit" },
] as const;

export interface SpecialItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  dietary: "veg" | "vegan" | "non-veg";
}

export const SPECIALS_DATA: SpecialItem[] = [
  {
    id: "special-1",
    name: "Kulhad Masala Chai",
    description: "Slow-brewed Assam tea infused with fresh ginger, green cardamom, and tulsi, served in a traditional clay cup.",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
    badge: "Chef's Special",
    dietary: "veg",
  },
  {
    id: "special-2",
    name: "South Indian Filter Coffee",
    description: "Dark roasted Chikmagalur coffee beans decocted through stainless steel filter, frothed with hot milk.",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1447933603533-0f668893de01?w=800&q=80",
    badge: "Bestseller",
    dietary: "veg",
  },
  {
    id: "special-3",
    name: "Paneer Tikka Charcoal Toastie",
    description: "Char-grilled cottage cheese cubes tossed in mint chutney, layered between toasted sourdough slices.",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
    badge: "House Favorite",
    dietary: "veg",
  },
  {
    id: "special-4",
    name: "Irani Bun Maska & Mawa Cake",
    description: "Soft warm bun slathered with salted Amul butter, paired with a cardamom-scented slice of fresh Mawa cake.",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    badge: "Classic",
    dietary: "veg",
  },
  {
    id: "special-5",
    name: "Kashmiri Saffron Kahwa",
    description: "Green tea leaves simmered with Kashmiri saffron strands, green cardamom pods, and crushed green almonds.",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80",
    badge: "Signature",
    dietary: "vegan",
  },
  {
    id: "special-6",
    name: "Spiced Keema Pav",
    description: "Slow-cooked minced lamb in a rich tomato-onion gravy scented with cloves, served with toasted buttered pav.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    badge: "Chef's Special",
    dietary: "non-veg",
  },
  {
    id: "special-7",
    name: "Rose & Cardamom Cold Brew",
    description: "24-hour steep Arabica cold brew infused with organic Kannauj rose water and freshly crushed cardamom.",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80",
    badge: "New Drop",
    dietary: "vegan",
  },
  {
    id: "special-8",
    name: "Belgian Chocolate Tiramisu",
    description: "House espresso-soaked ladyfingers layered with whipped mascarpone cream and dusted with dark cocoa.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    badge: "Dessert Special",
    dietary: "veg",
  },
];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  dietary: "veg" | "vegan" | "non-veg";
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: MenuItem[];
}

export const COMPLETE_MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "coffee",
    title: "Coffee",
    description: "Single-origin Indian Arabica beans, hand-poured and freshly roasted.",
    icon: "☕",
    items: [
      {
        id: "c-1",
        name: "Classic Cappuccino",
        description: "Equal parts espresso, steamed milk, and velvety micro-foam.",
        price: "₹120",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80",
        dietary: "veg",
      },
      {
        id: "c-2",
        name: "Caffè Latte",
        description: "Double shot espresso with silky smooth steamed milk and subtle latte art.",
        price: "₹130",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
        dietary: "veg",
      },
      {
        id: "c-3",
        name: "Flat White",
        description: "Ristretto double shot blended with velvety micro-foam milk.",
        price: "₹140",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80",
        dietary: "veg",
      },
      {
        id: "c-4",
        name: "Pour Over (Chikmagalur Single Origin)",
        description: "Artisanal hand pour highlighting delicate berry and cacao notes.",
        price: "₹150",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
        dietary: "vegan",
        popular: true,
      },
    ],
  },
  {
    id: "signature-coffee",
    title: "Signature Coffee",
    description: "Curated coffee concoctions crafted exclusively at Caffè Florian.",
    icon: "✨",
    items: [
      {
        id: "sc-1",
        name: "Jaggery & Cardamom Cortado",
        description: "Espresso cut with warm oat milk, organic palm jaggery, and green cardamom.",
        price: "₹160",
        image: "https://images.unsplash.com/photo-1447933603533-0f668893de01?w=600&q=80",
        dietary: "vegan",
        popular: true,
      },
      {
        id: "sc-2",
        name: "Coconut Milk Cold Brew Tonic",
        description: "24-hr steeped cold brew floated over artisanal tonic water and toasted coconut.",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
        dietary: "vegan",
      },
      {
        id: "sc-3",
        name: "Affogato Desi (Kulfi & Espresso)",
        description: "Single shot hot espresso poured over artisanal pistachio kulfi.",
        price: "₹170",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80",
        dietary: "veg",
      },
    ],
  },
  {
    id: "espresso",
    title: "Espresso",
    description: "Pure intense coffee extractions served short and bold.",
    icon: "⚡",
    items: [
      {
        id: "e-1",
        name: "Single Origin Espresso Shot",
        description: "100% Arabica roasted to a medium-dark profile with thick golden crema.",
        price: "₹90",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
        dietary: "vegan",
      },
      {
        id: "e-2",
        name: "Double Espresso Ristretto",
        description: "Concentrated double extraction delivering intense cocoa notes.",
        price: "₹110",
        image: "https://images.unsplash.com/photo-1447933603533-0f668893de01?w=600&q=80",
        dietary: "vegan",
      },
      {
        id: "e-3",
        name: "Espresso Macchiato",
        description: "Double espresso shot marked with a dollop of hot milk foam.",
        price: "₹120",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80",
        dietary: "veg",
      },
    ],
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    description: "Chilled caffeine elixirs for warm afternoons.",
    icon: "🧊",
    items: [
      {
        id: "cc-1",
        name: "Classic Iced Latte",
        description: "Chilled espresso shaken with whole milk and served over clear ice blocks.",
        price: "₹150",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
        dietary: "veg",
      },
      {
        id: "cc-2",
        name: "Vanilla Cold Foam Brew",
        description: "Slow steep cold brew topped with Madagascar vanilla sweet cream foam.",
        price: "₹170",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
        dietary: "veg",
        popular: true,
      },
      {
        id: "cc-3",
        name: "Hazelnut Iced Mocha",
        description: "Espresso blended with Belgian dark cocoa, hazelnut syrup, and cold milk.",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80",
        dietary: "veg",
      },
    ],
  },
  {
    id: "tea",
    title: "Tea",
    description: "Hand-picked Indian teas, spiced chai blends, and fragrant tisanes.",
    icon: "🫖",
    items: [
      {
        id: "t-1",
        name: "Masala Kulhad Chai",
        description: "Authentic ginger-cardamom Assam tea served piping hot in unglazed clay.",
        price: "₹80",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
        dietary: "veg",
        popular: true,
      },
      {
        id: "t-2",
        name: "Kashmiri Saffron Kahwa",
        description: "Green tea steeped with Kashmir saffron strands, cinnamon, and almonds.",
        price: "₹140",
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&q=80",
        dietary: "vegan",
      },
      {
        id: "t-3",
        name: "First Flush Darjeeling Tea",
        description: "Muscatel aroma light amber tea straight from high altitude Darjeeling estates.",
        price: "₹130",
        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&q=80",
        dietary: "vegan",
      },
      {
        id: "t-4",
        name: "Matcha Oat Latte",
        description: "Ceremonial grade Uji Japanese matcha whisked with steamed creamy oat milk.",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
        dietary: "vegan",
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Hearty morning starts, warm breads, and savory plates.",
    icon: "🍳",
    items: [
      {
        id: "b-1",
        name: "Irani Bun Maska",
        description: "Fresh baked brioche bun sliced and thick-spread with salted white butter.",
        price: "₹60",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
        dietary: "veg",
        popular: true,
      },
      {
        id: "b-2",
        name: "Bombay Akuri on Sourdough",
        description: "Parsi style spiced scrambled eggs with onion, tomatoes, and fresh coriander.",
        price: "₹160",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
        dietary: "non-veg",
      },
      {
        id: "b-3",
        name: "Smashed Avocado & Chilli Toast",
        description: "Hass avocado mash, pomegranate arils, and chili oil on grilled sourdough.",
        price: "₹220",
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&q=80",
        dietary: "vegan",
      },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    description: "Pressed paninis, sourdough toasts, and classic Bombay street toasties.",
    icon: "🥪",
    items: [
      {
        id: "s-1",
        name: "Paneer Tikka Charcoal Toastie",
        description: "Tandoori marinated cottage cheese, bell peppers, mint chutney, and mozzarella.",
        price: "₹160",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
        dietary: "veg",
        popular: true,
      },
      {
        id: "s-2",
        name: "Smoked Chicken Pesto Panini",
        description: "Shredded smoked chicken breast, house basil pesto, and melted provolone.",
        price: "₹210",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80",
        dietary: "non-veg",
      },
      {
        id: "s-3",
        name: "Bombay Vegetable Club Sandwich",
        description: "Three-layered toasted sandwich with beetroot, boiled potato, cucumber, and cheese.",
        price: "₹150",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&q=80",
        dietary: "veg",
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    description: "Juicy patties, toasted brioche, and signature house sauces.",
    icon: "🍔",
    items: [
      {
        id: "bg-1",
        name: "Desi Crispy Veggie Burger",
        description: "Spiced potato & herb patty, pickled onion, mint mayo in a toasted brioche bun.",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
        dietary: "veg",
      },
      {
        id: "bg-2",
        name: "Charcoal Fiery Chicken Burger",
        description: "Crispy buttermilk fried chicken, hot honey drizzle, jalapenos, and smoked cheese.",
        price: "₹240",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
        dietary: "non-veg",
        popular: true,
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    description: "Al dente Italian pasta tossed in handcrafted sauces.",
    icon: "🍝",
    items: [
      {
        id: "p-1",
        name: "Penne Creamy Pesto Alfredo",
        description: "Penne pasta in rich garlic cream sauce folded with fresh basil pesto.",
        price: "₹260",
        image: "https://images.unsplash.com/photo-1621996346565-e3def6164286?w=600&q=80",
        dietary: "veg",
      },
      {
        id: "p-2",
        name: "Rigatoni Spicy Arrabbiata",
        description: "San Marzano tomato sauce infused with chili flakes, garlic, and fresh basil.",
        price: "₹240",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80",
        dietary: "vegan",
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    description: "Thin-crust artisanal pizzas wood-fired to perfection.",
    icon: "🍕",
    items: [
      {
        id: "pz-1",
        name: "Neapolitan Margherita",
        description: "San Marzano tomatoes, fresh mozzarella bocconcini, extra virgin olive oil, basil.",
        price: "₹290",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80",
        dietary: "veg",
        popular: true,
      },
      {
        id: "pz-2",
        name: "Garden Veggie & Goat Cheese",
        description: "Roasted zucchini, bell peppers, kalamata olives, sundried tomatoes, goat cheese.",
        price: "₹340",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
        dietary: "veg",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Indulgent sweet creations to conclude your meal.",
    icon: "🍨",
    items: [
      {
        id: "d-1",
        name: "Warm Gulab Jamun with Rabri",
        description: "Soft milk solids fried golden, steeped in cardamom rose syrup with condensed milk.",
        price: "₹140",
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
        dietary: "veg",
      },
      {
        id: "d-2",
        name: "Classic Cinnamon Churros",
        description: "Crispy fried dough dusted in cinnamon sugar, served with warm Belgian dark chocolate.",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=600&q=80",
        dietary: "veg",
        popular: true,
      },
    ],
  },
  {
    id: "cakes",
    title: "Cakes",
    description: "Freshly baked cake slices from our bakery counter.",
    icon: "🍰",
    items: [
      {
        id: "ck-1",
        name: "Cardamom Mawa Cake",
        description: "Traditional Parsi cafe style dense cake baked with evaporated milk solids.",
        price: "₹90",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
        dietary: "veg",
        popular: true,
      },
      {
        id: "ck-2",
        name: "Belgian Chocolate Truffle Slice",
        description: "Decadent dark chocolate sponge layered with 70% cocoa ganache.",
        price: "₹160",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
        dietary: "veg",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    description: "Refreshing coolers, lassis, and handcrafted lemonades.",
    icon: "🥤",
    items: [
      {
        id: "bv-1",
        name: "Mango Mint Lassi",
        description: "Thick creamy yogurt blended with Alphonso mango pulp and fresh mint.",
        price: "₹130",
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&q=80",
        dietary: "veg",
        popular: true,
      },
      {
        id: "bv-2",
        name: "Sparkling Hibiscus Cooler",
        description: "Steeped organic hibiscus tea spiked with lime juice and sparkling soda.",
        price: "₹140",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80",
        dietary: "vegan",
      },
    ],
  },
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "Coffee" | "Food" | "Interior" | "Desserts" | "Lifestyle";
  aspect: "tall" | "wide" | "square";
  title: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g-1",
    src: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=1000&q=85",
    alt: "Steaming Masala Chai in earthen kulhad",
    category: "Coffee",
    aspect: "tall",
    title: "Kulhad Chai Ceremony",
  },
  {
    id: "g-2",
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1000&q=85",
    alt: "Warm wooden café interior with soft lighting",
    category: "Interior",
    aspect: "wide",
    title: "Main Roastery Floor",
  },
  {
    id: "g-3",
    src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=85",
    alt: "Freshly baked Indian sweets and pastries",
    category: "Desserts",
    aspect: "square",
    title: "Artisanal Mithai & Bakes",
  },
  {
    id: "g-4",
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85",
    alt: "Barista pouring delicate latte art",
    category: "Coffee",
    aspect: "square",
    title: "Precision Pour",
  },
  {
    id: "g-5",
    src: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1000&q=85",
    alt: "Spread of Indian breakfast dishes and chutney",
    category: "Food",
    aspect: "tall",
    title: "Morning Nashta Table",
  },
  {
    id: "g-6",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1000&q=85",
    alt: "Historic café facade with outdoor seating",
    category: "Lifestyle",
    aspect: "wide",
    title: "Al Fresco Terrace",
  },
  {
    id: "g-7",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=85",
    alt: "Warm buttery Bun Maska served with chai",
    category: "Food",
    aspect: "square",
    title: "Irani Bun Maska",
  },
  {
    id: "g-8",
    src: "https://images.unsplash.com/photo-1447933603533-0f668893de01?w=800&q=85",
    alt: "South Indian filter coffee frothing in brass davara",
    category: "Coffee",
    aspect: "tall",
    title: "Chikmagalur Roast",
  },
  {
    id: "g-9",
    src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=85",
    alt: "Decadent Belgian chocolate dessert slice",
    category: "Desserts",
    aspect: "square",
    title: "Signature Tiramisu",
  },
  {
    id: "g-10",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=85",
    alt: "Guests enjoying coffee at wooden communal table",
    category: "Lifestyle",
    aspect: "wide",
    title: "The Tasting Room",
  },
  {
    id: "g-11",
    src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=85",
    alt: "Grilled paneer tikka sandwich",
    category: "Food",
    aspect: "square",
    title: "Paneer Tikka Toastie",
  },
  {
    id: "g-12",
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=85",
    alt: "Single origin pour over preparation",
    category: "Coffee",
    aspect: "square",
    title: "Slow Bar Brews",
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    number: "01",
    title: "Single-Origin Indian Estate Beans",
    description: "Directly sourced from high-altitude shade-grown estates in Chikmagalur and Coorg, slow-roasted weekly in small batches.",
  },
  {
    number: "02",
    title: "Artisanal Bakery & Mithai Counter",
    description: "Every bun, khari, and mawa cake is baked in-house daily using pure butter and organic spices — zero preservatives.",
  },
  {
    number: "03",
    title: "Authentic Kulhad Chai Ceremony",
    description: "Spiced Assam black tea brewed fresh per order with hand-crushed ginger and cardamom, served in clay earthen cups.",
  },
  {
    number: "04",
    title: "Serene Scandinavian Aesthetic",
    description: "Designed with natural oak, warm earthen textures, and quiet nooks for deep work, slow mornings, or intimate conversations.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The cutting chai here tastes exactly like the one from my favourite tapri back in Pune. It's like a warm hug in a glass.",
    author: "Priya Sharma",
    role: "Tea connoisseur & regular",
    rating: 5,
  },
  {
    quote:
      "Had a private gathering here. The thali, the chai, the décor — everything was perfect. My guests couldn't stop talking about it.",
    author: "Ayesha Khan",
    role: "Event host",
    rating: 5,
  },
  {
    quote:
      "Best filter coffee outside of Bengaluru. Period. And the bun maska is exactly the right amount of buttery. I'm here every morning.",
    author: "Rahul Menon",
    role: "Morning regular since 2024",
    rating: 5,
  },
] as const;

export const HOURS = [
  { day: "Monday – Friday", time: "7:00 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 11:00 PM" },
  { day: "Sunday", time: "8:00 AM – 9:00 PM" },
] as const;

export const MENU_CATEGORIES = COMPLETE_MENU_CATEGORIES;
