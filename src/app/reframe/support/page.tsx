'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../reframe.module.css';

export default function ReframeSupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Reframe Support</h1>
              </div>
            </div>
          </div>
        </div>

        <section className={`section-box ${styles.contentSection}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.privacyContent}>
                  <p className={styles.effectiveDate}>
                    <strong>Reframe</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Note:</strong> Not for emergencies. For urgent symptoms or crisis, contact your doctor or local emergency number.
                  </div>

                  <p>Help with the 4-week Pain Reprocessing Therapy programme for chronic back pain.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is Reframe?</h3>
                    <p>Structured, AI-guided 4-week PRT programme for adults with chronic back pain.</p>
                    <h3>Daily sessions</h3>
                    <p>Complete daily check-ins and sessions to track progress through 28 days.</p>
                  </section>

                  <section>
                    <h2>Programme</h2>
                    <h3>Flare-Up Rescue</h3>
                    <p>In-app support during pain flare-ups.</p>
                    <h3>AI Coach</h3>
                    <p>Educational guidance only — not medical decisions.</p>
                  </section>

                  <section>
                    <h2>Subscriptions</h2>
                    <h3>Trial &amp; billing</h3>
                    <p>Via RevenueCat and app stores. Cancel in store settings.</p>
                  </section>

                  <section>
                    <h2>Account</h2>
                    <h3>Delete account</h3>
                    <p>Settings → Delete account or email privacy@lasyaaitech.com.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/reframe/privacy-policy">Reframe Privacy Policy</a>
                       · 
                      <a href="/reframe/contact-us">Contact Us</a>
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
}
