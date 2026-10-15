import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Calculator,
  Landmark,
  Scale,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore bank-finance, insolvency, capital-market and taxation enquiry areas.",
};

const services = [
  {
    number: "01",
    href: "/services/bank-finance",
    title: "Credit & Banking Advisory",
    description:
      "Financial documentation, CMA data and support for bank-finance proposals.",
    icon: Landmark,
  },
  {
    number: "02",
    href: "/services/ibc-nclt",
    title: "IBC & NCLT Consultancy",
    description:
      "Enquiries concerning insolvency, restructuring and resolution-related support.",
    icon: Scale,
  },
  {
    number: "03",
    href: "/services/capital-markets",
    title: "Capital Markets & Fundraising",
    description:
      "Explore support for IPOs, listing and capital-market fundraising requirements.",
    icon: TrendingUp,
  },
  {
    number: "04",
    href: "/services/taxation",
    title: "Direct & Indirect Taxation",
    description:
      "Enquiries about direct taxes, indirect taxes and related professional services.",
    icon: Calculator,
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
            Learn about the four areas of support and identify the type
            of professional assistance relevant to your requirement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#d6c19d] hover:shadow-lg hover:shadow-slate-900/5 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3eee4] text-[#8d6935]">
                    <Icon size={23} />
                  </span>

                  <span className="text-sm font-medium text-slate-400">
                    {service.number}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#172b42]">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8d6935]"
                >
                  Explore this service
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}