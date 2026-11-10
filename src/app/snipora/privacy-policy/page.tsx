'use client'
import React from 'react';
import Layout from "@/src/components/layout/Layout";
import styles from './privacy-policy.module.css';

const SniporaPrivacyPolicy = () => {
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
                  <section>
                    <h2>Privacy Policy</h2>
                    <p>
                      At Snipora, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your information. This Privacy Policy explains how Snipora (&quot;Snipora&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles data when you use the Snipora mobile application, keyboard extension, cloud sync or backup features, import/export tools, and any related websites or support services (collectively, the &quot;Services&quot;).
                    </p>
                    <p>
                      Snipora is designed as a local-first application, meaning your data primarily stays on your device unless you choose to enable optional cloud features. By using Snipora, you agree to the practices described in this policy. If you do not agree, you should discontinue use of the Services.
                    </p>
                  </section>

                  <section>
                    <h2>Information We Collect</h2>
                    <p>
                      Snipora collects information based on how you use the app and the features you enable. This may include information you provide directly, such as support messages, feedback, bug reports, survey responses, or any information you choose to include in saved snippets, clipboard content, or backups. If you contact us, we may collect your email address and the contents of your communication to assist you effectively.
                    </p>
                    <p>
                      The app may also store content you choose to save, including copied text, snippets, pinned items, tags, folders, labels, and related metadata. This information is generally stored locally on your device unless you enable optional sync or backup features.
                    </p>
                    <p>
                      If you enable the keyboard extension, it may access and display content you have already saved in Snipora, such as snippet titles, contents, and limited metadata required for insertion. Snipora does not intentionally collect what you type in other apps unless explicitly required and disclosed.
                    </p>
                    <p>
                      We may automatically collect certain device and technical information, such as device model, operating system version, app version, crash logs, diagnostics, language, region, and feature usage data. This helps us improve performance, reliability, and user experience.
                    </p>
                    <p>
                      For users on iOS, we may process purchase-related information such as entitlement status and restore events to manage premium access. Payment processing is handled entirely by Apple, and we do not receive your payment card details.
                    </p>
                    <p>
                      If you enable biometric or device authentication features like Face ID, fingerprint, or passcode, Snipora uses your device&apos;s secure authentication system. We do not store your biometric data, but we may store related settings such as lock preferences and timestamps.
                    </p>
                    <p>
                      When optional cloud features are enabled, such as iCloud sync or Google Drive backup, we may process data related to backups, synchronization status, timestamps, and restore operations. Similarly, import and export features may process archive files, metadata, and operation status.
                    </p>
                    <p>
                      If analytics or diagnostics are enabled, we may collect limited usage data such as feature interactions, crash reports, and performance metrics. We do not intentionally collect the content of your snippets for analytics unless clearly disclosed.
                    </p>
                  </section>

                  <section>
                    <h2>How We Use Your Data</h2>
                    <p>
                      The information collected by Snipora is used to provide and operate the app, organize and store your content, enable keyboard functionality, support import/export and backup features, and manage premium entitlements.
                    </p>
                    <p>
                      We also use this data to improve performance, fix bugs, enhance reliability, respond to support requests, enforce our rights, and comply with legal obligations. Any processing of data is done lawfully and transparently, based on applicable legal grounds such as user consent, contractual necessity, legitimate interests, or legal requirements.
                    </p>
                  </section>

                  <section>
                    <h2>Local-First Storage Approach</h2>
                    <p>
                      Snipora is built with a local-first approach, meaning most of your data remains on your device unless you choose to enable cloud features. This includes saved content, app lock settings, and many feature configurations.
                    </p>
                    <p>
                      However, local data may be affected by device loss, app uninstallation, system behavior, or manual deletion. Users are responsible for enabling backup options if they wish to preserve their data across devices or reinstalls.
                    </p>
                  </section>

                  <section>
                    <h2>Cloud Features</h2>
                    <p>
                      If you enable iCloud sync, your data may be stored and synchronized through Apple&apos;s infrastructure and is subject to Apple&apos;s privacy policies. Similarly, if you use Google Drive backup and restore, your data is stored in your Google account and governed by Google&apos;s policies.
                    </p>
                    <p>
                      Snipora does not control third-party cloud infrastructure and only processes the data necessary to provide these features.
                    </p>
                  </section>

                  <section>
                    <h2>Data Sharing and Third-Party Services</h2>
                    <p>
                      Snipora does not sell your personal data. We may share limited information with trusted service providers that help us operate the app, such as analytics tools, crash reporting systems, cloud infrastructure, or customer support services.
                    </p>
                    <p>
                      We may also share data with platform providers like Apple or Google when required for features such as purchases, authentication, or cloud storage. In certain cases, we may disclose information to comply with legal obligations, protect user safety, or respond to valid legal requests.
                    </p>
                    <p>
                      If Snipora undergoes a business transition such as a merger or acquisition, user information may be transferred as part of that process, subject to applicable laws.
                    </p>
                  </section>

                  <section>
                    <h2>Data Security Measures</h2>
                    <p>
                      We implement reasonable technical and organizational measures to protect your data from unauthorized access, misuse, or loss. This includes secure storage practices, system monitoring, and restricted access to authorized personnel.
                    </p>
                    <p>
                      However, no system is completely secure. Users are responsible for maintaining the security of their devices and enabling available protections such as passcodes and biometric locks.
                    </p>
                  </section>

                  <section>
                    <h2>Data Retention Policy</h2>
                    <p>
                      Snipora retains information only for as long as necessary to provide services, maintain functionality, comply with legal obligations, resolve disputes, and enforce agreements.
                    </p>
                    <p>
                      Data stored locally remains on your device until you delete it or remove the app. Cloud-backed data retention depends on your settings and the policies of third-party providers. We may retain anonymized or aggregated data for longer periods where permitted by law.
                    </p>
                  </section>

                  <section>
                    <h2>Your Rights and Choices</h2>
                    <p>
                      Users have control over their data and can manage it through app settings or support channels. You may delete your content, disable cloud features, uninstall the app, or request access to your personal data.
                    </p>
                    <p>
                      Depending on your location, you may have rights such as accessing your data, correcting inaccuracies, requesting deletion, objecting to certain processing, or withdrawing consent. These rights may be subject to legal limitations.
                    </p>
                  </section>

                  <section>
                    <h2>Children&apos;s Privacy</h2>
                    <p>
                      Snipora is not intended for children unless explicitly stated otherwise. We do not knowingly collect personal data from children in violation of applicable laws. If such data is identified, we will take appropriate steps to remove it.
                    </p>
                  </section>

                  <section>
                    <h2>International Data Transfers</h2>
                    <p>
                      If you access Snipora from outside your country, your data may be processed in other regions where our service providers operate. We apply appropriate safeguards to ensure your data is protected in accordance with applicable laws.
                    </p>
                  </section>

                  <section>
                    <h2>Policy Updates</h2>
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in features, legal requirements, or security practices. Updates will be communicated through the app or website, and continued use of the Services indicates acceptance of the revised policy.
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

export default SniporaPrivacyPolicy;
