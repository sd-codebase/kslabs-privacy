import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuizzyDock - Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white">
            Privacy Policy for{" "}
            <span className="text-indigo-400">QuizzyDock</span> App
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Effective Date:{" "}
            <span className="font-semibold">November 19, 2025</span>
          </p>
        </header>

        <div className="space-y-10 text-gray-300">
          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                1
              </span>
              Information We Collect
            </h2>
            <div className="space-y-4 pl-11">
              <div className="rounded-lg border-l-4 border-green-500 bg-green-500/10 p-4">
                <p className="text-green-300">
                  We do not collect or store any personal information (such as
                  name, email, phone, or location) from users.
                </p>
              </div>
              <p>
                The app may gather non-personal information including device
                specifications, usage analytics, crash diagnostics, and
                aggregated metrics through third-party services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                2
              </span>
              Third-Party Services
            </h2>
            <div className="pl-11">
              <p>
                MongoDB provides storage functionality for the QuizzyDock app.
                We encourage you to review MongoDB&apos;s privacy policy
                independently to understand how they handle your data.
              </p>
              <div className="mt-4 rounded-lg bg-gray-800 p-4">
                <p className="mb-2 text-sm font-medium text-gray-400">
                  Third-party providers:
                </p>
                <a
                  href="https://www.mongodb.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-400 transition duration-150 hover:text-indigo-300"
                >
                  MongoDB — Privacy Policy
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
                3
              </span>
              How We Use Your Information
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                Collected technical data serves operational purposes including:
              </p>
              <ul className="space-y-2">
                {[
                  "Ensuring app reliability and performance",
                  "Identifying and fixing bugs",
                  "Analyzing usage patterns to improve features",
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
                4
              </span>
              User Protections
            </h2>
            <div className="pl-11">
              <ul className="space-y-2">
                {[
                  "No signup required for using the app",
                  "No contact or location access permissions requested",
                  "Any future permission requests will require explicit user consent",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                5
              </span>
              Data Security
            </h2>
            <div className="pl-11">
              <p>
                KS Labs Edu maintains reasonable protective measures for data
                security. However, we cannot guarantee absolute protection
                against third-party breaches beyond our control.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                6
              </span>
              Contact Us
            </h2>
            <div className="pl-11">
              <p>
                If you have any privacy concerns or questions about this policy,
                please contact us at:{" "}
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
          <p>&copy; KS Labs Edu — QuizzyDock</p>
          <p className="mt-1">Effective Date: November 19, 2025</p>
        </footer>
      </div>
    </main>
  );
}
