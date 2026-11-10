'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../haven.module.css';

export default function HavenSupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Haven Support</h1>
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
                    <strong>Haven</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Note:</strong> Haven is not an emergency service. If you are in crisis, contact your local emergency number or use Crisis Resources in the app.
                  </div>

                  <p>Haven is built for family caregivers. If you can&apos;t find what you need, email us and a real person will reply within 1–2 business days.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is Haven?</h3>
                    <p>A daily mental-wellness app for family caregivers — tracking burnout, guilt, and permission to rest.</p>
                    <h3>Is Haven therapy?</h3>
                    <p>No. Haven is self-guided, not therapy or medical advice.</p>
                  </section>

                  <section>
                    <h2>Daily Check-ins</h2>
                    <h3>What is the daily check-in?</h3>
                    <p>Five short questions across energy, guilt, support, self-compassion, and an open note (~2 minutes).</p>
                    <h3>Permission to Rest</h3>
                    <p>When Haven detects you&apos;re running on empty, it gives an explicit compassionate message that you have permission to stop.</p>
                  </section>

                  <section>
                    <h2>Subscriptions</h2>
                    <h3>Pricing</h3>
                    <p>7-day free trial (no card required). Monthly $8.99 or Annual $59.99.</p>
                    <h3>Cancel</h3>
                    <p>Manage in Apple App Store or Google Play settings. Deleting the app does not cancel.</p>
                  </section>

                  <section>
                    <h2>Privacy</h2>
                    <h3>Who sees my data?</h3>
                    <p>Only you. We don&apos;t sell your data or use it to train AI without consent.</p>
                    <h3>Export or delete</h3>
                    <p>Use in-app options or email privacy@lasyaaitech.com.</p>
                  </section>

                  <section>
                    <h2>Troubleshooting</h2>
                    <h3>App won&apos;t load</h3>
                    <p>Check connection and pull to refresh.</p>
                    <h3>Login issues</h3>
                    <p>Use Forgot Password on the sign-in screen.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/haven/privacy-policy">Haven Privacy Policy</a>
                       · 
                      <a href="/haven/contact-us">Contact Us</a>
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
