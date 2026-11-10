'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../recovery-coach.module.css';

const RecoveryCoachPrivacyPolicy = () => (
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
            <p className={styles.effectiveDate}><strong>RecoveryCoach</strong> — Effective date: 1 April 2026 · Last updated: 1 April 2026</p>
            <section>
              <h2>Privacy Policy</h2>
              <p>This Privacy Policy explains how <strong>LasyaAitech</strong> (&quot;RecoveryCoach&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, shares, and protects your information when you use the RecoveryCoach mobile application and related website (the &quot;Service&quot;).</p>
              <p>RecoveryCoach helps people recovering from surgery understand what to expect day by day. We treat your recovery data with extra care.</p>
            </section>
            <section>
              <h2>Plain-language summary</h2>
              <ul>
                <li>We collect recovery information you provide and basic account/device data.</li>
                <li>We use it for day-by-day guidance, red-flag checks, the AI Recovery Coach, and reminders.</li>
                <li>We <strong>do not sell</strong> your personal information or use health data for advertising.</li>
                <li>AI messages are processed by Anthropic and are <strong>not used to train their models</strong>.</li>
                <li>RecoveryCoach is <strong>not a medical device</strong> and not a substitute for your surgical team.</li>
              </ul>
            </section>
            <section>
              <h2>Information we collect</h2>
              <p><strong>You provide:</strong> account info, surgery profile, medications, daily check-ins (pain, mobility, wound status), notes, AI Coach messages, emergency contacts, and support communications.</p>
              <p><strong>Automatic:</strong> usage analytics (PostHog), device/technical data, push tokens, diagnostics.</p>
              <p><strong>Third parties:</strong> subscription status from RevenueCat and app stores (no full card numbers).</p>
            </section>
            <section>
              <h2>How we use &amp; share information</h2>
              <p>We use your data to calculate recovery day, run red-flag evaluation, power the AI Recovery Coach, track milestones, send reminders, manage subscriptions, and improve the Service.</p>
              <div className={styles.tableWrap}>
                <table>
                  <thead><tr><th>Provider</th><th>Purpose</th></tr></thead>
                  <tbody>
                    <tr><td>Supabase</td><td>Database, authentication, hosting</td></tr>
                    <tr><td>Anthropic</td><td>AI Recovery Coach</td></tr>
                    <tr><td>RevenueCat</td><td>Subscription management</td></tr>
                    <tr><td>Apple / Google</td><td>Sign-in and payments</td></tr>
                    <tr><td>Firebase</td><td>Push notifications</td></tr>
                    <tr><td>PostHog</td><td>Product analytics</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2>Your rights, retention &amp; security</h2>
              <p>Export or delete your data from <strong>Settings → Account</strong> or contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>. We delete personal data within <strong>30 days</strong> of account deletion. We use encryption in transit and at rest, row-level security, and access controls.</p>
              <p>RecoveryCoach is intended for adults <strong>18 and older</strong>. We are generally not a HIPAA-covered entity.</p>
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

export default RecoveryCoachPrivacyPolicy;
