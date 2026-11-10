'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../clara.module.css';

const ClaraTermsAndConditions = () => {
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
                    <strong>App:</strong> Clara
                    <br />
                    <strong>Developer:</strong> Lasya AI Tech Private Limited
                    <br />
                    <strong>Last updated:</strong> 1 June 2026
                    <br />
                    <strong>Contact:</strong> 
                    <a href="mailto:support@claraapp.com">support@claraapp.com</a>
                  </p>

                  <section>
                    <h2>Agreement to Terms</h2>
                    <p>
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of Clara (&quot;Clara&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or using Clara, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the app.
                    </p>
                  </section>

                  <section>
                    <h2>1. Eligibility</h2>
                    <p>You must be 18 or older. Clara is intended for individuals experiencing perimenopause or menopause.</p>
                  </section>

                  <section>
                    <h2>2. Not Medical Advice</h2>
                    <p>Clara is a wellness and self-tracking application, not a medical device. Brain Score and AI insights are informational only. Always consult a qualified healthcare provider. In an emergency, call local emergency services.</p>
                  </section>

                  <section>
                    <h2>3. Your Account</h2>
                    <p>You are responsible for your login credentials and must provide accurate information. Notify support@claraapp.com if you suspect unauthorised access.</p>
                  </section>

                  <section>
                    <h2>4. Subscriptions and Payments</h2>
                    <p>Clara offers a 7-day free trial without a credit card. Payments are processed by Apple or Google. Cancel anytime before renewal through store settings.</p>
                  </section>

                  <section>
                    <h2>5. Acceptable Use</h2>
                    <p>You may not reverse-engineer Clara, scrape data, upload malicious code, or use the app unlawfully.</p>
                  </section>

                  <section>
                    <h2>6. Intellectual Property</h2>
                    <p>Clara is owned by Lasya AI Tech Private Limited. Your personal data remains yours; you grant us a licence to process it to provide the service.</p>
                  </section>

                  <section>
                    <h2>7. AI and Accuracy</h2>
                    <p>AI insights are probabilistic and not clinical diagnoses. Clara&apos;s AI is not a substitute for professional medical or psychological advice.</p>
                  </section>

                  <section>
                    <h2>8. Limitation of Liability</h2>
                    <p>Clara is provided as is. Our total liability will not exceed amounts paid in the 12 months before a claim.</p>
                  </section>

                  <section>
                    <h2>9. Governing Law</h2>
                    <p>These Terms are governed by the laws of India. Disputes are resolved in Hyderabad, Telangana, India.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Contact Us</h2>
                    <p>
                      <strong>Lasya AI Tech Private Limited</strong>
                      <br />
                      Hyderabad, Telangana, India
                      <br />
                      Email: <a href="mailto:support@claraapp.com">support@claraapp.com</a>
                      <br />
                      <a href="/clara/privacy-policy">Privacy Policy</a>
                       · 
                      <a href="/clara/contact-us">Contact Us</a>
                       · 
                      <a href="/clara/support">Support</a>
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

export default ClaraTermsAndConditions;
