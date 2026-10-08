import type { Metadata } from "next";
import { pageAlternates } from "@/config/site";
import { notFound } from "next/navigation";
import { supportedLocales, type SupportedLocale } from "@kavian/config";
import { ClientsPage } from "@/features/clients/ClientsPage";
import { clientsContent } from "@/features/clients/content";

type PageProps = { params: Promise<{ locale: string }> };
function getLocale(locale: string): SupportedLocale {
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  return locale as SupportedLocale;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const text = clientsContent[getLocale((await params).locale)];
  return { alternates: pageAlternates(getLocale((await params).locale), "/clients"), title: { absolute: `${text.title} | ${getLocale((await params).locale) === "fa" ? "هلدینگ فولاد کاویان سپنتا" : "Kavian Sepanta Steel Holding"}` }, description: text.description, robots: { index: false, follow: true } };
}
export default async function Page({ params }: PageProps) {
  return <ClientsPage locale={getLocale((await params).locale)} />;
}
