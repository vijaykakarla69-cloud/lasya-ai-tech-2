'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../luminary.module.css';

export default function LuminarySupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Luminary — Grief Companion Support</h1>
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
                    <strong>Luminary</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Note:</strong> If you are in crisis, call or text 988 (US) or find a helpline at findahelpline.com.
                  </div>

                  <p>Whatever you need help with, this page should get you there gently.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is Luminary?</h3>
                    <p>A gentle, private grief companion that reaches out before hard dates — anniversaries, holidays, and milestones.</p>
                    <h3>Setup</h3>
                    <p>Create an account, complete onboarding about who you lost and significant dates. Skip optional steps anytime.</p>
                  </section>

                  <section>
                    <h2>AI Companion</h2>
                    <h3>What can it do?</h3>
                    <p>A compassionate, grief-informed presence that knows your loss and upcoming hard dates.</p>
                    <h3>Will it pretend to be the person I lost?</h3>
                    <p>No. The companion never simulates the person you lost.</p>
                    <h3>Is it a therapist?</h3>
                    <p>No. For clinical needs, see a qualified professional.</p>
                  </section>

                  <section>
                    <h2>Check-ins &amp; Journal</h2>
                    <h3>Daily check-in</h3>
                    <p>Rate grief intensity and emotions in under two minutes.</p>
                    <h3>Grief wave</h3>
                    <p>A chart showing intensity over time — grief is non-linear.</p>
                  </section>

                  <section>
                    <h2>Subscription</h2>
                    <h3>Free trial</h3>
                    <p>14-day free trial with full access, no credit card required.</p>
                    <h3>Plans</h3>
                    <p>Monthly and annual plans via App Store / Google Play.</p>
                  </section>

                  <section>
                    <h2>Privacy</h2>
                    <h3>Your data</h3>
                    <p>Export via Settings → Data Export. Delete via Settings → Delete Account.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/luminary/privacy-policy">Luminary Privacy Policy</a>
                       · 
                      <a href="/luminary/contact-us">Contact Us</a>
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
