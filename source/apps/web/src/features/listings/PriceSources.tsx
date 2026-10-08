import { companyContact } from "@/config/company";
import type { SupportedLocale } from "@kavian/config";

// References previously supplied by the project owner; no rates are imported automatically.
const sources = [
  { id: "telegram-ahanmakan3", platform: "Telegram", handle: "@ahanmakan3", href: "https://t.me/ahanmakan3" },
  { id: "bale-irsteelnews", platform: "Bale", handle: "@irsteelnews", href: "https://ble.ir/irsteelnews" },
];

export function PriceSources({ locale }: { locale: SupportedLocale }) {
  const fa = locale === "fa";
  return <section className="container listing-section price-sources" aria-labelledby="price-sources-title">
    <h2>{fa ? "کانال‌های نرخ و عرضهٔ مجموعه" : "Company rate and supply channels"}</h2>
    <div className="listing-empty-links"><a href={companyContact.warehouseChannels[0]!.href} target="_blank" rel="noopener noreferrer">{fa ? "نرخ خرید ضایعات خاورشهر (تب جدید)" : "Khavarshahr scrap purchase rates (new tab)"}</a><a href={companyContact.billetTelegram} target="_blank" rel="noopener noreferrer">{fa ? "شمش فولاد کاویان (تب جدید)" : "Kavian steel billet channel (new tab)"}</a></div>
    <h2 id="price-sources-title">{fa ? "کانال‌های معرفی‌شدهٔ بازار" : "Market channel references"}</h2>
    <p>{fa ? "برای مشاهدهٔ آخرین پیام‌های ناشر، کانال را باز کنید. هر نرخ باید با تاریخ، واحد، مشخصات و شرایط همان پیام بررسی شود؛ نرخ کانال، تأیید عرضه یا قیمت قطعی کاویان نیست." : "Open each channel to read the publisher’s latest messages. Check the date, unit, specifications and terms of each rate; a channel rate is not a confirmed Kavian offer."}</p>
    <div className="listing-grid">{sources.map(source => <article className="listing-card" key={source.id}><h3>{source.platform === "Bale" ? (fa ? "گزارشگر فولاد — بله" : "Steel Reporter — Bale") : (fa ? "کانال تلگرام معرفی‌شده" : "Telegram channel reference")}</h3><p className="listing-specifications" dir="ltr">{source.handle}</p><a className="listing-inquiry" href={source.href} target="_blank" rel="noopener noreferrer">{fa ? "باز کردن کانال (تب جدید)" : "Open channel (new tab)"}</a></article>)}</div>
  </section>;
}
