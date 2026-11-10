'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../clara.module.css';

export default function ClaraContactUs() {
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
                    <strong>Clara</strong> — Lasya AI Tech Pvt Ltd · Last updated: 1 June 2026
                  </p>

                  <section>
                    <h2>Contact Clara</h2>
                    <p>
                      Whether you have a question, a concern, a compliment, or a feature idea — we want to hear from you. Clara is built for real women with real experiences, and your feedback shapes every release.
                    </p>
                  </section>

                  <section>
                    <h2>In-App Support</h2>
                    <p>The fastest way to reach us is directly inside Clara:</p>
                    <ul>
                      <li>Go to Settings &gt; Help and feedback &gt; Send us a message</li>
                      <li>Your message will include your app version and device type automatically</li>
                      <li>You can attach screenshots if relevant</li>
                    </ul>
                  </section>

                  <section>
                    <h2>Email Contacts</h2>
                    <p>Choose the right inbox for a faster response:</p>
                    <div className={styles.tableWrap}>
                      <table>
                        <tbody>
                          <tr>
                            <th scope="row">General Support</th>
                            <td>
                              <a href="mailto:support@claraapp.com">support@claraapp.com</a>
                              <br />
                              Account issues, technical problems, subscription billing, feature questions.
                              <br />
                              <strong>Response time:</strong> Within 24 hours on business days (Mon–Fri, 9 AM–6 PM IST)
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Privacy &amp; data requests</th>
                            <td>
                              <a href="mailto:privacy@claraapp.com">privacy@claraapp.com</a>
                              <br />
                              Data export, account deletion, GDPR / DPDP rights requests, and privacy concerns.
                              <br />
                              <strong>Response time:</strong> Within 30 days as required by law (usually faster)
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Legal &amp; compliance</th>
                            <td>
                              <a href="mailto:legal@claraapp.com">legal@claraapp.com</a>
                              <br />
                              Terms of service questions, legal notices, intellectual property, press enquiries requiring legal review.
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Partnerships &amp; business</th>
                            <td>
                              <a href="mailto:hello@claraapp.com">hello@claraapp.com</a>
                              <br />
                              Healthcare partnerships, clinician collaborations, employer wellness programmes, press, media, and investor enquiries.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section>
                    <h2>What to Include in Your Message</h2>
                    <ul>
                      <li>The email address associated with your Clara account</li>
                      <li>Your device type and operating system (e.g., iPhone 15, iOS 17.4)</li>
                      <li>Your app version (visible in Settings &gt; About Clara)</li>
                      <li>A clear description of your issue or request</li>
                      <li>Screenshots if the issue is visual</li>
                    </ul>
                  </section>

                  <section>
                    <h2>Registered Office</h2>
                    <p>
                      <strong>Lasya AI Tech Private Limited</strong>
                      <br />
                      Hyderabad, Telangana, India
                    </p>
                  </section>

                  <section>
                    <h2>Response Time Commitments</h2>
                    <ul>
                      <li><strong>General support:</strong> Within 24 hours on business days</li>
                      <li><strong>Privacy/data requests:</strong> Within 30 days (usually faster)</li>
                      <li><strong>Emergency account concerns:</strong> Same business day — mark email subject as URGENT</li>
                      <li><strong>Partnership enquiries:</strong> Within 5 business days</li>
                    </ul>
                  </section>

                  <section>
                    <h2>We Can&apos;t Help With…</h2>
                    <p>We want to be upfront about what falls outside our scope:</p>
                    <ul>
                      <li>Medical advice or interpretation of symptoms — please speak with your doctor</li>
                      <li>Prescription or treatment recommendations</li>
                      <li>Therapy or counselling — Clara is not a substitute for professional mental health support</li>
                      <li>Urgent mental health crises — please call a crisis helpline or emergency services in your country</li>
                    </ul>
                    <p>
                      UK: Samaritans 116 123 · India: iCall 9152987821 · Australia: Lifeline 13 11 14 · US: 988 Suicide &amp; Crisis Lifeline
                    </p>
                  </section>

                  <section>
                    <h2>Clinician and Research Enquiries</h2>
                    <p>
                      Are you a GP, gynaecologist, menopause specialist, or researcher interested in Clara? Contact us at{' '}
                      <a href="mailto:hello@claraapp.com?subject=Clinician%20Partnership">hello@claraapp.com</a> with the subject line: Clinician Partnership.
                    </p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Related</h2>
                    <p className="m0">
                      <a href="/clara/privacy-policy">Clara Privacy Policy</a>
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
