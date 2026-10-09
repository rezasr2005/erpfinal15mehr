import type { SupportedLocale } from "@kavian/config";

type Announcement = {
  id: string;
  date: string;
  sourceUrl: string;
  image: { src: string; width: number; height: number };
  title: Record<SupportedLocale, string>;
  summary: Record<SupportedLocale, string>;
};

// Manually reviewed public-channel posts. Archived offers, not live availability.
export const announcements: Announcement[] = [
  {
    id: "billet-3sp-14050715", date: "2026-10-07",
    sourceUrl: "https://t.me/kaviankhavarshahr403/417",
    image: { src: "/announcements/billet-3sp-14050715.jpg", width: 533, height: 800 },
    title: { fa: "اطلاعیهٔ عرضهٔ شمش 3SP", en: "3SP billet supply announcement" },
    summary: { fa: "در پوستر ناشر: ۲۰۰ تن شمش 3SP، مقطع ۱۳۰ × ۱۳۰ میلی‌متر، طول ۱۲ متر و منگنز ۰٫۶۵٪؛ قیمت عددی اعلام نشده است. مقدار و مشخصات مربوط به همین آگهی‌اند و موجودی فعلی باید استعلام شود.", en: "Publisher’s poster: 200 tonnes of 3SP billets, 130 × 130 mm section, 12 m length and 0.65% manganese. No numeric price is stated. Quantity and specifications belong to this announcement; current stock requires confirmation." },
  },
  {
    id: "slab-14050715", date: "2026-10-07",
    sourceUrl: "https://t.me/kaviankhavarshahr403/418",
    image: { src: "/announcements/slab-14050715.jpg", width: 450, height: 800 },
    title: { fa: "اطلاعیهٔ عرضهٔ اسلب دستی", en: "Manual-cast slab supply announcement" },
    summary: { fa: "در پوستر ناشر: عرضهٔ هفتگی ۷۰ تن، ابعاد ۱۰ × ۶۰ × ۱۶۵ سانتی‌متر و تحویل از انبار خاوران. قیمت و وضعیت موجودی امروز اعلام نشده‌اند؛ شرایط معامله را پیش از سفارش تأیید کنید.", en: "Publisher’s poster: weekly supply of 70 tonnes, 10 × 60 × 165 cm dimensions and delivery from the Khavaran depot. No current price or stock status is provided; confirm trading terms before ordering." },
  },
  {
    id: "scrap-rates-14050714", date: "2026-10-06",
    sourceUrl: "https://t.me/kaviankhavarshahr403/414",
    image: { src: "/announcements/scrap-rates-14050714.jpg", width: 534, height: 800 },
    title: { fa: "پوستر نرخ خرید ضایعات — ۱۴ مهر", en: "Scrap purchase rate poster — 6 October" },
    summary: { fa: "پوستر کانال برای ۱۴ مهر، نرخ‌های ۷۱۰٬۰۰۰، ۶۹۷٬۰۰۰، ۶۹۶٬۰۰۰، ۶۷۵٬۰۰۰، ۶۷۰٬۰۰۰، ۶۵۶٬۰۰۰، ۶۵۰٬۰۰۰ و ۶۱۵٬۰۰۰ ریال و پرداخت نقدی را درج کرده است. این نسخه با متن قبلی ارسالی مجموعه تفاوت دارد؛ نرخ روز یا شرایط قطعی معامله نیست.", en: "The 6 October channel poster lists 710,000; 697,000; 696,000; 675,000; 670,000; 656,000; 650,000 and 615,000 IRR, with cash payment. This version differs from the earlier company-supplied text; it is not a current or binding trading quote." },
  },
];
