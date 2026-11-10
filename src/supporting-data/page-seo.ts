/**
 * Per-route SEO registry.
 *
 * Every static route on the site has an entry here. Pages read from this
 * instead of inlining strings, so a route can be audited at a glance and it
 * is obvious when a new page has been added without SEO.
 *
 * Slug-driven routes (services, technologies, industries, case studies,
 * careers) take their metadata from the page data files instead — see
 * SeoService usage in the corresponding page.tsx.
 */

import {
  ALL_INDUSTRY_KEYWORDS,
  ALL_SERVICE_KEYWORDS,
  INDUSTRY_KEYWORDS,
  INTENT_KEYWORDS,
  LOCATION_KEYWORDS,
  SERVICE_KEYWORDS,
  buildKeywords,
} from "./seo-keywords";

export type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
  /** Breadcrumb trail excluding Home. */
  breadcrumb?: { name: string; path: string }[];
  noindex?: boolean;
};

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "Mobile & Web App Development Company Hyderabad | LasyaAitech",
    description:
      "LasyaAitech builds AI agents, mobile apps and websites from our HITEC City, Hyderabad studio — for local and global clients. Get a free project quote.",
    keywords: buildKeywords(
      LOCATION_KEYWORDS,
      SERVICE_KEYWORDS.aiAgents,
      SERVICE_KEYWORDS.aiGeneral,
      SERVICE_KEYWORDS.mobileApps,
      SERVICE_KEYWORDS.webApps,
      SERVICE_KEYWORDS.dedicatedTeams,
      INTENT_KEYWORDS.hire
    ),
  },

  "/about": {
    title: "About LasyaAitech | AI & Software Engineering Team",
    description:
      "Meet the LasyaAitech team: 50+ engineers and designers building AI agents, mobile apps and web platforms for clients across fintech, health and logistics.",
    keywords: buildKeywords(
      LOCATION_KEYWORDS,
      [
        "about LasyaAitech",
        "software development company profile",
        "AI development team India",
        "software engineering partner",
      ],
      SERVICE_KEYWORDS.dedicatedTeams,
      SERVICE_KEYWORDS.cto
    ),
    breadcrumb: [{ name: "About", path: "/about" }],
  },

  "/services": {
    title: "Software & AI Development Services | LasyaAitech",
    description:
      "End-to-end development services: AI agents, generative AI, chatbots, mobile apps, web platforms, APIs, UI/UX design, MVPs and dedicated engineering teams.",
    keywords: buildKeywords(ALL_SERVICE_KEYWORDS),
    breadcrumb: [{ name: "Services", path: "/services" }],
  },

  "/technologies": {
    title: "Technologies We Build With | LasyaAitech",
    description:
      "Flutter, React Native, React, Next.js, Node.js, Python, PHP, .NET, machine learning and generative AI — the stacks LasyaAitech ships production systems on.",
    keywords: buildKeywords(
      SERVICE_KEYWORDS.mobileApps,
      SERVICE_KEYWORDS.webApps,
      SERVICE_KEYWORDS.frontend,
      SERVICE_KEYWORDS.backend,
      SERVICE_KEYWORDS.machineLearning,
      SERVICE_KEYWORDS.generativeAi
    ),
    breadcrumb: [{ name: "Technologies", path: "/technologies" }],
  },

  "/industries": {
    title: "Industries We Serve | LasyaAitech",
    description:
      "Software and AI built for fintech, healthcare, logistics, travel, legaltech, insurance, media, ecommerce, public sector and cybersecurity.",
    keywords: buildKeywords(ALL_INDUSTRY_KEYWORDS),
    breadcrumb: [{ name: "Industries", path: "/industries" }],
  },

  "/casestudies": {
    title: "Case Studies & Client Work | LasyaAitech",
    description:
      "Real projects delivered by LasyaAitech — AI agents, MCP servers, banking platforms, payment apps, marketplaces and forecasting systems, with outcomes.",
    keywords: buildKeywords(
      [
        "software development case studies",
        "AI project case studies",
        "app development portfolio",
        "client success stories software",
      ],
      SERVICE_KEYWORDS.aiAgents,
      INDUSTRY_KEYWORDS.fintech
    ),
    breadcrumb: [{ name: "Case Studies", path: "/casestudies" }],
  },

  "/contact": {
    title: "Contact LasyaAitech | Talk to Our Team",
    description:
      "Get in touch with LasyaAitech to discuss AI agents, mobile apps, web platforms or a dedicated development team. We reply within one business day.",
    keywords: buildKeywords(
      LOCATION_KEYWORDS,
      [
        "contact LasyaAitech",
        "software development company contact",
        "hire development team contact",
        "talk to AI developers",
      ],
      INTENT_KEYWORDS.hire
    ),
    breadcrumb: [{ name: "Contact", path: "/contact" }],
  },

  "/careers": {
    title: "Careers at LasyaAitech | Engineering & Design Jobs",
    description:
      "Open roles at LasyaAitech for engineers, designers and AI specialists. Build AI agents, mobile apps and web platforms with a senior team in Hyderabad.",
    keywords: buildKeywords([
      "LasyaAitech careers",
      "software developer jobs Hyderabad",
      "AI engineer jobs India",
      "Flutter developer jobs",
      "React developer jobs Hyderabad",
      "remote software jobs India",
    ]),
    breadcrumb: [{ name: "Careers", path: "/careers" }],
  },

  /**
   * The two quotation funnels. Both carry the full service taxonomy on
   * purpose: one quote form serves AI agents, mobile apps, web apps, APIs,
   * MVPs and dedicated teams, so it should be findable for all of them
   * rather than only the vertical named in the heading.
   */
  "/get-a-free-quote": {
    // Kept short enough that the " | LasyaAitech" suffix fits inside the
    // ~60-character SERP limit without the phrase being clipped.
    title: "Get a Free Quote | App, Web & AI Development",
    description:
      "Request a free quote for AI agents, mobile apps, web platforms, APIs, MVPs, UI/UX or a dedicated team. Share your brief and get a costed plan back.",
    keywords: buildKeywords(
      INTENT_KEYWORDS.quote,
      INTENT_KEYWORDS.pricing,
      ALL_SERVICE_KEYWORDS
    ),
    breadcrumb: [{ name: "Get a Free Quote", path: "/get-a-free-quote" }],
  },

  "/ai-free-quote": {
    title: "Free AI Development Quote & Pricing | LasyaAitech",
    description:
      "Get a free AI development quote for AI agents, chatbots, LLM and RAG apps, machine learning models and automation. Share your brief, budget and timeline.",
    keywords: buildKeywords(
      SERVICE_KEYWORDS.aiAgents,
      SERVICE_KEYWORDS.generativeAi,
      SERVICE_KEYWORDS.chatbots,
      SERVICE_KEYWORDS.machineLearning,
      SERVICE_KEYWORDS.automation,
      INTENT_KEYWORDS.quote,
      INTENT_KEYWORDS.pricing,
      ALL_SERVICE_KEYWORDS
    ),
    breadcrumb: [{ name: "AI Development Quote", path: "/ai-free-quote" }],
  },

  "/privacy-policy": {
    title: "Privacy Policy | LasyaAitech",
    description:
      "How LasyaAitech collects, uses, stores and protects personal data across our website and client engagements, and the rights you have over your data.",
    keywords: buildKeywords([
      "LasyaAitech privacy policy",
      "data protection policy",
      "personal data handling",
    ]),
    breadcrumb: [{ name: "Privacy Policy", path: "/privacy-policy" }],
  },

  "/cookie-policy": {
    title: "Cookie Policy | LasyaAitech",
    description:
      "Which cookies LasyaAitech uses, what each category does, and how to change or withdraw your cookie preferences at any time.",
    keywords: buildKeywords([
      "LasyaAitech cookie policy",
      "website cookie usage",
      "cookie preferences",
    ]),
    breadcrumb: [{ name: "Cookie Policy", path: "/cookie-policy" }],
  },
};

