export interface Product {
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly emoji: string;
  readonly image?: string;
  readonly href?: string;
}

export interface Bundle {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly contents: readonly string[];
  readonly price: string;
  readonly cadence: string;
  readonly image?: string;
}

export interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
}

export interface GalleryPhoto {
  readonly image: string;
  readonly caption: string;
}

export interface PaymentMethod {
  readonly name: string;
  readonly description: string;
  readonly details: string;
}

export const siteConfig = {
  name: "Betty Botter",
  tagline: "Sourdough and baked goods from a small home kitchen.",
  description:
    "A home bakery offering fresh sourdough bread and baked goods from an honesty cabinet. Pre-order online for collection.",
  url: "https://bettybotter.example.com",
  formspreeId: "YOUR_FORMSPREE_ID", // TODO: replace with real Formspree form ID
  cabinetLocation: "5 Cloughs Road, Ringwood",
  openingDays: "Saturday, Monday and Thursday",
  preOrderNotice: "Please pre-order at least 24 hours in advance.",
  hero: {
    heading: "Betty Botter's Bakery",
    subheading: "Home bakery",
    tagline:
      "Sourdough, focaccia, and cinnamon rolls — baked in small batches and stocked in the honesty cabinet by the front gate.",
    ctaLabel: "Pre-order",
  },
  weeklyMenu: {
    eyebrow: "This week",
    heading: "What Betty's baking",
    subheading:
      "Betty's menu changes every week — here's what's coming out of the oven.",
    image: "this-weeks-menu.jpg",
    alt: "Betty Botter's menu for this week",
    footnote: "See something you fancy?",
  },
  about: {
    heading: "About",
    body:
      "Betty Botter is a small home bakery in Ringwood, baking for the neighbourhood. Everything is made by hand in small batches using good flour and a long, slow ferment. Pre-order below, collect from the honesty cabinet by the front gate, and pay whichever way suits you.",
  },
  products: [
    {
      name: "Sourdough breads",
      description:
        "Organic sourdough loaves, long slow ferment. Baked fresh for each collection day.",
      price: "£4.00",
      emoji: "🍞",
      image: "images/loaves-and-rolls.jpg",
    },
    {
      name: "Sourdough bagels",
      description: "Chocolate or plain. Six to a bag.",
      price: "6 for £4.00",
      emoji: "🥯",
      image: "images/bakes-spread.jpg",
    },
    {
      name: "Cakes & sweet bakes",
      description:
        "Brioche, focaccia, hot cross buns, cinnamon rolls and more — the selection changes weekly.",
      price: "from £2.50",
      emoji: "🥐",
      image: "images/brioche.jpg",
    },
    {
      name: "Cookies",
      description: "Rich, chewy and usually vegan.",
      price: "£1.50",
      emoji: "🍪",
      image: "images/chocolate-cookies.jpg",
    },
  ] as const satisfies readonly Product[],
  bundles: [
    {
      name: "The Weekend Box",
      tagline: "Sweet and savoury for one weekend",
      description:
        "A loaf for Saturday lunch and something sweet for Sunday breakfast — collected together on one day.",
      contents: [
        "1 organic sourdough loaf",
        "2 cinnamon rolls",
        "4 vegan chocolate cookies",
      ],
      price: "£11.00",
      cadence: "One collection",
      image: "images/loaves-and-rolls.jpg",
    },
    {
      name: "Sourdough Subscription",
      tagline: "A fresh loaf every week",
      description:
        "One organic sourdough loaf collected each week for four weeks. Same day, same time, no need to re-order.",
      contents: [
        "4 × organic sourdough loaves",
        "One per week, your choice of day",
      ],
      price: "£14.00",
      cadence: "Weekly · 4 weeks",
      image: "images/loaves-and-rolls.jpg",
    },
    {
      name: "The Sweet Box",
      tagline: "Treats for the whole household",
      description:
        "Made for sharing. Brioche for breakfast, cinnamon rolls for elevenses, cookies for the lunchbox.",
      contents: [
        "1 Easter brioche plait",
        "4 cinnamon rolls",
        "6 vegan chocolate cookies",
      ],
      price: "£12.00",
      cadence: "One collection",
      image: "images/brioche.jpg",
    },
    {
      name: "Family Freezer Stash",
      tagline: "Bake once, eat all month",
      description:
        "Four organic sourdough loaves baked together — freeze three and enjoy one fresh.",
      contents: ["4 × organic sourdough loaves"],
      price: "£14.00",
      cadence: "One collection",
      image: "images/loaves-and-rolls.jpg",
    },
  ] as const satisfies readonly Bundle[],
  gallery: [
    { image: "images/loaves-and-rolls.jpg", caption: "Fresh from the oven" },
    { image: "images/bakes-spread.jpg", caption: "A spread of fresh bakes" },
    { image: "images/brioche.jpg", caption: "Sweet bakes" },
    { image: "images/chocolate-cookies.jpg", caption: "Cookies" },
    { image: "images/honesty-cabinet.jpg", caption: "The honesty cabinet" },
  ] as const satisfies readonly GalleryPhoto[],
  steps: [
    {
      number: "01",
      title: "Order online",
      description: "Choose what you'd like and a collection day.",
      image: "images/this-weeks-menu.jpg",
    },
    {
      number: "02",
      title: "Pay",
      description: "Bank transfer, PayPal, Stripe, or cash on collection.",
      image: "images/brioche.jpg",
    },
    {
      number: "03",
      title: "Collect",
      description: "Pick up from the honesty cabinet on your chosen day.",
      image: "images/honesty-cabinet.jpg",
    },
  ] as const satisfies readonly Step[],
  payments: [
    {
      name: "Bank transfer",
      description: "Use your name as the reference.",
      details: "Sort code: 00-00-00 · Account: 00000000 (placeholder)",
    },
    {
      name: "PayPal",
      description: "Send as friends and family.",
      details: "paypal.me/bettybotter (placeholder)",
    },
    {
      name: "Card (Stripe)",
      description: "A secure Stripe link is sent after your order.",
      details: "Stripe checkout link (placeholder)",
    },
    {
      name: "Cash on collection",
      description: "Leave it in the honesty tin when you collect.",
      details: "Exact change appreciated.",
    },
  ] as const satisfies readonly PaymentMethod[],
  collectionDays: ["Saturday", "Sunday"] as const,
} as const;

export type SiteConfig = typeof siteConfig;
