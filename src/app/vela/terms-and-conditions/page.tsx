'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../vela.module.css';

const VelaTermsAndConditions = () => {
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
                    <strong>App:</strong> Vela
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
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of Vela (&quot;Vela&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or using Vela, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the app.
                    </p>
                  </section>

                  <section>
                    <h2>1. Wellness Tool</h2>
                    <p>Self-help only — not therapy or medical device.</p>
                  </section>

                  <section>
                    <h2>2. Eligibility</h2>
                    <p>Users aged 16 and over.</p>
                  </section>

                  <section>
                    <h2>3. Sensitive Data</h2>
                    <p>Anxiety ratings are special-category data processed with consent.</p>
                  </section>

                  <section>
                    <h2>4. Subscriptions</h2>
                    <p>Via RevenueCat and app stores.</p>
                  </section>

                  <section>
                    <h2>5. AI Content</h2>
                    <p>Informational only.</p>
                  </section>

                  <section>
                    <h2>6. Disclaimers</h2>
                    <p>As is.</p>
                  </section>

                  <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>As permitted by law.</p>
                  </section>

                  <section>
                    <h2>8. Governing Law</h2>
                    <p>India.</p>
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
                      <a href="/vela/privacy-policy">Privacy Policy</a>
                       · 
                      <a href="/vela/contact-us">Contact Us</a>
                       · 
                      <a href="/vela/support">Support</a>
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

export default VelaTermsAndConditions;
