/**
 * The standalone mobile products with legal/support pages on this site.
 *
 * Each product ships four near-identical routes (privacy policy, terms,
 * support, contact). Without distinct metadata every one of them inherited
 * the site-wide title, which meant ~45 pages competing on the same string —
 * exactly the duplicate-title problem that keeps them out of the index.
 *
 * The descriptions are taken from each app's own policy copy so they describe
 * the real product rather than a guess.
 */

export type AppProduct = {
  /** Route segment under /, e.g. "voxnote" -> /voxnote/privacy-policy */
  slug: string;
  name: string;
  /** One line describing what the app does. Used to build page descriptions. */
  summary: string;
  /** schema.org applicationCategory. */
  category: string;
  keywords: string[];
  /** Which of the four legal routes this product actually has. */
  routes: AppProductRoute[];
};

export type AppProductRoute =
  | "privacy-policy"
  | "terms-and-conditions"
  | "support"
  | "contact-us";

const ALL_ROUTES: AppProductRoute[] = [
  "privacy-policy",
  "terms-and-conditions",
  "support",
  "contact-us",
];

export const APP_PRODUCTS: AppProduct[] = [
  {
    slug: "clara",
    name: "Clara",
    summary:
      "a perimenopause brain and mood coaching app that helps women track symptoms and build steadier days",
    category: "HealthApplication",
    keywords: ["perimenopause app", "menopause mood tracker", "womens health app", "brain fog tracker"],
    routes: ALL_ROUTES,
  },
  {
    slug: "gluco",
    name: "Gluco",
    summary:
      "a wellness and education app that helps people understand pre-diabetes and build healthier lifestyle habits",
    category: "HealthApplication",
    keywords: ["pre-diabetes app", "blood sugar wellness app", "healthy habits tracker", "diabetes prevention app"],
    routes: ALL_ROUTES,
  },
  {
    slug: "haven",
    name: "Haven",
    summary:
      "a self-guided wellness app supporting the mental wellbeing of family caregivers",
    category: "HealthApplication",
    keywords: ["caregiver support app", "family caregiver wellbeing", "carer mental health app", "self-guided wellness"],
    routes: ALL_ROUTES,
  },
  {
    slug: "luminary",
    name: "Luminary",
    summary:
      "a grief-companion app offering private, supportive space for people working through loss",
    category: "HealthApplication",
    keywords: ["grief support app", "bereavement companion app", "grief journal app", "loss support"],
    routes: ALL_ROUTES,
  },
  {
    slug: "niyma",
    name: "Niyma",
    summary:
      "a wellness app for habits, plans and journaling with optional health integrations and account sync",
    category: "HealthApplication",
    keywords: ["wellness habit tracker", "journaling app", "daily habits app", "wellbeing planner"],
    routes: ["privacy-policy", "contact-us"],
  },
  {
    slug: "nouri",
    name: "Nouri",
    summary:
      "an intuitive-eating coaching app that skips calorie, macro and weight counting entirely",
    category: "HealthApplication",
    keywords: ["intuitive eating app", "non-diet nutrition app", "food freedom coaching", "anti-diet app"],
    routes: ALL_ROUTES,
  },
  {
    slug: "peakly",
    name: "Peakly",
    summary:
      "a medication-timing app that helps people track when they take ADHD medication and how they feel afterwards",
    category: "HealthApplication",
    keywords: ["ADHD medication tracker", "medication timing app", "ADHD symptom tracker", "med reminder app"],
    routes: ALL_ROUTES,
  },
  {
    slug: "recovery-coach",
    name: "RecoveryCoach",
    summary:
      "a post-surgery recovery app with day-by-day guidance, red-flag checks, reminders and an AI recovery coach",
    category: "HealthApplication",
    keywords: ["post surgery recovery app", "recovery tracker app", "surgery aftercare app", "AI recovery coach"],
    routes: ALL_ROUTES,
  },
  {
    slug: "reframe",
    name: "Reframe",
    summary:
      "an AI-guided four-week Pain Reprocessing Therapy programme for adults living with chronic back pain",
    category: "HealthApplication",
    keywords: [
      "chronic back pain app",
      "pain reprocessing therapy app",
      "PRT programme app",
      "chronic pain management app",
    ],
    routes: ALL_ROUTES,
  },
  {
    slug: "snipora",
    name: "Snipora",
    summary:
      "a text snippet and keyboard app with cloud sync, backup and import/export for reusable phrases",
    category: "UtilitiesApplication",
    keywords: ["text snippet app", "keyboard shortcut app", "text expander app", "clipboard manager app"],
    routes: ["privacy-policy"],
  },
  {
    slug: "vela",
    name: "Vela",
    summary:
      "a self-help app that reduces social anxiety through small, daily exposure challenges",
    category: "HealthApplication",
    keywords: ["social anxiety app", "exposure therapy app", "shyness self-help app", "anxiety challenges app"],
    routes: ALL_ROUTES,
  },
  {
    slug: "vestigo",
    name: "Vestigo",
    summary:
      "a daily companion for people managing vestibular disorders, with symptom diaries, trigger logs and exercises",
    category: "HealthApplication",
    keywords: ["vestibular disorder app", "vertigo tracker app", "dizziness symptom diary", "BPPV exercise app"],
    routes: ALL_ROUTES,
  },
  {
    slug: "voxnote",
    name: "VoxNote",
    summary:
      "a text-to-speech app that turns typed, pasted or imported text into natural spoken audio",
    category: "UtilitiesApplication",
    keywords: ["text to speech app", "TTS reader app", "read aloud app", "document to audio app"],
    routes: ALL_ROUTES,
  },
];

/** Human label and intent for each of the four legal routes. */
export const APP_ROUTE_META: Record<
  AppProductRoute,
  { label: string; describe: (name: string, summary: string) => string }
> = {
  "privacy-policy": {
    label: "Privacy Policy",
    describe: (name, summary) =>
      `How ${name}, ${summary}, collects, uses and protects your data — and the choices and rights you have over it.`,
  },
  "terms-and-conditions": {
    label: "Terms & Conditions",
    describe: (name, summary) =>
      `The terms of use for ${name}, ${summary}. Covers acceptable use, subscriptions, disclaimers and your responsibilities.`,
  },
  support: {
    label: "Support",
    describe: (name, summary) =>
      `Help and support for ${name}, ${summary}. Find answers to common questions or contact the team directly.`,
  },
  "contact-us": {
    label: "Contact Us",
    describe: (name, summary) =>
      `Contact the team behind ${name}, ${summary}. Get in touch about accounts, billing, feedback or data requests.`,
  },
};

export const getAppProduct = (slug: string) =>
  APP_PRODUCTS.find((product) => product.slug === slug);
