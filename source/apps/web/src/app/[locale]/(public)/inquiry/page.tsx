import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { InquiryPage } from "@/features/inquiry/InquiryPage";
import { inquiryContent } from "@/features/inquiry/content";

type PageProps = { params: Promise<{ locale: string }> };
function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const text = inquiryContent[getLocale((await params).locale)];
  return { alternates: pageAlternates(getLocale((await params).locale), "/inquiry"), title: { absolute: `${text.title} | ${text.brand}` }, description: text.description, robots: { index: false, follow: true } };
}
export default async function Page({ params }: PageProps) {
  return <InquiryPage locale={getLocale((await params).locale)} />;
}
