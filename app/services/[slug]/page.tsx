import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage, { landingMetadata } from "@/components/LandingPage";
import { locationPages } from "@/lib/locations";
import { getServicePage, servicePages } from "@/lib/services";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServicePage(params.slug);
  return service ? landingMetadata(service, `/services/${service.slug}`) : {};
}

export default function ServicePageRoute({ params }: Props) {
  const service = getServicePage(params.slug);
  if (!service) notFound();

  const related = [
    ...servicePages
      .filter((s) => s.slug !== service.slug)
      .map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
    ...locationPages.map((l) => ({ href: `/${l.slug}`, label: l.name })),
  ];

  return (
    <LandingPage page={service} path={`/services/${service.slug}`} related={related} />
  );
}
