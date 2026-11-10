/**
 * Per-slug SEO for the data-driven routes.
 *
 * The `seo` blocks inside the page data files were largely copy-pasted: five
 * service slugs shared the React Native title, seven AI technology slugs were
 * all titled "Custom Web Development Services", and around eighteen case
 * studies carried the meta of an unrelated project. Duplicate and mismatched
 * titles are the single most damaging thing on the site for search, so the
 * corrected values live here where they can be reviewed in one place, and the
 * page's generateMetadata prefers them over the data file.
 *
 * Case studies are derived from their own content instead of being listed by
 * hand — see caseStudySeo() — so they cannot drift out of sync again.
 */

import {
  INDUSTRY_KEYWORDS,
  INTENT_KEYWORDS,
  LOCATION_KEYWORDS,
  SERVICE_KEYWORDS,
  buildKeywords,
} from "./seo-keywords";

export type SlugSeo = {
  title: string;
  description: string;
  keywords: string[];
};

/* ------------------------------------------------------------------ */
/* /services/[slug]                                                    */
/* ------------------------------------------------------------------ */

export const SERVICE_SLUG_SEO: Record<string, SlugSeo> = {
  "offshore-software-development-for-startups": {
    title: "Offshore Software Development for Startups",
    description:
      "Launch and scale your startup with an offshore engineering team. Agile delivery, senior developers and startup-as-a-service support from day one.",
    keywords: buildKeywords(
      INDUSTRY_KEYWORDS.startups,
      SERVICE_KEYWORDS.dedicatedTeams,
      SERVICE_KEYWORDS.mvp,
      ["offshore software development for startups", "startup as a service"]
    ),
  },
  "hire-react-native-developer": {
    title: "Hire React Native Developers",
    description:
      "Hire React Native developers to build one cross-platform app for iOS and Android. Senior engineers, managed delivery and fast onboarding.",
    keywords: buildKeywords(
      ["hire React Native developers", "React Native development company", "React Native app developers"],
      SERVICE_KEYWORDS.mobileApps,
      INTENT_KEYWORDS.hire
    ),
  },
  "hire-reactjs-developers": {
    title: "Hire ReactJS Developers",
    description:
      "Hire React JS developers for scalable, high-performance web front ends. Senior engineers who integrate straight into your existing team.",
    keywords: buildKeywords(
      ["hire ReactJS developers", "React JS development company", "React web development"],
      SERVICE_KEYWORDS.frontend,
      INTENT_KEYWORDS.hire
    ),
  },
  "cto-as-a-service": {
    title: "CTO as a Service | Fractional CTO",
    description:
      "Get senior technical leadership without a full-time hire. Architecture, hiring, roadmap and delivery oversight from an experienced fractional CTO.",
    keywords: buildKeywords(SERVICE_KEYWORDS.cto, INTENT_KEYWORDS.hire),
  },
  "hire-ai-developers": {
    title: "Hire AI Developers & ML Engineers",
    description:
      "Hire AI developers experienced in LLMs, AI agents, deep learning and production ML. Bring domain-aware AI engineering to your next release.",
    keywords: buildKeywords(
      SERVICE_KEYWORDS.aiGeneral,
      SERVICE_KEYWORDS.aiAgents,
      SERVICE_KEYWORDS.machineLearning,
      INTENT_KEYWORDS.hire
    ),
  },
  "mvp-development": {
    title: "MVP Development Services",
    description:
      "Turn an idea into a working MVP fast. Lean scope, robust architecture and a build you can validate with real users and keep scaling afterwards.",
    keywords: buildKeywords(SERVICE_KEYWORDS.mvp, INDUSTRY_KEYWORDS.startups, INTENT_KEYWORDS.quote),
  },
  "hire-typescript-developers": {
    title: "Hire TypeScript Developers",
    description:
      "Hire TypeScript developers for type-safe, maintainable applications across front end and back end. Experienced engineers in a managed setup.",
    keywords: buildKeywords(
      ["hire TypeScript developers", "TypeScript development services"],
      SERVICE_KEYWORDS.frontend,
      SERVICE_KEYWORDS.backend,
      INTENT_KEYWORDS.hire
    ),
  },
  "hire-nodejs-developers": {
    title: "Hire Node.js Developers",
    description:
      "Hire Node.js developers to build fast, scalable APIs and backend services. Senior engineers with real production experience at load.",
    keywords: buildKeywords(
      ["hire Node.js developers", "Node.js development company"],
      SERVICE_KEYWORDS.backend,
      SERVICE_KEYWORDS.apis,
      INTENT_KEYWORDS.hire
    ),
  },
  "generative-ai-solutions": {
    title: "Generative AI Solutions & Development",
    description:
      "Build with generative AI: LLM apps, RAG pipelines, copilots and content generation that write, design, simulate and personalise at scale.",
    keywords: buildKeywords(
      SERVICE_KEYWORDS.generativeAi,
      SERVICE_KEYWORDS.aiAgents,
      SERVICE_KEYWORDS.aiGeneral
    ),
  },
  "ai-powered-chatbots": {
    title: "AI Chatbot Development Services",
    description:
      "Deploy conversational AI that understands context, answers accurately and hands off cleanly to humans across web, mobile and messaging channels.",
    keywords: buildKeywords(
      SERVICE_KEYWORDS.chatbots,
      SERVICE_KEYWORDS.generativeAi,
      SERVICE_KEYWORDS.automation
    ),
  },
  "frontend-development-services": {
    title: "Frontend Development Services",
    description:
      "Intuitive, responsive and fast user interfaces built by senior front-end engineers. React, Next.js and design systems that scale with your product.",
    keywords: buildKeywords(SERVICE_KEYWORDS.frontend, SERVICE_KEYWORDS.uiUx, SERVICE_KEYWORDS.webApps),
  },
  "backend-development-services": {
    title: "Backend Development Services",
    description:
      "Robust, secure and high-performance server-side systems: APIs, microservices, data pipelines and integrations built to handle real traffic.",
    keywords: buildKeywords(SERVICE_KEYWORDS.backend, SERVICE_KEYWORDS.apis, SERVICE_KEYWORDS.cloudDevops),
  },
  "ui-ux-design-services": {
    title: "UI/UX Design Services",
    description:
      "User-centric UI and UX design for web and mobile products: research, wireframes, prototypes and polished design systems your engineers can ship.",
    keywords: buildKeywords(SERVICE_KEYWORDS.uiUx, SERVICE_KEYWORDS.mobileApps, SERVICE_KEYWORDS.webApps),
  },
  "predictive-analysis": {
    title: "Predictive Analytics Services with AI",
    description:
      "Forecast demand, churn and risk with production-grade predictive models. Turn your data into decisions your team can act on before the fact.",
    keywords: buildKeywords(
      SERVICE_KEYWORDS.machineLearning,
      SERVICE_KEYWORDS.dataAnalytics,
      ["predictive analytics services", "AI forecasting solutions", "demand forecasting AI"]
    ),
  },
  "hire-javascript-developers": {
    title: "Hire JavaScript Developers",
    description:
      "Hire JavaScript developers who slot straight into your team. Front end, back end and full stack engineers with proven delivery experience.",
    keywords: buildKeywords(
      ["hire JavaScript developers", "JavaScript development services"],
      SERVICE_KEYWORDS.frontend,
      SERVICE_KEYWORDS.backend,
      INTENT_KEYWORDS.hire
    ),
  },
};

