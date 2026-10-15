import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ample Financial Solutions and its professional facilitation approach.",
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
      "Organise enquiries around practical financial, restructuring and taxation needs.",
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
            A starting point for your business's professional support needs.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We aim to help businesses identify the relevant service area
            and enquire about appropriate professional support for their
            financial, restructuring, capital-market and taxation requirements.
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
              Understanding the relevant service area is a useful first step
              in finding appropriate professional assistance.
            </p>

            <p>
              Ample Financial Solutions is intended to serve as an enquiry
              and facilitation platform. Depending on the nature of the
              requirement, an enquiry may be directed to the relevant
              professional or firm for assessment and a separate engagement,
              where appropriate.
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

      <section className="border-y border-slate-200 bg-[#f0eee8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-16 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <MapPin size={23} className="text-[#8d6935]" />
              <h2 className="text-2xl font-semibold text-[#172b42]">
                Areas of interest
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Enquiries may include requirements across NCR, Ludhiana and
              Chandigarh Tricity, subject to the availability and scope of
              the relevant service provider.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-[#172b42]">
              Looking for professional support?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Tell us about your broad requirement and the service area
              you are exploring.
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