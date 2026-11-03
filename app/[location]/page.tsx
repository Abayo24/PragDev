import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage, { landingMetadata } from "@/components/LandingPage";
import { getLocationPage, locationPages } from "@/lib/locations";

interface Props {
  params: { location: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages.map((l) => ({ location: l.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getLocationPage(params.location);
  return page ? landingMetadata(page, `/${page.slug}`) : {};
}

export default function LocationPageRoute({ params }: Props) {
  const page = getLocationPage(params.location);
  if (!page) notFound();

  const related = [
    ...locationPages
      .filter((l) => l.slug !== page.slug)
      .map((l) => ({ href: `/${l.slug}`, label: l.name })),
    { href: "/services/website-development", label: "Website Development" },
    { href: "/services/mobile-app-development", label: "Mobile App Development" },
    { href: "/services/web-app-development", label: "Web App Development" },
  ];

  return <LandingPage page={page} path={`/${page.slug}`} related={related} />;
}
