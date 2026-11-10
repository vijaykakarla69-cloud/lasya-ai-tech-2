/**
 * Sitemap and robots.txt generation.
 *
 * Previously every URL was emitted with the same priority (0.7) and
 * changefreq (daily), which tells a crawler nothing — an app's legal page
 * ranked as important as the home page. Nothing was excluded either, so the
 * campaign landing pages and the services demo were advertised alongside the
 * real pages they duplicate.
 */

/** Routes that are noindex in the app and must not be advertised in the sitemap. */
const EXCLUDED = [
  "/api/*",
  "/lp1",
  "/lp2",
  "/lp3",
  "/lp4",
  "/lp5",
  "/lp1/*",
  "/lp2/*",
  "/lp3/*",
  "/lp4/*",
  "/lp5/*",
  "/services-dashdev-demo",
  // Holds the Downing write-up already published at
  // /casestudies/downing-investment-management. Kept out until the real
  // eLearning content lands — see CASE_STUDIES_WITH_MISMATCHED_CONTENT.
  "/casestudies/personalized-learning-assistant-agents-for-elearning-platform",
];

/**
 * Priority and crawl cadence by route shape, most specific first.
 * Commercial pages get crawled more often than legal boilerplate.
 */
const ROUTE_RULES = [
  { test: (p) => p === "/", priority: 1.0, changefreq: "weekly" },
  {
    test: (p) => p === "/get-a-free-quote" || p === "/ai-free-quote",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    test: (p) => p === "/services" || p === "/technologies" || p === "/industries",
    priority: 0.9,
    changefreq: "weekly",
  },
  { test: (p) => p === "/contact" || p === "/casestudies", priority: 0.8, changefreq: "weekly" },
  { test: (p) => p.startsWith("/services/"), priority: 0.8, changefreq: "monthly" },
  {
    test: (p) => p.startsWith("/technologies/") || p.startsWith("/industries/"),
    priority: 0.8,
    changefreq: "monthly",
  },
  { test: (p) => p.startsWith("/casestudies/"), priority: 0.7, changefreq: "monthly" },
  { test: (p) => p === "/about", priority: 0.7, changefreq: "monthly" },
  { test: (p) => p === "/careers" || p.startsWith("/careers/"), priority: 0.6, changefreq: "weekly" },
  { test: (p) => p === "/privacy-policy" || p === "/cookie-policy", priority: 0.3, changefreq: "yearly" },
  // App product legal pages: required for the app stores, low value to search.
  {
    test: (p) => /^\/[^/]+\/(privacy-policy|terms-and-conditions|support|contact-us)$/.test(p),
    priority: 0.3,
    changefreq: "yearly",
  },
];

module.exports = {
  siteUrl: process.env.SITE_URL || "https://lasyaaitech.com",
  generateRobotsTxt: true,
  exclude: EXCLUDED,
  transform: async (config, path) => {
    const rule = ROUTE_RULES.find((r) => r.test(path));

    return {
      loc: path,
      changefreq: rule?.changefreq ?? "monthly",
      priority: rule?.priority ?? 0.5,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        // Only /api/ is disallowed here. The campaign landing pages and the
        // services demo are handled with a noindex meta tag instead: blocking
        // them in robots.txt would stop crawlers reading that tag, which is
        // what actually gets a page dropped from the index. They are still
        // excluded from the sitemap above.
        disallow: ["/api/"],
      },
      // Answer engines are allowed explicitly so the site stays citable.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
  },
};
