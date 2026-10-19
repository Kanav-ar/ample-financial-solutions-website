
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteName = "Ample Financial Solutions";

const siteDescription =
  "Business and professional advisory services across credit and banking, " +
  "IBC and NCLT consultancy, capital markets and fundraising, taxation, " +
  "and regulatory compliance.";

export const metadata: Metadata = {
  applicationName: siteName,

  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: siteName,
    description: siteDescription,
  },

  twitter: {
    card: "summary",
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
