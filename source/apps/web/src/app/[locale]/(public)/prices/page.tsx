import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { PendingPage } from "@/features/pending/PendingPage";
import { pendingContent } from "@/features/pending/content";

type PageProps = { params: Promise<{ locale: string }> };
function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const text = pendingContent[getLocale((await params).locale)];
  const page = text.pages.prices;
  return { alternates: pageAlternates(getLocale((await params).locale), "/prices"), title: { absolute: `${page.title} | ${text.brand}` }, description: page.description, robots: { index: false, follow: true } };
}
export default async function Page({ params }: PageProps) {
  return <PendingPage locale={getLocale((await params).locale)} page="prices" />;
}
