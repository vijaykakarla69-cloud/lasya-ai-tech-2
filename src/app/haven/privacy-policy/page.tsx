'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../haven.module.css';

const HavenPrivacyPolicy = () => {
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
                    <strong>Haven</strong> — Effective date: 1 April 2026 · Last updated: 1 April 2026
                  </p>

                  <section>
                    <h2>Privacy Policy</h2>
                    <p>
                      Haven (&quot;Haven,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by <strong>LasyaAitech</strong>, provides a mobile application and related services (the &quot;Service&quot;) designed to support the mental wellbeing of family caregivers. This Privacy Policy explains what information we collect, how we use it, who we share it with, and the choices and rights you have.
                    </p>
                    <p>
                      <strong>Our core promise:</strong> What you share in Haven stays yours. We do not sell your personal information, and we do not share it or use it to train AI models without your consent.
                    </p>
                    <p>By using Haven, you agree to this Privacy Policy. If you do not agree, please do not use the Service.</p>
                  </section>

                  <section>
                    <h2>1. Who we are and how to reach us</h2>
                    <ul>
                      <li><strong>Data controller:</strong> LasyaAitech, Hyderabad, Telangana, India</li>
                      <li><strong>Privacy contact:</strong> <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a></li>
                    </ul>
                  </section>

                  <section>
                    <h2>2. Information we collect</h2>
                    <h3>a) Information you give us</h3>
                    <ul>
                      <li><strong>Account information:</strong> email address and password (stored only as salted hashes), or your Apple ID identifier if you use Sign in with Apple.</li>
                      <li><strong>Caregiver profile (onboarding):</strong> who you care for, how long you have been caregiving, your level of support, and your current primary emotion.</li>
                      <li><strong>Wellbeing content you create:</strong> daily check-in responses, free-text notes, CBT thought records, and Compassion Fatigue Assessment answers. This is sensitive information about your mental and emotional state.</li>
                      <li><strong>Support communications:</strong> messages you send to support.</li>
                    </ul>
                    <h3>b) Information collected automatically</h3>
                    <ul>
                      <li><strong>Device &amp; technical data:</strong> device model, operating system version, app version, language, time zone, and crash/diagnostic logs.</li>
                      <li><strong>Usage data:</strong> screens viewed, features used, check-in frequency, and similar in-app events.</li>
                      <li><strong>Push token:</strong> a Firebase Cloud Messaging (FCM) token, if you enable notifications.</li>
                    </ul>
                    <h3>c) Information from third parties</h3>
                    <p>
                      <strong>Subscription &amp; purchase data</strong> from RevenueCat and Apple App Store or Google Play. We do <strong>not</strong> receive or store your full card number.
                    </p>
                    <p>We do <strong>not</strong> knowingly collect information about the person you care for. Please avoid entering another person&apos;s identifying or health details in free-text fields.</p>
                  </section>

                  <section>
                    <h2>3. How we use your information</h2>
                    <ul>
                      <li>create and secure your account and authenticate you;</li>
                      <li>personalise your experience using your caregiver profile;</li>
                      <li>generate AI reflections, permission-to-rest messages, assessment interpretations, and mood-trend observations;</li>
                      <li>calculate and display your burnout indicators and trends;</li>
                      <li>send the notifications you have enabled;</li>
                      <li>manage subscriptions, the 7-day free trial, and promo/coupon codes;</li>
                      <li>provide customer support, maintain security, and comply with legal obligations.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>4. Legal bases (for users in the EEA/UK)</h2>
                    <p>
                      Where GDPR/UK GDPR applies, we rely on contract, consent (for notifications and special-category wellbeing data), legitimate interests, and legal obligation. We process wellbeing data that may be considered special-category data on the basis of your explicit consent.
                    </p>
                  </section>

                  <section>
                    <h2>5. AI processing</h2>
                    <p>
                      Haven uses the Anthropic Claude API to generate supportive, personalised text. Relevant context (such as your check-in answers and caregiver profile) is sent securely to Anthropic for processing at the time you request that feature. We instruct our AI provider not to use your inputs or outputs to train their models. AI output is supportive content only — it is <strong>not</strong> medical advice, diagnosis, or therapy.
                    </p>
                  </section>

                  <section>
                    <h2>6. How we share information</h2>
                    <div className={styles.tableWrap}>
                      <table>
                        <thead>
                          <tr>
                            <th scope="col">Recipient</th>
                            <th scope="col">Purpose</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>Supabase</td><td>Database, authentication, and storage</td></tr>
                          <tr><td>Anthropic (Claude API)</td><td>AI-generated supportive text</td></tr>
                          <tr><td>RevenueCat</td><td>Subscription and trial management</td></tr>
                          <tr><td>Apple App Store / Google Play</td><td>Payment processing and store entitlements</td></tr>
                          <tr><td>Google Firebase (FCM)</td><td>Push notification delivery</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <strong>We do not sell your personal information, and we do not share it for cross-context behavioural advertising.</strong>
                    </p>
                  </section>

                  <section>
                    <h2>7. Data retention</h2>
                    <p>
                      We keep your information for as long as your account is active. When you delete your account, we delete or de-identify your personal data within 30 days, except where we must retain limited records to meet legal, tax, or security obligations.
                    </p>
                  </section>

                  <section>
                    <h2>8. Security</h2>
                    <p>
                      We protect your data with encryption in transit (TLS) and at rest, hashed passwords, row-level access controls, least-privilege database access, and audit logging.
                    </p>
                  </section>

                  <section>
                    <h2>9. Your rights and choices</h2>
                    <p>Depending on where you live, you may have the right to access, export, correct, delete, withdraw consent, object to or restrict processing, and lodge a complaint with your local data protection authority.</p>
                    <p>
                      To exercise any right, contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> or use the in-app controls.
                    </p>
                  </section>

                  <section>
                    <h2>10. International transfers</h2>
                    <p>
                      We may process and store information in India, the United States, and other countries where we or our providers operate. Where required, we use appropriate safeguards such as Standard Contractual Clauses.
                    </p>
                  </section>

                  <section>
                    <h2>11. Children</h2>
                    <p>
                      Haven is intended for adults and is <strong>not directed to children under 18</strong>. If you believe a child has provided us information, contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> and we will delete it.
                    </p>
                  </section>

                  <section>
                    <h2>12. Important: not a medical service</h2>
                    <p>
                      Haven is a self-guided wellness tool. It is <strong>not</strong> a medical device, not therapy, not a substitute for professional care, and <strong>not for emergencies</strong>. If you are in crisis, contact your local emergency number or a crisis line in your region immediately.
                    </p>
                  </section>

                  <section>
                    <h2>13. Changes to this Policy</h2>
                    <p>
                      We may update this Policy. If we make material changes, we will notify you in-app or by email and update the &quot;Last updated&quot; date.
                    </p>
                  </section>

                  <section>
                    <h2>14. Contact</h2>
                    <p>
                      Questions or requests? Email <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> or write to <strong>LasyaAitech</strong>, Hyderabad, Telangana, India.
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

export default HavenPrivacyPolicy;
