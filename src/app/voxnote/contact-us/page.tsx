'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../voxnote.module.css';

export default function VoxNoteContactUs() {
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
                    <strong>VoxNote</strong> — Last updated: June 16, 2026
                  </p>

                  <section>
                    <h2>Get in Touch</h2>
                    <p>
                      We&apos;d love to hear from you. Whether you have a question, found a bug, or have an idea to make <strong>VoxNote</strong> better, we&apos;re here to help.
                    </p>
                    <p>
                      <strong>Email:</strong> <a href="mailto:support@krivatech.com">support@krivatech.com</a>
                    </p>
                    <p>We aim to respond to all enquiries within <strong>1-2 business days</strong>.</p>
                  </section>

                  <section>
                    <h2>What can we help with?</h2>
                    <h3>Support and troubleshooting</h3>
                    <p>Having trouble importing a file, playing audio, or exporting an MP3? Email us with:</p>
                    <ul>
                      <li>Your device model (e.g. iPhone 14, Samsung Galaxy S23)</li>
                      <li>Your operating system version (e.g. iOS 18, Android 14)</li>
                      <li>A short description of what happened and what you expected</li>
                    </ul>
                    <p>This helps us solve your issue faster.</p>

                    <h3>Feature requests</h3>
                    <p>Want a new voice, a new file type, or a feature you don&apos;t see yet? Tell us - user suggestions shape what we build next.</p>

                    <h3>Feedback</h3>
                    <p>Love something? Hate something? We read every message.</p>

                    <h3>Business and partnerships</h3>
                    <p>
                      For business enquiries, reach us at the same address: <a href="mailto:support@krivatech.com">support@krivatech.com</a>
                    </p>
                  </section>

                  <section>
                    <h2>Frequently Asked Questions</h2>
                    <h3>Do I need an account to use VoxNote?</h3>
                    <p>No. VoxNote works straight out of the box - no sign-up, no login.</p>

                    <h3>Does VoxNote work offline?</h3>
                    <p>Yes. Speech is generated using your device&apos;s built-in voices, so it works offline once your language pack is installed.</p>

                    <h3>Which file types can I import?</h3>
                    <p>TXT, Markdown (.md), Word (.docx), and PDF.</p>

                    <h3>Can I keep listening with my screen off?</h3>
                    <p>Yes. Audio continues in the background with playback controls on your lock screen and notification shade.</p>

                    <h3>Where are my notes stored?</h3>
                    <p>On your device only. We never upload your notes or files.</p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Company</h2>
                    <p>
                      <strong>KrivaTech</strong>
                      <br />
                      Website:{' '}
                      <a href="https://krivatech.com" target="_blank" rel="noopener noreferrer">
                        https://krivatech.com
                      </a>
                      <br />
                      Email: <a href="mailto:support@krivatech.com">support@krivatech.com</a>
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
