export type BlogMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export const BLOG_METADATA: BlogMeta[] = [
  {
    slug: "20260326-power-suit-anatomy",
    title: "The Anatomy of the Perfect Power Suit",
    excerpt: "Why lapel width matters more than brand name in 2024. An exploration of proportion and presence.",
    date: "MARCH 26, 2026",
    category: "TAILORING",
    image: "/images/blog/power_suit.png"
  },
  {
    slug: "20260325-global-executive-wardrobe",
    title: "Travel Wardrobe for the Global Executive",
    excerpt: "Curating a 5-piece travel rotation that transitions seamlessly from London to Hong Kong.",
    date: "MARCH 25, 2026",
    category: "LIFESTYLE",
    image: "/images/blog/travel_wardrobe.png"
  },
  {
    slug: "20260324-bespoke-vs-mtm",
    title: "Bespoke vs. Made-to-Measure: The Definitive Guide",
    excerpt: "Understanding the nuances between full hand-craftsmanship and optimized patterns.",
    date: "MARCH 24, 2026",
    category: "ESSENTIALS",
    image: "/images/blog/bespoke_guide.png"
  }
];
