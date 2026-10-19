
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Ample Financial Solutions handles information submitted through its website and contact form.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-16 sm:py-20 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-[#172b42] sm:text-4xl">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        This page explains how information submitted through the Ample
        Financial Solutions website is handled. Our privacy practices and
        contact details will be described here.
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        Please contact us if you have questions about information submitted
        through our website.
      </p>
    </main>
  );
}
