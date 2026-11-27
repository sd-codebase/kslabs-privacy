import type { Metadata } from "next";
import {
  ANDROID_OWNER,
  AppParams,
  Bullets,
  Disclaimer,
  Ext,
  LegalShell,
  Mail,
  Section,
  androidStaticParams,
  resolveApp,
} from "../../shared";

export const generateStaticParams = androidStaticParams;

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const { info } = await resolveApp(params);
  return { title: `Privacy Policy - ${info.name} (Android)` };
}

export default async function AndroidPrivacyPolicyPage({ params }: AppParams) {
  const { slug, info } = await resolveApp(params);
  return (
    <LegalShell title="Privacy Policy" appName={info.name} slug={slug}>
      <p>
        This policy explains how {ANDROID_OWNER} (&quot;we&quot;, &quot;us&quot;)
        handles your information when you use the Android app{" "}
        <strong>{info.name}</strong> ({info.packageName}) from Google Play.
      </p>
      <Disclaimer exam={info.exam} />

      <Section n={1} heading="Information we collect">
        <p>Information you give us when you sign in and use the app:</p>
        <Bullets
          items={[
            "Your name, and the exam and exam year you are preparing for",
            "Your WhatsApp number, used to send you a one-time login code (OTP)",
            "Your email address, only if you have an older account that was created with email",
            "Your test activity: tests started and submitted, answers, scores, time taken and saved progress",
            "Question reports you choose to send (the reason and an optional comment)",
          ]}
        />
        <p>Information the app sends to our servers automatically:</p>
        <Bullets
          items={[
            "Usage information: screens you open and actions such as starting or submitting a test, with times",
            "Crash and error reports, and how long our servers take to respond",
            "Device and app details: device brand and model, Android version, app version, network type (Wi-Fi or mobile), language and time zone",
            "A random ID created by the app when it is installed, used to group these logs from the same device",
            "Your IP address, which our servers receive with each request",
          ]}
        />
        <p>
          Information collected automatically by the Google Mobile Ads SDK
          (AdMob), which shows ads in the app:
        </p>
        <Bullets
          items={[
            "Your device's advertising ID and app set ID",
            "Ad impressions, clicks and other interactions with the app",
            "Diagnostic information such as app performance and crash logs",
            "Your IP address, which Google may use to estimate your general (approximate) location",
          ]}
        />
        <p>
          We do not collect your precise location, contacts, photos, files or
          payment details.
        </p>
      </Section>

      <Section n={2} heading="How we use your information">
        <Bullets
          items={[
            "To create your account and log you in (the login code is sent through WhatsApp)",
            "To save your tests and show your results, analysis and history",
            "To review questions you report and fix mistakes",
            "To show ads, which keep the app free",
            "To keep the app working, measure performance, fix crashes and bugs, and prevent misuse",
            "To understand how the app is used so we can improve tests and features",
          ]}
        />
        <p>We do not sell your personal information.</p>
      </Section>

      <Section n={3} heading="Who we share it with">
        <Bullets
          items={[
            <>
              <strong>Google (AdMob)</strong> — the ads SDK collects the
              information listed above and shares it with Google for
              advertising, ad measurement (analytics) and fraud prevention. The
              app requests non-personalised ads.{" "}
              <Ext href="https://policies.google.com/privacy">
                Google Privacy Policy
              </Ext>
            </>,
            <>
              <strong>WhatsApp (Meta)</strong> — your WhatsApp number and the
              login code are sent through the WhatsApp Business Platform to
              deliver the code.{" "}
              <Ext href="https://www.whatsapp.com/legal/privacy-policy">
                WhatsApp Privacy Policy
              </Ext>
            </>,
            "Our server hosting provider (Hostinger), which runs our servers and database on our behalf",
          ]}
        />
        <p>
          We may also disclose information if the law requires it.
        </p>
      </Section>

      <Section n={4} heading="Your choices about ads">
        <p>
          You can reset your advertising ID or opt out of personalised ads in
          your phone&apos;s Settings &gt; Google &gt; Ads (or Settings &gt;
          Privacy &gt; Ads on some phones).
        </p>
      </Section>

      <Section n={5} heading="Security">
        <p>
          Data is sent over encrypted connections (HTTPS) and stored on secured
          servers with restricted access. No method of storage or transfer is
          completely secure, but we work to protect your information.
        </p>
      </Section>

      <Section n={6} heading="Keeping and deleting your data">
        <p>
          We keep your information while your account is active. You can ask us
          to delete your account and data at any time, from inside the app or by
          email. See{" "}
          <a
            href={`/android/${slug}/delete-account`}
            className="text-indigo-400 hover:text-indigo-300"
          >
            Delete your account
          </a>{" "}
          for the steps.
        </p>
      </Section>

      <Section n={7} heading="Children">
        <p>
          The app is meant for students preparing for {info.exam}. We do not
          knowingly collect information from children under 13. If you believe a
          child under 13 has given us information, contact us and we will delete
          it.
        </p>
      </Section>

      <Section n={8} heading="Changes to this policy">
        <p>
          If we change this policy, we will update this page and the effective
          date above.
        </p>
      </Section>

      <Section n={9} heading="Contact us">
        <p>
          Questions or requests about your privacy: <Mail />
        </p>
      </Section>
    </LegalShell>
  );
}
