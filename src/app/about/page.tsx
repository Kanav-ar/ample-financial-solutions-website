import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  MapPin,
  ShieldCheck,
  UserRound,
  Landmark,
  Scale,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about Ample Financial Solutions, its founder, and its network " +
    "of professionals supporting business finance, insolvency and " +
    "restructuring, capital markets, and taxation requirements.",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ample Financial Solutions",
    title: "About Us | Ample Financial Solutions",
    description:
      "Meet the founder and learn about the professional network " +
      "supporting Ample Financial Solutions across business finance, " +
      "IBC and NCLT matters, capital markets, and taxation.",
  },

  twitter: {
    card: "summary",
    title: "About Us | Ample Financial Solutions",
    description:
      "Learn about our founder, approach, and network of professionals " +
      "supporting business and financial advisory enquiries.",
  },
};

const principles = [
  {
    icon: Handshake,
    title: "Relevant professional support",
    description:
      "Help visitors identify the appropriate service area for their business requirement.",
  },
  {
    icon: ShieldCheck,
    title: "Clear engagement arrangements",
    description:
      "Clarify who is responsible for a service and the applicable engagement terms.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business-focused approach",
    description:
      "Organise enquiries around practical financial, restructuring, capital-market and taxation needs.",
  },
];

const professionalNetwork = [
  {
    icon: Landmark,
    title: "Banking & Finance Professionals",
    description:
      "Retired bankers and experienced professionals who can support relevant banking and corporate finance requirements.",
  },
  {
    icon: Scale,
    title: "IBC & NCLT Expertise",
    description:
      "Former NCLT members and relevant professionals who may support matters involving insolvency and restructuring, subject to the nature of the engagement.",
  },
  {
    icon: TrendingUp,
    title: "Merchant Bankers",
    description:
      "Merchant bankers and relevant professionals who may assist with capital-market and fundraising-related requirements.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#172b42] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e3c797]">
            About Ample Financial Solutions
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A starting point for your business&apos;s professional support
            needs.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We aim to help businesses identify the relevant service area and
            enquire about appropriate professional support for their financial,
            restructuring, capital-market and taxation requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47b40]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172b42] sm:text-4xl">
              Understand the requirement. Identify the next step.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Businesses can encounter requirements involving bank finance,
              insolvency and restructuring, capital markets, and taxation.
              Understanding the relevant service area is a useful first step in
              finding appropriate professional assistance.
            </p>

            <p>
              Ample Financial Solutions is intended to serve as an enquiry and
              facilitation platform. Depending on the nature of the requirement,
              an enquiry may be directed to the relevant professional or firm
              for assessment and a separate engagement, where appropriate.
            </p>

            <p>
              The identity of the service provider, applicable qualifications,
              scope of work and engagement terms should be confirmed before
              professional services begin.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3eee4] text-[#8d6935]">
                  <Icon size={23} />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-[#172b42]">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f6f2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47b40]">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172b42] sm:text-4xl">
              Meet the Founder
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Leadership grounded in professional qualifications and experience
              across corporate finance and related fields.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="mx-auto w-full max-w-md">
              <div className="mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/images/founderNMs-2.jpeg"
                    alt="Founder of Ample Financial Solutions"
                    fill
                    unoptimized
                    preload
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a47b40]">
                Founder
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#172b42] sm:text-4xl">
                CA Naresh Kumar Munjal
              </h3>

              <p className="mt-3 text-lg font-medium text-slate-600">
                Chartered Accountant | Company Secretary | Insolvency
                Professional
              </p>

              <div className="mt-6 h-px w-20 bg-[#c8a66b]" />

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  CA Naresh Kumar Munjal is the founder of Ample Financial
                  Solutions. He brings 45 years of experience in corporate
                  finance, including work relating to IPOs and taxation.
                </p>

                <p>
                  His professional qualifications include Chartered Accountancy
                  and Company Secretary, and he is an Insolvency Professional
                  registered with the Insolvency and Bankruptcy Board of India
                  (IBBI).
                </p>

                <p>
                  Through Ample Financial Solutions, the aim is to help
                  businesses identify relevant professional support for their
                  financial, capital-market, insolvency and taxation-related
                  requirements.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#172b42] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#263f59]"
              >
                Connect With Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47b40]">
            Our Team
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172b42] sm:text-4xl">
            A network of experienced professionals
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Ample Financial Solutions is supported by a network of highly
            qualified and experienced professionals. Depending on the nature of
            a requirement, relevant expertise may be identified to help
            businesses explore their next steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {professionalNetwork.map((professional) => {
            const Icon = professional.icon;

            return (
              <article
                key={professional.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a66b] hover:shadow-lg hover:shadow-slate-200/50 sm:p-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3eee4] text-[#8d6935] transition-colors group-hover:bg-[#172b42] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.6} />
                </span>

                <h3 className="mt-6 text-xl font-semibold leading-snug text-[#172b42]">
                  {professional.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {professional.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-slate-500">
          The involvement of individual professionals depends on the
          requirement, their availability, applicable professional
          responsibilities and the relevant engagement arrangements.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-[#f0eee8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-16 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <MapPin size={23} className="text-[#8d6935]" />

              <h2 className="text-2xl font-semibold text-[#172b42]">
                Areas of Interest
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Enquiries may include requirements across NCR, Ludhiana and
              Chandigarh Tricity, subject to the availability and scope of the
              relevant service provider.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-[#172b42]">
              Looking for professional support?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Tell us about your broad requirement and the service area you are
              exploring.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#172b42] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#263f59]"
            >
              Make an Enquiry
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
