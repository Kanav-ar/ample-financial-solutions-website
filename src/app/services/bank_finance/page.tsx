import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Credit & Banking Advisory",
  description:
    "Information about bank-finance proposals, financial documentation and credit advisory support.",
};

export default function BankFinancePage() {
  return (
    <ServicePageTemplate
      eyebrow="01 / BANK FINANCE"
      title="Credit & Banking Advisory"
      intro="Support for businesses preparing to approach banks for financing."
      overview="Businesses seeking bank finance may need to organise financial information, prepare supporting documentation and understand the requirements of a financing proposal. Depending on the requirement, enquiries may be coordinated with an appropriately engaged independent banking advisor."
      supportAreas={[
        "Organisation of business and financial information for proposed bank financing.",
        "Preparation of CMA data and financial projections, where included in the agreed scope.",
        "Documentation checklists and assistance with proposal materials.",
        "Coordination with an independent banking advisor, where appropriate and available.",
      ]}
      engagementSteps={[
        {
          title: "Share your requirement",
          description:
            "Describe your business, financing objective and the type of support you need.",
        },
        {
          title: "Understand the scope",
          description:
            "The relevant professional reviews the requirement and clarifies the proposed services and documents.",
        },
        {
          title: "Confirm the engagement",
          description:
            "The scope, terms and responsibilities are confirmed with the selected service provider.",
        },
      ]}
      importantNote="The relevant bank independently evaluates every financing proposal and makes the final credit decision. Loan approval, funding amount and processing timelines are not guaranteed."
    />
  );
}