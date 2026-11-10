'use client'
import React from 'react';
import Layout from "@/src/components/layout/Layout";
import { APP_CONSTANTS } from '@/src/supporting-data/constants';
import styles from './cookie-policy.module.css';

const CookiePolicy = () => {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Cookie Policy</h1>
              </div>
            </div>
          </div>
        </div>

        <section className={`section-box ${styles.contentSection}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="space-y-6">
                  {/* Introduction */}
                  <section>
                    <p className="text-sm leading-relaxed text-gray-600 mb-6">
                      {APP_CONSTANTS.COMPANY_NAME} uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and improve the functionality of our services. This Cookie Policy explains what cookies are, how we use them, and the choices you have regarding their use. By continuing to browse our website, you consent to the use of cookies as described in this policy. We are committed to ensuring transparency and giving users control over their cookie preferences.
                    </p>
                  </section>

                  {/* What Are Cookies? */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">What Are Cookies?</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      Cookies are small text files stored on your device when you visit a website. These files contain data that help websites remember user preferences, improve navigation, and provide a more personalized experience. Cookies can be classified into different types based on their functionality and duration. Session cookies are temporary and expire when you close your browser, while persistent cookies remain stored on your device until manually deleted or after a predetermined expiration period. Additionally, first-party cookies are set by the website you are visiting, whereas third-party cookies originate from external services integrated into the site.
                    </p>
                  </section>

                  {/* How We Use Cookies */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">How We Use Cookies</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} uses cookies for various purposes to enhance website functionality, track performance, and ensure security. Essential cookies are necessary for the core functionality of the website, enabling features such as secure authentication, session management, and accessibility settings. Performance cookies help us analyze website traffic, monitor user interactions, and improve the overall experience by identifying areas for optimization. Functional cookies remember user preferences, such as language settings and personalized display options, to create a more tailored browsing experience. Marketing and analytics cookies allow us to understand visitor behavior, measure engagement, and serve relevant content or advertisements based on user interests.
                    </p>
                  </section>

                  {/* Types of Cookies We Use */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">Types of Cookies We Use</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} categorizes cookies into different types based on their role and functionality. Strictly necessary cookies are essential for the operation of our website, ensuring smooth navigation, secure login, and protection against fraudulent activities. Analytics and performance cookies help us gather insights into visitor interactions, identify popular content, and optimize website performance. Functional cookies enhance user experience by remembering preferences, saving custom settings, and enabling personalized features. Advertising and tracking cookies, when used, assist in delivering targeted ads, analyzing marketing effectiveness, and providing relevant promotions based on user interests.
                    </p>
                  </section>

                  {/* Managing Your Cookie Preferences */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">Managing Your Cookie Preferences</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} provides users with control over their cookie preferences, allowing them to manage, enable, or disable certain types of cookies. Users can modify their cookie settings through the website's cookie consent banner, where they can accept or reject specific categories of cookies. Additionally, most web browsers offer built-in settings to block, delete, or manage cookies. Users can clear existing cookies stored on their devices, set preferences for future browsing sessions, and enable "Do Not Track" options to limit tracking technologies. However, disabling certain cookies may affect the functionality of our website and limit access to specific features.
                    </p>
                  </section>

                  {/* Third-Party Cookies and Integrations */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">Third-Party Cookies and Integrations</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} integrates third-party services that may use cookies for analytics, advertising, and security purposes. Google Analytics helps us analyze visitor behavior, track user engagement, and gain insights into website performance. Google Tag Manager allows us to manage scripts efficiently, ensuring smooth execution of website functionalities. Security services use cookies to detect suspicious activities, prevent cyber threats, and maintain data integrity. These third-party providers have their own cookie policies, and users are encouraged to review them for a better understanding of how external cookies function.
                    </p>
                  </section>

                  {/* Data Security and Privacy Protection */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">Data Security and Privacy Protection</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} prioritizes user privacy and ensures that cookies are used responsibly in compliance with data protection regulations. We do not collect personally identifiable information through cookies without user consent. Any data stored in cookies is handled securely, and we implement encryption techniques and access controls to prevent unauthorized access. Our website complies with industry standards, ensuring that cookie-related data is processed in a lawful, fair, and transparent manner. Users have the option to modify their cookie preferences at any time to align with their privacy concerns.
                    </p>
                  </section>

                  {/* Legal Compliance and Regulations */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">Legal Compliance and Regulations</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} adheres to global cookie regulations, including the General Data Protection Regulation (GDPR) and the ePrivacy Directive, to ensure compliance with privacy laws. Our cookie consent mechanisms are designed to provide users with clear choices, allowing them to accept or decline non-essential cookies. We follow strict guidelines for cookie usage, ensuring that all tracking technologies are implemented transparently and ethically. Our commitment to regulatory compliance ensures that user data is protected and processed in accordance with applicable legal frameworks.
                    </p>
                  </section>

                  {/* Policy Updates and Notifications */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">Policy Updates and Notifications</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} may update this Cookie Policy periodically to reflect changes in cookie usage, technological advancements, or regulatory requirements. Users will be notified of significant updates through website notifications, email alerts (for subscribers), or announcements summarizing key changes. We encourage users to review this policy regularly to stay informed about how cookies are used and managed. Our goal is to maintain transparency and provide users with complete control over their cookie preferences.
                    </p>
                  </section>

                  {/* Contact Information */}
                  <section>
                    <h3 className="text-base font-semibold mb-3">Contact Information</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      For any questions, concerns, or requests related to this Cookie Policy, users can contact {APP_CONSTANTS.COMPANY_NAME} through the communication channels provided on our website. Our support team is available to assist with inquiries, clarify cookie-related concerns, and guide users on managing their cookie settings. We are committed to ensuring a secure, transparent, and privacy-conscious browsing experience for all visitors.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CookiePolicy; 