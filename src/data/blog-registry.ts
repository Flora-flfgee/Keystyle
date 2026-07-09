import dynamic from "next/dynamic";
import { BLOG_METADATA } from "./blog-metadata";

// Next.js 15 Turbopack requires explicit static analysis for dynamic imports.
// This registry provides a map of all blog posts for reliable bundling.
export const BLOG_REGISTRY: Record<string, any> = {
  "20260326-power-suit-anatomy": dynamic(() => import("../content/blogs/20260326-power-suit-anatomy.mdx")),
  "20260325-global-executive-wardrobe": dynamic(() => import("../content/blogs/20260325-global-executive-wardrobe.mdx")),
  "20260324-bespoke-vs-mtm": dynamic(() => import("../content/blogs/20260324-bespoke-vs-mtm.mdx")),
};

// Helper to get the component dynamically by slug
export function getBlogComponent(slug: string) {
  return BLOG_REGISTRY[slug] || null;
}
