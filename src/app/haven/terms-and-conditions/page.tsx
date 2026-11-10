'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../haven.module.css';

const HavenTermsAndConditions = () => {
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
                    <strong>App:</strong> Haven
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
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of Haven (&quot;Haven&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or using Haven, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the app.
                    </p>
                  </section>

                  <section>
                    <h2>1. Eligibility</h2>
                    <p>You must be at least 18 years old.</p>
                  </section>

                  <section>
                    <h2>2. What Haven Is — and Is Not</h2>
                    <p>Haven is self-guided mental wellness for caregivers. It is NOT therapy, medical care, or an emergency service.</p>
                  </section>

                  <section>
                    <h2>3. Subscriptions</h2>
                    <p>7-day free trial. Monthly $8.99 or Annual $59.99. Auto-renewal through app stores unless cancelled 24 hours before period end.</p>
                  </section>

                  <section>
                    <h2>4. Your Content</h2>
                    <p>You retain ownership. We process content to operate the Service including AI reflections.</p>
                  </section>

                  <section>
                    <h2>5. AI Content</h2>
                    <p>AI output is supportive only, not professional advice.</p>
                  </section>

                  <section>
                    <h2>6. Disclaimers</h2>
                    <p>THE SERVICE IS PROVIDED AS IS.</p>
                  </section>

                  <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>Liability capped at amounts paid in 12 months or USD $100.</p>
                  </section>

                  <section>
                    <h2>8. Governing Law</h2>
                    <p>Governed by the laws of India.</p>
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
                      <a href="/haven/privacy-policy">Privacy Policy</a>
                       · 
                      <a href="/haven/contact-us">Contact Us</a>
                       · 
                      <a href="/haven/support">Support</a>
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

export default HavenTermsAndConditions;
