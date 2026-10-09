import "../globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { getSiteUrl } from "@/config/site";
import { notFound } from "next/navigation";
import { localeDirection, supportedLocales, type SupportedLocale } from "@kavian/config";
import { PublicLayout } from "@/components/layout/PublicLayout";

const vazirmatn = localFont({
  src: "../../assets/fonts/Vazirmatn-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "هلدینگ فولاد کاویان سپنتا", template: "%s | هلدینگ فولاد کاویان سپنتا" },
  description: "تأمین و تجارت فولاد، آهن‌آلات و ضایعات صنعتی",
  icons: { icon: { url: "/kavian-logo.jpg", type: "image/jpeg" } },
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as SupportedLocale)) notFound();
  const currentLocale = locale as SupportedLocale;

  return (
    <html lang={currentLocale} dir={localeDirection[currentLocale]} className={vazirmatn.variable}>
      <body><PublicLayout locale={currentLocale}>{children}</PublicLayout></body>
    </html>
  );
}
