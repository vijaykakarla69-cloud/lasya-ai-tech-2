/**
 * OpenPanel Page Configuration
 * 
 * Central registry of all pages/routes in the application for analytics tracking.
 * This file defines which routes should be tracked as page views in OpenPanel.
 * 
 * Similar to the mobile app's OpenPanelPages configuration, this allows us to:
 * - Track page views from a single place
 * - Add metadata (category, page name) to each page
 * - Control which routes are tracked
 * 
 * Routes should match the Next.js App Router structure.
 */

export interface OpenPanelPageConfig {
  pageName: string;
  route: string;
  category?: string;
}

/**
 * Central registry of pages we want to track with OpenPanel
 * 
 * Key: Route path (should match Next.js route structure)
 * Value: Page configuration with metadata
 */
export const OPENPANEL_PAGES: Record<string, OpenPanelPageConfig> = {
  // Home page
  '/': {
    pageName: 'Home',
    route: '/',
    category: 'navigation',
  },

  // About page
  '/about': {
    pageName: 'About',
    route: '/about',
    category: 'content',
  },

  // Services pages
  '/services': {
    pageName: 'Services',
    route: '/services',
    category: 'content',
  },
  '/services/[slug]': {
    pageName: 'ServiceDetail',
    route: '/services', // Base route, slug will be in properties
    category: 'content',
  },

  // Technologies pages
  '/technologies': {
    pageName: 'Technologies',
    route: '/technologies',
    category: 'content',
  },
  '/technologies/[slug]': {
    pageName: 'TechnologyDetail',
    route: '/technologies',
    category: 'content',
  },

  // Case Studies pages
  '/casestudies': {
    pageName: 'CaseStudies',
    route: '/casestudies',
    category: 'content',
  },
  '/casestudies/[slug]': {
    pageName: 'CaseStudyDetail',
    route: '/casestudies',
    category: 'content',
  },

  // Industries pages
  '/industries': {
    pageName: 'Industries',
    route: '/industries',
    category: 'content',
  },
  '/industries/[slug]': {
    pageName: 'IndustryDetail',
    route: '/industries',
    category: 'content',
  },

  // Careers pages
  '/careers': {
    pageName: 'Careers',
    route: '/careers',
    category: 'engagement',
  },
  '/careers/[slug]': {
    pageName: 'CareerDetail',
    route: '/careers',
    category: 'engagement',
  },

  // Contact page
  '/contact': {
    pageName: 'Contact',
    route: '/contact',
    category: 'engagement',
  },

  // Get a free quote page
  '/get-a-free-quote': {
    pageName: 'GetAFreeQuote',
    route: '/get-a-free-quote',
    category: 'conversion',
  },

  // Landing pages
  '/lp1/[slug]': {
    pageName: 'LandingPage1',
    route: '/lp1',
    category: 'marketing',
  },
  '/lp2/[slug]': {
    pageName: 'LandingPage2',
    route: '/lp2',
    category: 'marketing',
  },
  '/lp3/[slug]': {
    pageName: 'LandingPage3',
    route: '/lp3',
    category: 'marketing',
  },
  '/lp4/[slug]': {
    pageName: 'LandingPage4',
    route: '/lp4',
    category: 'marketing',
  },
  '/lp5/[slug]': {
    pageName: 'LandingPage5',
    route: '/lp5',
    category: 'marketing',
  },

  // Services demo page
  '/services-dashdev-demo': {
    pageName: 'ServicesDashdevDemo',
    route: '/services-dashdev-demo',
    category: 'engagement',
  },

  // Legal pages
  '/privacy-policy': {
    pageName: 'PrivacyPolicy',
    route: '/privacy-policy',
    category: 'legal',
  },
  '/cookie-policy': {
    pageName: 'CookiePolicy',
    route: '/cookie-policy',
    category: 'legal',
  },
};

/**
 * Get page configuration for a given route path
 * Handles both exact matches and dynamic route patterns
 */
export function getPageConfig(pathname: string): OpenPanelPageConfig | null {
  // Try exact match first
  if (OPENPANEL_PAGES[pathname]) {
    return OPENPANEL_PAGES[pathname];
  }

  // Try to match dynamic routes (e.g., /services/[slug] -> /services/web-development)
  const pathSegments = pathname.split('/').filter(Boolean);
  
  for (const [routePattern, config] of Object.entries(OPENPANEL_PAGES)) {
    const patternSegments = routePattern.split('/').filter(Boolean);
    
    // Skip if segment count doesn't match
    if (patternSegments.length !== pathSegments.length) {
      continue;
    }
    
    // Check if all segments match (ignoring [slug] patterns)
    let matches = true;
    for (let i = 0; i < patternSegments.length; i++) {
      const patternSegment = patternSegments[i];
      const pathSegment = pathSegments[i];
      
      // If it's a dynamic segment like [slug], it matches any value
      if (patternSegment.startsWith('[') && patternSegment.endsWith(']')) {
        continue;
      }
      
      // Otherwise, segments must match exactly
      if (patternSegment !== pathSegment) {
        matches = false;
        break;
      }
    }
    
    if (matches) {
      // Return config with the actual pathname as the route
      return {
        ...config,
        route: pathname, // Use actual pathname instead of pattern
      };
    }
  }

  return null;
}

/**
 * Check if a route should be tracked
 */
export function shouldTrackRoute(pathname: string): boolean {
  return getPageConfig(pathname) !== null;
}

