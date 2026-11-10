'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../voxnote.module.css';

const VoxNotePrivacyPolicy = () => {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Privacy Policy</h1>
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
                    <strong>App:</strong> VoxNote
                    <br />
                    <strong>Developer:</strong> KrivaTech
                    <br />
                    <strong>Last updated:</strong> 16 June 2026
                    <br />
                    <strong>Contact:</strong>{' '}
                    <a href="mailto:support@krivatech.com">support@krivatech.com</a>
                  </p>

                  <section>
                    <h2>1. Overview</h2>
                    <p>
                      This Privacy Policy explains how VoxNote (&quot;VoxNote&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles your information. VoxNote is a text-to-speech application that converts text you provide - typed, pasted, or imported from files - into spoken audio.
                    </p>
                    <p>
                      We have designed VoxNote to be private by default. The app does not require an account, a login, or a sign-up, and it does not transmit your notes or personal information to our servers.
                    </p>
                    <p>By using VoxNote, you agree to this Privacy Policy.</p>
                  </section>

                  <section>
                    <h2>2. Information We Collect</h2>
                    <p>
                      <strong>We do not collect personal information.</strong>
                    </p>
                    <p>VoxNote does not ask for your name, email address, phone number, or any account credentials, and it does not require you to register.</p>
                    <h3>Content you create (stored only on your device)</h3>
                    <p>
                      When you type, paste, or upload text into VoxNote, that content - including your notes, titles, tags, generated audio files, listening history, queue, and app settings - is stored <strong>locally on your device only</strong>. We do not have access to it, and it is not uploaded to us or to any third party by the app.
                    </p>
                    <p>If you uninstall the app or clear its data, this locally stored content is permanently removed.</p>
                    <h3>Files you import</h3>
                    <p>
                      When you import a document (such as TXT, Markdown, Word, or PDF), VoxNote reads the file on your device to extract its text. The file content is processed locally and is not sent to us.
                    </p>
                    <h3>Speech generation</h3>
                    <p>
                      Speech is generated using the text-to-speech engine built into your device&apos;s operating system (Apple or Google). The text you choose to convert is processed by your device&apos;s on-device speech system. Please review your device manufacturer&apos;s privacy policy for information about how their on-device services operate.
                    </p>
                  </section>

                  <section>
                    <h2>3. Information We Do NOT Collect</h2>
                    <ul>
                      <li>We do not collect your name, email, or contact details.</li>
                      <li>We do not require or create user accounts.</li>
                      <li>We do not track your location.</li>
                      <li>We do not sell or share your data with advertisers.</li>
                      <li>We do not transmit your notes, files, or audio to our servers.</li>
                    </ul>
                  </section>

                  <section>
                    <h2>4. Device Permissions</h2>
                    <p>VoxNote may request the following permissions, only when needed for a feature you use:</p>
                    <ul>
                      <li>
                        <strong>Files / Storage access</strong> - so you can import documents and export audio (MP3) files. Access is used only for the files you choose.
                      </li>
                      <li>
                        <strong>Notifications</strong> - to show playback controls (play, pause, skip) and alerts such as &quot;export complete&quot;. You can disable notifications at any time in your device settings.
                      </li>
                      <li>
                        <strong>Background audio</strong> - so playback can continue when the app is in the background or your screen is locked.
                      </li>
                    </ul>
                    <p>VoxNote does not access your contacts, camera, microphone, or location.</p>
                  </section>

                  <section>
                    <h2>5. Third-Party Services</h2>
                    <p>The current version of VoxNote does not integrate third-party analytics, advertising, or tracking software.</p>
                    <p>
                      Speech synthesis relies on the operating system&apos;s built-in text-to-speech capability provided by Apple (iOS) or Google (Android). These are part of your device&apos;s operating system and are governed by the device manufacturer&apos;s own privacy terms.
                    </p>
                    <p>
                      If future versions of VoxNote add optional cloud features (such as account sync or cloud voices), this Privacy Policy will be updated and you will be informed before any such data is transmitted.
                    </p>
                  </section>

                  <section>
                    <h2>6. Children&apos;s Privacy</h2>
                    <p>
                      VoxNote is suitable for general audiences and is rated for all ages. We do not knowingly collect any personal information from anyone, including children. Because the app collects no personal data and requires no account, no personal information about children is gathered.
                    </p>
                  </section>

                  <section>
                    <h2>7. Data Security</h2>
                    <p>
                      Because your content stays on your device, the primary protection for your data is your device&apos;s own security (such as your passcode, biometric lock, and device encryption). We recommend keeping your device secured and your operating system up to date.
                    </p>
                  </section>

                  <section>
                    <h2>8. Your Rights and Choices</h2>
                    <p>Since your data is stored only on your device:</p>
                    <ul>
                      <li>You can view, edit, or delete any note directly within the app.</li>
                      <li>You can clear all cached audio from the app&apos;s settings.</li>
                      <li>You can remove all app data by uninstalling VoxNote.</li>
                    </ul>
                    <p>
                      If you have questions about your data, contact us at <a href="mailto:support@krivatech.com">support@krivatech.com</a>.
                    </p>
                  </section>

                  <section>
                    <h2>9. International Users</h2>
                    <p>VoxNote can be used worldwide. Because the app does not transmit your content off your device, your data is not transferred across borders by us.</p>
                  </section>

                  <section>
                    <h2>10. Changes to This Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date above. If we make material changes, we will provide notice within the app or on our website. Continued use of VoxNote after changes take effect constitutes acceptance of the updated policy.
                    </p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>11. Contact Us</h2>
                    <p>
                      If you have any questions or concerns about this Privacy Policy or your data, please contact:
                      <br />
                      <br />
                      <strong>KrivaTech</strong>
                      <br />
                      Email: <a href="mailto:support@krivatech.com">support@krivatech.com</a>
                      <br />
                      Website:{' '}
                      <a href="https://krivatech.com" target="_blank" rel="noopener noreferrer">
                        https://krivatech.com
                      </a>
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
};

export default VoxNotePrivacyPolicy;
