import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "IBC & NCLT Consultancy",
  description:
    "Enquiries about insolvency, restructuring and resolution support through relevant legal and insolvency professionals.",
};

export default function IbcNcltPage() {
  return (
    <ServicePageTemplate
      eyebrow="02 / INSOLVENCY & RESTRUCTURING"
      title="IBC & NCLT Consultancy"
      intro="A starting point for businesses exploring insolvency, restructuring and resolution-related support."
      overview="Insolvency and restructuring matters can involve financial analysis, legal assessment and engagement with professionals who are eligible to undertake the relevant work. The platform is intended to help visitors describe their requirements and identify an appropriate next step."
      supportAreas={[
        "Initial enquiries about insolvency and restructuring requirements.",
        "Coordination with suitable legal professionals and insolvency professionals, as applicable.",
        "Organisation of relevant business and financial information, where agreed.",
        "Information about the proposed professional engagement and its scope.",
      ]}
      engagementSteps={[
        {
          title: "Describe the situation",
          description:
            "Share a brief overview of the business requirement without submitting confidential documents through the public form.",
        },
        {
          title: "Identify relevant expertise",
          description:
            "The enquiry can be assessed for referral to an appropriately qualified professional.",
        },
        {
          title: "Agree on the scope",
          description:
            "The selected professional confirms eligibility, scope, terms and responsibilities before work begins.",
        },
      ]}
      importantNote="This page provides general information and is not legal advice. Legal representation and regulated insolvency services may only be undertaken by professionals eligible and authorised for the relevant work. No tribunal outcome or resolution is guaranteed."
    />
  );
}