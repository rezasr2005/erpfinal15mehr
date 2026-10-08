import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { ErpPage } from "@/features/erp/ErpPage";
import { erpContent } from "@/features/erp/content";

type PageProps = { params: Promise<{ locale: string }> };

function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const text = erpContent[getLocale((await params).locale)];
  return { alternates: pageAlternates(getLocale((await params).locale), "/erp"), title: { absolute: `${text.title} | ${text.brand}` }, description: text.description };
}

export default async function Page({ params }: PageProps) {
  return <ErpPage locale={getLocale((await params).locale)} />;
}
