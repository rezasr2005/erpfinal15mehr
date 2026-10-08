import { companyContact } from "@/config/company";
import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { productsContent } from "./content";
import { ProductGroupCard } from "./ProductGroupCard";
import "./products.css";

export function ProductsPage({ locale }: { locale: SupportedLocale }) {
  const text = productsContent[locale];
  return <main className="products-page">
    <section className="products-hero" aria-labelledby="products-title"><div className="container">
      <nav aria-label={locale === "fa" ? "مسیر صفحه" : "Breadcrumb"} className="products-breadcrumb"><Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{text.title}</span></nav>
      <p className="products-eyebrow">{text.eyebrow}</p><h1 id="products-title">{text.title}</h1><p className="products-intro">{text.intro}</p>
    </div></section>
    <section className="container products-section" aria-labelledby="product-groups-title"><h2 id="product-groups-title">{text.groupsTitle}</h2><p className="products-section-intro">{text.groupsIntro}</p><div className="product-groups">{text.groups.map((group, index) => <ProductGroupCard group={group} index={index} key={group.title} />)}</div></section>
    <section className="container products-section"><h2>{locale === "fa" ? "کانال شمش فولاد کاویان" : "Kavian steel billet channel"}</h2><p className="products-section-intro">{locale === "fa" ? "برای مشاهدهٔ اطلاعیه‌های مرتبط با شمش، کانال معرفی‌شدهٔ مجموعه را ببینید و شرایط تأمین را با دفتر تأیید کنید." : "View the company’s billet announcements and confirm supply terms with the office."}</p><a className="contact-map-link" href={companyContact.billetTelegram} target="_blank" rel="noopener noreferrer">{locale === "fa" ? "تلگرام شمش فولاد کاویان (تب جدید)" : "Kavian steel billet Telegram (new tab)"}</a></section>
    <section className="products-guide" aria-labelledby="products-guide-title"><div className="container"><p className="products-eyebrow">{text.guideLabel}</p><h2 id="products-guide-title">{text.guideTitle}</h2><p className="products-section-intro">{text.guideIntro}</p><ol className="products-steps">{text.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
    <section className="container products-section products-cta" aria-labelledby="products-cta-title"><div><h2 id="products-cta-title">{text.ctaTitle}</h2><p className="products-section-intro">{text.ctaText}</p></div><div className="products-actions"><Link href={`/${locale}/inquiry`} className="products-button">{text.quote}<ArrowIcon /></Link><Link href={`/${locale}/contact`} className="products-button products-button-secondary">{text.contact}</Link></div></section>
  </main>;
}
