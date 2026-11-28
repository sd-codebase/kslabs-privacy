import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Android (Google Play) pages. JEE Main, NEET and JEE Advanced are published by
// TickRight.dev; MPSC GS is still published by KS Labs Edu.
// The iOS / App Store pages under /ks-labs and /support are separate and unchanged.
export const ANDROID_OWNER = "TickRight.dev";
export const ANDROID_SUPPORT_EMAIL = "shitaldound59@gmail.com";
const KSLABS_OWNER = "KS Labs Edu.";
const KSLABS_EMAIL = "krishna.dhas021815@gmail.com";
export const ANDROID_EFFECTIVE_DATE = "November 26, 2026";

export type AndroidApp = {
  name: string;
  exam: string;
  packageName: string;
  owner: string;
  email: string;
};

export const ANDROID_APPS: Record<string, AndroidApp> = {
  jeemain: {
    name: "JEEMain-style Mock Test App",
    exam: "JEE Main",
    packageName: "com.jsleet.jeemains",
    owner: ANDROID_OWNER,
    email: ANDROID_SUPPORT_EMAIL,
  },
  neet: {
    name: "NEET-style Mock Test App",
    exam: "NEET",
    packageName: "com.jsleet.neetapp",
    owner: ANDROID_OWNER,
    email: ANDROID_SUPPORT_EMAIL,
  },
  jeeadvanced: {
    name: "JEE Adv-style Mock Test Series",
    exam: "JEE Advanced",
    packageName: "com.jsleet.jeeadvanced",
    owner: ANDROID_OWNER,
    email: ANDROID_SUPPORT_EMAIL,
  },
  mpscgs: {
    name: "MPSC GS Mock Test App",
    exam: "MPSC GS",
    packageName: "com.jsleet.mpscgs",
    owner: KSLABS_OWNER,
    email: KSLABS_EMAIL,
  },
};

export type AppParams = { params: Promise<{ app: string }> };

export function androidStaticParams() {
  return Object.keys(ANDROID_APPS).map((app) => ({ app }));
}

export async function resolveApp(params: AppParams["params"]) {
  const { app } = await params;
  const info = ANDROID_APPS[app];
  if (!info) notFound();
  return { slug: app, info };
}

export function LegalShell({
  title,
  appName,
  slug,
  children,
}: {
  title: string;
  appName: string;
  slug: string;
  children: React.ReactNode;
}) {
  const owner = ANDROID_APPS[slug]?.owner ?? ANDROID_OWNER;
  const links = [
    ["Privacy policy", "privacy-policy"],
    ["Terms", "terms"],
    ["Support", "support"],
    ["Delete account", "delete-account"],
  ];
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-lg text-indigo-400">{appName} for Android</p>
          <p className="mt-3 text-sm text-gray-400">
            Published on Google Play by {owner} · Effective date:{" "}
            <span className="font-semibold">{ANDROID_EFFECTIVE_DATE}</span>
          </p>
        </header>

        <div className="space-y-10 text-gray-300">{children}</div>

        <footer className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <nav className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
            {links.map(([label, path]) => (
              <Link
                key={path}
                href={`/android/${slug}/${path}`}
                className="text-indigo-400 hover:text-indigo-300"
              >
                {label}
              </Link>
            ))}
          </nav>
          <p>
            &copy; 2026 {owner} — {appName}
          </p>
        </footer>
      </div>
    </main>
  );
}

export function Section({
  n,
  heading,
  children,
}: {
  n?: number;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-indigo-400">
        {n !== undefined && (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm">
            {n}
          </span>
        )}
        {heading}
      </h2>
      <div className={`space-y-4 ${n !== undefined ? "pl-11" : ""}`}>{children}</div>
    </section>
  );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Mail({ email = ANDROID_SUPPORT_EMAIL }: { email?: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-indigo-400 transition duration-150 hover:text-indigo-300"
    >
      {email}
    </a>
  );
}

export function Ext({ href, children }: { href: string; children: React.ReactNode }) {
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

export function Disclaimer({ exam }: { exam: string }) {
  return (
    <div className="rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-4 text-amber-200">
      This app is an independent practice app for {exam} aspirants. It is not
      affiliated with, endorsed by, or connected to any government body or exam
      authority. Always check official information in the official exam
      notification.
    </div>
  );
}
