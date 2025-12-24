import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sudoku - Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white">
            Privacy Policy for{" "}
            <span className="text-indigo-400">Sudoku</span> App
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Effective Date:{" "}
            <span className="font-semibold">September 24, 2025</span>
          </p>
        </header>

        <div className="space-y-10 text-gray-300">
          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                1
              </span>
              Summary
            </h2>
            <div className="pl-11">
              <div className="rounded-lg border-l-4 border-green-500 bg-green-500/10 p-4">
                <p className="text-green-300">
                  <strong>Short version:</strong> We{" "}
                  <strong>do not collect or store any personal information</strong>{" "}
                  (such as name, email, phone, or location) from users. The App
                  may use third-party services which may collect limited
                  technical or diagnostic data — see details below.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                2
              </span>
              Information We Do NOT Collect
            </h2>
            <div className="pl-11">
              <ul className="space-y-2">
                {[
                  "We do not request, collect, or store user personal information such as full name, email address, phone number, postal address, government ID, or payment information.",
                  "We do not require users to sign-up or authenticate to use the main gameplay features.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                3
              </span>
              Information That May Be Collected
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                To operate reliably and monitor app health, the App or its
                third-party services may collect the following non-personally
                identifiable information:
              </p>
              <ul className="space-y-2">
                {[
                  "Device information (device model, OS version, app version).",
                  "Usage and analytics data (feature usage events, screen flows, anonymous play statistics).",
                  "Crash reports and diagnostics (stack traces, error logs) to troubleshoot app crashes.",
                  "Aggregated and anonymized metrics (e.g., daily active users, average session length).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gray-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                4
              </span>
              Third-Party Services
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                The App uses third-party services for backend or operational
                support. These services may independently collect and process
                certain technical data. We do not sell or trade data to third
                parties.
              </p>
              <div className="rounded-lg bg-gray-800 p-4">
                <p className="mb-2 text-sm font-medium text-gray-400">
                  Third-party providers:
                </p>
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-400 transition duration-150 hover:text-indigo-300"
                >
                  Supabase — Privacy Policy
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                5
              </span>
              How We Use Information
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                Any technical or diagnostic data collected is used only to:
              </p>
              <ul className="space-y-2">
                {[
                  "Ensure the App runs correctly and securely.",
                  "Identify and fix crashes, bugs, and performance issues.",
                  "Understand aggregate usage patterns to improve gameplay and features.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                6
              </span>
              Location & Contacts
            </h2>
            <div className="pl-11">
              <p>
                The App does not access your contacts, address book, or precise
                location. If a future update requests such permissions, we will
                clearly disclose the purpose and obtain explicit consent before
                accessing them.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                7
              </span>
              Advertising & Monetization
            </h2>
            <div className="pl-11">
              <p>
                If the App displays ads in the future, ad partners may collect
                technical identifiers or device data to serve relevant ads. We
                currently do not provide any personal data to advertisers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                8
              </span>
              Children&apos;s Privacy
            </h2>
            <div className="pl-11">
              <p>
                The App is intended for a general audience. We do not knowingly
                collect personal information from children under the age of 13
                (or under 16 where required by local law). If you believe a
                child has provided personal information, contact us and we will
                take steps to remove the information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                9
              </span>
              Data Retention
            </h2>
            <div className="pl-11">
              <p>
                Because we do not collect personal data, there is no personally
                identifiable user data stored by KS Labs Edu. Any technical logs
                or analytics retained by third-party providers are subject to
                those providers&apos; retention policies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                10
              </span>
              Data Security
            </h2>
            <div className="pl-11">
              <p>
                We take reasonable measures to protect data processed on our
                behalf by third-party providers. However, no system can be 100%
                secure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                11
              </span>
              Your Rights
            </h2>
            <div className="pl-11">
              <p>
                Since we do not store personal information, typical rights like
                access, correction, or deletion of personal data are not
                applicable. If you believe some personal data about you is
                retained by a third-party provider used by the App, contact us
                and we will assist in contacting the provider where possible.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                12
              </span>
              International Transfers
            </h2>
            <div className="pl-11">
              <p>
                The App is maintained by KS Labs Edu (India). Third-party
                providers may process data in other jurisdictions. Users outside
                India should be aware that technical data may be transferred and
                stored in countries with different privacy laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                13
              </span>
              Changes to This Policy
            </h2>
            <div className="pl-11">
              <p>
                We may update this policy periodically. The updated policy will
                contain a new effective date. Continued use of the App after
                changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                14
              </span>
              Contact Us
            </h2>
            <div className="pl-11">
              <p>
                If you have questions, concerns, or requests related to this
                Privacy Policy, please contact us at:{" "}
                <a
                  href="mailto:krishna.dhas021815@gmail.com"
                  className="text-indigo-400 transition duration-150 hover:text-indigo-300"
                >
                  krishna.dhas021815@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; KS Labs Edu — Sudoku</p>
          <p className="mt-1">Effective Date: September 24, 2025</p>
        </footer>
      </div>
    </main>
  );
}
