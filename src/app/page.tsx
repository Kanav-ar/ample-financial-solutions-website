import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  ChartCandlestick,
  CheckCircle2,
  CheckLine,
  ClipboardPenLine,
  Landmark,
  Scale,
  TrendingUp,
  UserRoundPen,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business & Financial Advisory Services",

  description:
    "Explore business advisory support across credit and banking, " +
    "IBC and NCLT consultancy, capital markets and fundraising, " +
    "and direct and indirect taxation. Submit an enquiry to connect " +
    "with the relevant professional.",

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Business & Financial Advisory Services",
    description:
      "Explore banking and credit advisory, IBC and NCLT consultancy, " +
      "capital markets, fundraising, and taxation services from " +
      "Ample Financial Solutions.",
  },

  twitter: {
    card: "summary",
    title: "Business & Financial Advisory Services",
    description:
      "Explore business finance, insolvency consultancy, capital markets, " +
      "and taxation advisory through Ample Financial Solutions.",
  },
};

const areas = [
  {
    title: "Virtual CFO",
    description:
      "Assist promoters & CEO  both online and offline in overall financial management",
    icon: UserRoundPen,
  },
  {
    title: "Banking",
    description:
      "Credit facilities and loans at best rates supported by bankers",
    icon: Landmark,
  },
  {
    title: "Listing on SME Exchange",
    description: "Min IPO Exp managed by leading merchant bankers",
    icon: ChartCandlestick,
  },
  {
    title: "IBC Consultancy",
    description: "By leading experienced IPs & Ex-NCLT Members",
    icon: Scale,
  },
  {
    title: "Taxation",
    description: "Direct & Indirect by leading CA firms",
    icon: ClipboardPenLine,
  },
  {
    title: "Compliance",
    description:
      "Company Law matters including SEBI, IBC & Taxation including GST",
    icon: CheckLine,
  },
];

const services = [
  {
    number: "01",
    href: "/services/bank-finance",
    title: "Credit & Banking Services",
    description:
      "Preparation and guidance of CMA data and bank finance proposals. Credit decisions by relevent bank in consulation with the client.",
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
    title: "Fund Raising through IPO",
    description:
      "To understand the funds requirement in consulation with the promotors based on the financials of the company. And coordination with merchant bankers to determine the pricing of share & quantum of IPO.",
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

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:py-19 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-21">
          <div className="lg:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e3c797]">
              Finance · Insolvency · Taxation
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Financial Business Decisions - Connect with Right Professionals
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              A single point enquiry seeking support to raise funds from banks,
              market by IPO, restructuring, facing insolvency issues under IBC.
              Enquiries will be addressed by experts for solutions till
              completion.
            </p>

            <div className="mt-8 lg:mt-16 flex flex-wrap gap-4">
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
              Our expertise as CFO & RP
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
            Identification of Issues
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Explore the issues in which you may need guidance and depute the
            appropriate professional support to meet your requirements.
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
          <div className="relative overflow-hidden rounded-3xl bg-[#172b42] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#e3c797]/15 sm:h-96 sm:w-96"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-14 h-56 w-56 rounded-full border border-[#e3c797]/10 sm:h-80 sm:w-80"
            />

            <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#e3c797]/30 bg-white/5 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e3c797]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e3c797]">
                    Let’s Start a Conversation
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Let’s discuss your
                  <span className="text-[#e3c797]">
                    {" "}
                    business requirements.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Looking for guidance on banking and credit, IBC and NCLT
                  matters, capital markets, taxation, or regulatory compliance?
                  Share your requirements with us so we can understand your
                  needs and discuss the appropriate next steps.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Banking & Credit",
                    "IBC & NCLT",
                    "Capital Markets",
                    "Taxation & Compliance",
                  ].map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex flex-col items-start gap-4 md:items-start md:pl-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#e3c797] px-6 py-4 text-sm font-semibold text-[#172b42] transition-all duration-200 hover:bg-[#f0dcb5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3c797] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172b42]"
                >
                  Discuss Your Requirement
                  <ArrowUpRight size={18} />
                </Link>

                <p className="max-w-xs text-xs leading-6 text-slate-400">
                  Tell us a little about your organisation or enquiry through
                  our contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
