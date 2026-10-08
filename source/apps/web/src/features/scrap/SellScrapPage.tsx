import { WarehousePurchaseSummary } from "@/components/shared/WarehousePurchaseSummary";
import { WarehouseChannels } from "@/components/shared/WarehouseChannels";
import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { sellScrapContent } from "./sell-content";
import { ScrapGroupCard } from "./ScrapGroupCard";
import "./scrap.css";

export function SellScrapPage({ locale }: { locale: SupportedLocale }) {
  const text = sellScrapContent[locale];
  return <main className="scrap-page">
    <section className="scrap-hero" aria-labelledby="sell-scrap-title"><div className="container">
      <nav aria-label={locale === "fa" ? "مسیر صفحه" : "Breadcrumb"} className="scrap-breadcrumb"><Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><Link href={`/${locale}/scrap`}>{text.scrap}</Link><span aria-hidden="true">/</span><span aria-current="page">{text.title}</span></nav>
      <p className="scrap-eyebrow">{text.eyebrow}</p><h1 id="sell-scrap-title">{text.title}</h1><p className="scrap-intro">{text.intro}</p>
    </div></section>
    <section className="container scrap-section" aria-labelledby="sell-scrap-info-title"><h2 id="sell-scrap-info-title">{text.infoTitle}</h2><p className="scrap-section-intro">{text.infoIntro}</p><div className="scrap-groups">{text.groups.map((group, index) => <ScrapGroupCard group={group} index={index} detailLabel={text.detailLabel} key={group.title} />)}</div></section>
    <section className="container scrap-section"><h2>{locale === "fa" ? "ارتباط با سایت خاورشهر" : "Contact the Khavarshahr site"}</h2><WarehouseChannels locale={locale} contacts /><WarehousePurchaseSummary locale={locale} /></section>
    <section className="scrap-guide" aria-labelledby="sell-scrap-guide-title"><div className="container"><p className="scrap-eyebrow">{text.guideLabel}</p><h2 id="sell-scrap-guide-title">{text.guideTitle}</h2><p className="scrap-section-intro">{text.guideIntro}</p><ol className="scrap-steps">{text.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
    <section className="container scrap-section scrap-cta" aria-labelledby="sell-scrap-cta-title"><div><h2 id="sell-scrap-cta-title">{text.ctaTitle}</h2><p className="scrap-section-intro">{text.ctaText}</p></div><div className="scrap-actions"><Link href={`/${locale}/contact`} className="scrap-button">{text.contact}<ArrowIcon /></Link><Link href={`/${locale}/scrap`} className="scrap-button scrap-button-secondary">{text.guideLink}</Link></div></section>
  </main>;
}
