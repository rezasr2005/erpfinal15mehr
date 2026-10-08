import { CatalogNotice } from "@/components/shared/CatalogNotice";
import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { aboutContent } from "./content";
import { ActivityCard } from "./ActivityCard";
import "./about.css";

export function AboutPage({ locale }: { locale: SupportedLocale }) {
  const text = aboutContent[locale];
  return <main className="about-page">
    <section className="about-hero" aria-labelledby="about-title"><div className="container"><nav className="about-breadcrumb" aria-label={locale === "fa" ? "مسیر صفحه" : "Breadcrumb"}><Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{text.title}</span></nav><p className="about-eyebrow">{text.eyebrow}</p><h1 id="about-title">{text.heroTitle}</h1><p className="about-intro">{text.intro}</p></div></section>
    <div className="container"><CatalogNotice locale={locale} /></div>
    <section className="container about-section about-identity" aria-labelledby="about-identity-title"><div><p className="about-eyebrow">{text.identityLabel}</p><h2 id="about-identity-title">{text.brand}</h2></div><div><h3>{text.identityTitle}</h3><p>{text.identityText}</p></div></section>
    <section className="container about-section" aria-labelledby="about-history-title"><h2 id="about-history-title">{text.historyTitle}</h2><ol className="about-history">{text.history.map((item) => <li key={item.year}><span className="about-history-year"><bdi>{item.year}</bdi></span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol></section>
    <section className="about-focus" aria-labelledby="about-focus-title"><div className="container"><p className="about-eyebrow">{text.focusLabel}</p><h2 id="about-focus-title">{text.focusTitle}</h2><div className="about-activities">{text.areas.map((activity, index) => <ActivityCard activity={activity} locale={locale} index={index} key={activity.path} />)}</div></div></section>
    <section className="container about-section about-cta" aria-labelledby="about-cta-title"><div><h2 id="about-cta-title">{text.ctaTitle}</h2><p>{text.ctaText}</p></div><Link href={`/${locale}/contact`} className="about-contact-link">{text.contact}<ArrowIcon /></Link></section>
  </main>;
}
