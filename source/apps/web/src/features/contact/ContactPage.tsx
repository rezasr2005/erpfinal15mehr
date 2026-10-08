import { CatalogNotice } from "@/components/shared/CatalogNotice";
import { companyContact, mapSearchHref } from "@/config/company";
import { ContactNumbers } from "@/components/shared/ContactNumbers";
import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { contactContent } from "./content";
import { ContactChannel } from "./ContactChannel";
import "./contact.css";

export function ContactPage({ locale }: { locale: SupportedLocale }) {
  const text = contactContent[locale];
  return <main className="contact-page">
    <section className="contact-hero" aria-labelledby="contact-title"><div className="container"><nav className="contact-breadcrumb" aria-label={locale === "fa" ? "مسیر صفحه" : "Breadcrumb"}><Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{text.title}</span></nav><p className="contact-eyebrow">{text.eyebrow}</p><h1 id="contact-title">{text.title}</h1><p className="contact-intro">{text.intro}</p></div></section>
    <section className="container contact-section" aria-labelledby="contact-channels-title"><h2 id="contact-channels-title">{text.detailsTitle}</h2><div className="contact-channel-grid">{text.channels.map((channel, index) => <ContactChannel key={channel.title} title={channel.title} text={channel.text} pending={text.pending}>{index === 0 ? <ContactNumbers locale={locale} /> : index === 2 ? <a href={companyContact.website}><bdi dir="ltr">www.fooladkavian.com</bdi></a> : <a href={`mailto:${companyContact.email}`}><bdi dir="ltr">{companyContact.email}</bdi></a>}</ContactChannel>)}</div>
    <CatalogNotice locale={locale} /><div className="contact-channel-grid contact-locations">
      <article className="contact-channel"><h3>{locale === "fa" ? "دفتر مرکزی تهران" : "Tehran head office"}</h3><div className="contact-channel-value"><address>{companyContact.officeAddress[locale]}</address><a className="contact-map-link" href={mapSearchHref(companyContact.officeAddress.fa)} target="_blank" rel="noopener noreferrer">{locale === "fa" ? "جست‌وجوی نشانی در نقشه (تب جدید)" : "Search the address on maps (new tab)"}</a></div></article>
      <article className="contact-channel"><h3>{locale === "fa" ? "انبار مرکزی خاورشهر" : "Khavarshahr central warehouse"}</h3><div className="contact-channel-value"><address>{companyContact.warehouseAddress[locale]}</address><a className="contact-map-link" href={mapSearchHref(companyContact.warehouseAddress.fa)} target="_blank" rel="noopener noreferrer">{locale === "fa" ? "جست‌وجوی نشانی در نقشه (تب جدید)" : "Search the address on maps (new tab)"}</a></div></article>
    </div><div className="contact-support"><div><h3>{text.hours}</h3><p>{text.pending}</p></div><div><h3>{text.social}</h3><div className="contact-social" dir="ltr"><a href={companyContact.instagram} target="_blank" rel="noopener noreferrer" aria-label={locale === "fa" ? "اینستاگرام رسمی (تب جدید)" : "Official Instagram (new tab)"}>Instagram</a></div></div></div></section>
    <section className="contact-guides" aria-labelledby="contact-guides-title"><div className="container"><h2 id="contact-guides-title">{text.guideTitle}</h2><p className="contact-guide-intro">{text.guideText}</p><div className="contact-guide-grid">{text.guides.map((guide) => <article className="contact-guide-card" key={guide.path}><h3>{guide.title}</h3><p>{guide.text}</p><Link href={`/${locale}${guide.path}`}>{guide.link}<ArrowIcon /></Link></article>)}</div></div></section>
  </main>;
}
