import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { WarehousePage } from "@/features/warehouse/WarehousePage";
import { warehouseContent } from "@/features/warehouse/content";

type PageProps = { params: Promise<{ locale: string }> };

function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const text = warehouseContent[getLocale((await params).locale)];
  return { alternates: pageAlternates(getLocale((await params).locale), "/khavarshahr"), title: { absolute: `${text.title} | ${text.brand}` }, description: text.description };
}

export default async function Page({ params }: PageProps) {
  return <WarehousePage locale={getLocale((await params).locale)} />;
}
