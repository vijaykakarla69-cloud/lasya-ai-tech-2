'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../vestigo.module.css';

const VestigoPrivacyPolicy = () => (
  <Layout headerStyle={70} footerStyle={70}>
    <div className={styles.main}>
      <div className={`section-box ${styles.bannerHero}`}>
        <div className="container"><div className="row"><div className="col-lg-12 text-center">
          <h1 className="text-lg font-semibold mb-4">Privacy Policy</h1>
        </div></div></div>
      </div>
      <section className={`section-box ${styles.contentSection}`}>
        <div className="container"><div className="row"><div className="col-lg-12">
          <div className={styles.privacyContent}>
            <p className={styles.effectiveDate}><strong>Vestigo</strong> — Effective date: 1 April 2026 · Last updated: 1 April 2026</p>
            <section>
              <h2>Privacy Policy</h2>
              <p>Vestigo (&quot;Vestigo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by <strong>LasyaAitech</strong>, Hyderabad, Telangana, India, provides a daily companion for people managing vestibular disorders.</p>
              <p><strong>Vestigo is a self-management tool, not a medical provider, and is not a substitute for professional medical care.</strong></p>
            </section>
            <section>
              <h2>Information we collect</h2>
              <p><strong>You provide:</strong> account information, onboarding (diagnosis, symptoms duration, exercise goals), symptom diary entries, trigger logs, exercise activity, and support communications.</p>
              <p><strong>Automatic:</strong> device/technical data, usage data, push notification token (FCM), diagnostic/crash data (symptom free-text excluded from logs).</p>
              <p><strong>Third parties:</strong> subscription status from RevenueCat and app stores.</p>
            </section>
            <section>
              <h2>How we use your information</h2>
              <ul>
                <li>Personalise your exercise program and record symptom/trigger history.</li>
                <li>Generate your monthly <strong>Doctor Report</strong> from your 30-day data.</li>
                <li>Provide AI-assisted insights and the AI Symptom Coach via <strong>Anthropic</strong>.</li>
                <li>Send reminders, manage subscriptions, and improve the App.</li>
              </ul>
              <p>We do <strong>not</strong> sell your personal information or use health data for advertising.</p>
            </section>
            <section>
              <h2>Sub-processors &amp; security</h2>
              <div className={styles.tableWrap}>
                <table>
                  <thead><tr><th>Provider</th><th>Purpose</th></tr></thead>
                  <tbody>
                    <tr><td>Supabase</td><td>Database and storage (encrypted at rest)</td></tr>
                    <tr><td>RevenueCat</td><td>Subscription management</td></tr>
                    <tr><td>Apple / Google</td><td>Payment processing</td></tr>
                    <tr><td>Firebase</td><td>Push notifications</td></tr>
                    <tr><td>Anthropic</td><td>Doctor Report &amp; AI Coach</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Health data is encrypted in transit (TLS) and at rest. Data is processed in India and the United States with appropriate safeguards.</p>
            </section>
            <section>
              <h2>Your rights &amp; retention</h2>
              <p>Export via <strong>Settings → Download Your Data</strong>. Delete via <strong>Settings → Delete Account</strong>. Contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> for other requests. Personal data is deleted within <strong>30 days</strong> of account deletion.</p>
              <p>Vestigo is intended for adults <strong>18 and over</strong>.</p>
            </section>
            <section>
              <h2>Contact us</h2>
              <p>
                <strong>LasyaAitech</strong>, Hyderabad, Telangana, India
                <br />Privacy: <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                <br />Support: <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
              </p>
            </section>
          </div>
        </div></div></div>
      </section>
    </div>
  </Layout>
);

export default VestigoPrivacyPolicy;
