/**
 * Keyword taxonomy for the whole site.
 *
 * Pages import the groups they are actually about rather than hand-writing
 * keyword strings, so a page can never ship with the copy-pasted keyword set
 * of an unrelated page — which is what the per-slug SEO data used to do.
 *
 * Grouping also makes cross-selling pages easy to express: the quote pages
 * take every service vertical, so one quotation funnel is discoverable for
 * AI agents, mobile apps, web apps, APIs, MVPs and dedicated teams alike.
 */

export const BRAND_KEYWORDS = [
  "LasyaAitech",
  "Lasya AI Tech",
  "LasyaAitech software company",
  "software development company India",
  "software development company Hyderabad",
];

/** Neighbourhood-level modifiers for the Hyderabad service area. Pages that want local-pack relevance import this alongside the service keywords they'd use anyway. */
export const LOCATION_KEYWORDS = [
  "mobile app development company Hyderabad",
  "website development company Hyderabad",
  "software development company HITEC City",
  "app development company Madhapur",
  "web development company Jubilee Hills",
  "software company Kondapur",
  "IT company near HITEC City",
  "app developers near me Hyderabad",
];

/** One entry per thing the company sells. Keep the keys stable — pages import them. */
export const SERVICE_KEYWORDS = {
  aiAgents: [
    "AI agent development",
    "AI agents for business",
    "autonomous AI agents",
    "multi agent systems",
    "agentic AI development",
    "AI agent development company",
    "custom AI agents",
    "LLM agent development",
    "MCP server development",
  ],
  aiGeneral: [
    "AI development services",
    "artificial intelligence development company",
    "hire AI developers",
    "custom AI solutions",
    "enterprise AI development",
    "AI software development",
    "AI consulting services",
  ],
  generativeAi: [
    "generative AI solutions",
    "generative AI development services",
    "LLM application development",
    "RAG application development",
    "AI copilot development",
    "custom GPT development",
    "fine tuning LLM services",
  ],
  chatbots: [
    "AI chatbot development",
    "chatbot development services",
    "conversational AI development",
    "customer support chatbot",
    "virtual assistant development",
    "WhatsApp chatbot development",
    "AI voice assistant development",
  ],
  machineLearning: [
    "machine learning development services",
    "ML model development",
    "predictive analytics services",
    "computer vision development",
    "natural language processing services",
    "data science consulting",
    "MLOps services",
  ],
  mobileApps: [
    "mobile app development",
    "mobile app development company",
    "iOS app development",
    "Android app development",
    "Flutter app development",
    "React Native app development",
    "cross platform app development",
    "custom mobile application development",
  ],
  webApps: [
    "web application development",
    "custom web development services",
    "web app development company",
    "progressive web app development",
    "enterprise web application development",
    "SaaS application development",
  ],
  apis: [
    "API development services",
    "REST API development",
    "GraphQL API development",
    "API integration services",
    "third party API integration",
    "microservices development",
    "backend API development company",
  ],
  frontend: [
    "frontend development services",
    "React development services",
    "Next.js development company",
    "hire frontend developers",
    "responsive web development",
  ],
  backend: [
    "backend development services",
    "Node.js development services",
    "Python development services",
    "PHP development services",
    ".NET development services",
    "hire backend developers",
    "scalable backend architecture",
  ],
  uiUx: [
    "UI UX design services",
    "product design agency",
    "mobile app UI design",
    "web app UX design",
    "design system development",
    "wireframing and prototyping services",
  ],
  mvp: [
    "MVP development services",
    "MVP development company",
    "rapid prototyping services",
    "startup MVP development",
    "AI MVP development",
    "proof of concept development",
  ],
  dedicatedTeams: [
    "staff augmentation services",
    "dedicated development team",
    "hire dedicated developers",
    "offshore development team",
    "IT staff augmentation company",
    "extended engineering team",
  ],
  cto: [
    "CTO as a service",
    "fractional CTO services",
    "technical leadership consulting",
    "software architecture consulting",
    "technology due diligence",
  ],
  cloudDevops: [
    "cloud application development",
    "AWS development services",
    "DevOps consulting services",
    "cloud migration services",
    "infrastructure automation",
  ],
  automation: [
    "business process automation",
    "workflow automation services",
    "intelligent process automation",
    "AI automation services",
    "robotic process automation",
  ],
  ecommerce: [
    "ecommerce development services",
    "custom ecommerce platform development",
    "marketplace development company",
    "headless commerce development",
  ],
  dataAnalytics: [
    "data analytics services",
    "business intelligence development",
    "data engineering services",
    "data warehouse development",
    "real time analytics dashboard",
  ],
} as const;

