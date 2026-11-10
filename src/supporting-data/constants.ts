const PORT = process.env.PORT || 3700;
const ENV = process.env.ENV || "development";
const DEFAULT_COMPANY = (
  process.env.DEFAULT_COMPANY || "lasyaaitech"
).toLowerCase();

// Common variations that should be replaced with the current default company name
const COMMON_NAME_VARIATIONS = [
  "lasyaaitech",
  "lasya aitech",
  "lasya ai tech",
  "Lasya Aitech",
  "Lasya AI Tech",
  "LasyaAiTech",
  "Technext",
  "DashDevs",
  "KrivaTech",
  "Krivatech",
  "LasyAiTech",
  "Celerity",
];

export const GTM_ID = "GTM-MBD6LN8L";
/** Dedicated GTM container for lasyaaitech.com specifically (GTM_ID above ships to every brand this layout serves). */
export const LASYAAITECH_GTM_ID = "GTM-5C8D2RJ2";
export const GA_MEASUREMENT_ID = "G-7769H3WM4D";
// Note: an earlier, different GA4 ID (G-SLX5P6PCZJ, email lasyaaitech007@gmail.com)
// was wired up here previously but left commented out and unused.

export const COMPANY_CONFIGS: Record<
  string,
  {
    // BASE_URL: string;
    // API_URL: string;
    CMS_URL: string;
    COMPANY_NAME: string;
    COMPANY_WEBSITE: string;
  }
> = {
  lasyaaitech: {
    // BASE_URL: 'https://lasyaaitech.tech',
    // API_URL: 'https://api.lasyaaitech.tech',
    CMS_URL: "https://cms.kriva.tech",
    COMPANY_NAME: "LasyaAitech",
    COMPANY_WEBSITE: "https://lasyaaitech.com",
  },
  krivatech: {
    // BASE_URL: 'https://kriva.tech',
    // API_URL: 'https://api.kriva.tech',
    CMS_URL: "https://cms.kriva.tech",
    COMPANY_NAME: "KrivaTech",
    COMPANY_WEBSITE: "https://kriva.tech",
  },
};

export const COMPANY_LOGO =
  COMPANY_CONFIGS[DEFAULT_COMPANY].COMPANY_WEBSITE +
  "/assets/imgs/latlogoonly.png";
// Ensure we have a valid company config
const getDefaultConfig = () => {
  const config = COMPANY_CONFIGS[DEFAULT_COMPANY];
  if (!config) {
    console.warn(
      `Invalid company configuration for "${DEFAULT_COMPANY}". Falling back to lasyaaitech.`
    );
    return COMPANY_CONFIGS["lasyaaitech"];
  }
  return config;
};

// Initialize APP_CONSTANTS with the default company config
export const APP_CONSTANTS = {
  ...getDefaultConfig(),
  // Add development overrides if needed
  ...(ENV === "development"
    ? {
        API_URL: `http://localhost:${PORT}`,
      }
    : {}),
};

/** Official LasyaAitech social profile links (footer, contact, SocialShare follow preset). */
export const SOCIAL_PROFILE_URLS = {
  facebook: "https://www.facebook.com/p/Lasya-Ai-Tech-61588287567320/",
  linkedin:
    "https://www.linkedin.com/company/lasya-aitech/?originalSubdomain=in",
  instagram: "https://www.instagram.com/lasya_aitech/",
} as const;

// Safe URL joining function
const joinUrl = (base: string, path: string): string => {
  try {
    const baseUrl = base.endsWith("/") ? base.slice(0, -1) : base;
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${baseUrl}/${cleanPath}`;
  } catch (error) {
    console.error("Error joining URLs:", base, path);
    return "";
  }
};

// Helper function to validate URL
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const changeCompany = (companyName: keyof typeof COMPANY_CONFIGS) => {
  const normalizedName = companyName.toLowerCase();
  const config = COMPANY_CONFIGS[normalizedName];
  if (config) {
    Object.assign(APP_CONSTANTS, {
      ...config,
      ...(ENV === "development"
        ? {
            API_URL: `http://localhost:${PORT}`,
          }
        : {}),
    });
    return true;
  }
  console.warn(`Invalid company name: ${companyName}`);
  return false;
};

export const headerMenuData = [
  {
    menuName: "Home",
    menuLink: "/",
  },
  {
    menuName: "About",
    menuLink: "/about",
  },
  {
    menuName: "Services",
    menuLink: "/services",
  },
  {
    menuName: "Case Studies",
    menuLink: "/casestudies",
  },
  {
    menuName: "Technologies",
    menuLink: "/technologies",
  },
  {
    menuName: "Contact",
    menuLink: "/contact",
  },
  {
    menuName: "Careers",
    menuLink: "/careers",
  },
  {
    menuName: "Get a Quote",
    menuLink: "/get-a-free-quote",
  }
];

export const headerMenuDataMaster = [
  {
    menuName: "Home",
    menuLink: "/",
  },
  {
    menuName: "About",
    menuLink: "/about",
  },
  {
    menuName: "Services",
    menuLink: "/services",
  },
  {
    menuName: "Case Studies",
    menuLink: "/casestudies",
  },
  {
    menuName: "Contact",
    menuLink: "/contact",
  },
  {
    menuName: "AI Free Quote",
    menuLink: "/ai-free-quote",
  },
  {
    menuName: "Technologies",
    menuLink: "/technologies",
  },
  {
    menuName: "Industries",
    menuLink: "/industries",
  },
  {
    menuName: "Careers",
    menuLink: "/careers",
  },
  {
    menuName: "Get a Quote",
    menuLink: "/get-a-free-quote",
  }
];

// Notification Banner Configuration
// Control banner visibility and content from here
export const NOTIFICATION_BANNER_CONFIG = {
  enabled: true, // Set to true to show the banner
  message: "We're hiring! Join our team and help build amazing products.",
  type: "hiring" as "info" | "warning" | "success" | "hiring", // Banner type affects styling
  closeable: false, // Set to false for permanent banner
  link: {
    url: "/careers",
    text: "View Open Positions",
  },
  // Example configurations:
  // For downtime notification:
  // enabled: true,
  // message: "We're experiencing some downtime. Services will be restored shortly.",
  // type: "warning",
  // closeable: true,
  // link: undefined,
  // 
  // For permanent announcement:
  // enabled: true,
  // message: "New features coming soon!",
  // type: "info",
  // closeable: false,
  // link: undefined,
};

export const replaceCompanyNames = (data: any): any => {
  if (!data) return data;

  // Handle arrays
  if (Array.isArray(data)) {
    return data.map((item) => replaceCompanyNames(item));
  }

  // Handle objects
  if (typeof data === "object" && data !== null) {
    const newObj: any = {};
    for (const [key, value] of Object.entries(data)) {
      const newKey = typeof key === "string" ? replaceCompanyNames(key) : key;
      newObj[newKey] = replaceCompanyNames(value);
    }
    return newObj;
  }

  // Handle strings
  if (typeof data === "string") {
    let result = data;

    // Get the current company config
    const currentConfig = APP_CONSTANTS;

    // Replace all common variations with the current company name
    COMMON_NAME_VARIATIONS.forEach((variation) => {
      const variationRegex = new RegExp(variation, "gi");
      result = result.replace(variationRegex, currentConfig.COMPANY_NAME);
    });

    // Replace URLs if they are valid
    Object.entries(currentConfig).forEach(([key, value]) => {
      if (typeof value === "string" && isValidUrl(value)) {
        const urlRegex = new RegExp(
          value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "gi"
        );
        result = result.replace(urlRegex, value);
      }
    });

    return result;
  }

  return data;
};
