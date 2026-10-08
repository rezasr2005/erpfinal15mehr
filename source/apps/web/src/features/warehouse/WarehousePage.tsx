import { WarehousePurchaseSummary } from "@/components/shared/WarehousePurchaseSummary";
import { WarehouseChannels } from "@/components/shared/WarehouseChannels";
import { CatalogNotice } from "@/components/shared/CatalogNotice";
import { companyContact, mapSearchHref } from "@/config/company";
import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { warehouseContent } from "./content";
import "./warehouse.css";

export function WarehousePage({ locale }: { locale: SupportedLocale }) {
  const text = warehouseContent[locale];
  return <main className="warehouse-page">
    <section className="warehouse-hero" aria-labelledby="warehouse-title"><div className="container"><nav className="warehouse-breadcrumb" aria-label={locale === "fa" ? "مسیر صفحه" : "Breadcrumb"}><Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{text.title}</span></nav><p className="warehouse-eyebrow">{text.eyebrow}</p><h1 id="warehouse-title">{text.title}</h1><p className="warehouse-intro">{text.intro}</p></div></section>
    <div className="container"><CatalogNotice locale={locale} /></div>
    <section className="container warehouse-section warehouse-info" aria-labelledby="warehouse-info-title"><div><h2 id="warehouse-info-title">{text.infoTitle}</h2><dl className="warehouse-details">{text.details.map((detail, index) => <div key={detail}><dt>{detail}</dt><dd>{index === 0 ? companyContact.warehouseAddress[locale] : index === 2 ? <Link href={`/${locale}/contact`}>{locale === "fa" ? "تماس با دفتر مرکزی" : "Contact the head office"}</Link> : text.pending}</dd></div>)}</dl></div><aside className="warehouse-location" aria-labelledby="warehouse-location-title"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg><h2 id="warehouse-location-title">{text.locationTitle}</h2><p>{companyContact.warehouseAddress[locale]}</p><a className="contact-map-link" href={mapSearchHref(companyContact.warehouseAddress.fa)} target="_blank" rel="noopener noreferrer">{locale === "fa" ? "جست‌وجوی نشانی در نقشه (تب جدید)" : "Search the address on maps (new tab)"}</a></aside></section>
    <section className="container warehouse-section"><h2>{locale === "fa" ? "کانال‌ها و ارتباط با انبار" : "Warehouse channels and contacts"}</h2><WarehouseChannels locale={locale} contacts /><WarehousePurchaseSummary locale={locale} /></section>
    <section className="container warehouse-section" aria-labelledby="warehouse-equipment-title"><h2 id="warehouse-equipment-title">{text.equipmentTitle}</h2><p className="warehouse-equipment-intro">{text.equipmentIntro}</p><ul className="warehouse-equipment">{text.equipment.map((item) => <li key={item.title}><span>{item.count}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ul></section>
    <section className="warehouse-gallery" aria-labelledby="warehouse-images-title"><div className="container"><h2 id="warehouse-images-title">{text.imagesTitle}</h2><p>{text.imagesText}</p><div className="warehouse-image-placeholder"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="1" /><circle cx="8" cy="8" r="1.5" /><path d="m3 18 6-6 4 4 3-3 5 5" /></svg><span>{text.imagePlaceholder}</span></div></div></section>
    <section className="container warehouse-section warehouse-cta" aria-labelledby="warehouse-visit-title"><div><h2 id="warehouse-visit-title">{text.visitTitle}</h2><p>{text.visitText}</p></div><div className="warehouse-actions"><Link href={`/${locale}/contact`} className="warehouse-button">{text.contact}<ArrowIcon /></Link><Link href={`/${locale}/products`} className="warehouse-button warehouse-button-secondary">{text.products}</Link></div></section>
  </main>;
}
