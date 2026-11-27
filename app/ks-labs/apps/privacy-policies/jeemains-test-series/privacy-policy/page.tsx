import type { Metadata } from "next";
import ExamAppPrivacyPolicy from "../../ExamAppPrivacyPolicy";

export const metadata: Metadata = {
  title: "JEEMain-style Mock Test App by KS Labs - Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return <ExamAppPrivacyPolicy appName="JEEMain-style Mock Test App" exam="JEE Main" />;
}
