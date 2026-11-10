'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../nouri.module.css';

export default function NouriContactUs() {
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
                    <strong>Nouri</strong> — Last updated: 1 April 2026
                  </p>

                  <div className={styles.noteBox}>
                    <strong>Nouri is a coaching app, not a crisis line.</strong> If you&apos;re in danger or thinking about harming yourself, please reach out now: call or text <strong>988</strong> (US Suicide &amp; Crisis Lifeline), text <strong>HOME</strong> to <strong>741741</strong>, the National Alliance for Eating Disorders at <strong>1-866-662-1235</strong>, or ANAD at <strong>1-888-375-7767</strong>. Outside the US, contact your local emergency number.
                  </div>

                  <section>
                    <h2>Get in touch</h2>
                    <p>We&apos;d love to hear from you. Pick the channel that fits.</p>
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
                              Account, app, or subscription questions. Response within 1–2 business days.
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Privacy &amp; data requests</th>
                            <td>
                              <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Press &amp; media</th>
                            <td>
                              <a href="mailto:support@lasyaaitech.com?subject=Nouri%20Press">support@lasyaaitech.com</a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Partnerships</th>
                            <td>
                              <a href="mailto:support@lasyaaitech.com?subject=Nouri%20Partnership">support@lasyaaitech.com</a>
                              <br />
                              Clinicians, intuitive-eating coaches, and organizations.
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Feedback &amp; ideas</th>
                            <td>
                              <a href="mailto:support@lasyaaitech.com?subject=Nouri%20Feedback">support@lasyaaitech.com</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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

                  <section>
                    <h2>What to include when you write to support</h2>
                    <ul>
                      <li>A short description of the issue</li>
                      <li>Your device model and OS version</li>
                      <li>A screenshot if relevant</li>
                    </ul>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/nouri/privacy-policy">Nouri Privacy Policy</a>
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
