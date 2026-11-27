import React from "react";

// Privacy policy for the exam apps as published on the App Store (KS Labs account).
// Shared by the JEE Main, NEET and JEE Advanced pages; keep it in line with the
// App Store "App Privacy" answers and the Android pages under /android.
const EFFECTIVE_DATE = "November 27, 2026";
const CONTACT_EMAIL = "krishna.dhas021815@gmail.com";

function Section({ n, heading, children }: { n: number; heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
          {n}
        </span>
        {heading}
      </h2>
      <div className="space-y-4 pl-11">{children}</div>
    </section>
  );
}

function List({ items, color = "indigo" }: { items: React.ReactNode[]; color?: "indigo" | "amber" | "blue" }) {
  const dot = { indigo: "bg-indigo-400", amber: "bg-amber-400", blue: "bg-blue-400" }[color];
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${dot}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-400 transition duration-150 hover:text-indigo-300"
    >
      {children}
    </a>
  );
}

export default function ExamAppPrivacyPolicy({ appName, exam }: { appName: string; exam: string }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white">
            Privacy Policy for <span className="text-indigo-400">{appName}</span>
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Effective Date: <span className="font-semibold">{EFFECTIVE_DATE}</span>
          </p>
        </header>

        <div className="space-y-10 text-gray-300">
          <p>
            This policy explains how KS Labs (&quot;we&quot;, &quot;us&quot;) handles your
            information when you use the {appName} app on iPhone and iPad. The app is an
            independent practice app for {exam} aspirants and is not affiliated with any
            government body or exam authority.
          </p>

          <Section n={1} heading="Information We Collect">
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-4">
              <p className="mb-2 text-amber-300">Information you give us when you sign in:</p>
              <List
                color="amber"
                items={[
                  "Your WhatsApp number, used to send you a one-time login code (OTP) and to identify your account",
                  "Your name, shown on your profile",
                ]}
              />
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-500/10 p-4">
              <p className="mb-2 text-blue-300">
                Information collected by the Google Mobile Ads SDK (AdMob), which shows ads in the app:
              </p>
              <List
                color="blue"
                items={[
                  "Your device's advertising identifier (IDFA), only if you allow tracking when the app asks",
                  "Ads you have seen and your interactions with ads",
                  "Diagnostic information about app and ad performance",
                ]}
              />
            </div>
            <p>
              We do not collect your email address, location, contacts, photos, files or payment
              details, and we do not use Firebase Analytics or Firebase Crashlytics.
            </p>
          </Section>

          <Section n={2} heading="How We Use Your Information">
            <List
              items={[
                "To create and manage your account and log you in (the login code is sent through WhatsApp)",
                "To show ads through Google AdMob, which keep the app free, and to measure ad performance and prevent ad fraud",
              ]}
            />
            <p>We do not sell your personal information.</p>
          </Section>

          <Section n={3} heading="Third-Party Services">
            <List
              items={[
                <>
                  <strong className="text-white">Google (AdMob)</strong> — the ads SDK collects the
                  advertising identifier, ad interactions and diagnostics listed above and shares them
                  with Google for advertising, ad measurement and fraud prevention. The app requests
                  non-personalised ads.{" "}
                  <Ext href="https://policies.google.com/privacy">Google Privacy Policy</Ext>
                </>,
                <>
                  <strong className="text-white">WhatsApp (Meta)</strong> — your WhatsApp number and
                  the login code are sent through the WhatsApp Business Platform to deliver the code.{" "}
                  <Ext href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</Ext>
                </>,
                <>
                  <strong className="text-white">Hosting provider (Hostinger)</strong> — stores your
                  account on our behalf.
                </>,
              ]}
            />
            <p>We may also disclose information if the law requires it.</p>
          </Section>

          <Section n={4} heading="Tracking and Ads Choices">
            <p>
              The app asks for permission before it can use your device&apos;s advertising identifier.
              You can change this at any time in Settings &gt; Privacy &amp; Security &gt; Tracking.
              If you do not allow tracking, ads are still shown but without the advertising
              identifier.
            </p>
          </Section>

          <Section n={5} heading="Data Retention">
            <p>
              We retain your personal information for as long as your account remains active or as
              needed to provide you services. If you wish to delete your account and associated
              data, you can do so in the app (Profile &gt; Delete My Account) or contact us using the
              details below.
            </p>
          </Section>

          <Section n={6} heading="Data Security">
            <p>
              Data is sent over encrypted connections (HTTPS) and stored on secured servers with
              restricted access. However, we cannot guarantee absolute protection against breaches
              beyond our control.
            </p>
          </Section>

          <Section n={7} heading="Children">
            <p>
              The app is meant for students preparing for {exam}. We do not knowingly collect
              information from children under 13. If you believe a child under 13 has given us
              information, contact us and we will delete it.
            </p>
          </Section>

          <Section n={8} heading="Contact Us">
            <p>
              If you have any privacy concerns, questions about this policy, or wish to request
              deletion of your data, please contact us at:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-indigo-400 transition duration-150 hover:text-indigo-300"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>
        </div>

        <footer className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; KS Labs — {appName}</p>
          <p className="mt-1">Effective Date: {EFFECTIVE_DATE}</p>
        </footer>
      </div>
    </main>
  );
}