/* ------------------------------------------------------------------ */
/* /technologies/[slug]                                                */
/* ------------------------------------------------------------------ */

export const TECHNOLOGY_SLUG_SEO: Record<string, SlugSeo> = {
  "flutter-app-development": {
    title: "Flutter App Development Services",
    description:
      "Build one Flutter codebase that ships to iOS and Android with native performance, a consistent design system and a faster release cycle.",
    keywords: buildKeywords(
      ["Flutter app development services", "Flutter development company", "hire Flutter developers"],
      SERVICE_KEYWORDS.mobileApps
    ),
  },
  "ios-development": {
    title: "iOS App Development Services",
    description:
      "Native iOS apps built in Swift for iPhone and iPad: App Store ready, performant and designed around Apple's human interface guidelines.",
    keywords: buildKeywords(
      ["iOS app development services", "Swift app development", "iPhone app development company"],
      SERVICE_KEYWORDS.mobileApps
    ),
  },
  "mobile-app-development": {
    title: "Mobile App Development Company Hyderabad",
    description:
      "Custom mobile apps for iOS and Android, built from our HITEC City, Hyderabad studio — native or cross-platform, from design through App Store release.",
    keywords: buildKeywords(LOCATION_KEYWORDS, SERVICE_KEYWORDS.mobileApps, SERVICE_KEYWORDS.uiUx, INTENT_KEYWORDS.quote),
  },
  "python-development-services": {
    title: "Python Development Services",
    description:
      "Python engineering for backends, data pipelines, automation and machine learning. Django, FastAPI and production ML delivered by senior developers.",
    keywords: buildKeywords(
      ["Python development services", "Django development company", "FastAPI development", "hire Python developers"],
      SERVICE_KEYWORDS.backend,
      SERVICE_KEYWORDS.machineLearning
    ),
  },
  "php-development-services": {
    title: "PHP Development Services",
    description:
      "Custom PHP and Laravel development for web platforms, portals and APIs, including modernising and maintaining existing PHP applications.",
    keywords: buildKeywords(
      ["PHP development services", "Laravel development company", "hire PHP developers"],
      SERVICE_KEYWORDS.backend,
      SERVICE_KEYWORDS.webApps
    ),
  },
  "web-development": {
    title: "Website Development Company Hyderabad",
    description:
      "Hyderabad-based website development company building custom web applications for speed, accessibility and scale — from marketing sites to enterprise platforms.",
    keywords: buildKeywords(LOCATION_KEYWORDS, SERVICE_KEYWORDS.webApps, SERVICE_KEYWORDS.frontend, SERVICE_KEYWORDS.backend),
  },
  "node-js-development-services": {
    title: "Node.js Development Services",
    description:
      "Node.js backends and APIs built for throughput: real-time services, microservices and integrations that stay fast as traffic grows.",
    keywords: buildKeywords(
      ["Node.js development services", "Express.js development", "hire Node.js developers"],
      SERVICE_KEYWORDS.backend,
      SERVICE_KEYWORDS.apis
    ),
  },
  "android-app-development": {
    title: "Android App Development Services",
    description:
      "Native Android apps in Kotlin built for the full device range, with Play Store release, performance tuning and long-term maintenance.",
    keywords: buildKeywords(
      ["Android app development services", "Kotlin app development", "Android development company"],
      SERVICE_KEYWORDS.mobileApps
    ),
  },
  "ai-model-development": {
    title: "AI Model Development Services",
    description:
      "Custom AI model development end to end: data preparation, training, evaluation and deployment of models that hold up in production.",
    keywords: buildKeywords(
      ["AI model development", "custom AI model training", "model deployment services"],
      SERVICE_KEYWORDS.machineLearning,
      SERVICE_KEYWORDS.aiGeneral
    ),
  },
  "conversational-ai-systems": {
    title: "Conversational AI Systems Development",
    description:
      "Conversational AI that handles real dialogue: intent handling, context retention, tool calling and safe hand-off across voice and chat.",
    keywords: buildKeywords(
      SERVICE_KEYWORDS.chatbots,
      SERVICE_KEYWORDS.aiAgents,
      ["conversational AI systems", "voice AI development"]
    ),
  },
  "ai-logistics-forecasting": {
    title: "AI for Logistics & Demand Forecasting",
    description:
      "Forecast demand, plan capacity and optimise routes with AI built for logistics operations, from parcel volumes to warehouse throughput.",
    keywords: buildKeywords(
      INDUSTRY_KEYWORDS.logistics,
      SERVICE_KEYWORDS.machineLearning,
      ["AI logistics forecasting", "supply chain AI"]
    ),
  },
  "ai-powered-chatbots": {
    title: "AI-Powered Chatbot Development",
    description:
      "AI chatbots that resolve customer questions around the clock, connect to your systems for real answers and escalate cleanly when needed.",
    keywords: buildKeywords(SERVICE_KEYWORDS.chatbots, SERVICE_KEYWORDS.automation),
  },
  "computer-vision-services": {
    title: "Computer Vision Development Services",
    description:
      "Computer vision for image and video: detection, classification, defect inspection, OCR and visual process automation across industries.",
    keywords: buildKeywords(
      ["computer vision services", "image recognition development", "video analytics AI", "OCR development services"],
      SERVICE_KEYWORDS.machineLearning
    ),
  },
  "machine-learning-solutions": {
    title: "Machine Learning Development Services",
    description:
      "Machine learning solutions for recommendations, fraud detection, personalisation and process optimisation — built, deployed and monitored.",
    keywords: buildKeywords(SERVICE_KEYWORDS.machineLearning, SERVICE_KEYWORDS.dataAnalytics),
  },
  "ai-data-analytics": {
    title: "AI & Data Analytics Services",
    description:
      "Turn raw data into decisions with AI-driven analytics: pipelines, dashboards, predictive modelling and smart reporting for the whole business.",
    keywords: buildKeywords(SERVICE_KEYWORDS.dataAnalytics, SERVICE_KEYWORDS.machineLearning),
  },
  "-net-development-services": {
    title: ".NET Development Services",
    description:
      "Secure, scalable enterprise applications on .NET and C#, including modernisation of legacy .NET systems and cloud migration.",
    keywords: buildKeywords(
      [".NET development services", "C# development company", "ASP.NET development", "hire .NET developers"],
      SERVICE_KEYWORDS.backend
    ),
  },
  "natural-language-processing-nlp-": {
    title: "Natural Language Processing (NLP) Services",
    description:
      "NLP solutions for text extraction, classification, sentiment, summarisation and document automation across large unstructured datasets.",
    keywords: buildKeywords(
      ["natural language processing services", "NLP development company", "text analytics solutions", "document automation AI"],
      SERVICE_KEYWORDS.machineLearning,
      SERVICE_KEYWORDS.generativeAi
    ),
  },
  "ai-machine-learning": {
    title: "AI & Machine Learning Development",
    description:
      "End-to-end AI and machine learning development: strategy, data engineering, model building and production deployment with ongoing MLOps.",
    keywords: buildKeywords(
      SERVICE_KEYWORDS.aiGeneral,
      SERVICE_KEYWORDS.machineLearning,
      SERVICE_KEYWORDS.aiAgents
    ),
  },
  "generative-ai-solutions": {
    title: "Generative AI Development Services",
    description:
      "Generative AI built for production: LLM applications, RAG over your own content, copilots and agents wired into the tools your team uses.",
    keywords: buildKeywords(SERVICE_KEYWORDS.generativeAi, SERVICE_KEYWORDS.aiAgents),
  },
};

