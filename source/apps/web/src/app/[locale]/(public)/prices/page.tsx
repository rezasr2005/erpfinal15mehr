import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { ListingPage } from "@/features/listings/ListingPage";
import { listingContent } from "@/features/listings/content";

type PageProps = { params: Promise<{ locale: string }> };
function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const text = listingContent[getLocale((await params).locale)];
  return { alternates: pageAlternates(getLocale((await params).locale), "/prices"), title: { absolute: `${text.prices} | ${text.brand}` }, description: text.pricesDescription, robots: { index: false, follow: true } };
}
export default async function Page({ params }: PageProps) {
  return <ListingPage locale={getLocale((await params).locale)} kind="prices" />;
}
