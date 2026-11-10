'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../luminary.module.css';

const LuminaryTermsAndConditions = () => {
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
                    <strong>App:</strong> Luminary
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
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of Luminary (&quot;Luminary&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or using Luminary, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the app.
                    </p>
                  </section>

                  <section>
                    <h2>1. Nature of the Service</h2>
                    <p>Luminary is a supportive grief companion, not medical, clinical, or emergency care. In crisis, contact emergency services.</p>
                  </section>

                  <section>
                    <h2>2. Eligibility</h2>
                    <p>You must be at least 16 years old.</p>
                  </section>

                  <section>
                    <h2>3. Subscriptions</h2>
                    <p>14-day free trial. Paid plans via app stores with auto-renewal until cancelled.</p>
                  </section>

                  <section>
                    <h2>4. Community</h2>
                    <p>Moderated community with rules against harmful content. You own what you post.</p>
                  </section>

                  <section>
                    <h2>5. AI Content</h2>
                    <p>Automated responses may be imperfect — not professional guidance.</p>
                  </section>

                  <section>
                    <h2>6. Disclaimers</h2>
                    <p>Service provided as is.</p>
                  </section>

                  <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>Liability limited as permitted by law.</p>
                  </section>

                  <section>
                    <h2>8. Governing Law</h2>
                    <p>Governed by applicable law. Contact privacy@lasyaaitech.com.</p>
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
                      <a href="/luminary/privacy-policy">Privacy Policy</a>
                       · 
                      <a href="/luminary/contact-us">Contact Us</a>
                       · 
                      <a href="/luminary/support">Support</a>
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

export default LuminaryTermsAndConditions;
