'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../luminary.module.css';

const LuminaryPrivacyPolicy = () => {
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
                    <strong>Luminary — Grief Companion</strong> — Effective date: 1 April 2026 · Last updated: 1 April 2026
                  </p>

                  <section>
                    <h2>Privacy Policy</h2>
                    <p>
                      Luminary (&quot;Luminary,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by <strong>LasyaAitech</strong>, Hyderabad, Telangana, India, provides a grief-companion mobile application (the &quot;App&quot;) and related services (together, the &quot;Service&quot;). This Privacy Policy explains what we collect, why, how we use and protect it, and the choices and rights you have.
                    </p>
                    <p>
                      Grief is deeply personal. Protecting what you share with Luminary is core to who we are: <strong>we do not sell your data, we do not show ads, and we never share your grief content without your explicit consent.</strong>
                    </p>
                  </section>

                  <section>
                    <h2>1. A note about what Luminary is — and is not</h2>
                    <p>
                      Luminary is a <strong>supportive companion, not a clinical or medical service.</strong> It does not diagnose, treat, or cure any condition, and it is not a substitute for professional mental-health care, therapy, or emergency services. If you are in crisis, see Section 13.
                    </p>
                  </section>

                  <section>
                    <h2>2. Information we collect</h2>
                    <h3>2.1 Information you provide</h3>
                    <ul>
                      <li><strong>Account details:</strong> email address, password (handled by our authentication provider), display name; optional sign-in via Google.</li>
                      <li><strong>Loss profile:</strong> name and relationship of the person or pet you lost, optional description, dates, loss type, and private cause category.</li>
                      <li><strong>Daily check-ins:</strong> grief-intensity rating, selected emotions, optional physical-symptom data, and optional notes.</li>
                      <li><strong>Journal entries, Memory Space content, AI companion conversations, and community content</strong> you choose to create or share.</li>
                      <li><strong>Support communications</strong> when you contact us.</li>
                    </ul>
                    <h3>2.2 Information collected automatically</h3>
                    <ul>
                      <li>Device model, operating system, app version, language, time zone, crash logs, and feature-usage events.</li>
                      <li>Push token (Firebase Cloud Messaging) for notifications you enable.</li>
                    </ul>
                    <h3>2.3 Information we do not collect</h3>
                    <ul>
                      <li>We do not collect precise GPS location. Photos you share strip GPS metadata before sharing.</li>
                      <li>We do not buy data about you from data brokers.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>3. How we use your information</h2>
                    <p>We use your information to personalise your grief calendar, power the AI companion, send notifications you enable, match you to community content, manage subscriptions, keep the Service safe, and improve the Service using aggregated analytics. We do <strong>not</strong> use your grief content to train third-party advertising models.</p>
                  </section>

                  <section>
                    <h2>4. AI processing</h2>
                    <p>
                      The AI companion is powered by <strong>Anthropic (Claude API)</strong>. Relevant context (loss profile, recent check-ins, shared memories, prior session summaries) is sent to generate responses. We instruct providers not to use your content to train their models where such controls are available. The companion never simulates the person you lost and routes crisis language to human-oriented resources.
                    </p>
                  </section>

                  <section>
                    <h2>5. Legal bases for processing (EEA/UK users)</h2>
                    <p>We rely on consent (for sensitive grief and emotional data), contract, legitimate interests, and legal obligation.</p>
                  </section>

                  <section>
                    <h2>6. How we share information</h2>
                    <p>We share information only with service providers under contract, including Supabase, Anthropic, RevenueCat, Apple/Google, Firebase Cloud Messaging, and privacy-respecting analytics tools. We may share community content you choose to post. We do <strong>not</strong> sell personal information.</p>
                  </section>

                  <section>
                    <h2>7. International transfers</h2>
                    <p>Your information may be processed in India, the United States, and other countries. Where required, we use Standard Contractual Clauses for transfers out of the EEA/UK.</p>
                  </section>

                  <section>
                    <h2>8. Data retention</h2>
                    <ul>
                      <li>We keep your account and content while your account is active.</li>
                      <li>Full AI conversation messages are retained for up to <strong>12 months</strong>, after which only summaries are kept.</li>
                      <li>When you delete your account, we delete or de-identify your personal data within <strong>30 days</strong>, except where retention is required by law.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>9. Security</h2>
                    <p>
                      We protect your data with encryption in transit (TLS), encryption at rest for sensitive content, private storage for Memory Space media, row-level access controls, and least-privilege database access. Optional biometric App Lock adds device-level protection.
                    </p>
                  </section>

                  <section>
                    <h2>10. Your choices and rights</h2>
                    <p>
                      You may access, correct, delete, port, restrict, or object to processing, and withdraw consent. Export data via Settings → Data Export; delete your account via Settings → Delete Account. Contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> to exercise rights.
                    </p>
                  </section>

                  <section>
                    <h2>11. Children&apos;s privacy</h2>
                    <p>
                      Luminary is intended for users aged <strong>16</strong> and older. We do not knowingly collect personal data from children below this age. Contact <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> if you believe a child has provided us data.
                    </p>
                  </section>

                  <section>
                    <h2>12. Cookies (website)</h2>
                    <p>Our marketing website may use strictly necessary and, with consent, analytics cookies. The App itself does not use advertising cookies.</p>
                  </section>

                  <section>
                    <h2>13. Crisis and safety</h2>
                    <p>
                      Luminary surfaces crisis resources when conversations or check-ins indicate distress. In the United States, this includes the <strong>988 Suicide &amp; Crisis Lifeline</strong> (call or text 988). Outside the US, find international helplines at <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a>. Luminary is not an emergency service.
                    </p>
                  </section>

                  <section>
                    <h2>14. Changes to this Policy</h2>
                    <p>We may update this Policy. If changes are material, we will notify you in-app or by email before they take effect.</p>
                  </section>

                  <section>
                    <h2>15. Contact us</h2>
                    <p>
                      <strong>LasyaAitech</strong>
                      <br />
                      Hyderabad, Telangana, India
                      <br />
                      Privacy: <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                      <br />
                      General support: <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
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

export default LuminaryPrivacyPolicy;
