'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../clara.module.css';

const ClaraPrivacyPolicy = () => {
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
                    <strong>Clara</strong> — Effective date: 1 June 2026 · Last updated: 1 June 2026
                  </p>

                  <section>
                    <h2>Privacy Policy</h2>
                    <p>
                      Clara (&quot;Clara&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a perimenopause brain and mood coaching application. We are deeply committed to your privacy. This Privacy Policy explains exactly what data we collect, why we collect it, how it is stored, and how you control it.
                    </p>
                    <p>
                      Please read this carefully. By using Clara, you agree to the terms described here.
                    </p>
                  </section>

                  <section>
                    <h2>1. Who We Are</h2>
                    <p>
                      Clara is operated by <strong>Lasya AI Tech Private Limited</strong>, a software company registered in Hyderabad, India. References to &quot;Clara&quot; in this policy refer to Lasya AI Tech Private Limited and the Clara application.
                    </p>
                    <p>
                      Data Controller contact:{' '}
                      <a href="mailto:privacy@claraapp.com">privacy@claraapp.com</a>
                    </p>
                  </section>

                  <section>
                    <h2>2. What Data We Collect</h2>
                    <h3>2.1 Data You Give Us Directly</h3>
                    <ul>
                      <li>Name (first name only — used to personalise your experience)</li>
                      <li>Email address (for account authentication and support)</li>
                      <li>Age</li>
                      <li>Perimenopause / cycle status (regular, irregular, or stopped)</li>
                      <li>Symptom profile (the symptoms you selected during onboarding)</li>
                      <li>Daily cognitive check-in responses (memory, word-finding, clarity, mood sliders)</li>
                      <li>Sleep log entries (hours and quality)</li>
                      <li>Emotional event logs (rage, despair, anxiety, brain fog — type, intensity, optional context note)</li>
                      <li>CBT session responses (thought records — stored locally by default)</li>
                      <li>Word-finding exercise results</li>
                      <li>Notification preferences and reminder times</li>
                    </ul>
                    <h3>2.2 Data We Collect Automatically</h3>
                    <ul>
                      <li>App session timestamps and screen interaction patterns (for improving Clara)</li>
                      <li>Device type, operating system version, and app version</li>
                      <li>Crash logs and performance diagnostics (anonymised)</li>
                      <li>Subscription status and purchase events (via Apple App Store or Google Play — we never see your payment card details)</li>
                    </ul>
                    <h3>2.3 Data From Third-Party Integrations (Optional)</h3>
                    <p>
                      Apple Health / Google Fit sleep data — only if you explicitly grant permission. You can disconnect at any time from Settings &gt; Connected apps.
                    </p>
                    <h3>2.4 Data We Never Collect</h3>
                    <ul>
                      <li>We never collect your surname, home address, phone number, or date of birth.</li>
                      <li>We never sell your data to advertisers. Clara is ad-free.</li>
                      <li>We never use your health data to train AI models without your explicit, separate consent.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>3. Why We Process Your Data (Legal Bases)</h2>
                    <p>We process your data under the following legal bases:</p>
                    <ul>
                      <li><strong>Performance of contract</strong> — to deliver the Clara service you signed up for</li>
                      <li><strong>Legitimate interests</strong> — to improve Clara&apos;s features and fix bugs (using anonymised aggregated data only)</li>
                      <li><strong>Consent</strong> — for optional integrations (Apple Health, marketing emails). You may withdraw consent at any time.</li>
                      <li><strong>Legal obligation</strong> — where required by applicable law</li>
                    </ul>
                  </section>

                  <section>
                    <h2>4. How We Use Your Data</h2>
                    <ul>
                      <li>To personalise your daily check-in experience and generate your Brain Score</li>
                      <li>To surface AI-generated insights, pattern detections, and CBT session recommendations</li>
                      <li>To generate your doctor-ready 30-day cognitive health report</li>
                      <li>To power the dementia fear reassurance feature using your personal variance data</li>
                      <li>To send push notifications at your chosen reminder times</li>
                      <li>To process your subscription payment (via App Store / Google Play — we never handle card data)</li>
                      <li>To respond to your support requests</li>
                      <li>To improve Clara through anonymised aggregate usage analysis</li>
                    </ul>
                  </section>

                  <section>
                    <h2>5. Data Storage and Security</h2>
                    <h3>5.1 Where Your Data Lives</h3>
                    <ul>
                      <li>Your health data (check-in responses, sleep logs, event logs) is stored encrypted on-device by default.</li>
                      <li><strong>Cloud backup (opt-in):</strong> If you enable iCloud Backup or Google Backup, your data is encrypted in transit and at rest using AES-256 encryption.</li>
                      <li>Our servers are hosted on Microsoft Azure (West Europe region), certified to ISO 27001, SOC 2 Type II.</li>
                    </ul>
                    <h3>5.2 Data Retention</h3>
                    <ul>
                      <li><strong>Active account:</strong> Your data is retained for as long as your account is active.</li>
                      <li><strong>Account deletion:</strong> When you delete your account, all personal data is permanently purged within 30 days. Anonymised aggregate data may be retained.</li>
                      <li><strong>Inactive accounts:</strong> Accounts with no activity for 24 months will be automatically anonymised with 30 days&apos; notice by email.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>6. Your Rights</h2>
                    <p>Depending on where you live, you have the following rights:</p>
                    <ul>
                      <li><strong>Right to access</strong> — request a copy of all data we hold about you</li>
                      <li><strong>Right to correction</strong> — ask us to fix inaccurate data</li>
                      <li><strong>Right to deletion</strong> — delete your account from Settings &gt; Privacy and data &gt; Delete my account</li>
                      <li><strong>Right to portability</strong> — export your data as JSON from Settings &gt; Privacy and data &gt; Export my data</li>
                      <li><strong>Right to object</strong> — object to processing for legitimate interests purposes</li>
                      <li><strong>Right to withdraw consent</strong> — for optional data processing, withdraw via Settings at any time</li>
                    </ul>
                    <p>
                      To exercise any right not available in-app, email{' '}
                      <a href="mailto:privacy@claraapp.com">privacy@claraapp.com</a>. We will respond within 30 days.
                    </p>
                  </section>

                  <section>
                    <h2>7. Data Sharing</h2>
                    <p>We do not sell your personal data. We share data only in these limited circumstances:</p>
                    <ul>
                      <li><strong>Service providers:</strong> Cloud hosting (Microsoft Azure), push notification delivery (APNs/FCM), crash analytics (Sentry — anonymised). All providers are contractually bound to data protection standards.</li>
                      <li><strong>Legal compliance:</strong> If required by a court order or applicable law, we may disclose data. We will notify you unless legally prohibited.</li>
                      <li><strong>Business transfer:</strong> If Clara is acquired, your data will transfer under the same privacy protections. You will be notified.</li>
                      <li><strong>With your doctor:</strong> The doctor report is generated for you to share at your discretion. We never send it to anyone without your action.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>8. Children&apos;s Privacy</h2>
                    <p>
                      Clara is designed for adults aged 35 and above experiencing perimenopause. We do not knowingly collect data from anyone under 18. If you believe a minor has created an account, contact us immediately at{' '}
                      <a href="mailto:privacy@claraapp.com">privacy@claraapp.com</a>.
                    </p>
                  </section>

                  <section>
                    <h2>9. International Data Transfers</h2>
                    <p>
                      If you are located in the European Economic Area (EEA) or United Kingdom, your data may be transferred to countries outside the EEA. When this occurs, we use Standard Contractual Clauses approved by the European Commission to ensure equivalent protection.
                    </p>
                  </section>

                  <section>
                    <h2>10. Changes to This Policy</h2>
                    <p>
                      We will notify you of material changes to this policy via in-app notification and email at least 30 days before the change takes effect. Continued use after the effective date constitutes acceptance.
                    </p>
                  </section>

                  <section>
                    <h2>11. Contact Us</h2>
                    <p>
                      Privacy questions: <a href="mailto:privacy@claraapp.com">privacy@claraapp.com</a>
                    </p>
                    <p>
                      Data Subject Requests: Submit via Settings &gt; Privacy and data &gt; Data request, or email{' '}
                      <a href="mailto:privacy@claraapp.com">privacy@claraapp.com</a>
                    </p>
                    <p>
                      Registered address: Lasya AI Tech Pvt Ltd, Hyderabad, Telangana, India
                    </p>
                    <p className="m0">
                      This document was last updated 1 June 2026 and applies to Clara app version 1.0 and above.
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

export default ClaraPrivacyPolicy;
