'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../haven.module.css';

export default function HavenContactUs() {
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
                    <strong>Haven</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Haven is not an emergency service.</strong> If you are in crisis or thinking about harming yourself or someone else, contact your local emergency number or a crisis line in your region immediately. Inside the app, open <strong>Crisis Resources</strong> for region-aware support.
                  </div>

                  <section>
                    <h2>Get in touch</h2>
                    <p>
                      We&apos;re a small team building Haven for caregivers, and we read every message.
                    </p>
                  </section>

                  <section>
                    <h2>Email contacts</h2>
                    <div className={styles.tableWrap}>
                      <table>
                        <tbody>
                          <tr>
                            <th scope="row">General support</th>
                            <td>
                              <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
                              <br />
                              Questions about using the app, your account, or check-ins.
                              <br />
                              <strong>Response time:</strong> 1–2 business days
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Billing &amp; subscriptions</th>
                            <td>
                              <a href="mailto:support@lasyaaitech.com?subject=Haven%20Billing">support@lasyaaitech.com</a>
                              <br />
                              Trial, plans, promo codes, or charges. Refunds are processed by Apple or Google Play.
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Privacy &amp; data requests</th>
                            <td>
                              <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                              <br />
                              Access, export, correct, or delete your data.
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Press &amp; media</th>
                            <td>
                              <a href="mailto:support@lasyaaitech.com?subject=Haven%20Press">support@lasyaaitech.com</a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Partnerships</th>
                            <td>
                              <a href="mailto:support@lasyaaitech.com?subject=Haven%20Partnership">support@lasyaaitech.com</a>
                              <br />
                              Caregiver organisations, clinicians, employers, and creators.
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Feedback &amp; ideas</th>
                            <td>
                              <a href="mailto:support@lasyaaitech.com?subject=Haven%20Feedback">support@lasyaaitech.com</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>Tip: include your device type and app version (Profile → About) so we can help faster.</p>
                  </section>

                  <section>
                    <h2>Mailing address</h2>
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

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/haven/privacy-policy">Haven Privacy Policy</a>
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
