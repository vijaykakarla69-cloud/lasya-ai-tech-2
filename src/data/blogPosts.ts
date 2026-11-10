/**
 * Hand-authored blog posts.
 *
 * Unlike services/technologies/case studies, blog content isn't CMS-sourced —
 * each post's metadata lives here, and its body is its own component under
 * `src/components/blog/articleBodies/`, looked up by slug in
 * `articleBodies/index.ts`. This mirrors how case studies and services keep
 * corrected SEO in `slug-seo.ts` rather than trusting copy-pasted CMS data.
 */

import { LOCATION_KEYWORDS, SERVICE_KEYWORDS, buildKeywords } from "@/src/supporting-data/seo-keywords";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** ISO date, used for JSON-LD and sorting. */
  date: string;
  displayDate: string;
  author: string;
  category: string;
  readTime: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "custom-website-development-process-hyderabad",
    title: "Custom Website Development: Our Process, From Idea to Launch",
    excerpt:
      "What actually happens between a first call and a live website — discovery, design, development, testing and launch — from our studio in HITEC City, Hyderabad.",
    image: "/assets/imgs/blog/website-development-process-hyderabad.png",
    imageAlt:
      "Illustration of a developer and a designer working together on a laptop showing code, layout blocks, a color palette and typography controls.",
    date: "2026-08-26",
    displayDate: "August 26, 2026",
    author: "LasyaAitech Team",
    category: "Web Development",
    readTime: "6 min read",
    seo: {
      title: "Custom Website Development Process | LasyaAitech Hyderabad",
      description:
        "How LasyaAitech builds custom websites from our HITEC City, Hyderabad studio — discovery, design, development, testing and launch, explained step by step.",
      keywords: buildKeywords(
        LOCATION_KEYWORDS,
        SERVICE_KEYWORDS.webApps,
        SERVICE_KEYWORDS.frontend,
        [
          "website development process",
          "custom website design and development",
          "how websites are built",
          "website development company Hyderabad",
        ]
      ),
    },
  },
];

export const getBlogPost = (slug: string): BlogPostMeta | null =>
  BLOG_POSTS.find((post) => post.slug === slug) ?? null;
