'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../reframe.module.css';

export default function ReframeContactUs() {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container"><div className="row"><div className="col-lg-12 text-center">
            <h1 className="text-lg font-semibold mb-4">Contact Us</h1>
          </div></div></div>
        </div>
        <section className={`section-box ${styles.contentSection}`}>
          <div className="container"><div className="row"><div className="col-lg-12">
            <div className={styles.privacyContent}>
              <p className={styles.effectiveDate}><strong>Reframe</strong> — Last updated: 1 April 2026</p>
              <div className={styles.noteBox}>
                <strong>Not for emergencies or medical advice.</strong> If you have urgent symptoms or are in crisis, contact your doctor or your local emergency number immediately.
              </div>
              <section>
                <h2>How to reach us</h2>
                <div className={styles.tableWrap}>
                  <table>
                    <thead><tr><th>Reason</th><th>Email</th><th>Response</th></tr></thead>
                    <tbody>
                      <tr><td>Help &amp; technical support</td><td><a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a></td><td>1 business day</td></tr>
                      <tr><td>Billing &amp; subscriptions</td><td><a href="mailto:support@lasyaaitech.com?subject=Reframe%20Billing">support@lasyaaitech.com</a></td><td>1–2 business days</td></tr>
                      <tr><td>Privacy &amp; data requests</td><td><a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a></td><td>Within 30 days</td></tr>
                      <tr><td>Press &amp; partnerships</td><td><a href="mailto:support@lasyaaitech.com?subject=Reframe%20Press">support@lasyaaitech.com</a></td><td>3–5 business days</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section>
                <h2>Before you email support</h2>
                <ul>
                  <li>Device model and OS version</li>
                  <li>App version (Settings → About)</li>
                  <li>Short description and screenshot if possible</li>
                  <li>Email linked to your Reframe account</li>
                </ul>
              </section>
              <section>
                <h2>Company details</h2>
                <p><strong>LasyaAitech</strong><br />Hyderabad, Telangana, India</p>
              </section>
              <section className={styles.contactInfo}>
                <h2>Related</h2>
                <p className="m0"><a href="/reframe/privacy-policy">Reframe Privacy Policy</a></p>
              </section>
            </div>
          </div></div></div>
        </section>
      </div>
    </Layout>
  );
}
