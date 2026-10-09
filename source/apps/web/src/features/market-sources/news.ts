import type { LocalizedText } from "@/features/listings/types";

export type MarketNewsItem = {
  id: string;
  publishedAt: string;
  sourceUrl: string;
  title: LocalizedText;
  summary: LocalizedText;
  note?: LocalizedText;
};

// Editorial summaries of the owner's designated public source, not full reposts.
export const marketNews: MarketNewsItem[] = [
  {
    id: "irsteelnews-97664", publishedAt: "2026-10-08T08:58:17+00:00", sourceUrl: "https://t.me/irsteelnews/97664",
    title: { fa: "دیدگاه گزارشگر فولاد: بازار در انتظار جهت نرخ ارز", en: "Steel Reporter commentary: market watching exchange-rate direction" },
    summary: { fa: "ناشر از ثبات عمدهٔ قیمت‌ها و آرام‌شدن تقاضا نوشته و کاهش هیجان خرید را به تعدیل نرخ ارز مرتبط دانسته است. این مطلب دیدگاه بازار است؛ ادعاهای مربوط به محدودیت تولید در آن تأیید رسمی همراه ندارند.", en: "The publisher described mostly unchanged prices and quieter demand, linking calmer buying to exchange-rate adjustment. This is market commentary; its production-constraint claims are not accompanied by official confirmation." },
    note: { fa: "زمان انتشار پیام ۱۶ مهر است، اما متن ناشر تاریخ ۱۵ مهر دارد؛ تاریخ نمایش بر اساس زمان انتشار تلگرام است.", en: "The Telegram timestamp is 8 October, while the post text says 7 October. The displayed date follows the publication timestamp." },
  },
  {
    id: "irsteelnews-97663", publishedAt: "2026-10-07T13:55:14+00:00", sourceUrl: "https://t.me/irsteelnews/97663",
    title: { fa: "گزارش کاهش شاخص شمش در بازار خارج از بورس", en: "Reported decline in the off-exchange billet index" },
    summary: { fa: "گزارشگر فولاد جهت شاخص شمش و نرخ‌های گردآوری‌شده از چهار مرجع بازار را کاهشی اعلام کرده است. عددهای این پیام، شاخص ناشر هستند؛ با نرخ خرید ضایعات یا پیشنهاد فروش کاویان یکسان نیستند.", en: "Steel Reporter marked its billet index and collected rates from four market references as declining. These are the publisher’s indicators, distinct from scrap purchase rates and Kavian selling offers." },
    note: { fa: "واحد وزن در متن پیام تصریح نشده؛ اعداد آن به جدول ریال بر کیلوگرم منتقل نشده‌اند.", en: "The post does not explicitly state a weight unit, so its figures have not been imported into the IRR/kg table." },
  },
  {
    id: "irsteelnews-97658", publishedAt: "2026-10-07T13:18:10+00:00", sourceUrl: "https://t.me/irsteelnews/97658",
    title: { fa: "گزارش معاملات میلگرد آجدار در بورس کالا", en: "Reported commodity-exchange rebar trading" },
    summary: { fa: "ناشر میانگین موزون نرخ پایانی معاملات میلگرد آجدار را ۱۱۰٬۸۰۰ تومان با احتساب مالیات اعلام کرده و آن را با نرخ‌های بازار مقایسه کرده است. این عدد، گزارش ناشر از معاملات همان روز است و قیمت قابل سفارش در سایت کاویان نیست.", en: "The publisher reported a weighted average closing rebar trading rate of 110,800 toman including VAT and compared it with market quotations. This is its report for that trading day, not an orderable Kavian price." },
    note: { fa: "واحد وزن در متن پیام مشخص نیست؛ برای مقایسهٔ عددی، جزئیات گزارش اصلی را بررسی کنید.", en: "The post text does not specify the weight unit; check the original report before numerical comparison." },
  },
  {
    id: "irsteelnews-97646", publishedAt: "2026-10-07T08:31:21+00:00", sourceUrl: "https://t.me/irsteelnews/97646",
    title: { fa: "شنیده‌های بازار میلگرد: ثبات بیشتر مبادی، افزایش در سایزهای ریز", en: "Rebar market reports: most sources unchanged, small diameters rising" },
    summary: { fa: "در گزارش شنیده‌های ۱۵ مهر، بیشتر مبادی میلگرد ثابت اعلام شده‌اند و افزایش‌ها عمدتاً به سایزهای ۸ تا ۱۲ مربوط بوده است. ناشر این مشاهده را هم‌زمان با عقب‌نشینی نسبی نرخ ارز مطرح کرده؛ نتیجه مربوط به همان تاریخ است.", en: "In its 7 October market-hearsay report, the publisher described most rebar sources as unchanged, with increases concentrated in 8–12 mm sizes alongside a modest currency retreat. This observation belongs to that date." },
  },
];
