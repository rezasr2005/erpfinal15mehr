import type { SupportedLocale } from "@kavian/config";
import { HomeLink } from "../home/HomeLink";
import { erpContent } from "./content";
import { WorkflowExample } from "./WorkflowExample";
import { ErpFaq } from "./ErpFaq";
import "../home/home.css";
import "../market/market.css";

export function ErpPage({ locale }: { locale: SupportedLocale }) {
  const text = erpContent[locale];
  return <main className="home-page erp-page">
    <section className="container market-hero"><p className="home-eyebrow">{text.eyebrow}</p><h1>{text.heading}</h1><p>{text.intro}</p><div className="home-actions erp-actions"><HomeLink href={`/${locale}/contact`}>{text.contact}</HomeLink><HomeLink secondary href={`/${locale}/market`}>{text.market}</HomeLink></div></section>
    <section className="container home-section"><div className="home-section-heading"><h2>{text.areasTitle}</h2><p>{text.areasIntro}</p></div><div className="sector-grid">{text.areas.map((area, index) => <article className="sector-card" key={area.title}><span className="sector-number" aria-hidden="true">0{index + 1}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div></section>
    <WorkflowExample locale={locale} />
    <section className="home-tools"><div className="container home-about"><div><p className="home-eyebrow">{text.industryLabel}</p><h2>{text.industryTitle}</h2></div><p className="about-description">{text.industryText}</p></div></section>
    <section className="container home-section"><h2>{text.stepsTitle}</h2><ol className="erp-steps">{text.steps.map((step, index) => <li key={step.title}><span className="sector-number" aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
    <ErpFaq locale={locale} />
    <section className="home-cta"><div className="container cta-grid"><div><h2>{text.ctaTitle}</h2><p>{text.ctaText}</p></div><HomeLink href={`/${locale}/contact`}>{text.contact}</HomeLink></div></section>
  </main>;
}
