'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../recovery-coach.module.css';

export default function RecoveryCoachContactUs() {
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
              <p className={styles.effectiveDate}><strong>RecoveryCoach</strong> — Last updated: 1 April 2026</p>
              <div className={styles.noteBox}>
                <strong>Medical concern?</strong> Contact your surgeon&apos;s office. For emergencies, call your local emergency number (911 US, 999 UK, 112 EU/India, 000 Australia). RecoveryCoach cannot provide emergency assistance.
              </div>
              <section>
                <h2>Customer support</h2>
                <p>
                  <a href="mailto:support@lasyaaitech.com">support@lasyaaitech.com</a>
                  <br /><strong>In-app:</strong> Settings → Help &amp; Support
                  <br /><strong>Response time:</strong> within 1 business day
                </p>
              </section>
              <section>
                <h2>Privacy &amp; data requests</h2>
                <p>
                  <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a>
                  <br />Export or delete data in <strong>Settings → Account</strong>.
                </p>
              </section>
              <section>
                <h2>Partnerships &amp; press</h2>
                <p><a href="mailto:support@lasyaaitech.com?subject=RecoveryCoach%20Partnership">support@lasyaaitech.com</a></p>
              </section>
              <section>
                <h2>Company details</h2>
                <p>
                  <strong>LasyaAitech</strong><br />
                  Hyderabad, Telangana, India<br />
                  <a href="https://lasyaaitech.com" target="_blank" rel="noopener noreferrer">https://lasyaaitech.com</a>
                </p>
              </section>
              <section className={styles.contactInfo}>
                <h2>Related</h2>
                <p className="m0"><a href="/recovery-coach/privacy-policy">RecoveryCoach Privacy Policy</a></p>
              </section>
            </div>
          </div></div></div>
        </section>
      </div>
    </Layout>
  );
}
