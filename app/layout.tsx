import type { Metadata } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Nav from "@/components/Nav";
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Website & App Developers in Nairobi, Kenya | PragDev",
    template: "%s | PragDev",
  },
  description:
    "PragDev is a website and app developer in Nairobi, serving Kenya and Africa with fast, SEO-ready websites, web apps and mobile apps. Book a free consultation.",
  applicationName: site.name,
  openGraph: {
    title: "Website & App Developers in Nairobi, Kenya | PragDev",
    description: site.summary,
    url: "/",
    siteName: site.name,
    locale: "en_KE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body bg-cream text-ink antialiased overflow-x-hidden`}
      >
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}*{cursor:auto!important}`}</style>
        </noscript>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Cursor />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
