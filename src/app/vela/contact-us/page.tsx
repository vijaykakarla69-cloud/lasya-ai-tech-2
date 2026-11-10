'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../vela.module.css';

export default function VelaContactUs() {
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
              <p className={styles.effectiveDate}><strong>Vela</strong> — Last updated: 1 April 2026</p>
              <div className={styles.noteBox}>
                <strong>Vela can&apos;t respond to emergencies.</strong> If you&apos;re in crisis, contact your local emergency services right away.
              </div>
              <section>
                <h2>Email us</h2>
                <div className={styles.tableWrap}>
                  <table>
                    <thead><tr><th>Reason</th><th>Email</th><th>Response</th></tr></thead>
                    <tbody>
                      <tr><td>Help &amp; support</td><td><a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a></td><td>1–2 business days</td></tr>
                      <tr><td>Privacy &amp; data requests</td><td><a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a></td><td>As required by law</td></tr>
                      <tr><td>Press &amp; partnerships</td><td><a href="mailto:support@lasyaaitech.com?subject=Vela%20Partnership">support@lasyaaitech.com</a></td><td>Varies</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Include device model, OS version, app version, and a short description (screenshot helps).</p>
              </section>
              <section>
                <h2>Mailing address</h2>
                <p><strong>LasyaAitech</strong><br />Hyderabad, Telangana, India</p>
                <p><strong>In-app:</strong> Settings → About → Contact support</p>
              </section>
              <section className={styles.contactInfo}>
                <h2>Related</h2>
                <p className="m0"><a href="/vela/privacy-policy">Vela Privacy Policy</a></p>
              </section>
            </div>
          </div></div></div>
        </section>
      </div>
    </Layout>
  );
}
