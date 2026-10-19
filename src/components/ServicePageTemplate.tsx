import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type ServicePageTemplateProps = {
  eyebrow: string;
  title: string;
  intro: string;
  overview: string;
  supportAreas: string[];
  engagementSteps: {
    title: string;
    description: string;
  }[];
  importantNote: string;
};

export default function ServicePageTemplate({
  eyebrow,
  title,
  intro,
  overview,
  supportAreas,
  engagementSteps,
  importantNote,
}: ServicePageTemplateProps) {
  return (
    <main>
      <section className="bg-[#172b42] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            All service areas
          </Link>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#e3c797]">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {intro}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#e3c797] px-5 py-3.5 text-sm font-semibold text-[#172b42] transition-colors hover:bg-[#f0d9ae]"
          >
            Discuss Your Requirement
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47b40]">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172b42]">
              Understanding your requirement
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {overview}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[#172b42]">
              Areas of support
            </h2>

            <ul className="mt-6 space-y-5">
              {supportAreas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#98713c]"
                  />

                  <span className="text-sm leading-7 text-slate-600">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f0eee8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47b40]">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172b42] sm:text-4xl">
              A clear process from enquiry to engagement
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The details and scope of work are confirmed with the relevant
              professional before any engagement begins.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {engagementSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-semibold text-[#a47b40]">
                  STEP 0{index + 1}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-[#172b42]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#d8c8aa] bg-white p-5 sm:p-6">
            <h3 className="font-semibold text-[#172b42]">
              Important information
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {importantNote}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <div className="rounded-2xl bg-[#172b42] px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a requirement in this area?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Share an overview of your requirement so that the appropriate
                next steps can be discussed.
              </p>
            </div>

            <Link
              href="/#contact"
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#e3c797] px-5 py-3.5 text-sm font-semibold text-[#172b42] transition-colors hover:bg-[#f0d9ae] lg:mt-0"
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