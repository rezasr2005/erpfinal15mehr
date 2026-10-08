import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { MarketPage } from "@/features/market/MarketPage";
import { marketContent } from "@/features/market/content";

type PageProps = { params: Promise<{ locale: string }> };

function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const text = marketContent[getLocale((await params).locale)];
  return { alternates: pageAlternates(getLocale((await params).locale), "/market"), title: { absolute: `${text.title} | ${text.brand}` }, description: text.description };
}

export default async function Page({ params }: PageProps) {
  return <MarketPage locale={getLocale((await params).locale)} />;
}
