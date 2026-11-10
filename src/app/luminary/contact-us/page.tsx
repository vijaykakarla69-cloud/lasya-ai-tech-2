'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../luminary.module.css';

export default function LuminaryContactUs() {
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
                    <strong>Luminary — Grief Companion</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>In crisis right now?</strong> Please reach a crisis line instead of waiting for a reply. In the US, call or text <strong>988</strong>. Elsewhere, find a helpline at{' '}
                    <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a>, or call your local emergency number.
                  </div>

                  <section>
                    <h2>How to reach us</h2>
                    <div className={styles.tableWrap}>
                      <table>
                        <thead>
                          <tr>
                            <th scope="col">Reason</th>
                            <th scope="col">Email</th>
                            <th scope="col">Typical response</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>General help &amp; questions</td>
                            <td><a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a></td>
                            <td>1–2 business days</td>
                          </tr>
                          <tr>
                            <td>Privacy &amp; data requests</td>
                            <td><a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a></td>
                            <td>Within 30 days as required by law</td>
                          </tr>
                          <tr>
                            <td>Legal &amp; Terms</td>
                            <td><a href="mailto:support@lasyaaitech.com?subject=Luminary%20Legal">support@lasyaaitech.com</a></td>
                            <td>Varies</td>
                          </tr>
                          <tr>
                            <td>Billing &amp; subscriptions</td>
                            <td><a href="mailto:support@lasyaaitech.com?subject=Luminary%20Billing">support@lasyaaitech.com</a></td>
                            <td>1–2 business days</td>
                          </tr>
                          <tr>
                            <td>Press &amp; media</td>
                            <td><a href="mailto:support@lasyaaitech.com?subject=Luminary%20Press">support@lasyaaitech.com</a></td>
                            <td>2–3 business days</td>
                          </tr>
                          <tr>
                            <td>Partnerships</td>
                            <td><a href="mailto:support@lasyaaitech.com?subject=Luminary%20Partnership">support@lasyaaitech.com</a></td>
                            <td>Varies</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>You can also reach support from the app: <strong>Settings → Help &amp; Support → Contact us.</strong></p>
                  </section>

                  <section>
                    <h2>Mailing address</h2>
                    <p>
                      <strong>LasyaAitech</strong>
                      <br />
                      Hyderabad, Telangana, India
                    </p>
                  </section>

                  <section>
                    <h2>To help us help you faster</h2>
                    <ul>
                      <li>Your account email</li>
                      <li>Device model and operating-system version</li>
                      <li>App version (Settings → About Luminary)</li>
                      <li>A short description and screenshot if helpful</li>
                    </ul>
                    <p>We will never ask you for your password.</p>
                  </section>

                  <section>
                    <h2>Data requests</h2>
                    <p>
                      Export data via Settings → Data Export. Delete your account via Settings → Delete Account, or email{' '}
                      <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>.
                    </p>
                  </section>

                  <section>
                    <h2>Crisis support</h2>
                    <p>
                      Luminary is a companion, not an emergency service. <strong>United States:</strong> call or text 988. <strong>Outside the US:</strong> visit{' '}
                      <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a>. <strong>Immediate danger:</strong> call your local emergency number.
                    </p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/luminary/privacy-policy">Luminary Privacy Policy</a>
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