/* ------------------------------------------------------------------ */
/* /industries/[slug]                                                  */
/* ------------------------------------------------------------------ */

export const INDUSTRY_SLUG_SEO: Record<string, SlugSeo> = {
  "travel-hospitality": {
    title: "Travel & Hospitality Software Development",
    description:
      "Booking engines, marketplaces, payments and guest experience platforms built for travel operators, hotels and DMCs.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.travel, SERVICE_KEYWORDS.mobileApps, SERVICE_KEYWORDS.webApps),
  },
  legaltech: {
    title: "LegalTech Software & AI Development",
    description:
      "AI legal research, contract analysis and document automation that cut manual review time for law firms and in-house legal teams.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.legaltech, SERVICE_KEYWORDS.aiAgents, SERVICE_KEYWORDS.generativeAi),
  },
  "insurance-innovation": {
    title: "Insurance Software & AI Solutions",
    description:
      "Insurtech platforms with automated claims, AI risk assessment and secure policy administration built for regulated environments.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.insurance, SERVICE_KEYWORDS.automation, SERVICE_KEYWORDS.machineLearning),
  },
  "health-fitness": {
    title: "Health & Fitness App Development",
    description:
      "Health, wellness and fitness apps with tracking, coaching, community and wearable integrations — built to keep users coming back.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.fitness, INDUSTRY_KEYWORDS.healthcare, SERVICE_KEYWORDS.mobileApps),
  },
  media: {
    title: "Media & Entertainment Software Development",
    description:
      "Streaming, publishing and content platforms that handle scale: OTT delivery, content management and audience engagement.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.media, SERVICE_KEYWORDS.webApps, SERVICE_KEYWORDS.mobileApps),
  },
  startups: {
    title: "Software Development for Startups",
    description:
      "From MVP to scale-up: product design, rapid builds and a dedicated engineering team that grows with your funding stage.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.startups, SERVICE_KEYWORDS.mvp, SERVICE_KEYWORDS.dedicatedTeams),
  },
  fintech: {
    title: "Fintech Software Development Services",
    description:
      "Digital banking, payments, wallets and wealth platforms built to fintech standards of security, compliance and reliability.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.fintech, SERVICE_KEYWORDS.mobileApps, SERVICE_KEYWORDS.apis),
  },
  "supply-chain-intelligence": {
    title: "AI Supply Chain & Logistics Intelligence",
    description:
      "AI-driven forecasting, traceability and route optimisation that give supply chain teams visibility and lead time to act.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.logistics, SERVICE_KEYWORDS.machineLearning, SERVICE_KEYWORDS.dataAnalytics),
  },
  "public-sector-transformation": {
    title: "Public Sector Digital Transformation",
    description:
      "Citizen services, case management and process automation for government bodies, built for accessibility and long-term maintainability.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.publicSector, SERVICE_KEYWORDS.automation, SERVICE_KEYWORDS.webApps),
  },
  "e-commerce-development": {
    title: "E-commerce Software Development Services",
    description:
      "Custom storefronts, marketplaces and headless commerce builds with the integrations, performance and checkout flow that convert.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.ecommerceIndustry, SERVICE_KEYWORDS.ecommerce, SERVICE_KEYWORDS.webApps),
  },
  "cyber-security-solutions": {
    title: "AI Cybersecurity Solutions",
    description:
      "Proactive threat detection, anomaly monitoring and compliance tooling that give security teams earlier and clearer signals.",
    keywords: buildKeywords(INDUSTRY_KEYWORDS.cybersecurity, SERVICE_KEYWORDS.machineLearning),
  },
};

