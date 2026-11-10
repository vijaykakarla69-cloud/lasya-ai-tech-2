'use client'
import React, { useEffect, useState } from 'react';
import styles from './CookieConsent.module.css';
// import { GA_MEASUREMENT_ID } from '@/src/supporting-data/constants';
import { checkAnalyticsStatus } from '@/src/utils/analytics';
import Link from 'next/link';

type CookieType = 'necessary' | 'performance' | 'functional' | 'marketing';

interface CookiePreferences {
  necessary: boolean;  // Always true
  performance: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp?: string;
  sessionId?: string;
}

interface CookieConsentProps {
  isOpen?: boolean;
  onClose?: () => void;
  showPreferencesDirectly?: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ 
  isOpen, 
  onClose,
  showPreferencesDirectly = false 
}) => {
  const [showCustomizeSettings, setShowCustomizeSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    performance: false,
    functional: false,
    marketing: false
  });

  // Show modal if isOpen or showCustomizeSettings is true
  const showModal = isOpen || showCustomizeSettings;

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    setBannerVisible(!consent);
    setIsLoading(false);
    if (isOpen || showPreferencesDirectly) {
      setShowCustomizeSettings(true);
      setBannerVisible(false);
    }
  }, [isOpen, showPreferencesDirectly]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      checkAnalyticsStatus(); // This will log the analytics status whenever the component mounts
    }
  }, []);

  useEffect(() => {
    const openSettingsHandler = () => {
      setShowCustomizeSettings(true);
      setBannerVisible(false);
    };
    window.addEventListener('openCookieSettings', openSettingsHandler);
    return () => {
      window.removeEventListener('openCookieSettings', openSettingsHandler);
    };
  }, []);

  const getStoredPreferences = () => {
    try {
      const stored = localStorage.getItem('cookieConsent');
      if (!stored) return null;
      return JSON.parse(stored);
    } catch (e) {
      return null;
    }
  };

  const handleCustomizeClick = () => {
    setShowCustomizeSettings(true);
    setBannerVisible(false);
  };

  const handleModalClose = () => {
    setShowCustomizeSettings(false);
    if (onClose) onClose();
    // Optionally, show banner again if no consent
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setBannerVisible(true);
  };

  const handlePolicyClick = () => {
    setShowCustomizeSettings(false);
    if (onClose) onClose();
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setBannerVisible(false);
    setShowCustomizeSettings(false);
    if (onClose) onClose();
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setBannerVisible(false);
    setShowCustomizeSettings(false);
    if (onClose) onClose();
  };

  const confirmChoices = () => {
    try {
      const consent = {
        necessary: true,
        performance: cookiePreferences.performance,
        functional: cookiePreferences.functional,
        marketing: cookiePreferences.marketing,
        timestamp: new Date().toISOString(),
        sessionId: generateSessionId()
      };

      localStorage.setItem('cookieConsent', JSON.stringify(consent));
      setShowCustomizeSettings(false);
      setBannerVisible(false);
      
      if (!bannerVisible) {
        onClose?.();
      }
    } catch (error) {
      console.error('Error saving cookie preferences:', error);
    }
  };

  useEffect(() => {
    if (isOpen || showCustomizeSettings) {
      const savedConsent = localStorage.getItem('cookieConsent');
      if (savedConsent && savedConsent !== 'all' && savedConsent !== 'necessary') {
        try {
          const preferences = JSON.parse(savedConsent);
          setCookiePreferences(prev => ({
            ...prev,
            performance: Boolean(preferences.performance),
            functional: Boolean(preferences.functional),
            marketing: Boolean(preferences.marketing)
          }));
        } catch (error) {
          console.error('Error loading cookie preferences:', error);
        }
      }
    }
  }, [isOpen, showCustomizeSettings]);

  const openCustomizeSettings = () => {
    setShowCustomizeSettings(true);
  };

  const handlePreferenceChange = (cookieType: CookieType) => {
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  const generateSessionId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  const consentSet = typeof window !== 'undefined' && localStorage.getItem('cookieConsent');
  if (isLoading) return null;

  // Show modal if customizing or opened from footer, even if consent is set
  if (showModal) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.preferencesModal}>
          <div className={styles.modalHeader}>
            <div className={styles.modalLogo}>
              <div className={styles.logoWrapper}>
                <img src="/assets/imgs/template/idea4.png" alt="Logo" />
                <span className={styles.logoText}>LasyaAitech</span>
              </div>
            </div>
            <button className={styles.closeButton} onClick={handleModalClose}>×</button>
          </div>

          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Cookie Consent Preference Center</h2>
            
            <div className={styles.contentSection}>
              <p className={styles.modalDescription}>
                When you visit our website, we may store or retrieve information in your browser, primarily in the form of cookies. These cookies help enhance your experience by remembering your preferences, improving site functionality, and providing personalized content. The information collected does not usually identify you directly but contributes to a tailored browsing experience.
              </p>
              <Link 
                href="/cookie-policy" 
                className={styles.policyLink}
                onClick={handlePolicyClick}
              >
                Cookie Policy
              </Link>
            </div>

            <button className={styles.acceptAllButton} onClick={handleAcceptAll}>
              Accept all cookies
            </button>

            <div className={styles.cookieTypes}>
              <div className={styles.cookieType}>
                <div className={styles.cookieTypeHeader}>
                  <h3>Strictly Necessary Cookies</h3>
                  <span className={styles.alwaysActive}>Always Active</span>
                </div>
                <p>These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.</p>
                <div className={styles.cookieExamples}>
                  <small>Examples: Session cookies, CSRF tokens, cookie consent</small>
                </div>
              </div>

              <div className={styles.cookieType}>
                <div className={styles.cookieTypeHeader}>
                  <h3>Performance & Analytics Cookies</h3>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      name="performance"
                      checked={cookiePreferences.performance}
                      onChange={() => handlePreferenceChange('performance')}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.</p>
                <div className={styles.cookieExamples}>
                  <small>Examples: Google Analytics, page load times, popular pages</small>
                </div>
              </div>

              <div className={styles.cookieType}>
                <div className={styles.cookieTypeHeader}>
                  <h3>Functional Cookies</h3>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      name="functional"
                      checked={cookiePreferences.functional}
                      onChange={() => handlePreferenceChange('functional')}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <p>These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                <div className={styles.cookieExamples}>
                  <small>Examples: Language preferences, theme settings, form auto-fill data</small>
                </div>
              </div>

              <div className={styles.cookieType}>
                <div className={styles.cookieTypeHeader}>
                  <h3>Marketing & Advertising Cookies</h3>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      name="marketing"
                      checked={cookiePreferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <p>These cookies are used to track visitors across websites. They are set by our advertising partners and help us to show relevant advertisements to interested users.</p>
                <div className={styles.cookieExamples}>
                  <small>Examples: Advertising pixels, remarketing cookies, social media tracking</small>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button onClick={handleNecessaryOnly} className={styles.secondaryButton}>
              Necessary cookies only
            </button>
            <button onClick={confirmChoices} className={styles.primaryButton}>
              Confirm my choices
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Only show banner if consent is not set
  if (!consentSet && bannerVisible && !showCustomizeSettings) {
    return (
      <div className={styles.cookieContainer}>
        <div className={styles.cookieContent}>
          <div className={styles.cookieIcon}>
            <img 
              src="/assets/imgs/cookies/cookies.png"
              alt="Cookie Icon"
              width="80"
              height="80"
            />
          </div>
          
          <div className={styles.cookieText}>
            <h3 className={styles.cookieTitle}>Your Privacy Matters!</h3>
            <p className={styles.desktopOnly}>
              We value your privacy and want to be transparent about how we use cookies. 
              These help us understand how you interact with our website, improve your experience, 
              and provide personalized content.
            </p>
            <p className={styles.mobileOnly}>
              We use cookies to enhance your browsing experience and provide better service.
            </p>
            <p className={styles.cookieHighlight}>
              Choose your cookie preferences
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <div className={styles.mainButtons}>
              <button className={styles.primaryButton} onClick={handleAcceptAll}>
                Accept All
              </button>
              <button className={styles.secondaryButton} onClick={handleNecessaryOnly}>
                Necessary
              </button>
            </div>
            <button className={styles.customizeButton} onClick={handleCustomizeClick}>
              Customize
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Add this type declaration at the top of the file
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default CookieConsent;
