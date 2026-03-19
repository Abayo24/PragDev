import type { Metadata } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PragDev Softwares — Custom Software Development Company Kenya",
  description:
    "PragDev Softwares builds world-class custom software, web apps, mobile products and cloud solutions for startups and businesses across Kenya and Africa.",
  keywords:
    "software development company Kenya, custom software Kenya, web development Nairobi, mobile app development, UI UX design Kenya",
  openGraph: {
    title: "PragDev Softwares — Custom Software Development",
    description:
      "Building scalable, elegant software for startups and businesses across Africa and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body bg-cream text-ink antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
