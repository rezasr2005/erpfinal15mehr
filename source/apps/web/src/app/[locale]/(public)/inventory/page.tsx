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
  return { alternates: pageAlternates(getLocale((await params).locale), "/inventory"), title: { absolute: `${text.inventory} | ${text.brand}` }, description: text.inventoryDescription, robots: { index: false, follow: true } };
}
export default async function Page({ params }: PageProps) {
  return <ListingPage locale={getLocale((await params).locale)} kind="inventory" />;
}
