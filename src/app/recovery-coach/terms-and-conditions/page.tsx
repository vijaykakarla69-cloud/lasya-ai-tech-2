'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../recovery-coach.module.css';

const RecoverycoachTermsAndConditions = () => {
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
                    <strong>App:</strong> RecoveryCoach
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
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of RecoveryCoach (&quot;RecoveryCoach&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or using RecoveryCoach, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the app.
                    </p>
                  </section>

                  <section>
                    <h2>1. Not Medical Care</h2>
                    <p>RecoveryCoach is consumer recovery guidance, not a medical device or substitute for your surgical team.</p>
                  </section>

                  <section>
                    <h2>2. Eligibility</h2>
                    <p>Adults 18 and older.</p>
                  </section>

                  <section>
                    <h2>3. AI Coach</h2>
                    <p>Anthropic-powered guidance is informational only, not used to train their models.</p>
                  </section>

                  <section>
                    <h2>4. Subscriptions</h2>
                    <p>Trial and billing via app stores with auto-renewal.</p>
                  </section>

                  <section>
                    <h2>5. HIPAA</h2>
                    <p>Generally not a HIPAA-covered entity.</p>
                  </section>

                  <section>
                    <h2>6. Disclaimers</h2>
                    <p>Service provided as is.</p>
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
                      <a href="/recovery-coach/privacy-policy">Privacy Policy</a>
                       · 
                      <a href="/recovery-coach/contact-us">Contact Us</a>
                       · 
                      <a href="/recovery-coach/support">Support</a>
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

export default RecoverycoachTermsAndConditions;
