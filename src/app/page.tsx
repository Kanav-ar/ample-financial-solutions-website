import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  CheckCircle2,
  CheckLine,
  Landmark,
  Scale,
  TrendingUp,
} from "lucide-react";

const areas = [
  {
    title: "Banking",
    description:
      "Credit facilities and loans at best rates supported by bankers",
    icon: Landmark,
  },
  {
    title: "Listing on SME Exchange",
    description: "Min IPO Exp managed by leading merchant bankers",
    icon: Scale,
  },
  {
    title: "IBC Consultancy",
    description: "By leading experienced IPs & Ex-NCLT Members",
    icon: TrendingUp,
  },
  {
    title: "Taxation",
    description: "Direct & Indirect by leading CA firms",
    icon: Calculator,
  },
  {
    title: "Compliance",
    description: "Company Law matters including SEBI, IBC & Taxation",
    icon: CheckLine,
  },
];

const services = [
  {
    number: "01",
    href: "/services/bank-finance",
    title: "Credit & Banking Advisory",
    description:
      "Support with financial documentation, CMA data and bank-finance proposals may be coordinated through independent banking advisors. All credit decisions rest solely with the relevant bank.",
    icon: Landmark,
  },
  {
    number: "02",
    href: "/services/ibc-nclt",
    title: "IBC & NCLT Consultancy",
    description:
      "Enquiries concerning insolvency, restructuring and resolution may be directed to appropriately qualified legal and insolvency professionals, subject to applicable eligibility and separate engagement.",
    icon: Scale,
  },
  {
    number: "03",
    href: "/services/capital-markets",
    title: "Capital Markets & Fundraising",
    description:
      "Enquiries about IPOs, listing and capital-market fundraising may be referred to appropriately registered merchant bankers, where applicable. The relevant provider determines the scope of its engagement.",
    icon: TrendingUp,
  },
  {
    number: "04",
    href: "/services/taxation",
    title: "Direct & Indirect Taxation",
    description:
      "Taxation enquiries may be directed to the appropriate CA firm or qualified professional for direct and indirect tax matters, subject to the relevant location and engagement arrangements.",
    icon: Calculator,
  },
];

const benefits = [
  "A clear starting point for describing your requirement",
  "Enquiries organised according to the relevant service area",
  "Engagement details clarified with the relevant provider",
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#172b42] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e3c797]">
              Finance · Insolvency · Taxation
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Financial Decisions in Business - Connect with Right
              Professionals{" "}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              A single point of enquiry for businesses seeking support with
              bank-finance proposals, insolvency and restructuring,
              capital-market fundraising, and taxation. Enquiries may be
              directed to relevant independent professionals, where appropriate.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e3c797] px-5 py-3.5 text-sm font-semibold text-[#172b42] transition-colors hover:bg-[#f0d9ae]"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
              >
                Discuss Your Requirement
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#e3c797]">
              Our expertise
            </p>

            <div className="mt-5 divide-y divide-white/10">
              {areas.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="flex items-center gap-4 py-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#e3c797]">
                      <Icon size={21} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">{service.title}</p>
                      <h2 className="mt-1 text-sm font-medium leading-6 sm:text-base">
                        {service.description}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              Services are subject to the relevant professional's role,
              eligibility and engagement terms.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-32 mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47b40]">
            AREAS OF PROFESSIONAL SUPPORT{" "}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172b42] sm:text-4xl">
            Professional support for your business requirements.{" "}
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Explore the areas in which you may need guidance and identify the
            appropriate professional support for your requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#d6c19d] hover:shadow-lg hover:shadow-slate-900/5 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3eee4] text-[#8d6935]">
                    <Icon size={23} />
                  </span>

                  <span className="text-sm font-medium text-slate-400">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#172b42]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8d6935]"
                >
                  Discuss this service
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-32 border-y border-slate-200 bg-[#f0eee8]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47b40]">
              About the Platform
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#172b42] sm:text-4xl">
              Bringing relevant professional expertise closer to businesses.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Ample Financial Solutions is designed to help businesses identify
              the relevant service area and enquire about specialist support.
              Depending on the requirement, the appropriate professional or firm
              can clarify its scope of work, eligibility, terms and engagement
              arrangements.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold text-[#172b42]">
              A clear starting point
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Tell us what your business needs, and your enquiry can be directed
              to the appropriate professional, subject to their role and
              availability.
            </p>

            <div className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#98713c]"
                  />

                  <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <div className="rounded-2xl bg-[#172b42] px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e3c797]">
              Contact Us
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's discuss your business requirement.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              The enquiry form and verified contact details will be connected in
              the next development milestone.
            </p>

            <p className="mt-5 text-xs text-slate-400">
              Development preview — do not publish until the actual contact
              details and working enquiry flow have been added.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
