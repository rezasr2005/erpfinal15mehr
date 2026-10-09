import Link from "next/link";
import Image from "next/image";
import type { SupportedLocale } from "@kavian/config";
import { announcements } from "./data";
import "./announcements.css";

export function CompanyAnnouncements({ locale, kind = "all" }: { locale: SupportedLocale; kind?: "all" | "supply" | "rates" }) {
  const fa = locale === "fa";
  const items = announcements.filter(item => kind === "all" || (kind === "rates" ? item.id.startsWith("scrap") : !item.id.startsWith("scrap")));
  const date = new Intl.DateTimeFormat(fa ? "fa-IR" : "en-GB", { dateStyle: "long", timeZone: "Asia/Tehran" });
  return <section className="container company-announcements" aria-labelledby={`announcements-${kind}`}>
    <h2 id={`announcements-${kind}`}>{fa ? "آرشیو اطلاعیه‌های مجموعه" : "Company announcement archive"}</h2>
    <p className="announcement-intro">{fa ? "اطلاعیه‌های منتشرشده در کانال معرفی‌شدهٔ مجموعه، با تاریخ و لینک پیام اصلی. تصاویر، پوستر ناشر هستند؛ مقدار، قیمت و شرایط مربوط به تاریخ آگهی‌اند. به‌روزرسانی این بخش دستی است." : "Posts from the company’s designated public channel, with dates and original links. Images are publisher posters; quantities, prices and terms relate to the announcement date. This archive is updated manually."}</p>
    <div className="announcement-grid">{items.map(item => <article className="announcement-card" key={item.id} data-announcement={item.id}>
      <a className="announcement-image" href={item.image.src} target="_blank" rel="noopener noreferrer" aria-label={`${item.title[locale]} — ${fa ? "تصویر کامل، تب جدید" : "full poster, new tab"}`}><Image unoptimized src={item.image.src} alt={fa ? `پوستر ${item.title.fa}؛ خلاصه و تاریخ در متن کارت` : `${item.title.en} poster; summary and date in this card`} width={item.image.width} height={item.image.height} /></a>
      <div className="announcement-body"><p className="announcement-date"><time dateTime={item.date}>{date.format(new Date(`${item.date}T12:00:00+03:30`))}</time> · {fa ? "آرشیو" : "Archive"}</p><h3>{item.title[locale]}</h3><p>{item.summary[locale]}</p><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">{fa ? "مشاهدهٔ پیام اصلی (تب جدید)" : "View original post (new tab)"}</a><Link className="announcement-inquiry" href={`/${locale}/inquiry?item=${encodeURIComponent(item.id)}#request-template`}>{fa ? "استعلام دربارهٔ این اطلاعیه" : "Inquire about this announcement"}</Link></div>
    </article>)}</div>
  </section>;
}
