'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../peakly.module.css';

const PeaklyPrivacyPolicy = () => (
  <Layout headerStyle={70} footerStyle={70}>
    <div className={styles.main}>
      <div className={`section-box ${styles.bannerHero}`}>
        <div className="container"><div className="row"><div className="col-lg-12 text-center">
          <h1 className="text-lg font-semibold mb-4">Privacy Policy</h1>
        </div></div></div>
      </div>
      <section className={`section-box ${styles.contentSection}`}>
        <div className="container"><div className="row"><div className="col-lg-12">
          <div className={styles.privacyContent}>
            <p className={styles.effectiveDate}><strong>Peakly</strong> — Effective date: 1 April 2026 · Last updated: 1 April 2026</p>
            <section>
              <h2>Privacy Policy</h2>
              <p>This Privacy Policy describes how <strong>LasyaAitech</strong> (&quot;Peakly,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects your information when you use the Peakly mobile application and related services (the &quot;Service&quot;).</p>
              <p>Peakly is a medication-timing optimization tool that helps people track when they take ADHD medication and how they feel afterward. Because the Service handles sensitive health information, we treat your privacy as a core responsibility.</p>
              <p>By using Peakly, you agree to the practices described in this Policy.</p>
            </section>
            <section>
              <h2>1. Information We Collect</h2>
              <h3>1.1 Information You Provide Directly</h3>
              <ul>
                <li><strong>Account information:</strong> name, email address, password, and date of birth.</li>
                <li><strong>Health and medication data:</strong> medication name, dosage, dosing schedule, dose timestamps, focus ratings, side-effect reports, and notes.</li>
                <li><strong>Profile and preferences:</strong> profile photo, display preferences, reminder settings, and notification choices.</li>
                <li><strong>Support communications</strong> when you contact us.</li>
              </ul>
              <h3>1.2 Information Collected Automatically</h3>
              <ul>
                <li>Device information, usage data, diagnostic/crash data, and approximate location for time-zone accuracy (not precise GPS unless you enable it).</li>
              </ul>
              <h3>1.3 Information From Third Parties</h3>
              <p>Authentication providers (Google/Apple) and payment processors (subscription status only — we never receive full card numbers).</p>
            </section>
            <section>
              <h2>2. Sensitive Health Data</h2>
              <p>Medication and symptom data is sensitive personal information. We do <strong>not</strong> sell your health data or use it for third-party advertising. You can export or delete your health data at any time. Peakly is <strong>not</strong> a covered entity under HIPAA.</p>
            </section>
            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use your information to create your account, record doses and check-ins, generate your medication curve, send reminders, provide support, process subscriptions, maintain security, and improve the Service through aggregated analytics.</p>
            </section>
            <section>
              <h2>4. How We Share Your Information</h2>
              <p>We share information only with service providers, at your direction (e.g. doctor reports), for legal/safety reasons, or in business transfers. We do <strong>not</strong> sell your personal information.</p>
            </section>
            <section>
              <h2>5. Analytics, Payments &amp; Retention</h2>
              <p>We use analytics with consent where required. Subscriptions are processed through Apple/Google. We retain data while your account is active; upon deletion, personal data is removed within <strong>30 days</strong>.</p>
            </section>
            <section>
              <h2>6. Your Rights and Choices</h2>
              <p>You may access, correct, delete, export, restrict, or object to processing, and withdraw consent. Contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> or use in-app controls.</p>
            </section>
            <section>
              <h2>7. Security, Children &amp; International Transfers</h2>
              <p>We use encryption in transit and at rest. Peakly is not directed to children under 13/16. Your information may be processed in India, the United States, and other countries with appropriate safeguards.</p>
            </section>
            <section>
              <h2>8. Contact Us</h2>
              <p>
                <strong>LasyaAitech</strong>, Hyderabad, Telangana, India
                <br />Privacy: <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                <br />Support: <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
              </p>
            </section>
          </div>
        </div></div></div>
      </section>
    </div>
  </Layout>
);

export default PeaklyPrivacyPolicy;
