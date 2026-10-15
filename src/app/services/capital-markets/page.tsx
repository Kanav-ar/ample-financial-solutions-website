import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Capital Markets & Fundraising",
  description:
    "Information about capital-market fundraising, IPOs, listing and relevant professional support.",
};

export default function CapitalMarketsPage() {
  return (
    <ServicePageTemplate
      eyebrow="03 / CAPITAL MARKETS"
      title="Capital Markets & Fundraising"
      intro="Explore professional support for businesses considering capital-market fundraising or listing."
      overview="Businesses exploring an IPO, listing or other capital-market fundraising may need to assess their requirements, prepare relevant business and financial information, and understand the transaction process. Where appropriate, enquiries may be directed to a suitably registered merchant banker or another relevant professional."
      supportAreas={[
        "Initial discussion of capital-market fundraising and listing requirements.",
        "Identification of documentation and financial information relevant to the proposed transaction.",
        "Coordination with an appropriately registered merchant banker, where applicable and verified.",
        "Clarification of the relevant professional's role and the proposed scope of engagement.",
      ]}
      engagementSteps={[
        {
          title: "Outline your objectives",
          description:
            "Describe the business and the broad fundraising or listing requirement.",
        },
        {
          title: "Review the requirement",
          description:
            "The relevant professionals determine whether the proposed service fits their expertise and registration.",
        },
        {
          title: "Confirm the engagement",
          description:
            "The transaction scope, responsibilities and terms are confirmed with the appropriate provider.",
        },
      ]}
      importantNote="Capital-market activities requiring regulatory registration must be undertaken by a suitably registered provider. The applicable provider, registration status and permitted scope should be verified before engagement. Fundraising and listing outcomes are not guaranteed."
    />
  );
}