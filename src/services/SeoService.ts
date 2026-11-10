import { Metadata } from "next";
import {
  APP_CONSTANTS,
  COMPANY_LOGO,
  SOCIAL_PROFILE_URLS,
} from "@/src/supporting-data/constants";
import { BRAND_KEYWORDS, buildKeywords } from "@/src/supporting-data/seo-keywords";
import { getPageSeo } from "@/src/supporting-data/page-seo";
import CommonService from "./CommonService";

const SITE = APP_CONSTANTS.COMPANY_WEBSITE.replace(/\/$/, "");
const BRAND = APP_CONSTANTS.COMPANY_NAME;

/** The site icon. Kept separate from the social share image — they are not the same asset. */
const FAVICON = "/assets/imgs/latlogoonly.png";

/**
 * Default Open Graph / Twitter share image (1200×630).
 * Derived from public/assets/imgs/thumbnail/Gemini_Generated_Image_z8wvamz8wvamz8wv.png
 * and served at /share.jpg for a short crawler-friendly path.
 */
const DEFAULT_OG_IMAGE = "/share.jpg";
const OG_SITE_NAME = "Lasya AI Tech";
const OG_IMAGE_ALT = "Lasya AI Tech – AI-Powered Software Development Company";

export const absoluteUrl = (pathOrUrl = "") => {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE}${path}`;
};

const cleanText = (text = "") =>
  String(text).replace(/\bCelerity\b/g, BRAND).replace(/\s+/g, " ").trim();

/** Strip HTML so descriptions taken from CMS body copy stay plain text. */
const toPlainText = (text = "") =>
  cleanText(String(text).replace(/<[^>]*>/g, " "));

/**
 * Google truncates around 60 characters for titles and 155 for descriptions.
 * Trim on a word boundary so nothing ends mid-word in the SERP.
 */
const clamp = (text: string, max: number) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  // Trailing separators are stripped too, so a cut that lands just after a
  // "|" or "-" does not leave the title dangling before the brand suffix.
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.\-|–—]+$/, "");
};

/**
 * Normalise a title to "<subject> | LasyaAitech" within the ~60 character
 * SERP limit, with the brand appearing exactly once.
 *
 * An already-branded title is not passed through untouched: some come from
 * page data and run long — the career roles produced titles of 85 to 122
 * characters — so the brand suffix is stripped, the subject is clamped, and
 * the suffix is put back. That way the brand always survives the trim
 * instead of the subject being cut off after it.
 */
const withBrand = (title: string) => {
  const clean = cleanText(title);
  if (!clean) return BRAND;

  const suffix = ` | ${BRAND}`;
  // Drop any existing brand suffix, however it was punctuated.
  const subject = clean
    .replace(new RegExp(`\\s*[|\\-–—]\\s*${BRAND}\\s*$`, "i"), "")
    .replace(/\s*[|\-–—]\s*lasya\s*ai\s*tech\s*$/i, "")
    .trim();

  // Brand mentioned mid-title ("About LasyaAitech | ...") already reads well.
  if (new RegExp(`\\b${BRAND}\\b`, "i").test(subject) || /lasya\s*ai\s*tech/i.test(subject)) {
    return clamp(subject, 60);
  }

  return `${clamp(subject || clean, 60 - suffix.length)}${suffix}`;
};

export type SeoInput = {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[] | string;
  url?: string;
  /** Set for pages that must not enter the index (demos, duplicates, thin pages). */
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /**
   * Root layout only. Emits `title.template` so any route that ships without
   * its own metadata still gets branded. Pages set a plain title instead, so
   * the brand is never appended twice.
   */
  useTitleTemplate?: boolean;
};

class SeoService {
  static generateSeoMetadata = ({
    title = "",
    description = "",
    image = "",
    keywords = [],
    url = "",
    noindex = false,
    type = "website",
    publishedTime,
    modifiedTime,
    useTitleTemplate = false,
  }: SeoInput): Metadata => {
    const rawMetaData: any = CommonService.getRawMetaData();
    const canonicalUrl = absoluteUrl(url);

    const finalTitle = withBrand(title || rawMetaData.title.default);
    const finalDescription = clamp(
      toPlainText(description) || cleanText(rawMetaData.description),
      160
    );
    const finalImage = absoluteUrl(image || rawMetaData.image || DEFAULT_OG_IMAGE);

    const providedKeywords = buildKeywords(keywords as string[] | string);
    const finalKeywords = providedKeywords.length
      ? buildKeywords(providedKeywords, BRAND_KEYWORDS).slice(0, 25)
      : rawMetaData.keywords;

    return {
      metadataBase: rawMetaData.metadataBase,
      // `absolute` opts out of the root layout's "%s | LasyaAitech" template.
      // withBrand() has already added the brand exactly once; letting the
      // template apply on top of that produced "... | LasyaAitech | LasyaAitech".
      title: useTitleTemplate
        ? { default: finalTitle, template: rawMetaData.title.template }
        : { absolute: finalTitle },
      description: finalDescription,
      applicationName: rawMetaData.applicationName,
      authors: [
        {
          name: rawMetaData.authors[0].name,
          url: rawMetaData.authors[0].url,
        },
      ],
      generator: rawMetaData.generator,
      icons: {
        icon: FAVICON,
        shortcut: FAVICON,
        apple: FAVICON,
      },
      keywords: finalKeywords,
      ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
      robots: noindex
        ? { index: false, follow: false, googleBot: { index: false, follow: false } }
        : {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-image-preview": "large",
              "max-snippet": -1,
              "max-video-preview": -1,
            },
          },
      openGraph: {
        type: type || "website",
        title: finalTitle,
        description: finalDescription,
        ...(canonicalUrl ? { url: canonicalUrl } : {}),
        siteName: OG_SITE_NAME,
        locale: "en_US",
        images: [
          {
            url: finalImage,
            secureUrl: finalImage,
            type: "image/jpeg",
            width: 1200,
            height: 630,
            alt: image ? finalTitle : OG_IMAGE_ALT,
          },
        ],
        ...(type === "article" && publishedTime ? { publishedTime } : {}),
        ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      },
      twitter: {
        card: "summary_large_image",
        title: finalTitle,
        description: finalDescription,
        images: [
          {
            url: finalImage,
            alt: image ? finalTitle : OG_IMAGE_ALT,
          },
        ],
      },
      ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
        ? {
            verification: {
              google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
            },
          }
        : {}),
      appleWebApp: {
        capable: true,
        title: BRAND,
        statusBarStyle: "default",
      },
    };
  };

  /**
   * Metadata for a route listed in PAGE_SEO.
   *
   * The registry entry wins on title and description — those are written to
   * fit the SERP. Keywords already present in the page data file are appended
   * rather than replaced, so nothing the content team added is lost.
   */
  static fromRegistry = (
    route: string,
    extra: { keywords?: string[] | string; image?: string; description?: string } = {}
  ): Metadata => {
    const entry = getPageSeo(route);

    if (!entry) {
      return SeoService.generateSeoMetadata({ url: route, ...extra });
    }

    return SeoService.generateSeoMetadata({
      title: entry.title,
      description: extra.description || entry.description,
      keywords: buildKeywords(entry.keywords, extra.keywords),
      url: route,
      image: extra.image,
      noindex: entry.noindex,
    });
  };

  /** Breadcrumb + WebPage graph for a registry route, ready to hand to <JsonLd />. */
  static registryGraph = (route: string, extraNodes: object[] = []) => {
    const entry = getPageSeo(route);
    if (!entry) return null;

    return SeoService.graph(
      SeoService.webPage({
        url: route,
        name: entry.title,
        description: entry.description,
      }),
      entry.breadcrumb ? SeoService.breadcrumb(entry.breadcrumb) : null,
      ...extraNodes
    );
  };

  /* ------------------------------------------------------------------ */
  /* Structured data                                                     */
  /* ------------------------------------------------------------------ */

  static readonly organizationId = `${SITE}/#organization`;
  static readonly websiteId = `${SITE}/#website`;

  /** Reference the Organization node declared once in the root layout. */
  static organizationRef = () => ({ "@id": SeoService.organizationId });

  /**
   * Local-business fields (address/telephone/areaServed) live here rather
   * than only in a LocalBusiness-typed sibling node, so every existing
   * organizationRef() reference across the site (Service, Article,
   * JobPosting, FAQPage, ...) picks up the local signal for free — they
   * already point at this @id.
   *
   * geo-coordinates and opening hours are deliberately left out: neither is
   * verified from a canonical source (Google Business Profile), and shipping
   * a guessed lat/long or unconfirmed hours into production structured data
   * risks being wrong in a way that actively misleads customers and Google.
   * Add them once confirmed from the GBP dashboard.
   */
  static organizationNode = () => ({
    "@type": ["Organization", "ProfessionalService"],
    "@id": SeoService.organizationId,
    name: BRAND,
    url: SITE,
    logo: COMPANY_LOGO,
    image: COMPANY_LOGO,
    telephone: "+91-8500700657",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Krishe Sapphire, 7th Floor, South Wing, Hitech City Main Road, Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Place", name: "HITEC City, Hyderabad" },
      { "@type": "Place", name: "Madhapur, Hyderabad" },
      { "@type": "Place", name: "Jubilee Hills, Hyderabad" },
      { "@type": "Place", name: "Kondapur, Hyderabad" },
      { "@type": "Place", name: "Gachibowli, Hyderabad" },
      { "@type": "City", name: "Hyderabad" },
    ],
    sameAs: Object.values(SOCIAL_PROFILE_URLS),
  });

  /**
   * BreadcrumbList. Pass the trail without the home entry — it is prepended.
   * e.g. breadcrumb([{ name: 'Services', path: '/services' }])
   */
  static breadcrumb = (trail: { name: string; path: string }[]) => ({
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(trail[trail.length - 1]?.path ?? "/")}#breadcrumb`,
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  });

  static service = ({
    name,
    description,
    url,
    serviceType,
    areaServed = "Worldwide",
  }: {
    name: string;
    description: string;
    url: string;
    serviceType?: string;
    areaServed?: string;
  }) => ({
    "@type": "Service",
    "@id": `${absoluteUrl(url)}#service`,
    name: cleanText(name),
    description: toPlainText(description),
    url: absoluteUrl(url),
    ...(serviceType ? { serviceType } : {}),
    areaServed,
    provider: SeoService.organizationRef(),
  });

  static faq = (
    url: string,
    faqs: { question: string; answer: string }[]
  ) => ({
    "@type": "FAQPage",
    "@id": `${absoluteUrl(url)}#faq`,
    mainEntity: faqs
      .filter((f) => f?.question && f?.answer)
      .map((f) => ({
        "@type": "Question",
        name: toPlainText(f.question),
        acceptedAnswer: { "@type": "Answer", text: toPlainText(f.answer) },
      })),
  });

  static webPage = ({
    url,
    name,
    description,
  }: {
    url: string;
    name: string;
    description: string;
  }) => ({
    "@type": "WebPage",
    "@id": `${absoluteUrl(url)}#webpage`,
    url: absoluteUrl(url),
    name: cleanText(name),
    description: toPlainText(description),
    isPartOf: { "@id": SeoService.websiteId },
    publisher: SeoService.organizationRef(),
  });

  /** Case studies read as articles to search engines. */
  static article = ({
    url,
    headline,
    description,
    image,
    datePublished,
    dateModified,
  }: {
    url: string;
    headline: string;
    description: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
  }) => ({
    "@type": "Article",
    "@id": `${absoluteUrl(url)}#article`,
    headline: clamp(cleanText(headline), 110),
    description: toPlainText(description),
    url: absoluteUrl(url),
    ...(image ? { image: absoluteUrl(image) } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: SeoService.organizationRef(),
    publisher: SeoService.organizationRef(),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${absoluteUrl(url)}#webpage` },
  });

  static jobPosting = ({
    title,
    description,
    url,
    employmentType,
    location,
    datePosted,
    validThrough,
  }: {
    title: string;
    description: string;
    url: string;
    employmentType?: string;
    location?: string;
    datePosted?: string;
    validThrough?: string;
  }) => ({
    "@type": "JobPosting",
    "@id": `${absoluteUrl(url)}#jobposting`,
    title: cleanText(title),
    description: toPlainText(description),
    url: absoluteUrl(url),
    ...(employmentType ? { employmentType: employmentType.toUpperCase().replace(/[\s-]+/g, "_") } : {}),
    ...(datePosted ? { datePosted } : {}),
    ...(validThrough ? { validThrough } : {}),
    hiringOrganization: SeoService.organizationRef(),
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: location || "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
  });

  /** For the standalone product/app pages (VoxNote, Clara, Peakly …). */
  static softwareApplication = ({
    name,
    description,
    url,
    category = "HealthApplication",
    operatingSystem = "iOS, Android",
  }: {
    name: string;
    description: string;
    url: string;
    category?: string;
    operatingSystem?: string;
  }) => ({
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(url)}#app`,
    name: cleanText(name),
    description: toPlainText(description),
    url: absoluteUrl(url),
    applicationCategory: category,
    operatingSystem,
    publisher: SeoService.organizationRef(),
  });

  /** Wrap nodes into a single @graph document. */
  static graph = (...nodes: (object | null | undefined | false)[]) => ({
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  });
}

export default SeoService;
