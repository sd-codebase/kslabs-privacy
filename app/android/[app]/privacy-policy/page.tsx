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
        <p>Information you give us when you sign in:</p>
        <Bullets
          items={[
            "Your WhatsApp number, used to send you a one-time login code (OTP) and to identify your account",
            "Your name, shown on your profile",
          ]}
        />
        <p>
          Information collected automatically by the Google Mobile Ads SDK
          (AdMob), which shows ads in the app:
        </p>
        <Bullets
          items={[
            "Your device's advertising ID",
            "Ad views, taps and other interactions with ads",
            "Diagnostic information about app and ad performance",
          ]}
        />
        <p>
          We do not collect your email address, location, contacts, photos,
          files or payment details, and we do not use Firebase Analytics or
          Firebase Crashlytics.
        </p>
      </Section>

      <Section n={2} heading="How we use your information">
        <Bullets
          items={[
            "To create your account and log you in (the login code is sent through WhatsApp)",
            "To show ads through Google AdMob, which keep the app free, and to measure ad performance and prevent ad fraud",
          ]}
        />
        <p>We do not sell your personal information.</p>
      </Section>

      <Section n={3} heading="Who we share it with">
        <Bullets
          items={[
            <>
              <strong>Google (AdMob)</strong> — the ads SDK collects the
              advertising ID, ad interactions and diagnostics listed above and
              shares them with Google for advertising, ad measurement and fraud
              prevention. The app requests non-personalised ads.{" "}
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
            "Our server hosting provider (Hostinger), which stores your account on our behalf",
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
