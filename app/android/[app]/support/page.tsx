import type { ReactNode } from "react";
import type { Metadata } from "next";
import {
  AppParams,
  LegalShell,
  Mail,
  Section,
  androidStaticParams,
  resolveApp,
} from "../../shared";

export const generateStaticParams = androidStaticParams;

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const { info } = await resolveApp(params);
  return { title: `Support - ${info.name} (Android)` };
}

const faqs = (slug: string): [string, ReactNode][] => [
  [
    "I am not getting the login code.",
    "The code is sent to your WhatsApp. Check that WhatsApp is installed and active on the number you entered, and that your internet is on. Wait a minute, then tap Resend.",
  ],
  [
    "The code from WhatsApp does not fill in.",
    "Tap the code boxes and type or paste the 6-digit code. Update the app from Google Play to get the latest fixes.",
  ],
  [
    "Tests or results are not loading.",
    "The app needs an internet connection. Check your connection, then close and reopen the app.",
  ],
  [
    "I found a wrong question or answer.",
    "Open the test review, go to that question and tap Report. Choose a reason and add a short note if you like.",
  ],
  [
    "How do I control the ads I see?",
    "You can reset your advertising ID or opt out of personalised ads in your phone's Settings > Google > Ads.",
  ],
  [
    "How do I delete my account?",
    <>
      In the app, open Profile and tap Delete My Account, or follow{" "}
      <a href={`/android/${slug}/delete-account`} className="text-indigo-400 hover:text-indigo-300">
        these steps
      </a>
      .
    </>,
  ],
];

export default async function AndroidSupportPage({ params }: AppParams) {
  const { slug, info } = await resolveApp(params);
  return (
    <LegalShell title="Support" appName={info.name} slug={slug}>
      <Section heading="Contact us">
        <p>
          Questions, problems or feedback? Email <Mail />. We usually reply
          within 2 working days.
        </p>
        <p>
          To help us fix a problem quickly, please include your phone model,
          Android version, the app version and the steps that led to the issue.
        </p>
      </Section>

      <Section heading="Frequently asked questions">
        {faqs(slug).map(([q, a]) => (
          <div key={q}>
            <h3 className="font-semibold text-white">{q}</h3>
            <p>{a}</p>
          </div>
        ))}
      </Section>
    </LegalShell>
  );
}
