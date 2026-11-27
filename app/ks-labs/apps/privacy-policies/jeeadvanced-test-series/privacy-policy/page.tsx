import type { Metadata } from "next";
import ExamAppPrivacyPolicy from "../../ExamAppPrivacyPolicy";

export const metadata: Metadata = {
  title: "JEE Adv-style Mock Test App by KS Labs - Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return <ExamAppPrivacyPolicy appName="JEE Adv-style Mock Test App" exam="JEE Advanced" />;
}
