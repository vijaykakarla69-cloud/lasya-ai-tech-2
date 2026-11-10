'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../gluco.module.css';

export default function GlucoContactUs() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Contact Us</h1>
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
                    <strong>Gluco</strong> — Last updated: 1 April 2026
                  </p>

                  <section>
                    <h2>Get in touch</h2>
                    <p>
                      We&apos;d love to hear from you. Whether you need help, found a bug, or want to share feedback, here&apos;s how to reach the <strong>Gluco</strong> team.
                    </p>
                  </section>

                  <section>
                    <h2>Support</h2>
                    <p>
                      For help with your account, subscription, or the app:{' '}
                      <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a> — we usually reply within <strong>1–2 business days</strong>.
                    </p>
                  </section>

                  <section>
                    <h2>Privacy &amp; data requests</h2>
                    <p>
                      To access, correct, export, or delete your data, or for any privacy question:{' '}
                      <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                    </p>
                    <p>
                      India users — Grievance Officer:{' '}
                      <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                    </p>
                  </section>

                  <section>
                    <h2>Legal</h2>
                    <p>
                      For legal or partnership matters:{' '}
                      <a href="mailto:support@lasyaaitech.com?subject=Legal%20Enquiry">support@lasyaaitech.com</a>
                    </p>
                  </section>

                  <section>
                    <h2>What to include in your message</h2>
                    <p>To help us assist you faster, please include:</p>
                    <ul>
                      <li>
                        <strong>Subject line:</strong> e.g. &quot;Gluco iOS — subscription issue&quot; or &quot;Data deletion request&quot;
                      </li>
                      <li>
                        <strong>Platform:</strong> iOS or Android, and approximate app version
                      </li>
                      <li>
                        <strong>Account email</strong> (the one you use to sign in), if applicable
                      </li>
                      <li>
                        <strong>Description</strong> of the issue or request
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2>Business address</h2>
                    <p>
                      <strong>LasyaAitech</strong>
                      <br />
                      Hyderabad, Telangana, India
                    </p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <a href="https://lasyaaitech.com" target="_blank" rel="noopener noreferrer">
                        https://lasyaaitech.com
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2>A note on health questions</h2>
                    <p>
                      Our team can help with the app, but we can&apos;t give medical advice. For anything about your health, medications, or symptoms, please talk to your doctor. In an emergency, call your local emergency number right away.
                    </p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/gluco/privacy-policy">Gluco Privacy Policy</a>
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
}
