import type { Metadata } from "next";
import type { SupportedLocale } from "@kavian/config";
import { companyContact } from "@/config/company";

export function getSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || companyContact.website;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin, without a path, credentials, query or hash.");
  }
  return url.origin;
}

export function pageAlternates(locale: SupportedLocale, path: string): Metadata["alternates"] {
  const base = getSiteUrl();
  return {
    canonical: `${base}/${locale}${path}`,
    languages: {
      fa: `${base}/fa${path}`,
      en: `${base}/en${path}`,
      "x-default": `${base}/fa${path}`,
    },
  };
}
