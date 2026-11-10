'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../nouri.module.css';

export default function NouriSupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Nouri Support</h1>
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
                    <strong>Nouri</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Note:</strong> Nouri is not a crisis line. US: 988, text HOME to 741741, or ANAD 1-888-375-7767. Outside the US, use local emergency and helpline numbers.
                  </div>

                  <p>Find answers about intuitive-eating coaching with Sage. Nouri never shows calories, macros, or weight.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is Nouri?</h3>
                    <p>A daily intuitive-eating coach with Sage — no calories, macros, weight, or good/bad food labels.</p>
                    <h3>How to begin</h3>
                    <p>Complete onboarding, start your free trial, and meet Sage.</p>
                  </section>

                  <section>
                    <h2>Account</h2>
                    <h3>Export data</h3>
                    <p>Settings → Data → Export.</p>
                    <h3>Delete account</h3>
                    <p>Settings → Account → Delete. Data removed within 30 days.</p>
                  </section>

                  <section>
                    <h2>Subscriptions</h2>
                    <h3>Trial</h3>
                    <p>7 days with full access.</p>
                    <h3>Plans</h3>
                    <p>$8.99/month or $59.99/year. Manage via App Store / Google Play.</p>
                  </section>

                  <section>
                    <h2>Using Sage</h2>
                    <h3>What Sage is</h3>
                    <p>AI coach for intuitive-eating support using your recent journal context.</p>
                    <h3>What Sage isn&apos;t</h3>
                    <p>Not a therapist, dietitian, or doctor. Won&apos;t provide calorie or macro numbers.</p>
                  </section>

                  <section>
                    <h2>Troubleshooting</h2>
                    <h3>App crashes</h3>
                    <p>Update to latest version, restart device, check connection.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/nouri/privacy-policy">Nouri Privacy Policy</a>
                       · 
                      <a href="/nouri/contact-us">Contact Us</a>
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
