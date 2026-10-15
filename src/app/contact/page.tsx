import type { Metadata } from "next";
import { Mail, MessageSquare, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Submit an enquiry about business finance, insolvency, capital markets or taxation support.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#172b42] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e3c797]">
            Contact Ample Financial Solutions
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Tell us what your business needs.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Choose the relevant service area and briefly describe your
            requirement. The enquiry can then be reviewed for the
            appropriate next step.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <aside>
            <h2 className="text-2xl font-semibold text-[#172b42]">
              Before you submit
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              A brief description is enough for the initial enquiry.
              Please do not include confidential financial statements,
              identity documents, account details or other sensitive
              records in this form.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f3eee4] text-[#8d6935]">
                  <MessageSquare size={21} />
                </span>

                <div>
                  <h3 className="font-semibold text-[#172b42]">
                    Describe your requirement
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Select one of the four service areas or choose
                    General Enquiry.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f3eee4] text-[#8d6935]">
                  <Mail size={21} />
                </span>

                <div>
                  <h3 className="font-semibold text-[#172b42]">
                    Provide a valid email address
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The contact details will be used to respond to
                    your enquiry.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f3eee4] text-[#8d6935]">
                  <ShieldCheck size={21} />
                </span>

                <div>
                  <h3 className="font-semibold text-[#172b42]">
                    Professional engagement
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Submitting an enquiry does not automatically
                    create a professional-client relationship.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}