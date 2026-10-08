import type { SupportedLocale } from "@kavian/config";
import { HomeLink } from "../home/HomeLink";
import { marketContent } from "./content";
import { MarketCards } from "./MarketCards";
import "../home/home.css";
import "./market.css";

export function MarketPage({ locale }: { locale: SupportedLocale }) {
  const text = marketContent[locale];
  return <main className="home-page market-page">
    <section className="container market-hero"><p className="home-eyebrow">{text.eyebrow}</p><h1>{text.heading}</h1><p>{text.intro}</p></section>
    <section className="container market-overview" aria-label={text.title}><MarketCards locale={locale} /></section>
    {text.areas.map((area) => <section className="market-detail" id={area.id} key={area.id} aria-labelledby={`${area.id}-title`}><div className="container market-detail-grid"><div><p className="home-eyebrow">{text.pending}</p><h2 id={`${area.id}-title`}>{area.title}</h2><p className="market-description">{area.text}</p></div><div><ul className="market-fields">{area.fields.map((field) => <li key={field}>{field}</li>)}</ul><p className="market-empty">{text.empty}</p></div></div></section>)}
    <section className="container home-section home-about"><div><p className="home-eyebrow">{text.erpLabel}</p><h2>{text.erpTitle}</h2></div><div><p className="about-description">{text.erpText}</p><HomeLink href={`/${locale}/erp`}>{text.erpLink}</HomeLink></div></section>
  </main>;
}
