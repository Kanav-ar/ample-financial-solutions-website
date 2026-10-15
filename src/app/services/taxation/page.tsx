import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Direct & Indirect Taxation",
  description:
    "Enquiries about direct taxation, indirect taxation and related professional tax services.",
};

export default function TaxationPage() {
  return (
    <ServicePageTemplate
      eyebrow="04 / TAXATION"
      title="Direct & Indirect Taxation"
      intro="Find the appropriate professional support for your business's taxation requirements."
      overview="Businesses may need assistance with direct taxes, indirect taxes, tax compliance and related advisory matters. Enquiries can be considered according to the service required, location and the professional firm's scope of work."
      supportAreas={[
        "Enquiries about direct taxation and related compliance.",
        "Enquiries about indirect taxation, including GST-related requirements.",
        "Identification of relevant tax services based on the business's needs.",
        "Coordination with the appropriate CA firm or qualified professional, subject to the engagement arrangements.",
      ]}
      engagementSteps={[
        {
          title: "Select the requirement",
          description:
            "Identify the relevant taxation area and provide a brief description of the issue.",
        },
        {
          title: "Identify the appropriate firm",
          description:
            "The enquiry can be directed according to location, expertise and the relevant firm's scope.",
        },
        {
          title: "Confirm service arrangements",
          description:
            "The selected firm or professional confirms the scope, terms and documents required.",
        },
      ]}
      importantNote="Specific tax advice, filings, certifications and other professional services are subject to the relevant professional's eligibility and separate engagement. The responsible firm and applicable terms should be confirmed before work begins."
    />
  );
}