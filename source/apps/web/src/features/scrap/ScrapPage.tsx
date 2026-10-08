import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { scrapContent } from "./content";
import { ScrapGroupCard } from "./ScrapGroupCard";
import "./scrap.css";

export function ScrapPage({ locale }: { locale: SupportedLocale }) {
  const text = scrapContent[locale];
  return <main className="scrap-page">
    <section className="scrap-hero" aria-labelledby="scrap-title"><div className="container">
      <nav aria-label={locale === "fa" ? "مسیر صفحه" : "Breadcrumb"} className="scrap-breadcrumb"><Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{text.title}</span></nav>
      <p className="scrap-eyebrow">{text.eyebrow}</p><h1 id="scrap-title">{text.title}</h1><p className="scrap-intro">{text.intro}</p>
    </div></section>
    <section className="container scrap-section" aria-labelledby="scrap-groups-title"><h2 id="scrap-groups-title">{text.groupsTitle}</h2><p className="scrap-section-intro">{text.groupsIntro}</p><div className="scrap-groups">{text.groups.map((group, index) => <ScrapGroupCard group={group} index={index} detailLabel={text.detailLabel} key={group.title} />)}</div></section>
    <section className="scrap-guide" aria-labelledby="scrap-guide-title"><div className="container"><p className="scrap-eyebrow">{text.guideLabel}</p><h2 id="scrap-guide-title">{text.guideTitle}</h2><p className="scrap-section-intro">{text.guideIntro}</p><ol className="scrap-steps">{text.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
    <section className="container scrap-section scrap-cta" aria-labelledby="scrap-cta-title"><div><h2 id="scrap-cta-title">{text.ctaTitle}</h2><p className="scrap-section-intro">{text.ctaText}</p></div><div className="scrap-actions"><Link href={`/${locale}/sell-scrap`} className="scrap-button">{text.sell}<ArrowIcon /></Link><Link href={`/${locale}/inquiry`} className="scrap-button scrap-button-secondary">{text.quote}</Link></div></section>
  </main>;
}
