import type { Metadata } from "next";
import {
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

// Same content as the existing /ks-labs/delete-your-account page; only the publisher and email differ.
export default async function AndroidDeleteAccountPage({ params }: AppParams) {
  const { slug, info } = await resolveApp(params);
  return (
    <LegalShell title="Delete Your Account" appName={info.name} slug={slug}>
      <Section n={1} heading="How to Delete Your Account">
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
      </Section>

      <Section n={2} heading="What Data Will Be Deleted">
        <p>
          When you delete your account, the following data will be permanently
          removed:
        </p>
        <Bullets
          items={[
            "Your profile information (name, email, phone number)",
            "Test attempt history and scores",
            "Progress and performance analytics",
            "App preferences and settings",
          ]}
        />
      </Section>

      <Section n={3} heading="Data Retention">
        <Bullets
          items={[
            "Account deletion is processed within 7 days of your request",
            "Once deleted, your data cannot be recovered",
            "We do not retain any personal data after deletion",
          ]}
        />
      </Section>

      <Section n={4} heading="Need Help?">
        <p>
          If you have any questions about account deletion, contact us at:{" "}
          <Mail email={info.email} />
        </p>
      </Section>
    </LegalShell>
  );
}
