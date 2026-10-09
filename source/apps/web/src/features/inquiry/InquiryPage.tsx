import { inquiryContext } from "./context";
import type { SupportedLocale } from "@kavian/config";
import { HomeLink } from "../home/HomeLink";
import { InquiryTemplate } from "./InquiryTemplate";
import { inquiryContent } from "./content";
import "../home/home.css";
import "../market/market.css";
import "./inquiry.css";

export function InquiryPage({ locale, itemId }: { locale: SupportedLocale; itemId?: string | undefined }) {
  const text = inquiryContent[locale];
  const context = inquiryContext(locale, itemId);
  return <main className="home-page">
    <section className="container market-hero"><p className="home-eyebrow">{text.eyebrow}</p><h1>{text.title}</h1><p>{text.intro}</p><p className="market-empty">{text.status}</p></section>
    <section className="container home-section" aria-labelledby="inquiry-details"><div className="home-section-heading"><h2 id="inquiry-details">{text.detailsTitle}</h2><p>{text.detailsIntro}</p></div><div className="sector-grid">{text.details.map((detail, index) => <article className="sector-card" key={detail.title}><span className="sector-number" aria-hidden="true">0{index + 1}</span><h3>{detail.title}</h3><p>{detail.text}</p></article>)}</div></section>
    <section className="home-tools"><div className="container"><h2>{text.termsTitle}</h2><ul className="inquiry-terms">{text.terms.map((term) => <li key={term}>{term}</li>)}</ul></div></section>
    <section id="request-template" className="container home-section" aria-labelledby="request-template-title"><div className="home-section-heading"><h2 id="request-template-title">{text.templateTitle}</h2><p>{text.templateIntro}</p></div>{context && <aside className="inquiry-context" aria-label={locale === "fa" ? "مرجع استعلام" : "Inquiry reference"}><h3>{context.name}</h3><p><time dateTime={context.date}>{context.dateText}</time></p><p>{locale === "fa" ? "مشخصات مرجع در متن وارد شده است. مقدار مورد نیازتان را خودتان بنویسید و قیمت و شرایط فعلی را استعلام کنید." : "Reference details are included below. Enter your own required quantity and ask for current prices and terms."}</p>{context.sourceUrl && <a href={context.sourceUrl} target="_blank" rel="noopener noreferrer">{locale === "fa" ? "مشاهدهٔ مرجع (تب جدید)" : "View source (new tab)"}</a>}</aside>}<InquiryTemplate key={`${locale}-${context?.id ?? "general"}`} locale={locale} template={context?.template ?? text.template} /></section>
    <section className="home-cta"><div className="container"><h2>{text.guidesTitle}</h2><div className="home-actions erp-actions"><HomeLink href={`/${locale}/products`}>{text.product}</HomeLink><HomeLink secondary href={`/${locale}/sell-scrap`}>{text.scrap}</HomeLink><HomeLink secondary href={`/${locale}/contact`}>{text.contact}</HomeLink></div></div></section>
  </main>;
}
