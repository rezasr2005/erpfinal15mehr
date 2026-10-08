import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { HomePage } from "@/features/home/HomePage";
import { homeContent } from "@/features/home/content";

type HomePageProps = { params: Promise<{ locale: string }> };

function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const text = homeContent[getLocale((await params).locale)];
  return { alternates: pageAlternates(getLocale((await params).locale), ""), title: { absolute: text.eyebrow }, description: text.description };
}

export default async function Page({ params }: HomePageProps) {
  return <HomePage locale={getLocale((await params).locale)} />;
}
