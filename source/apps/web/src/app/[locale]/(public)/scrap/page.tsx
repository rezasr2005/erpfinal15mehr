import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { ScrapPage } from "@/features/scrap/ScrapPage";
import { scrapContent } from "@/features/scrap/content";

type PageProps = { params: Promise<{ locale: string }> };

function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const text = scrapContent[getLocale((await params).locale)];
  return { alternates: pageAlternates(getLocale((await params).locale), "/scrap"), title: { absolute: `${text.title} | ${text.brand}` }, description: text.description };
}

export default async function Page({ params }: PageProps) {
  return <ScrapPage locale={getLocale((await params).locale)} />;
}
