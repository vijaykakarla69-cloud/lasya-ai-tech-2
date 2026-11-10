'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../peakly.module.css';

const PeaklyTermsAndConditions = () => {
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
                    <strong>App:</strong> Peakly
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
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of Peakly (&quot;Peakly&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or using Peakly, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the app.
                    </p>
                  </section>

                  <section>
                    <h2>1. Medical Disclaimer</h2>
                    <p>Peakly is self-tracking only — not medical advice. Never change medication based on Peakly. No doctor-patient relationship.</p>
                  </section>

                  <section>
                    <h2>2. Eligibility</h2>
                    <p>You must be at least 18 or age of majority in your jurisdiction.</p>
                  </section>

                  <section>
                    <h2>3. Subscriptions</h2>
                    <p>Auto-renewal unless cancelled 24 hours before period end. Refunds per app store policies.</p>
                  </section>

                  <section>
                    <h2>4. Acceptable Use</h2>
                    <p>No reverse engineering, scraping, or unlawful use.</p>
                  </section>

                  <section>
                    <h2>5. Your Data</h2>
                    <p>Health data is sensitive. Export or delete via in-app controls.</p>
                  </section>

                  <section>
                    <h2>6. Disclaimers</h2>
                    <p>Service provided as is.</p>
                  </section>

                  <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>Liability limited to amounts paid in 12 months.</p>
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
                      <a href="/peakly/privacy-policy">Privacy Policy</a>
                       · 
                      <a href="/peakly/contact-us">Contact Us</a>
                       · 
                      <a href="/peakly/support">Support</a>
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

export default PeaklyTermsAndConditions;
