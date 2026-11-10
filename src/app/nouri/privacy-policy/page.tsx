'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../nouri.module.css';

const NouriPrivacyPolicy = () => {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Privacy Policy</h1>
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
                    <strong>Nouri</strong> — Effective date: 1 April 2026 · Last updated: 1 April 2026
                  </p>

                  <section>
                    <h2>Privacy Policy</h2>
                    <p>
                      Nouri (&quot;Nouri&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is operated by <strong>LasyaAitech</strong>, Hyderabad, Telangana, India. This Privacy Policy explains what we collect, how we use it, who we share it with, and the choices you have. Nouri is an intuitive-eating coaching app; it does not count calories, macros, or weight, and it is not a medical service.
                    </p>
                    <p>By using Nouri you agree to this Policy. If you do not agree, please do not use the app.</p>
                  </section>

                  <section>
                    <h2>1. Who this Policy covers</h2>
                    <p>This Policy covers the Nouri mobile apps (iOS and Android), our websites, and related services (together, the &quot;Service&quot;).</p>
                  </section>

                  <section>
                    <h2>2. Information we collect</h2>
                    <p><strong>You provide to us:</strong></p>
                    <ul>
                      <li><strong>Account information</strong> — email address and authentication credentials.</li>
                      <li><strong>Onboarding answers</strong> — dieting history, what brought you to Nouri, emotional triggers, and goals. Some of this is health-related and sensitive.</li>
                      <li><strong>Your activity content</strong> — hunger/fullness check-ins, meal-journal entries, milestone entries, reframing-exercise responses, and conversations with our AI coach, &quot;Sage.&quot;</li>
                      <li><strong>Preferences</strong> — notification settings, affirmation delivery times, saved favorites.</li>
                    </ul>
                    <p><strong>Collected automatically:</strong> usage and device data, push token, and privacy-first product analytics.</p>
                    <p><strong>From third parties:</strong> subscription status from RevenueCat and Apple/Google. We do not collect or store your full payment-card number.</p>
                  </section>

                  <section>
                    <h2>3. Derived information</h2>
                    <p>
                      We generate insights from your activity to power coaching — for example, hunger patterns and correlations between emotion tags and meals. These personalize your experience and never produce calorie, weight, or &quot;good/bad food&quot; outputs.
                    </p>
                  </section>

                  <section>
                    <h2>4. Sensitive and health-related information</h2>
                    <p>
                      Some information you share is sensitive. We process it only to provide and personalize the Service, based on your consent and our legitimate interest. <strong>Nouri is not a HIPAA-covered entity and does not provide medical care;</strong> we nonetheless treat this data with heightened care.
                    </p>
                  </section>

                  <section>
                    <h2>5. How we use information</h2>
                    <ul>
                      <li>Provide the core Service, including AI coaching from Sage.</li>
                      <li>Personalize coaching, prompts, insights, and notifications.</li>
                      <li>Manage subscriptions, free trial, and promo codes.</li>
                      <li>Maintain safety, operate, secure, debug, and improve the Service.</li>
                      <li>Comply with law and enforce our Terms.</li>
                    </ul>
                    <p>We do <strong>not</strong> use your information for advertising, and we do <strong>not</strong> sell your personal information.</p>
                  </section>

                  <section>
                    <h2>6. AI processing (Sage)</h2>
                    <p>
                      To generate Sage&apos;s responses, your message and limited context are sent to <strong>Anthropic</strong> via the Claude API. <strong>Your conversation data is not used to train Anthropic&apos;s or any third party&apos;s models.</strong> Sage is an automated coach, not a human clinician.
                    </p>
                  </section>

                  <section>
                    <h2>7. How we share information</h2>
                    <div className={styles.tableWrap}>
                      <table>
                        <thead>
                          <tr>
                            <th scope="col">Sub-processor</th>
                            <th scope="col">Purpose</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>Supabase</td><td>Database, authentication, hosting</td></tr>
                          <tr><td>Anthropic</td><td>AI coaching responses (Claude API)</td></tr>
                          <tr><td>RevenueCat</td><td>Subscription and entitlement management</td></tr>
                          <tr><td>PostHog</td><td>Privacy-first product analytics</td></tr>
                          <tr><td>Apple / Google</td><td>App distribution, in-app purchases, push delivery</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p>We never sell your data or share it with advertisers.</p>
                  </section>

                  <section>
                    <h2>8. Data retention and deletion</h2>
                    <p>
                      We keep your information while your account is active. You can export all your data at any time and delete your account; we remove personal data within <strong>30 days</strong> (excluding limited records we must retain for legal reasons).
                    </p>
                  </section>

                  <section>
                    <h2>9. Security</h2>
                    <p>We protect your data with encryption at rest, encrypted transport (TLS), access controls, and least-privilege practices.</p>
                  </section>

                  <section>
                    <h2>10. Your choices and rights</h2>
                    <p>
                      You can access, export, correct, or delete your information in-app or by contacting us. California and EEA/UK users have additional rights described in our full policy. Contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> to exercise any right.
                    </p>
                  </section>

                  <section>
                    <h2>11. Children</h2>
                    <p>
                      Nouri is intended for users <strong>18 and older</strong>. We do not knowingly collect data from children under this age. Contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> if you believe a minor has provided us data.
                    </p>
                  </section>

                  <section>
                    <h2>12. International transfers</h2>
                    <p>We may process and store data in the United States, India, and other countries. Where required, we use Standard Contractual Clauses for cross-border transfers.</p>
                  </section>

                  <section>
                    <h2>13. Changes to this Policy</h2>
                    <p>We may update this Policy. We will post the new version with a revised &quot;Last updated&quot; date and provide in-app notice for material changes.</p>
                  </section>

                  <section>
                    <h2>14. Contact</h2>
                    <p>
                      Questions or requests: <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                      <br />
                      <strong>LasyaAitech</strong>, Hyderabad, Telangana, India
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
};

export default NouriPrivacyPolicy;
