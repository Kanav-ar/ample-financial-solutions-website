
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Landmark } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const contactIsActive =
    pathname === "/contact" || pathname.startsWith("/contact/");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8f7f3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Ample Financial Solutions home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#172b42] text-[#e3c797]">
            <Landmark size={23} />
          </span>

          <span>
            <span className="block text-base font-semibold tracking-tight text-[#172b42]">
              Ample Financial Solutions
            </span>
            <span className="block text-[10px] tracking-[0.19em] text-slate-500">
              BUSINESS &amp; PROFESSIONAL ADVISORY
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-2 text-sm font-medium"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 transition-colors duration-200 ${
                  active
                    ? "bg-[#e9dfcb] font-semibold text-[#172b42]"
                    : "text-slate-600 hover:bg-[#eee9df] hover:text-[#a47b40]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            aria-current={contactIsActive ? "page" : undefined}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-3 transition-colors duration-200 ${
              contactIsActive
                ? "bg-[#a47b40] text-white"
                : "bg-[#172b42] text-white hover:bg-[#263f59]"
            }`}
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
