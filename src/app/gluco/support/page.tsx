'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../gluco.module.css';

export default function GlucoSupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Gluco Support</h1>
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
                    <strong>Gluco</strong> — Last updated: 1 April 2026
                  </p>

                  <p>Welcome to Gluco support. Gluco is a wellness and education app — it does not provide medical advice. For health concerns, talk to your doctor.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is Gluco?</h3>
                    <p>Gluco helps you build small, daily lifestyle habits around pre-diabetes with personalized plans, food swaps, daily wins, lessons, and a Reversal Score.</p>
                    <h3>What is the Reversal Score?</h3>
                    <p>A motivational, lifestyle-based score — not a blood-sugar reading or medical measurement.</p>
                  </section>

                  <section>
                    <h2>Account</h2>
                    <h3>Edit profile</h3>
                    <p>Profile → Edit Profile.</p>
                    <h3>Delete account</h3>
                    <p>Profile → Delete Account. Data is removed per our Privacy Policy.</p>
                  </section>

                  <section>
                    <h2>Subscription &amp; Billing</h2>
                    <h3>Free trial</h3>
                    <p>New users may start a 7-day free trial. Cancel before it ends to avoid auto-renewal.</p>
                    <h3>Cancel</h3>
                    <p>Manage in Apple App Store or Google Play subscription settings.</p>
                    <h3>Refunds</h3>
                    <p>Processed by Apple/Google under their policies.</p>
                  </section>

                  <section>
                    <h2>Using the Features</h2>
                    <h3>Log a Meal / Food Swaps</h3>
                    <p>Tap Log a Meal on Home, type what you ate, and Gluco suggests healthier swaps.</p>
                    <h3>Daily Wins &amp; Lessons</h3>
                    <p>Check off small daily actions and read short lessons in the Lesson Library.</p>
                    <h3>AI Coach</h3>
                    <p>Ask food and habit questions. Answers are educational, not medical advice.</p>
                  </section>

                  <section>
                    <h2>Troubleshooting</h2>
                    <h3>App slow or stuck</h3>
                    <p>Close and reopen, update to the latest version, restart your device.</p>
                    <h3>Data not syncing</h3>
                    <p>Check your connection and that you are signed in to the same account.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/gluco/privacy-policy">Gluco Privacy Policy</a>
                       · 
                      <a href="/gluco/contact-us">Contact Us</a>
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
