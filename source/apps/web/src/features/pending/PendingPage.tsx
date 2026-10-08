import type { SupportedLocale } from "@kavian/config";
import { HomeLink } from "../home/HomeLink";
import { pendingContent, type PendingPageKey } from "./content";
import "../home/home.css";
import "../market/market.css";

export function PendingPage({ locale, page }: { locale: SupportedLocale; page: PendingPageKey }) {
  const text = pendingContent[locale];
  const section = text.pages[page];
  return <main className="home-page"><section className="container market-hero"><p className="home-eyebrow">{text.label}</p><h1>{section.title}</h1><p>{section.description}</p><div className="home-actions erp-actions"><HomeLink href={`/${locale}${section.path}`}>{section.link}</HomeLink><HomeLink secondary href={`/${locale}`}>{text.home}</HomeLink></div></section></main>;
}
