
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Calculator,
  CheckLine,
  Landmark,
  Scale,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore banking, SME exchange listing, IBC consultancy, taxation and compliance support areas offered through Ample Financial Solutions.",
};

const areas = [
  {
    number: "01",
    href: "/services/bank-finance",
    title: "Banking",
    description:
      "Explore suitable credit facilities and loan options with relevant banking and corporate finance professionals. Financing terms and approvals remain subject to lender assessment.",
    icon: Landmark,
    action: "Explore this service",
  },
  {
    number: "02",
    href: "/services/capital-markets",
    title: "Listing on SME Exchange",
    description:
      "Explore SME exchange listing and IPO-related requirements, including cost considerations and coordination with relevant merchant bankers.",
    icon: TrendingUp,
    action: "Explore this service",
  },
  {
    number: "03",
    href: "/services/ibc-nclt",
    title: "IBC Consultancy",
    description:
      "Enquiries involving insolvency, restructuring and resolution-related matters, with relevant Insolvency Professionals and experienced specialists where appropriate.",
    icon: Scale,
    action: "Explore this service",
  },
  {
    number: "04",
    href: "/services/taxation",
    title: "Taxation",
    description:
      "Explore direct and indirect taxation requirements with relevant CA firms and qualified tax professionals, depending on the nature of the enquiry.",
    icon: Calculator,
    action: "Explore this service",
  },
  {
    number: "05",
    href: "/contact",
    title: "Compliance",
    description:
      "Enquire about company law and regulatory compliance requirements, including matters relating to SEBI, IBC and taxation.",
    icon: CheckLine,
    action: "Discuss your requirement",
  },
];

export default function ServicesPage() {
  return (
    <main>
    
      <section className="bg-[#172b42] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e3c797]">
            Areas of Professional Support
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Explore the right service area for your business.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            From banking and corporate finance to capital markets,
            insolvency, taxation and compliance, explore the areas
            relevant to your business requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47b40]">
            What We Cover
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172b42] sm:text-4xl">
            Our service areas
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Tell us what your business needs. Depending on the
            requirement, we can help identify an appropriate service
            area and the relevant professional support.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.number}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6c19d] hover:shadow-lg hover:shadow-slate-900/5 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3eee4] text-[#8d6935] transition-colors group-hover:bg-[#172b42] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </span>

                  <span className="text-sm font-medium text-slate-400">
                    {area.number}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#172b42]">
                  {area.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>

                <Link
                  href={area.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#8d6935] transition-colors hover:text-[#172b42]"
                >
                  {area.action}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </article>
            );
          })}
        </div>

    
        <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f7f6f2] p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-[#172b42]">
            How enquiries are handled
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Each enquiry is considered according to its nature and
            requirements. The relevant service provider, qualifications,
            scope of work, fees and engagement terms should be confirmed
            before any professional service begins. Outcomes, financing
            approvals and listing decisions are not guaranteed.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#172b42] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#263f59]"
          >
            Make an Enquiry
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
