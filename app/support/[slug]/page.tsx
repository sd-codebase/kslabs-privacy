import type { Metadata } from "next";
import { notFound } from "next/navigation";

const apps: Record<string, string> = {
  neet: "NEET Test Series",
  jeemains: "JEE Mains Test Series",
  jeeadv: "JEE Adv. Test Series",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(apps).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const appName = apps[slug];
  return {
    title: appName ? `Support - ${appName}` : "Support",
  };
}

export default async function SupportPage({ params }: Props) {
  const { slug } = await params;
  const appName = apps[slug];

  if (!appName) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white">Support</h1>
          <p className="mt-2 text-lg text-indigo-400">{appName}</p>
        </header>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-indigo-400">
              Contact Us
            </h2>
            <p className="mb-4">
              If you need help with <strong>{appName}</strong>, feel free to
              reach out to us via email.
            </p>
            <div className="rounded-lg bg-gray-800 p-4">
              <p className="mb-2 text-sm font-medium text-gray-400">Email:</p>
              <a
                href="mailto:krishna.dhas021815@gmail.com"
                className="inline-flex items-center gap-1 text-indigo-400 transition duration-150 hover:text-indigo-300"
              >
                krishna.dhas021815@gmail.com
              </a>
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