/** Landing-page routes are campaign variants of pages that already rank — keep them out of the index. */
export const LANDING_PAGE_ROUTES = ["/lp1", "/lp2", "/lp3", "/lp4", "/lp5"];

/**
 * Everything a visitor can request an estimate for through the quote forms.
 *
 * Both quote pages publish this as an OfferCatalog, so the one quotation
 * funnel is discoverable for each vertical it actually serves — an AI agent
 * build, a mobile app, an API, an MVP — rather than only for the single
 * service named in the page heading. Each entry links to the page that
 * explains it, which also gives the quote pages internal links worth having.
 */
export const QUOTE_SERVICE_CATALOG: {
  name: string;
  description: string;
  path: string;
}[] = [
  {
    name: "AI agent development",
    description:
      "Autonomous and multi-agent systems, MCP servers and agentic workflows wired into your existing tools.",
    path: "/services/hire-ai-developers",
  },
  {
    name: "Generative AI and LLM applications",
    description:
      "LLM apps, RAG over your own content, copilots and content generation built for production use.",
    path: "/services/generative-ai-solutions",
  },
  {
    name: "AI chatbot development",
    description:
      "Conversational AI for support and sales that answers from your systems and escalates cleanly.",
    path: "/services/ai-powered-chatbots",
  },
  {
    name: "Machine learning and predictive analytics",
    description:
      "Forecasting, recommendation, classification and anomaly detection models, deployed and monitored.",
    path: "/services/predictive-analysis",
  },
  {
    name: "Mobile app development",
    description:
      "iOS, Android, Flutter and React Native apps from product design through store release.",
    path: "/technologies/mobile-app-development",
  },
  {
    name: "Web application development",
    description:
      "Custom web platforms, portals and SaaS products built for performance and scale.",
    path: "/technologies/web-development",
  },
  {
    name: "API and backend development",
    description:
      "REST and GraphQL APIs, microservices and third-party integrations built to handle real load.",
    path: "/services/backend-development-services",
  },
  {
    name: "MVP development",
    description:
      "A lean, validated first version with architecture that survives contact with growth.",
    path: "/services/mvp-development",
  },
  {
    name: "UI/UX design",
    description:
      "Research, wireframes, prototypes and design systems your engineers can build straight from.",
    path: "/services/ui-ux-design-services",
  },
  {
    name: "Dedicated development teams",
    description:
      "Staff augmentation and full squads that integrate with your existing engineering process.",
    path: "/services/offshore-software-development-for-startups",
  },
  {
    name: "CTO as a service",
    description:
      "Fractional technical leadership covering architecture, hiring and delivery oversight.",
    path: "/services/cto-as-a-service",
  },
];

