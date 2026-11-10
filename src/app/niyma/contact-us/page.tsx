'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../niyma.module.css';

export default function NiymaContactUs() {
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
                    <strong>Niyma</strong> — Last updated: April 1, 2026
                  </p>

                  <section>
                    <h2>Get in touch</h2>
                    <p>
                      We&apos;re here to help with <strong>Niyma</strong> account issues, technical problems, feedback, and privacy-related requests.
                    </p>
                    <div className={styles.tableWrap}>
                    <table>
                      <tbody>
                        <tr>
                          <th scope="row">Support email</th>
                          <td>
                            <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Privacy &amp; data requests</th>
                          <td>
                            <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Response time</th>
                          <td>
                            We aim to reply within <strong>2 business days</strong> (may be longer during holidays).
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  </section>

                  <section>
                    <h2>Company information</h2>
                    <p>
                      <strong>Legal name:</strong> LasyaAitech
                      <br />
                      <strong>Doing business as:</strong> Niyma (app name)
                    </p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <a href="https://lasyaaitech.com" target="_blank" rel="noopener noreferrer">
                        https://lasyaaitech.com
                      </a>
                    </p>
                    <p className="m0">
                      For a mailing address or phone, please email support and we will provide details for your region or request type.
                    </p>
                  </section>

                  <section>
                    <h2>What to include in your message</h2>
                    <p>To help us assist you faster, please include:</p>
                    <ul>
                      <li>
                        <strong>Subject line:</strong> e.g. &quot;Niyma iOS — login issue&quot; or &quot;Data deletion request&quot;
                      </li>
                      <li>
                        <strong>Platform:</strong> iOS or Android, and approximate app version (from App settings / About)
                      </li>
                      <li>
                        <strong>Account email</strong> (the one you use to sign in), if applicable
                      </li>
                      <li>
                        <strong>Description</strong> of the issue or request
                      </li>
                    </ul>
                    <p>
                      <strong>Privacy or data rights requests:</strong> Use{' '}
                      <a href="mailto:privacy@lasyaaitech.com?subject=Privacy%20Request">privacy@lasyaaitech.com</a> and put &quot;Privacy Request&quot; in the subject. For deletion or export, specify the email associated with your Niyma account. We may ask you to verify identity before processing.
                    </p>
                  </section>

                  <section>
                    <h2>App Store review</h2>
                    <p>
                      If you are an <strong>Apple App Review</strong> team member and need clarification about Niyma&apos;s features, data use, or compliance, contact{' '}
                      <a href="mailto:support@lasyaaitech.com?subject=App%20Store%20Review">support@lasyaaitech.com</a> with &quot;App Store Review&quot; in the subject.
                    </p>
                  </section>

                  <section>
                    <h2>Regional users</h2>
                    <ul>
                      <li>
                        <strong>European Economic Area / UK:</strong> You may contact us at the emails above for GDPR-related questions. You also have the right to complain to your local data protection authority.
                      </li>
                      <li>
                        <strong>California, USA:</strong> For CCPA-related requests, use{' '}
                        <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>.
                      </li>
                    </ul>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/niyma/privacy-policy">Niyma Privacy Policy</a>
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