/* ------------------------------------------------------------------ */
/* /casestudies/[slug] — derived, never hand-listed                    */
/* ------------------------------------------------------------------ */

/** Words that must keep their casing when a slug is turned into a title. */
const ACRONYMS: Record<string, string> = {
  ai: "AI",
  ml: "ML",
  llm: "LLM",
  mcp: "MCP",
  crm: "CRM",
  cms: "CMS",
  hr: "HR",
  ide: "IDE",
  nlp: "NLP",
  saas: "SaaS",
  sass: "SaaS",
  aws: "AWS",
  b2b2c: "B2B2C",
  ui: "UI",
  ux: "UX",
  api: "API",
  iot: "IoT",
  nda: "NDA",
  sme: "SME",
  ops: "Ops",
  tmz: "TMZ",
  iol: "iOL",
  iwtx: "iWTX",
};

const SMALL_WORDS = new Set(["a", "an", "and", "as", "at", "for", "in", "of", "on", "or", "the", "to", "with"]);

/**
 * Typos baked into published slugs. The slug stays as-is because it is the
 * live URL, but the word is corrected wherever it is shown to a reader.
 */
const SLUG_TYPOS: Record<string, string> = {
  manageer: "Manager",
};

/** "ai-powered-legal-research-agents" -> "AI-Powered Legal Research Agents" */
export const humanizeSlug = (slug: string): string =>
  slug
    .split("-")
    .filter(Boolean)
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (ACRONYMS[lower]) return ACRONYMS[lower];
      if (SLUG_TYPOS[lower]) return SLUG_TYPOS[lower];
      if (index > 0 && SMALL_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");

/**
 * Case studies whose stored record does not describe the project its slug
 * names, so the page currently shows someone else's write-up.
 *
 * /casestudies/personalized-learning-assistant-agents-for-elearning-platform
 * holds the Downing investment-management case study, the same content already
 * published at /casestudies/downing-investment-management — two URLs serving
 * one write-up, under a slug that promises something else entirely.
 *
 * These stay reachable but are kept out of the index and the sitemap until the
 * real content lands. Delete the entry once the record is corrected.
 */
export const CASE_STUDIES_WITH_MISMATCHED_CONTENT = new Set([
  "personalized-learning-assistant-agents-for-elearning-platform",
]);

/**
 * Case study metadata built from the case study's own slug and copy, so the
 * title always describes the project on the page. Pass whatever description
 * the record actually has; a generic fallback is used when it has none.
 */
export const caseStudySeo = (slug: string, description = ""): SlugSeo => {
  const name = humanizeSlug(slug);
  const plain = String(description).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  // Titles get clamped to ~47 characters before the brand is appended. Twenty
  // of these slugs are long enough that " | Case Study" would be sliced apart,
  // leaving titles ending in a dangling pipe. Only add the suffix when it
  // survives; the project name on its own is the more useful half.
  const SUFFIX = " | Case Study";
  const fitsSuffix = name.length + SUFFIX.length <= 47;

  return {
    title: fitsSuffix ? `${name}${SUFFIX}` : name,
    description:
      plain ||
      `How LasyaAitech designed and delivered ${name}. Read the goals, the approach and the results of this project.`,
    keywords: buildKeywords(
      [
        `${name} case study`,
        name,
        "software development case study",
        "AI project case study",
        "client success story",
      ],
      SERVICE_KEYWORDS.aiAgents,
      SERVICE_KEYWORDS.mobileApps
    ),
  };
};
