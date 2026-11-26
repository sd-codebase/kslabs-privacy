import type { Metadata } from "next";
import {
  ANDROID_OWNER,
  AppParams,
  Bullets,
  LegalShell,
  Mail,
  Section,
  androidStaticParams,
  resolveApp,
} from "../../shared";

export const generateStaticParams = androidStaticParams;

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const { info } = await resolveApp(params);
  return { title: `Delete Your Account - ${info.name} (Android)` };
}

export default async function AndroidDeleteAccountPage({ params }: AppParams) {
  const { slug, info } = await resolveApp(params);
  return (
    <LegalShell title="Delete Your Account" appName={info.name} slug={slug}>
      <p>
        This page explains how to delete your <strong>{info.name}</strong>{" "}
        account and data. The app is published on Google Play by{" "}
        {ANDROID_OWNER}.
      </p>

      <Section n={1} heading="Delete from the app">
        <ol className="space-y-2">
          {[
            "Open the app and log in",
            "Open your Profile",
            "Tap Delete My Account",
            "Confirm twice",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-xs font-medium text-indigo-300">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p>
          Your account is closed and you are logged out straight away. It can no
          longer be used to log in.
        </p>
      </Section>

      <Section n={2} heading="Erase your data (by email)">
        <p>
          To have your data permanently erased, or if you can no longer use the
          app, email <Mail /> with the subject <strong>Delete my account</strong>{" "}
          and the WhatsApp number you log in with. We may ask you to confirm the
          request from that number.
        </p>
        <p>We will erase the following within 30 days of your request:</p>
        <Bullets
          items={[
            "Your profile: name, WhatsApp number and email (if any)",
            "Your test history, answers, scores and saved progress",
          ]}
        />
        <p>
          Question reports you sent are kept without your name or number, so the
          question fixes stay. Erased data cannot be recovered. Each exam app has
          its own account, so this does not affect accounts in our other apps.
        </p>
        <p>
          Ad data is handled by Google; you can reset your advertising ID in
          your phone&apos;s Settings &gt; Google &gt; Ads.
        </p>
      </Section>

      <Section n={3} heading="Need help?">
        <p>
          Questions about deleting your account: <Mail />
        </p>
      </Section>
    </LegalShell>
  );
}
