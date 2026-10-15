import Link from "next/link";
import { ArrowUpRight, Landmark } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/services" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8f7f3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Professional Advisory home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#172b42] text-[#e3c797]">
            <Landmark size={23} />
          </span>

          <span>
            <span className="block text-base font-semibold tracking-tight text-[#172b42]">
              Ample Financial Solutions
            </span>
            <span className="block text-[10px] tracking-[0.19em] text-slate-500">
              BUSINESS & PROFESSIONAL ADVISORY{" "}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#a47b40]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#172b42] px-4 py-3 text-white transition-colors hover:bg-[#263f59]"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
