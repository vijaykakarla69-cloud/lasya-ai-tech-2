'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../recovery-coach.module.css';

export default function RecoveryCoachSupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">RecoveryCoach Support</h1>
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
                    <strong>RecoveryCoach</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Note:</strong> For medical emergencies call your local emergency number (911 US, 999 UK, 112 EU/India). RecoveryCoach cannot provide emergency assistance.
                  </div>

                  <p>Answers about day-by-day surgical recovery guidance. Contact your surgeon for medical concerns.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is RecoveryCoach?</h3>
                    <p>Helps you understand what to expect day by day after surgery with timeline, check-ins, and AI coach.</p>
                    <h3>Setup</h3>
                    <p>Create account, enter surgery type and date, complete your first check-in.</p>
                  </section>

                  <section>
                    <h2>Daily Use</h2>
                    <h3>Check-ins</h3>
                    <p>Report pain, mobility, and wound status. Powers red-flag evaluation.</p>
                    <h3>AI Recovery Coach</h3>
                    <p>General recovery guidance — always defer to your surgical team.</p>
                  </section>

                  <section>
                    <h2>Subscriptions</h2>
                    <h3>Trial &amp; billing</h3>
                    <p>Managed via RevenueCat and app stores. Refunds through Apple/Google.</p>
                  </section>

                  <section>
                    <h2>Data</h2>
                    <h3>Export or delete</h3>
                    <p>Settings → Account, or email privacy@lasyaaitech.com.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/recovery-coach/privacy-policy">RecoveryCoach Privacy Policy</a>
                       · 
                      <a href="/recovery-coach/contact-us">Contact Us</a>
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
