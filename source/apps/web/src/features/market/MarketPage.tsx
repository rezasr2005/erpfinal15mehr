import { MarketCommentary } from "@/features/announcements/MarketCommentary";
import { CompanyAnnouncements } from "@/features/announcements/CompanyAnnouncements";
import type { SupportedLocale } from "@kavian/config";
import { HomeLink } from "../home/HomeLink";
import { localDemoEnabled } from "@/config/preview";
import { OpportunityExplorer } from "./OpportunityExplorer";
import { demoOpportunities } from "./opportunities";
import "../listings/listings.css";
import { marketContent } from "./content";
import { MarketCards } from "./MarketCards";
import "../home/home.css";
import "./market.css";

export function MarketPage({ locale }: { locale: SupportedLocale }) {
  const text = marketContent[locale];
  return <main className="home-page market-page">
    <section className="container market-hero"><p className="home-eyebrow">{text.eyebrow}</p><h1>{text.heading}</h1><p>{text.intro}</p></section>
    <section className="container market-overview" aria-label={text.title}><MarketCards locale={locale} /></section>
    {text.areas.map((area) => <section className="market-detail" id={area.id} key={area.id} aria-labelledby={`${area.id}-title`}><div className="container market-detail-grid"><div><p className="home-eyebrow">{area.id === "auctions" ? text.pending : locale === "fa" ? "اطلاعات تاریخ‌دار" : "Dated information"}</p><h2 id={`${area.id}-title`}>{area.title}</h2><p className="market-description">{area.text}</p></div><div><ul className="market-fields">{area.fields.map((field) => <li key={field}>{field}</li>)}</ul><p className="market-empty">{area.id === "auctions" && localDemoEnabled() ? (locale === "fa" ? "پیش‌نمایش آزمایشی را در ادامه ببینید." : "See the demo preview below.") : area.id === "outlook" ? (locale === "fa" ? "گزارش تاریخ‌دار کانال مجموعه در ادامه آمده است." : "A dated company-channel report follows below.") : area.id === "rates" ? (locale === "fa" ? "نرخ‌های تاریخ‌دار و منابع در صفحهٔ قیمت درج شده‌اند." : "Dated rates and sources are available on the prices page.") : text.empty}</p></div></div>{area.id === "auctions" && localDemoEnabled() && <OpportunityExplorer locale={locale} items={demoOpportunities} />}{area.id === "rates" && <div className="container market-rate-links"><HomeLink href={`/${locale}/prices`}>{locale === "fa" ? "مشاهدهٔ صفحهٔ قیمت روز" : "View daily prices"}</HomeLink><HomeLink secondary href={`/${locale}/inventory`}>{locale === "fa" ? "بررسی موجودی" : "View inventory"}</HomeLink></div>}{area.id === "outlook" && <MarketCommentary locale={locale} />}</section>)}
    <CompanyAnnouncements locale={locale} />
    <section className="container home-section home-about"><div><p className="home-eyebrow">{text.erpLabel}</p><h2>{text.erpTitle}</h2></div><div><p className="about-description">{text.erpText}</p><HomeLink href={`/${locale}/erp`}>{text.erpLink}</HomeLink></div></section>
  </main>;
}
