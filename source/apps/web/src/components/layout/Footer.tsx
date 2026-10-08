import { WarehouseChannels } from "@/components/shared/WarehouseChannels";
import { companyContact } from "@/config/company";
import { CompanyLogo } from "@/components/shared/CompanyLogo";
import { ContactNumbers } from "../shared/ContactNumbers";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { messages, navigation } from "../navigation/messages";

export function Footer({ locale }: { locale: SupportedLocale }) {
  const text = messages[locale];
  return (
    <footer className="public-footer">
      <div className="container footer-grid">
        <div className="footer-intro"><CompanyLogo className="footer-brand-mark" sizes="64px" /><span className="footer-eyebrow" lang="en" dir="ltr">KAVIAN SEPANTA</span><h2>{text.brand}</h2><p>{text.intro}</p></div>
        <nav aria-label={text.links}><h2>{text.links}</h2><ul>{navigation.filter(({ key }) => ["home", "products", "scrap", "warehouse", "clients", "about", "contact"].includes(key)).map(({ key, path }) => <li key={key}><Link href={`/${locale}${path}`}>{text[key]}</Link></li>)}</ul></nav>
        <nav aria-label={text.services}><h2>{text.services}</h2><ul>{navigation.filter(({ key }) => ["market", "erp", "inventory", "prices", "sellScrap", "inquiry"].includes(key)).map(({ key, path }) => <li key={key}><Link href={`/${locale}${path}`}>{text[key]}</Link></li>)}</ul></nav>
        <div className="footer-contact"><h2>{text.contactTitle}</h2><address><p>{locale === "fa" ? "دفتر تهران:" : "Tehran office:"} {companyContact.officeAddress[locale]}</p><p>{locale === "fa" ? "انبار خاورشهر:" : "Khavarshahr warehouse:"} {companyContact.warehouseAddress[locale]}</p><ContactNumbers locale={locale} /><p><a href={`mailto:${companyContact.email}`}><bdi dir="ltr">{companyContact.email}</bdi></a></p></address><h3>{text.social}</h3><div className="social-placeholders" aria-label={text.social}><a href={companyContact.instagram} target="_blank" rel="noopener noreferrer" aria-label={locale === "fa" ? "اینستاگرام رسمی (تب جدید)" : "Official Instagram (new tab)"}>Instagram</a><a href={companyContact.telegram} target="_blank" rel="noopener noreferrer">{locale === "fa" ? "تلگرام شرکت (تب جدید)" : "Company Telegram (new tab)"}</a><a href={companyContact.billetTelegram} target="_blank" rel="noopener noreferrer">{locale === "fa" ? "تلگرام شمش (تب جدید)" : "Steel billet Telegram (new tab)"}</a></div><WarehouseChannels locale={locale} /></div>
      </div>
      <div className="container footer-bottom"><small>© {new Date().getFullYear()} {text.brand}. {text.rights}</small><span lang="en" dir="ltr">STEEL · SUPPLY · TRADE</span></div>
    </footer>
  );
}