/** Industries the company builds for. */
export const INDUSTRY_KEYWORDS = {
  fintech: [
    "fintech software development",
    "fintech app development company",
    "digital banking software development",
    "payment app development",
    "wealth management software",
  ],
  healthcare: [
    "healthcare software development",
    "health app development company",
    "HIPAA compliant app development",
    "telemedicine app development",
    "digital health product development",
  ],
  ecommerceIndustry: [
    "ecommerce software development company",
    "retail technology solutions",
    "online marketplace development",
  ],
  logistics: [
    "logistics software development",
    "supply chain software solutions",
    "fleet management software development",
    "AI demand forecasting",
  ],
  travel: [
    "travel software development",
    "hospitality software development",
    "booking engine development",
    "travel app development company",
  ],
  legaltech: [
    "legaltech software development",
    "AI legal research tools",
    "contract analysis software",
    "legal document automation",
  ],
  insurance: [
    "insurance software development",
    "insurtech development company",
    "claims automation software",
    "AI risk assessment solutions",
  ],
  media: [
    "media and entertainment software development",
    "OTT platform development",
    "content management platform development",
  ],
  education: [
    "elearning software development",
    "edtech app development company",
    "learning management system development",
  ],
  realEstate: [
    "real estate software development",
    "proptech development company",
    "property management software",
  ],
  publicSector: [
    "government software development",
    "public sector digital transformation",
    "citizen services platform",
  ],
  cybersecurity: [
    "cybersecurity solutions provider",
    "AI threat detection solutions",
    "security compliance software",
  ],
  fitness: [
    "fitness app development company",
    "wellness app development",
    "health and fitness software",
  ],
  startups: [
    "software development for startups",
    "startup technology partner",
    "offshore development for startups",
  ],
} as const;

/** Commercial-intent modifiers that pair with any service page. */
export const INTENT_KEYWORDS = {
  quote: [
    "software development quote",
    "get a free quote software development",
    "app development cost estimate",
    "software project cost calculator",
    "request development quotation",
    "free project estimate",
  ],
  hire: [
    "hire software developers",
    "hire remote developers India",
    "hire offshore developers",
    "outsource software development",
  ],
  pricing: [
    "app development cost",
    "software development pricing",
    "AI development cost",
    "development rates India",
  ],
} as const;

/** Every service vertical at once — for pages that serve all of them. */
export const ALL_SERVICE_KEYWORDS: string[] = Object.values(SERVICE_KEYWORDS).flatMap(
  (group) => [...group]
);

export const ALL_INDUSTRY_KEYWORDS: string[] = Object.values(INDUSTRY_KEYWORDS).flatMap(
  (group) => [...group]
);

/**
 * Merge keyword groups, trim, drop blanks and de-duplicate case-insensitively
 * while keeping the first spelling seen. Order matters — put the terms the
 * page most wants to rank for first.
 */
export const buildKeywords = (
  ...groups: (readonly string[] | string | undefined | null)[]
): string[] => {
  const seen = new Set<string>();
  const out: string[] = [];

  groups.forEach((group) => {
    if (!group) return;
    const list = typeof group === "string" ? group.split(",") : group;
    list.forEach((raw) => {
      const keyword = String(raw).trim();
      if (!keyword) return;
      const key = keyword.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      out.push(keyword);
    });
  });

  return out;
};
