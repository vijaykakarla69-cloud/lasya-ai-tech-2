'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../voxnote.module.css';

const VoxNoteSupportPage = () => {
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <div className={styles.main}>
        <div className={`section-box ${styles.bannerHero}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="text-lg font-semibold mb-4">VoxNote Support</h1>
              </div>
            </div>
          </div>
        </div>

        <section className={`section-box ${styles.contentSection}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.privacyContent}>
                  <p>
                    Welcome to VoxNote support. Below you&apos;ll find answers to common questions and how to get help.
                  </p>
                  <p>
                    <strong>Need to reach us directly?</strong> Email <strong>support@krivatech.com</strong> - we reply within 1-2 business days.
                  </p>

                  <section>
                    <h2>Getting Started</h2>
                    <ol>
                      <li>Open VoxNote and tap <strong>Get Started</strong> to complete the short intro.</li>
                      <li>On the <strong>Home</strong> screen, tap the <strong>+ (Add)</strong> button.</li>
                      <li>
                        Choose <strong>Paste text</strong> to paste content from ChatGPT or anywhere, or <strong>Upload File</strong> to import a document.
                      </li>
                      <li>Press <strong>Play</strong> to listen. That&apos;s it - no account needed.</li>
                    </ol>
                  </section>

                  <section>
                    <h2>How-To Guides</h2>
                    <h3>Convert pasted text to speech</h3>
                    <p>
                      Tap <strong>+ -&gt; Paste text</strong>, paste your content, give it a title, pick a voice, then press <strong>Preview Voice</strong> or save and play.
                    </p>

                    <h3>Import a document</h3>
                    <p>
                      Tap <strong>+ -&gt; Upload File</strong> and choose a TXT, Markdown (.md), Word (.docx), or PDF file. VoxNote extracts the text automatically.
                    </p>

                    <h3>Change the voice, speed, or pitch</h3>
                    <p>
                      Open a note&apos;s player, tap the voice name, and choose from your device&apos;s available voices. Use the sliders to adjust speed (0.5x-2.0x) and pitch.
                    </p>

                    <h3>Listen in the background</h3>
                    <p>
                      Start playback and lock your phone or switch apps - audio keeps playing. Control it from your lock screen or notification shade (play, pause, skip).
                    </p>

                    <h3>Build a play queue</h3>
                    <p>Add multiple notes to the queue and they&apos;ll play one after another, hands-free.</p>

                    <h3>Export as MP3</h3>
                    <p>From the player or note detail screen, tap <strong>Export</strong>, choose your format and quality, then save or share the file.</p>

                    <h3>Set a sleep timer</h3>
                    <p>In the player, open the <strong>Sleep Timer</strong> and choose a duration. Playback stops automatically - ideal for bedtime.</p>
                  </section>

                  <section>
                    <h2>Troubleshooting</h2>
                    <h3>No sound / voice not playing</h3>
                    <ul>
                      <li>Check your device volume and that silent mode is off.</li>
                      <li>Make sure your language voice pack is installed (Settings -&gt; Accessibility -&gt; Spoken Content / Text-to-Speech on your device).</li>
                    </ul>

                    <h3>A voice or language is missing</h3>
                    <p>
                      Available voices come from your device&apos;s operating system. Install additional voices via your device&apos;s text-to-speech settings, then reopen VoxNote.
                    </p>

                    <h3>File won&apos;t import</h3>
                    <p>Confirm the file is a supported type (TXT, MD, DOCX, PDF) and not password-protected or corrupted. Very large files may take a moment to process.</p>

                    <h3>Export isn&apos;t working</h3>
                    <p>Ensure you have free storage space and that VoxNote has permission to access files.</p>

                    <p>
                      If your issue isn&apos;t covered here, email <strong>support@krivatech.com</strong> with your device model, OS version, and a short description.
                    </p>
                  </section>

                  <section>
                    <h2>Frequently Asked Questions</h2>
                    <p>
                      <strong>Is VoxNote free?</strong> Yes, the current version is free to use.
                    </p>
                    <p>
                      <strong>Do I need an account?</strong> No - VoxNote requires no sign-up or login.
                    </p>
                    <p>
                      <strong>Does it work offline?</strong> Yes, once your device&apos;s voice pack is installed.
                    </p>
                    <p>
                      <strong>Where are my notes stored?</strong> Locally on your device. We don&apos;t upload your content.
                    </p>
                    <p>
                      <strong>Is my data private?</strong> Yes. See our <a href="/voxnote/privacy-policy">Privacy Policy</a>.
                    </p>
                  </section>

                  <section className={styles.contactInfo}>
                    <h2>Contact</h2>
                    <p>
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

export default VoxNoteSupportPage;
