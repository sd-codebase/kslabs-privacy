import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account - KS Labs",
};

export default function DeleteYourAccountPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white">
            Delete Your Account
          </h1>
        </header>

        <div className="space-y-10 text-gray-300">
          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                1
              </span>
              How to Delete Your Account
            </h2>
            <div className="space-y-4 pl-11">
              <p>You can delete your account directly from the app:</p>
              <ol className="space-y-2">
                {[
                  "Open the app and log in",
                  "Tap on the Profile icon (top right)",
                  "Scroll down and tap Delete My Account",
                  "Confirm your decision",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-xs font-medium text-indigo-300">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-4">
                <p className="text-amber-300">
                  Alternatively, you can email us at{" "}
                  <a
                    href="mailto:krishna.dhas021815@gmail.com"
                    className="font-medium underline transition duration-150 hover:text-amber-200"
                  >
                    krishna.dhas021815@gmail.com
                  </a>{" "}
                  with the subject line &quot;Delete My Account&quot; from your
                  registered email address.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
                2
              </span>
              What Data Will Be Deleted
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                When you delete your account, the following data will be
                permanently removed:
              </p>
              <ul className="space-y-2">
                {[
                  "Your profile information (name, email, phone number)",
                  "Test attempt history and scores",
                  "Progress and performance analytics",
                  "App preferences and settings",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-red-400">•</span>
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
              Data Retention
            </h2>
            <div className="pl-11">
              <ul className="space-y-2">
                {[
                  "Account deletion is processed within 7 days of your request",
                  "Once deleted, your data cannot be recovered",
                  "We do not retain any personal data after deletion",
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
                4
              </span>
              Need Help?
            </h2>
            <div className="pl-11">
              <p>
                If you have any questions about account deletion, contact us at:
              </p>
              <div className="mt-4 rounded-lg bg-gray-800 p-4">
                <p className="mb-2 text-sm font-medium text-gray-400">Email:</p>
                <a
                  href="mailto:krishna.dhas021815@gmail.com"
                  className="inline-flex items-center gap-1 text-indigo-400 transition duration-150 hover:text-indigo-300"
                >
                  krishna.dhas021815@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; KS Labs</p>
        </footer>
      </div>
    </main>
  );
}
