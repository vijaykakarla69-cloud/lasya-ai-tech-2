'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../clara.module.css';

export default function ClaraSupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Clara Support</h1>
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
                    <strong>Clara</strong> — Last updated: 1 June 2026
                  </p>

                  <p>Welcome to Clara&apos;s Support Centre. Find answers to common questions, troubleshooting guides, and instructions for everything in the app.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@claraapp.com">support@claraapp.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>How do I create an account?</h3>
                    <p>Download Clara from the App Store or Google Play. Tap Get started and sign up with Apple, Google, or email. Onboarding takes about 3 minutes.</p>
                    <h3>What is the 7-day free trial?</h3>
                    <p>Every new user gets a full 7-day free trial of Clara Premium — no credit card required. You can continue with a limited free version or subscribe after the trial.</p>
                    <h3>What features are free vs premium?</h3>
                    <p>Free: daily check-in (limited), event logging, basic Brain Score. Premium: full Brain Score history, AI insights, sleep-cognition charts, CBT sessions, word-finding exercises, dementia reassurance, weekly summary, and doctor report.</p>
                  </section>

                  <section>
                    <h2>Daily Check-In &amp; Brain Score</h2>
                    <h3>How does the morning check-in work?</h3>
                    <p>Each morning Clara reminds you to rate Memory, Word-finding, Mental clarity, and Mood on 1–10 sliders. This takes about 30 seconds.</p>
                    <h3>What is the Brain Score?</h3>
                    <p>A composite daily score (1–10) from your four check-in dimensions. It is personal and relative — not a medical assessment.</p>
                    <h3>Why does my score fluctuate?</h3>
                    <p>Fluctuation is normal with hormonal brain fog. Scores are influenced by sleep, stress, and hormonal patterns.</p>
                  </section>

                  <section>
                    <h2>Subscriptions</h2>
                    <h3>How do I cancel?</h3>
                    <p>Settings → Subscription → Cancel subscription, or manage through your App Store / Google Play settings.</p>
                    <h3>Refunds?</h3>
                    <p>Handled by Apple or Google. Contact support@claraapp.com and we will do our best to assist.</p>
                  </section>

                  <section>
                    <h2>Data &amp; Privacy</h2>
                    <h3>Export my data</h3>
                    <p>Settings → Privacy and data → Export my data. A JSON file is delivered to your email within 24 hours.</p>
                    <h3>Delete my account</h3>
                    <p>Settings → Privacy and data → Delete my account. Data is purged within 30 days.</p>
                  </section>

                  <section>
                    <h2>Troubleshooting</h2>
                    <h3>Notifications not arriving</h3>
                    <p>Check system notification permissions, reminder times in Settings → Notifications, and that Low Power Mode is not blocking the app.</p>
                    <h3>Apple Health not syncing</h3>
                    <p>Enable Sleep in iPhone Settings → Health → Clara, enable Background App Refresh, or reconnect in Settings → Connected apps.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/clara/privacy-policy">Clara Privacy Policy</a>
                       · 
                      <a href="/clara/contact-us">Contact Us</a>
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
