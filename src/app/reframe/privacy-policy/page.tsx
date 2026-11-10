'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../reframe.module.css';

const ReframePrivacyPolicy = () => (
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
            <p className={styles.effectiveDate}><strong>Reframe</strong> — Effective date: 1 April 2026 · Last updated: 1 April 2026</p>
            <section>
              <h2>1. Who we are</h2>
              <p>Reframe (&quot;Reframe&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a mobile application that delivers a structured, AI-guided 4-week Pain Reprocessing Therapy (PRT) programme for adults living with chronic back pain, operated by <strong>LasyaAitech</strong>, Hyderabad, Telangana, India.</p>
              <p>Privacy contact: <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a></p>
            </section>
            <section>
              <h2>2. Important: Reframe is not a medical service</h2>
              <p>Reframe is a wellness and education programme. It is <strong>not</strong> a medical device, does not provide medical diagnosis or treatment, and is not a substitute for professional medical care. Reframe is <strong>not</strong> a HIPAA-covered entity.</p>
            </section>
            <section>
              <h2>3. The information we collect</h2>
              <p><strong>You provide:</strong> account data, onboarding &amp; pain-assessment data, daily check-ins (pain score, emotional state, location, notes), programme progress, and support messages.</p>
              <p><strong>Automatic:</strong> device/technical data, usage analytics (PostHog), push notification token (FCM).</p>
              <p><strong>Third parties:</strong> subscription status via RevenueCat (no full card numbers).</p>
            </section>
            <section>
              <h2>4. Sensitive information &amp; AI processing</h2>
              <p>Your pain scores, emotional states, and notes are sensitive personal information. We do not sell it or use it for advertising.</p>
              <p>We send relevant programme context to <strong>Anthropic (Claude API)</strong> to personalise sessions, weekly insights, and the in-app Reframe Coach. The AI is for guidance and education only.</p>
            </section>
            <section>
              <h2>5. How we share information</h2>
              <p>We share data only with Supabase, Anthropic, RevenueCat, Firebase, PostHog, and Apple/Google — under contract. We do <strong>not</strong> sell your personal information.</p>
            </section>
            <section>
              <h2>6. Retention, rights &amp; security</h2>
              <p>Data is kept while your account is active. After deletion, personal data is removed within <strong>30 days</strong>. You may access, correct, delete, export, or restrict processing via Settings or <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>.</p>
              <p>We protect your data with encryption in transit and at rest, row-level access controls, and audit logging.</p>
            </section>
            <section>
              <h2>7. Children &amp; contact</h2>
              <p>Reframe is intended for adults <strong>18 and over</strong>.</p>
              <p>
                <strong>LasyaAitech</strong>, Hyderabad, Telangana, India
                <br />Privacy: <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                <br />General: <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
              </p>
            </section>
          </div>
        </div></div></div>
      </section>
    </div>
  </Layout>
);

export default ReframePrivacyPolicy;