/** Shared FAQ for both quote funnels. Mirrors what the forms actually ask for. */
export const QUOTE_FAQS: { question: string; answer: string }[] = [
  {
    question: "How do I get a development quote from LasyaAitech?",
    answer:
      "Describe what you want to build, the features you need, any brief or documents you already have, and your budget range. We review the details and reply with a tailored estimate covering scope, team shape and delivery milestones.",
  },
  {
    question: "What kinds of projects can you quote for?",
    answer:
      "The same quotation process covers AI agents and MCP servers, generative AI and LLM applications, chatbots, machine learning models, mobile apps for iOS and Android, web applications, APIs and integrations, MVP builds, UI/UX design, and dedicated development teams.",
  },
  {
    question: "How much does it cost to build an app or AI system?",
    answer:
      "Cost depends on scope, integrations and how much design work is involved. The quote form supports budget ranges below $10,000, $10,001 to $20,000, $20,001 to $50,000, $50,000 and above, and not sure yet — so you can get a realistic answer even before the scope is fixed.",
  },
  {
    question: "How long does it take to receive the quote?",
    answer:
      "We come back within one business day. If the brief is detailed enough we include an indicative timeline and team composition alongside the estimate.",
  },
  {
    question: "Is the quote free and is my brief kept confidential?",
    answer:
      "Yes. The estimate is free with no obligation, and anything you share is treated as confidential. We can sign an NDA before you send detailed materials.",
  },
];

export const getPageSeo = (route: string): PageSeo | undefined => PAGE_SEO[route];
