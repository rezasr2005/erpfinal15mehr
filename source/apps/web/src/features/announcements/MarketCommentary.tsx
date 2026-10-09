import type { SupportedLocale } from "@kavian/config";

export function MarketCommentary({ locale }: { locale: SupportedLocale }) {
  const fa = locale === "fa";
  return <article className="container market-commentary" aria-labelledby="channel-commentary-title">
    <p className="home-eyebrow">{fa ? "دیدگاه منتشرشدهٔ مجموعه" : "Published company commentary"}</p>
    <h3 id="channel-commentary-title">{fa ? "نبض بازار کاویان — ۱۲ مهر ۱۴۰۵" : "Kavian market pulse — 4 October 2026"}</h3>
    <p>{fa ? "کانال انبار در گزارش ۱۲ مهر، از افزایش نسبی تقاضا در برخی مقاطع و اثر هزینهٔ تأمین، عرضهٔ کارخانه‌ها و نوسانات ارز بر قیمت شمش و میلگرد گفته است. در بخش قراضه، گزارش بر کیفیت بار، رقابت خرید و حجم مصرف کارخانه‌ها تأکید می‌کند." : "In its 4 October report, the warehouse channel described relatively stronger demand in some steel sections and the effects of procurement costs, mill supply and exchange-rate changes on billet and rebar prices. For scrap, the report highlighted load quality, purchasing competition and mill consumption."}</p>
    <p>{fa ? "این متن، خلاصهٔ دیدگاه ناشر در همان تاریخ است؛ آمار معاملات یا پیش‌بینی مستقلاً تأییدشده همراه پیام ارائه نشده و وضعیت امروز از آن نتیجه‌گیری نمی‌شود." : "This summarizes the publisher’s view on that date. The post supplies no independently verified transaction statistics or forecast, and does not establish today’s market conditions."}</p>
    <a href="https://t.me/kaviankhavarshahr403/400" target="_blank" rel="noopener noreferrer">{fa ? "گزارش اصلی — ۱۲ مهر (تب جدید)" : "Original report — 4 October (new tab)"}</a>
  </article>;
}
