'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../vestigo.module.css';

export default function VestigoSupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Vestigo Support</h1>
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
                    <strong>Vestigo</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Note:</strong> Not for emergencies. Sudden severe symptoms — call emergency services immediately.
                  </div>

                  <p>Support for managing vestibular disorders — exercises, symptom diary, and doctor reports.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is Vestigo?</h3>
                    <p>Daily companion for vestibular conditions with exercises, symptom diary, and monthly Doctor Report.</p>
                    <h3>Onboarding</h3>
                    <p>Enter diagnosis, goals, and reminder preferences.</p>
                  </section>

                  <section>
                    <h2>Features</h2>
                    <h3>Symptom diary</h3>
                    <p>Log vertigo severity, type, duration, and triggers.</p>
                    <h3>Doctor Report</h3>
                    <p>30-day summary you can export and share with your clinician.</p>
                    <h3>AI Coach</h3>
                    <p>Educational insights — not medical advice.</p>
                  </section>

                  <section>
                    <h2>Subscriptions</h2>
                    <h3>Billing</h3>
                    <p>Via Apple/Google and RevenueCat. Cancel in store settings.</p>
                  </section>

                  <section>
                    <h2>Data</h2>
                    <h3>Export</h3>
                    <p>Settings → Download Your Data.</p>
                    <h3>Delete</h3>
                    <p>Settings → Delete Account.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/vestigo/privacy-policy">Vestigo Privacy Policy</a>
                       · 
                      <a href="/vestigo/contact-us">Contact Us</a>
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
