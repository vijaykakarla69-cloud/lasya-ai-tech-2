'use client'
import React from 'react';
import Layout from "@/src/components/layout/Layout";
import { APP_CONSTANTS } from '@/src/supporting-data/constants';
import styles from './privacy-policy.module.css';

const PrivacyPolicy = () => {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>

        <section className={`section-box ${styles.contentSection}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="space-y-6">
                  <section>
                    <p className="text-sm leading-relaxed text-gray-600 mb-6">
                      At {APP_CONSTANTS.COMPANY_NAME}, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your personal data. This Privacy Policy explains the types of information we collect, why we collect it, how we use it, and the choices you have regarding your data. We take your privacy seriously and adhere to relevant data protection regulations to ensure that your personal information is handled securely and responsibly. By using our website and services, you agree to the terms outlined in this policy, which is designed to offer clarity and control over your personal data.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">Information We Collect</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} collects various types of data to enhance user experience, improve website functionality, and maintain security. The information we collect includes technical data, such as IP addresses, browser types, device details, and operating system versions, which help us optimize performance and detect any technical issues. Additionally, we gather usage data to analyze how visitors interact with our website, including pages visited, time spent on different sections, navigation behavior, referral sources, and exit points. This data is used to improve the structure, design, and efficiency of our services. Furthermore, users may voluntarily provide personal data by filling out contact forms, subscribing to newsletters, submitting inquiries, or requesting support, all of which help us deliver personalized assistance and keep users informed about updates relevant to their interests.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">How We Use Your Data</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      The data collected by {APP_CONSTANTS.COMPANY_NAME} serves multiple purposes aimed at enhancing user experience, ensuring security, and maintaining compliance with legal and regulatory standards. We use technical data to troubleshoot performance issues, identify security threats, and optimize website functionality. Usage data helps us understand visitor behavior, refine content strategies, and improve website navigation to create a more engaging experience. User-submitted data enables us to provide customer support, respond to inquiries, and personalize interactions. We also use collected information to enforce security measures, detect fraudulent activity, and safeguard our website and services from unauthorized access. In compliance with data protection laws, we ensure that any personal data collected is processed lawfully, fairly, and transparently.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">Your Data Rights and Control</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} values your right to control your personal information and provides users with multiple options to manage their data. Users have the right to request access to the personal data we store, ensuring transparency in how their information is used. If any data is inaccurate or outdated, users can request corrections to maintain data accuracy. Under certain conditions, users may request the deletion of their personal data, subject to legal and operational requirements. Additionally, we provide options for users to manage their cookie preferences, opt out of non-essential tracking technologies, and withdraw consent for data processing at any time. We make it easy for users to exercise these rights through clearly accessible settings, communication channels, and support options.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">Data Security Measures</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      To ensure the security of user data, {APP_CONSTANTS.COMPANY_NAME} employs industry-standard security measures designed to protect against unauthorized access, data breaches, and cyber threats. We implement encryption protocols, secure storage solutions, and regular system updates to minimize vulnerabilities. Personal data is accessed only by authorized personnel who are trained in data protection practices. We monitor system activities to detect and respond to potential security risks promptly. Our commitment to data security extends to our partnerships with third-party service providers, ensuring that any external integrations comply with the same level of security and privacy standards.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">Data Retention Policy</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} retains personal data only for as long as necessary to fulfill the purposes outlined in this policy. The duration of data retention varies based on the type of data collected and the legal or operational requirements associated with it. Certain data, such as transactional records and legal compliance information, may be retained for extended periods to meet regulatory obligations. User-submitted data, such as inquiries or support requests, may be retained to maintain service continuity and customer relationship management. When data is no longer needed, we follow secure deletion practices to remove or anonymize it in accordance with applicable laws.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">Third-Party Services and Integrations</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      Our website may integrate with third-party services to enhance functionality, provide analytics, and improve user experience. We use services such as Google Analytics to track visitor behavior, gather insights on website traffic, and measure engagement. Google Tag Manager helps us manage website scripts efficiently to optimize performance. Security services are employed to detect suspicious activities, prevent cyber threats, and protect user data. Additionally, external contact form processors help us handle user inquiries while ensuring that collected data remains confidential and is not shared with unauthorized parties.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">Legal Compliance and Regulations</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      {APP_CONSTANTS.COMPANY_NAME} is fully committed to legal compliance and adheres to global data protection regulations, including the General Data Protection Regulation (GDPR), ePrivacy Directive, and other applicable privacy laws. Our compliance efforts extend to international data transfers, ensuring that any cross-border data processing follows established legal safeguards. We implement Standard Contractual Clauses (SCCs) and adopt data protection measures that align with regional and global privacy frameworks. Our users can trust that their data is handled in accordance with the highest industry standards.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">Policy Updates and Notifications</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      As technology evolves, {APP_CONSTANTS.COMPANY_NAME} may update this Privacy Policy periodically to reflect new practices, regulatory changes, and security enhancements. Any updates to this policy will be communicated transparently through notifications on our website, email alerts (for users subscribed to updates), or announcements summarizing key changes. Users are encouraged to review the policy periodically to stay informed about how their data is being handled. We remain committed to maintaining an open and transparent approach to privacy, ensuring that our users have full visibility and control over their personal data.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-base font-semibold mb-3">Contact Information</h3>
                    <p className="text-sm leading-relaxed text-gray-600 mb-3">
                      For any questions, concerns, or requests regarding this Privacy Policy, users can contact {APP_CONSTANTS.COMPANY_NAME} through the communication channels provided on our website. Our data protection team is available to assist with inquiries, address privacy concerns, and help users exercise their data rights. Protecting your privacy is our priority, and we strive to ensure that every interaction with {APP_CONSTANTS.COMPANY_NAME} is secure, transparent, and in compliance with global privacy standards.
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

export default PrivacyPolicy;