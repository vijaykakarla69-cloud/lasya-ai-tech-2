import { ComponentType } from "react";
import WebsiteDevelopmentProcessBody from "./WebsiteDevelopmentProcessBody";

/** Slug -> article body component. Add one entry per new post. */
export const BLOG_ARTICLE_BODIES: Record<string, ComponentType> = {
  "custom-website-development-process-hyderabad": WebsiteDevelopmentProcessBody,
};

export const getBlogArticleBody = (slug: string): ComponentType | null =>
  BLOG_ARTICLE_BODIES[slug] ?? null;
