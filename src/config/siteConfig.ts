export interface Product {
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly emoji: string;
  readonly image?: string;
}

export interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
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
  cabinetLocation: "3 Orchard Lane, Little Ashford",
  hero: {
    heading: "Betty Botter",
    subheading: "Home bakery",
    tagline:
      "Sourdough, focaccia, and cinnamon rolls — baked in small batches and stocked in the honesty cabinet by the front gate.",
    ctaLabel: "Pre-order",
  },
  about: {
    heading: "About",
    body:
      "I'm Betty, and I bake for my neighbours from my kitchen in Little Ashford. Everything is made by hand in small batches using good flour and a long, slow ferment. Pre-order below, collect from the cabinet, and pay whichever way suits you.",
  },
  products: [
    {
      name: "Sourdough Loaf",
      description: "Crisp crust, open crumb, 36-hour ferment.",
      price: "£4.00",
      emoji: "🍞",
      image: "/images/sourdough-loaf.jpg",
    },
    {
      name: "Rosemary Focaccia",
      description: "Olive oil, flaky salt, fresh rosemary.",
      price: "£3.50",
      emoji: "🌿",
    },
    {
      name: "Cinnamon Rolls",
      description: "Four rolls with a brown-butter glaze.",
      price: "£5.00",
      emoji: "🥐",
      image: "/images/cinnamon-rolls.jpg",
    },
    {
      name: "Brioche Plait",
      description: "Soft, buttery braid with chocolate chips.",
      price: "£4.00",
      emoji: "🥖",
      image: "/images/brioche.jpg",
    },
    {
      name: "Chocolate Babka",
      description: "Buttery dough swirled with dark chocolate.",
      price: "£4.00",
      emoji: "🍫",
      image: "/images/babka.jpg",
    },
    {
      name: "Weekly Bundle",
      description: "Four sourdough loaves — great for freezing.",
      price: "£14.00",
      emoji: "🧺",
    },
  ] as const satisfies readonly Product[],
  steps: [
    {
      number: "01",
      title: "Order online",
      description: "Choose what you'd like and a collection day.",
    },
    {
      number: "02",
      title: "Pay",
      description: "Bank transfer, PayPal, Stripe, or cash on collection.",
    },
    {
      number: "03",
      title: "Collect",
      description: "Pick up from the honesty cabinet on your chosen day.",
      image: "/images/honesty-cabinet.jpg",
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
