import type { Metadata } from "next";
import {
  AppParams,
  Bullets,
  Disclaimer,
  LegalShell,
  Mail,
  Section,
  androidStaticParams,
  resolveApp,
} from "../../shared";

export const generateStaticParams = androidStaticParams;

export async function generateMetadata({ params }: AppParams): Promise<Metadata> {
  const { info } = await resolveApp(params);
  return { title: `Terms of Use - ${info.name} (Android)` };
}

export default async function AndroidTermsPage({ params }: AppParams) {
  const { slug, info } = await resolveApp(params);
  return (
    <LegalShell title="Terms of Use" appName={info.name} slug={slug}>
      <p>
        These terms apply to the Android app <strong>{info.name}</strong>,
        published on Google Play by {info.owner}. By using the app you agree
        to them.
      </p>
      <Disclaimer exam={info.exam} />

      <Section n={1} heading="What the app is">
        <p>
          The app gives you practice mock tests, results and analysis to help
          you prepare for {info.exam}. It is for practice only. Your score in the
          app does not predict or guarantee any result in the real exam.
        </p>
      </Section>

      <Section n={2} heading="Your account">
        <Bullets
          items={[
            "You log in with your WhatsApp number and a one-time code. Keep your phone and codes to yourself.",
            "Give your real name and a number that belongs to you.",
            "You are responsible for activity on your account.",
          ]}
        />
      </Section>

      <Section n={3} heading="Fair use">
        <p>Please do not:</p>
        <Bullets
          items={[
            "Copy, sell or republish the questions or other content from the app",
            "Try to break, overload or reverse-engineer the app or its servers",
            "Use automated tools to access the app",
            "Send abusive or false question reports",
          ]}
        />
        <p>We may suspend accounts that break these rules.</p>
      </Section>

      <Section n={4} heading="Content accuracy">
        <p>
          We work to keep questions, answers and solutions correct, but mistakes
          can happen. Use the Report option on a question to tell us about an
          error. Always check official information in the official exam
          notification.
        </p>
      </Section>

      <Section n={5} heading="Ads">
        <p>
          The app is free and shows ads served by Google AdMob. Ads are provided
          by third parties; we are not responsible for what advertisers offer.
        </p>
      </Section>

      <Section n={6} heading="Availability">
        <p>
          We may change, pause or stop features at any time. The app is provided
          &quot;as is&quot;, without warranties, to the extent the law allows. We
          are not liable for indirect losses from using the app.
        </p>
      </Section>

      <Section n={7} heading="Ending your use">
        <p>
          You can stop using the app and delete your account at any time (see{" "}
          <a
            href={`/android/${slug}/delete-account`}
            className="text-indigo-400 hover:text-indigo-300"
          >
            Delete your account
          </a>
          ).
        </p>
      </Section>

      <Section n={8} heading="Changes and law">
        <p>
          We may update these terms; the effective date above shows the latest
          version. These terms are governed by the laws of India.
        </p>
      </Section>

      <Section n={9} heading="Contact">
        <p>
          Questions about these terms: <Mail email={info.email} />
        </p>
      </Section>
    </LegalShell>
  );
}
