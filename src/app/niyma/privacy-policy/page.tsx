'use client';

import React from 'react';
import Layout from '@/src/components/layout/Layout';
import styles from '../niyma.module.css';

const NiymaPrivacyPolicy = () => {
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
                      At <strong>Niyma</strong>, we are committed to protecting your privacy and being clear about how we collect, use, and safeguard your information. This Privacy Policy explains how Niyma (&quot;Niyma&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles data when you use the Niyma mobile application and related services offered by <strong>LasyaAitech</strong>, including wellness features, habits, plans, journaling, optional health integrations, and account sync (collectively, the &quot;Services&quot;).
                    </p>
                    <p>
                      By using Niyma, you agree to the practices described in this policy. If you do not agree, you should discontinue use of the Services.
                    </p>
                  </section>

                  <section>
                    <h2>Information We Collect</h2>
                    <p>
                      Niyma collects information based on how you use the app and what you choose to enable. This may include details you provide when you create or manage an account, such as your name, email address, sign-in identifiers, and preferences from onboarding or settings.
                    </p>
                    <p>
                      When you use Niyma to track wellness and daily life, we process information you choose to save in the app—such as habits, mood, goals, planner inputs, journal entries, and voice journal content when you use those features. If you contact us for support, we may collect your email address and the contents of your message so we can help you.
                    </p>
                    <p>
                      If you allow it through your device, Niyma may access health or activity data from <strong>Apple Health</strong> on iOS or <strong>Health Connect</strong> on Android—only the categories you authorize, such as steps, energy, heart rate, sleep, or workouts—to personalize insights, plans, and progress. You can change or revoke these permissions anytime in your device settings; some features may work less fully if you revoke access.
                    </p>
                    <p>
                      We also receive certain technical information automatically, such as device type, operating system and app version, language, time zone, diagnostics, and approximate usage patterns that help us keep the app reliable and secure. When the app talks to our servers, standard network information such as IP address may be processed like any internet service.
                    </p>
                    <p>
                      If you subscribe or restore purchases on iOS, Apple processes payments; we may receive entitlement or subscription status from Apple, not your full card details.
                    </p>
                  </section>

                  <section>
                    <h2>How We Use Your Data</h2>
                    <p>
                      We use this information to run Niyma—your dashboard, habits, plans, progress, reminders, rewards, sync across devices when you are signed in, and optional AI-assisted insights or suggestions where those features exist.
                    </p>
                    <p>
                      We also use data to secure your account, fix issues, improve performance, respond to support requests, send important notices about the Services, and meet legal requirements. We do not sell your personal information for others to market to you, and we do not use your authorized health data to run ads.
                    </p>
                  </section>

                  <section>
                    <h2>Your Account and Sync</h2>
                    <p>
                      When you use Niyma while signed in, your content and settings may sync through our systems so you can use the app across devices. Data you enter belongs to your use of the Service; you can manage much of it in the app and through your account choices as we provide them.
                    </p>
                    <p>
                      If you remove the app or delete content locally, behavior may depend on your device and sync. Follow in-app guidance for backups or deletion if you want to keep or erase your information.
                    </p>
                  </section>

                  <section>
                    <h2>Data Sharing and Third-Party Services</h2>
                    <p>
                      Niyma does not sell your personal data. We may share limited information where needed to operate the app—for example with Apple or Google for sign-in, purchases, or platform services you use, and with tools that help us host the service, send email, or understand crashes and stability—under terms that protect your information.
                    </p>
                    <p>
                      We may also disclose information when required by law, to protect safety, or to respond to valid requests from authorities.
                    </p>
                  </section>

                  <section>
                    <h2>Data Security Measures</h2>
                    <p>
                      We apply reasonable technical and organizational measures designed to protect your information against unauthorized access, misuse, or loss. No system is perfect; we encourage you to use a strong password and keep your device secure.
                    </p>
                  </section>

                  <section>
                    <h2>Data Retention Policy</h2>
                    <p>
                      We keep information only as long as needed to provide the Services, keep your account working, meet legal duties, resolve disputes, and enforce our terms. Retention can depend on what you store in the app and what the product needs to function.
                    </p>
                  </section>

                  <section>
                    <h2>Your Rights and Choices</h2>
                    <p>
                      You can manage many choices inside Niyma and your device settings, including health permissions. Depending on where you live, you may have rights to access, correct, delete, or export personal data, or to object to certain processing. You can contact us at{' '}
                      <a href="mailto:privacy@lasyaaitech.com">privacy@lasyaaitech.com</a> for privacy requests; we may need to verify your identity before acting.
                    </p>
                  </section>

                  <section>
                    <h2>Children&apos;s Privacy</h2>
                    <p>
                      Niyma is not directed at children under the minimum age required in your region (for example, 13 in the United States). We do not knowingly collect personal information from children in violation of applicable law. If you believe we have, please contact us and we will take steps to delete it.
                    </p>
                  </section>

                  <section>
                    <h2>International Data Transfers</h2>
                    <p>
                      If you use Niyma from outside the country where our systems operate, your information may be processed in other regions. Where the law requires, we use safeguards intended to protect your data when it crosses borders.
                    </p>
                  </section>

                  <section>
                    <h2>AI and Wellness Insights</h2>
                    <p>
                      Some features may use automated or AI-assisted processing to generate suggestions, summaries, or insights from what you log or authorize. These outputs are for your general wellness journey and are not medical advice, diagnosis, or treatment. Always follow guidance from qualified professionals for health decisions.
                    </p>
                  </section>

                  <section>
                    <h2>Policy Updates</h2>
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes to Niyma, the law, or our practices. We will post the updated policy in the app or on our website and adjust the date shown with the policy. Continued use of the Services after changes means you accept the updated policy, except where the law requires something different.
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

export default NiymaPrivacyPolicy;
