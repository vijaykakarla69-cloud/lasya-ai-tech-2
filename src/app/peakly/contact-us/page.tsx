'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../peakly.module.css';

export default function PeaklyContactUs() {
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
              <p className={styles.effectiveDate}><strong>Peakly</strong> — Last updated: 1 April 2026</p>
              <section>
                <h2>Get in Touch</h2>
                <p>We&apos;d love to hear from you. Whether you have a question, need help, or want to share feedback, here&apos;s how to reach the Peakly team.</p>
              </section>
              <section>
                <h2>Email contacts</h2>
                <div className={styles.tableWrap}>
                  <table><tbody>
                    <tr><th scope="row">General support</th><td><a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a></td></tr>
                    <tr><th scope="row">Privacy &amp; data requests</th><td><a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a></td></tr>
                    <tr><th scope="row">Billing &amp; subscriptions</th><td><a href="mailto:support@lasyaaitech.com?subject=Peakly%20Billing">support@lasyaaitech.com</a></td></tr>
                    <tr><th scope="row">Press &amp; partnerships</th><td><a href="mailto:support@lasyaaitech.com?subject=Peakly%20Partnership">support@lasyaaitech.com</a></td></tr>
                  </tbody></table>
                </div>
                <p><strong>Response time:</strong> 1–2 business days</p>
              </section>
              <section>
                <h2>What to include</h2>
                <ul>
                  <li>Your name and account email</li>
                  <li>Device model and OS version</li>
                  <li>App version (Settings)</li>
                  <li>Description of your issue (screenshots help)</li>
                </ul>
                <p>Use the in-app form: <strong>Settings → Help Center → Contact Support</strong></p>
              </section>
              <section>
                <h2>Mailing address</h2>
                <p><strong>LasyaAitech</strong><br />Hyderabad, Telangana, India</p>
              </section>
              <div className={styles.noteBox}>
                <strong>Medical questions:</strong> Our support team cannot provide medical advice. For medication or health questions, consult a qualified healthcare professional. In an emergency, call your local emergency number.
              </div>
              <section className={styles.contactInfo}>
                <h2>Related</h2>
                <p className="m0"><a href="/peakly/privacy-policy">Peakly Privacy Policy</a></p>
              </section>
            </div>
          </div></div></div>
        </section>
      </div>
    </Layout>
  );
}
