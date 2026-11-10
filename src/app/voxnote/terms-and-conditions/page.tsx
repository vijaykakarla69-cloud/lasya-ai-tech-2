'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../voxnote.module.css';

const VoxNoteTermsAndConditions = () => {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">Terms and Conditions</h1>
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
                    <h2>1. Agreement to Terms</h2>
                    <p>
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of the VoxNote mobile application (&quot;VoxNote&quot;, &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading, installing, or using VoxNote, you agree to be bound by these Terms. If you do not agree, please do not use the app.
                    </p>
                  </section>

                  <section>
                    <h2>2. The Service</h2>
                    <p>
                      VoxNote is a text-to-speech application that converts text you provide - typed, pasted, or imported from supported files - into spoken audio using your device&apos;s built-in speech engine. Features include saving notes, adjusting voice settings, background playback, and exporting audio as MP3 files.
                    </p>
                    <p>VoxNote currently operates entirely on your device and does not require an account.</p>
                  </section>

                  <section>
                    <h2>3. Licence</h2>
                    <p>
                      We grant you a personal, non-exclusive, non-transferable, revocable licence to use VoxNote for your own lawful, personal, or internal business purposes, subject to these Terms and the rules of the app store from which you downloaded it (Apple App Store or Google Play).
                    </p>
                  </section>

                  <section>
                    <h2>4. Your Responsibilities and Acceptable Use</h2>
                    <p>You are solely responsible for the text and files you provide to VoxNote and the audio you generate. You agree that you will not use VoxNote to:</p>
                    <ul>
                      <li>Process content you do not have the right to use, including copyrighted material you do not own or have permission to use.</li>
                      <li>Create, store, or distribute unlawful, infringing, harmful, harassing, or otherwise objectionable content.</li>
                      <li>Violate any applicable law or regulation, or the rights of any third party.</li>
                      <li>Attempt to reverse-engineer, decompile, interfere with, or disrupt the app, except to the extent permitted by law.</li>
                    </ul>
                    <p>
                      You acknowledge that you are responsible for ensuring that any document or text you import and convert does not infringe the intellectual property or other rights of others.
                    </p>
                  </section>

                  <section>
                    <h2>5. Your Content</h2>
                    <p>
                      You retain all rights to the text, files, and notes you create or import (&quot;Your Content&quot;). Your Content is stored locally on your device and is not uploaded to us. Because we do not have access to Your Content, you are responsible for backing it up; uninstalling the app or clearing its data will permanently delete it.
                    </p>
                  </section>

                  <section>
                    <h2>6. Intellectual Property</h2>
                    <p>
                      VoxNote, including its design, branding, logos, user interface, and underlying software (excluding Your Content and the operating-system voices provided by your device), is owned by KrivaTech and is protected by intellectual property laws. These Terms do not grant you any rights to our trademarks or branding.
                    </p>
                  </section>

                  <section>
                    <h2>7. Third-Party Components</h2>
                    <p>
                      VoxNote relies on the text-to-speech capabilities and other services provided by your device&apos;s operating system (Apple or Google). Your use of those underlying services is also subject to the terms and policies of the respective device manufacturer. We are not responsible for third-party or operating-system components.
                    </p>
                  </section>

                  <section>
                    <h2>8. Pricing</h2>
                    <p>
                      VoxNote is currently offered free of charge. We reserve the right to introduce paid features, subscriptions, or in-app purchases in future versions. Any such changes will be clearly disclosed before purchase, and your continued use of new paid features will be subject to the terms presented at that time.
                    </p>
                  </section>

                  <section>
                    <h2>9. Disclaimer of Warranties</h2>
                    <p>
                      VoxNote is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.
                    </p>
                    <p>
                      We do not warrant that the app will be uninterrupted, error-free, or that speech output will be accurate, complete, or suitable for any particular use. Voice quality and language availability depend on your device and its installed language packs.
                    </p>
                  </section>

                  <section>
                    <h2>10. Limitation of Liability</h2>
                    <p>
                      To the maximum extent permitted by law, KrivaTech and its officers, employees, and partners will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, arising out of or related to your use of, or inability to use, VoxNote.
                    </p>
                    <p>
                      To the extent any liability cannot be excluded, our total aggregate liability will not exceed the amount you paid for the app (which, for the free version, is zero).
                    </p>
                  </section>

                  <section>
                    <h2>11. Indemnification</h2>
                    <p>
                      You agree to indemnify and hold harmless KrivaTech from any claims, damages, liabilities, and expenses arising from your misuse of the app or your violation of these Terms or the rights of any third party.
                    </p>
                  </section>

                  <section>
                    <h2>12. Termination</h2>
                    <p>
                      You may stop using VoxNote at any time by uninstalling it. We may suspend or terminate your access to the app if you breach these Terms or misuse the app. Provisions that by their nature should survive termination (such as intellectual property, disclaimers, and limitation of liability) will continue to apply.
                    </p>
                  </section>

                  <section>
                    <h2>13. Changes to These Terms</h2>
                    <p>
                      We may update these Terms from time to time. When we do, we will revise the &quot;Last updated&quot; date above. Material changes will be communicated within the app or on our website. Your continued use of VoxNote after changes take effect constitutes acceptance of the updated Terms.
                    </p>
                  </section>

                  <section>
                    <h2>14. Governing Law</h2>
                    <p>
                      These Terms are governed by the laws of India, without regard to its conflict-of-laws principles. Subject to applicable law, any disputes will be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.
                    </p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>15. Contact Us</h2>
                    <p>
                      If you have any questions about these Terms, please contact:
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

export default VoxNoteTermsAndConditions;
