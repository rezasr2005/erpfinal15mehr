import type { SupportedLocale } from "@kavian/config";
import { HomeLink } from "../home/HomeLink";
import { inquiryContent } from "./content";
import "../home/home.css";
import "../market/market.css";
import "./inquiry.css";

export function InquiryPage({ locale }: { locale: SupportedLocale }) {
  const text = inquiryContent[locale];
  return <main className="home-page">
    <section className="container market-hero"><p className="home-eyebrow">{text.eyebrow}</p><h1>{text.title}</h1><p>{text.intro}</p><p className="market-empty">{text.status}</p></section>
    <section className="container home-section" aria-labelledby="inquiry-details"><div className="home-section-heading"><h2 id="inquiry-details">{text.detailsTitle}</h2><p>{text.detailsIntro}</p></div><div className="sector-grid">{text.details.map((detail, index) => <article className="sector-card" key={detail.title}><span className="sector-number" aria-hidden="true">0{index + 1}</span><h3>{detail.title}</h3><p>{detail.text}</p></article>)}</div></section>
    <section className="home-tools"><div className="container"><h2>{text.termsTitle}</h2><ul className="inquiry-terms">{text.terms.map((term) => <li key={term}>{term}</li>)}</ul></div></section>
    <section className="container home-section"><div className="home-section-heading"><h2>{text.templateTitle}</h2><p>{text.templateIntro}</p></div><pre className="inquiry-outline">{text.template}</pre></section>
    <section className="home-cta"><div className="container"><h2>{text.guidesTitle}</h2><div className="home-actions erp-actions"><HomeLink href={`/${locale}/products`}>{text.product}</HomeLink><HomeLink secondary href={`/${locale}/sell-scrap`}>{text.scrap}</HomeLink><HomeLink secondary href={`/${locale}/contact`}>{text.contact}</HomeLink></div></div></section>
  </main>;
}
