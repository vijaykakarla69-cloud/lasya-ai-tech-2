'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../vela.module.css';

export default function VelaSupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Vela Support</h1>
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
                    <strong>Vela</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Note:</strong> Vela is not therapy or an emergency service. In crisis, contact local emergency services.
                  </div>

                  <p>Help with reducing social anxiety through small, daily exposure challenges.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is Vela?</h3>
                    <p>Self-help app for social anxiety through personalized daily exposure challenges.</p>
                    <h3>Onboarding</h3>
                    <p>Select feared situations and set baseline anxiety levels.</p>
                  </section>

                  <section>
                    <h2>Challenges</h2>
                    <h3>Daily challenges</h3>
                    <p>Attempt, complete, and rate before/after anxiety for each challenge.</p>
                    <h3>AI coaching</h3>
                    <p>Personalized challenge text and coaching via Anthropic.</p>
                  </section>

                  <section>
                    <h2>Subscriptions</h2>
                    <h3>Free trial</h3>
                    <p>7-day trial. Premium via app stores.</p>
                  </section>

                  <section>
                    <h2>Account</h2>
                    <h3>Delete</h3>
                    <p>Settings → Account → Delete account.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/vela/privacy-policy">Vela Privacy Policy</a>
                       · 
                      <a href="/vela/contact-us">Contact Us</a>
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
