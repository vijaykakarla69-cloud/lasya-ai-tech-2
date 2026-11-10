'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../gluco.module.css';

const GlucoTermsAndConditions = () => {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Terms and Conditions</h1>
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
                    <strong>App:</strong> Gluco
                    <br />
                    <strong>Developer:</strong> LasyaAitech
                    <br />
                    <strong>Last updated:</strong> 1 April 2026
                    <br />
                    <strong>Contact:</strong> 
                    <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
                  </p>

                  <section>
                    <h2>Agreement to Terms</h2>
                    <p>
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of Gluco (&quot;Gluco&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or using Gluco, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the app.
                    </p>
                  </section>

                  <section>
                    <h2>1. Medical Disclaimer</h2>
                    <p>Gluco is NOT a medical device and does NOT provide medical advice, diagnosis, or treatment. Reversal Scores are motivational indicators only. In an emergency, call your local emergency number.</p>
                  </section>

                  <section>
                    <h2>2. Eligibility</h2>
                    <p>You must be 18 or older.</p>
                  </section>

                  <section>
                    <h2>3. Your Account</h2>
                    <p>You are responsible for your login and account activity.</p>
                  </section>

                  <section>
                    <h2>4. Subscriptions</h2>
                    <p>7-day free trial may auto-convert to paid subscription. Billing is through Apple/Google. Cancel in store settings.</p>
                  </section>

                  <section>
                    <h2>5. AI-Generated Content</h2>
                    <p>AI coach output may be inaccurate and is not medical advice.</p>
                  </section>

                  <section>
                    <h2>6. Acceptable Use</h2>
                    <p>Do not misuse, reverse engineer, or disrupt the Service.</p>
                  </section>

                  <section>
                    <h2>7. Disclaimers</h2>
                    <p>The Service is provided as is without warranties.</p>
                  </section>

                  <section>
                    <h2>8. Limitation of Liability</h2>
                    <p>Liability is limited to amounts paid in the 12 months before a claim.</p>
                  </section>

                  <section>
                    <h2>9. Governing Law</h2>
                    <p>Governed by the laws of India. Contact privacy@lasyaaitech.com for questions.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Contact Us</h2>
                    <p>
                      <strong>LasyaAitech</strong>
                      <br />
                      Hyderabad, Telangana, India
                      <br />
                      Email: <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
                      <br />
                      <a href="/gluco/privacy-policy">Privacy Policy</a>
                       · 
                      <a href="/gluco/contact-us">Contact Us</a>
                       · 
                      <a href="/gluco/support">Support</a>
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

export default GlucoTermsAndConditions;
