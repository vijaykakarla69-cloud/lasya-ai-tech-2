'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../vela.module.css';

const VelaPrivacyPolicy = () => (
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
            <p className={styles.effectiveDate}><strong>Vela</strong> — Last updated: 1 April 2026</p>
            <section>
              <h2>Privacy Policy</h2>
              <p>This Privacy Policy explains how <strong>LasyaAitech</strong> (&quot;Vela&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, shares, and protects your information when you use the Vela mobile app and related services (the &quot;Service&quot;). Vela is a self-help app that helps you reduce social anxiety through small, daily exposure challenges.</p>
              <p>We do not sell your personal data, and we do not show third-party ads.</p>
            </section>
            <section>
              <h2>Information we collect</h2>
              <p><strong>You give us:</strong> account details, onboarding inputs (feared situations and anxiety ratings — sensitive data), challenge activity, progress data, AI coaching messages, and preferences.</p>
              <p><strong>Automatic:</strong> device/technical data, push tokens (APNs/FCM).</p>
              <p><strong>Subscriptions:</strong> status via RevenueCat and app stores (no full card numbers).</p>
            </section>
            <section>
              <h2>How we use &amp; share information</h2>
              <p>We use your information to generate personalized challenges, track progress, send reminders, manage subscriptions, and improve the Service. We do not use your content for advertising profiles.</p>
              <div className={styles.tableWrap}>
                <table>
                  <thead><tr><th>Sub-processor</th><th>Purpose</th></tr></thead>
                  <tbody>
                    <tr><td>Supabase</td><td>Database, authentication, hosting</td></tr>
                    <tr><td>Anthropic</td><td>Challenge text, AI coaching, summaries</td></tr>
                    <tr><td>RevenueCat</td><td>Subscription management</td></tr>
                    <tr><td>Apple / Google</td><td>Payments</td></tr>
                    <tr><td>APNs / FCM</td><td>Push notifications</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2>Your rights, retention &amp; security</h2>
              <p>Delete your account in <strong>Settings → Account → Delete account</strong> or email <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>. Data is deleted within <strong>30 days</strong> of account deletion. We use encryption in transit and at rest, row-level security, and access controls.</p>
            </section>
            <section>
              <h2>Health note &amp; children</h2>
              <p>Vela is a self-help wellness tool — <strong>not</strong> therapy or a medical device. If you are in crisis, use crisis resources or contact emergency services.</p>
              <p>Vela is intended for users aged <strong>16</strong> and over.</p>
            </section>
            <section>
              <h2>Contact us</h2>
              <p>
                <strong>LasyaAitech</strong> · <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                <br />Hyderabad, Telangana, India
              </p>
            </section>
          </div>
        </div></div></div>
      </section>
    </div>
  </Layout>
);

export default VelaPrivacyPolicy;
