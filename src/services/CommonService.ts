import { APP_CONSTANTS } from "@/src/supporting-data/constants";
import { AllServices } from "./allServices";

class CommonService {
  static getRawMetaData = () => {
    // Use a function to get the base URL that works in both client and server
    const getBaseUrl = () => {
      if (typeof window !== "undefined") {
        // Client-side
        return window.location.origin;
      }
      // Server-side
      return APP_CONSTANTS.COMPANY_WEBSITE;
    };

    const baseUrl = getBaseUrl();

    // Social share image (1200×630) from the approved thumbnail artwork,
    // served as /share.jpg for WhatsApp / Teams / Telegram crawlers.
    const ogImage = baseUrl + "/share.jpg";

    return {
      image: ogImage,
      url: APP_CONSTANTS.COMPANY_WEBSITE,
      companyName: APP_CONSTANTS.COMPANY_NAME,
      metadataBase: new URL(APP_CONSTANTS.COMPANY_WEBSITE),
      title: {
        template: `%s | ${APP_CONSTANTS.COMPANY_NAME}`,
        default: `${APP_CONSTANTS.COMPANY_NAME} - Empowering Businesses with Cutting-Edge Software Solutions`,
      },
      description: `${APP_CONSTANTS.COMPANY_NAME} specializes in full-stack development, mobile app development, web development, and expert developer services, helping businesses achieve their digital transformation goals.`,
      applicationName: APP_CONSTANTS.COMPANY_NAME,
      authors: [
        {
          name: `${APP_CONSTANTS.COMPANY_NAME} Team`,
          url: APP_CONSTANTS.COMPANY_WEBSITE,
        },
      ],
      generator: "Next.js",
      icons: {
        icon: baseUrl + "/assets/imgs/latlogoonly.png",
        shortcut: baseUrl + "/assets/imgs/latlogoonly.png",
        apple: baseUrl + "/assets/imgs/latlogoonly.png",
      },
      keywords: [
        APP_CONSTANTS.COMPANY_NAME,
        "Software Development",
        "Full-Stack Development",
        "Mobile App Development",
        "Web Development",
        "JavaScript Experts",
        "TypeScript Experts",
        "Node.js Developers",
        "Solution Architecture",
      ],
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        type: "website",
        siteName: "Lasya AI Tech",
        images: [
          {
            url: ogImage,
            secureUrl: ogImage,
            type: "image/jpeg",
            width: 1200,
            height: 630,
            alt: "Lasya AI Tech – AI-Powered Software Development Company",
          },
        ],
      },
    };
  };

  static makeDebugApiCallByPage = (page: string, data: any = {}) => {
    if (process.env.PRINT_NETWORK_CALLS === "true") {
      if (page === "contact") {
        AllServices.getContactFormData();
      }

      if (page === "get_a_free_quote") {
        AllServices.getFreeQuoteFormData();
      }

      // service detail page
      if (page === "service_page_by_slug") {
        AllServices.getServiceDataBySlug(data?.slug);
      }

      // service page
      if (page === "service_page_data") {
        AllServices.getServicePageData();
      }

      // technology pages
      if (page === "technology_page_data") {
        AllServices.getTechnologyPageData();
      }

      if (page === "technology_detail") {
        AllServices.getTechnologyData(data?.slug);
      }

      // case studies pages
      if (page === "case_studies_page_data") {
        AllServices.getCaseStudyPageData();
      }

      if (page === "case_study_detail") {
        AllServices.getCaseStudyBySlug(data?.slug);
      }

      // industries pages
      if (page === "industries_page_data") {
        AllServices.getIndustryMenuData();
      }

      if (page === "industry_detail") {
        AllServices.getIndustryPageData(data?.slug);
      }
    }
    return null;
  };
}

export default CommonService;
