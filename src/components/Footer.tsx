import Link from "next/link";
import { Landmark, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#122438] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#263f59] text-[#e3c797]">
                <Landmark size={21} />
              </span>

              <span className="text-lg font-semibold">
                Ample Financial Solutions
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              A facilitation platform for businesses seeking support with bank
              finance, insolvency and restructuring, capital markets, and
              taxation.
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="font-medium">Explore</p>

            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <Link href="/#about" className="hover:text-white">
                About Us
              </Link>

              <Link href="/#services" className="hover:text-white">
                Our Services
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                Contact Us
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs leading-6 text-slate-400">
          <p className="text-xs leading-6 text-slate-400">
           <b>*Disclaimer*</b> Ample Financial Solutions is intended to facilitate enquiries for
            relevant professional services. Where applicable, services are
            undertaken by the relevant provider under a separate engagement. No
            outcome, including loan approval, fundraising or insolvency
            resolution, is guaranteed.
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} Ample Financial Solutions . All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
