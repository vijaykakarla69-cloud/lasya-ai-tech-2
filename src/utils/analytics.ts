// import { GA_MEASUREMENT_ID } from '@/src/supporting-data/constants';

// Keeping the old GA4 implementation commented for reference
/*
// Initialize Google Analytics
export const initializeGA = () => {
  if (!isAnalyticsAllowed()) return;

  // Create and add the GA script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize the dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  };
  
  // Configure GA
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    cookie_flags: 'SameSite=None;Secure'
  });
};

// Track page views
export const pageview = (url: string) => {
  if (isAnalyticsAllowed() && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
*/

// Updated implementation using GTM
export const isAnalyticsAllowed = () => {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return false;
  
  try {
    if (consent === 'all') return true;
    const preferences = JSON.parse(consent);
    return preferences.performance === true;
  } catch {
    return false;
  }
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (isAnalyticsAllowed() && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Make sure to export the function
export const checkAnalyticsStatus = () => {
  const cookieConsent = localStorage.getItem('cookieConsent');
  const analyticsAllowed = cookieConsent === 'all';
  const gtmLoaded = typeof window !== 'undefined' && 'dataLayer' in window;

  return {
    cookieConsent,
    analyticsAllowed,
    gtmLoaded
  };
};

// Add type declarations
declare global {
  interface Window {
    dataLayer: any[];
  }
}
