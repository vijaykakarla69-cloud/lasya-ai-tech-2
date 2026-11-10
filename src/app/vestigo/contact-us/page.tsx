'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../vestigo.module.css';

export default function VestigoContactUs() {
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
              <p className={styles.effectiveDate}><strong>Vestigo</strong> — Last updated: 1 April 2026</p>
              <section>
                <h2>Customer support</h2>
                <p>
                  <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
                  <br /><strong>In-app:</strong> Settings → Help / Contact
                  <br /><strong>Response time:</strong> 1–2 business days
                </p>
                <p>Include device model, OS version, app version, and a screenshot if possible.</p>
              </section>
              <section>
                <h2>Privacy &amp; data requests</h2>
                <p>
                  <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                  <br />Export: <strong>Settings → Download Your Data</strong>
                  <br />Delete: <strong>Settings → Delete Account</strong>
                </p>
              </section>
              <section>
                <h2>Billing, press &amp; partnerships</h2>
                <p>
                  Billing via Apple/Google Play stores. For other enquiries:{' '}
                  <a href="mailto:support@lasyaaitech.com?subject=Vestigo%20Enquiry">support@lasyaaitech.com</a>
                </p>
              </section>
              <section>
                <h2>Mailing address</h2>
                <p><strong>LasyaAitech</strong><br />Hyderabad, Telangana, India</p>
              </section>
              <div className={styles.noteBox}>
                <strong>Not for emergencies.</strong> If you have sudden severe symptoms — severe headache, weakness, facial droop, slurred speech, vision or hearing loss, fainting, or a fall with injury — contact your local emergency services immediately.
              </div>
              <section className={styles.contactInfo}>
                <h2>Related</h2>
                <p className="m0"><a href="/vestigo/privacy-policy">Vestigo Privacy Policy</a></p>
              </section>
            </div>
          </div></div></div>
        </section>
      </div>
    </Layout>
  );
}
