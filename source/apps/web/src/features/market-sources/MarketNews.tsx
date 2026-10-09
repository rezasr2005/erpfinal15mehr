import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { marketNews } from "./news";
import "./market-sources.css";

export function MarketNews({ locale, compact = false }: { locale: SupportedLocale; compact?: boolean }) {
  const fa = locale === "fa";
  const items = compact ? marketNews.slice(0, 2) : marketNews;
  return <section id="market-news" className="container source-section" aria-labelledby="market-news-title">
    <div className="source-heading"><div><p className="home-eyebrow">{fa ? "رصد منابع معرفی‌شده" : "Designated source review"}</p><h2 id="market-news-title">{fa ? "خبر و گزارش بازار فولاد" : "Steel market news and reports"}</h2></div><Link href={`/${locale}/prices#market-reference-rates`} className="source-internal-link">{fa ? "نرخ‌های مرجع بازار" : "Market reference rates"}</Link></div>
    <p className="source-notice">{fa ? "آخرین بررسی منابع: ۱۷ مهر ۱۴۰۵. خلاصه‌های زیر با انتساب به ناشر و تاریخ اصلی نمایش داده می‌شوند؛ این بخش فعلاً خودکار به‌روزرسانی نمی‌شود." : "Sources last reviewed on 9 October 2026. Summaries retain publisher attribution and original dates; updates are currently editorial, not automatic."}</p>
    <div className="source-grid">{items.map(item => <article className="source-card source-news-card" key={item.id}><p className="source-meta">{fa ? "گزارشگر فولاد — تلگرام" : "Steel Reporter — Telegram"}<span> · </span><time dateTime={item.publishedAt}>{new Intl.DateTimeFormat(fa ? "fa-IR" : "en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Tehran" }).format(new Date(item.publishedAt))}</time></p><h3>{item.title[locale]}</h3><p>{item.summary[locale]}</p>{item.note && <p className="source-detail-note">{item.note[locale]}</p>}<a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">{fa ? "مشاهدهٔ گزارش اصلی (تب جدید)" : "Read original report (new tab)"}</a></article>)}</div>
    {compact && <Link className="source-internal-link source-more" href={`/${locale}/market#market-news`}>{fa ? "همهٔ گزارش‌های منتخب" : "All selected reports"}</Link>}
  </section>;
}
