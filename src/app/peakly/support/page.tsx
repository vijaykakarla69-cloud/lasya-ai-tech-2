'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../peakly.module.css';

export default function PeaklySupportPage() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Peakly Support</h1>
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
                    <strong>Peakly</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Note:</strong> Peakly does not provide medical advice. Always consult your healthcare provider before changing medication. In an emergency, call your local emergency number.
                  </div>

                  <p>Find answers about tracking ADHD medication timing and your personal focus curve.</p>
                  <p><strong>Need help?</strong> Email <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we reply within 1–2 business days.</p>

                  <section>
                    <h2>Getting Started</h2>
                    <h3>What is Peakly?</h3>
                    <p>Tracks when you take ADHD medication and how you feel afterward to show your personal focus curve.</p>
                    <h3>Setup</h3>
                    <p>Select medication, dose, schedule, set check-in times, and log your first dose.</p>
                  </section>

                  <section>
                    <h2>Dose Logging</h2>
                    <h3>Log a dose</h3>
                    <p>Tap Log Dose, confirm medication and time.</p>
                    <h3>Check-in</h3>
                    <p>Rate focus and note side effects to build your curve.</p>
                    <h3>Edit entries</h3>
                    <p>Open History to edit or delete past entries.</p>
                  </section>

                  <section>
                    <h2>Your Curve</h2>
                    <h3>What the curve shows</h3>
                    <p>How focus rises, peaks, and declines after a dose.</p>
                    <h3>Timing drift</h3>
                    <p>Peakly detects when dose times gradually shift and suggests adjustments.</p>
                  </section>

                  <section>
                    <h2>Account &amp; Billing</h2>
                    <h3>Subscriptions</h3>
                    <p>Free and premium tiers. Manage in App Store / Google Play.</p>
                    <h3>Export data</h3>
                    <p>Available in premium via Settings.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/peakly/privacy-policy">Peakly Privacy Policy</a>
                       · 
                      <a href="/peakly/contact-us">Contact Us</a>
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
