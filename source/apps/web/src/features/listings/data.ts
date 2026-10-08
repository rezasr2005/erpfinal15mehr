import type { InventoryItem, PriceItem } from "./types";

export const inventoryItems: InventoryItem[] = [];

// Owner-supplied announcement dated 1405/07/14 (2026-10-06).
// Owner confirmed IRR/kg. No publication time, tax status or expiry was supplied.
export const purchaseAnnouncement = {
  date: "2026-10-06",
  persianDate: "۱۴۰۵/۰۷/۱۴",
  sourceUrl: "https://t.me/kaviankhavarshahr403",
};

const grades = [
  { name: { fa: "روغنی نرمه", en: "Thin oily steel scrap" }, specifications: { fa: "زیر دو میلی‌متر", en: "Under 2 mm" }, amount: 690000 },
  { name: { fa: "روغنی ضخیم و پولکی ریزبار", en: "Thick oily steel and small flaky scrap" }, specifications: { fa: "مطابق دسته‌بندی اعلامیهٔ انبار", en: "As classified in the warehouse announcement" }, amount: 680000 },
  { name: { fa: "سوپروژه نوبار", en: "New production scrap — Supervezhe" }, specifications: { fa: "فقط سرشمش، سر میلگرد، سر نبشی و ناودانی", en: "Only billet, rebar, angle and channel ends" }, amount: 680000 },
  { name: { fa: "کلافی", en: "Coil scrap" }, specifications: { fa: "مطابق دسته‌بندی اعلامیهٔ انبار", en: "As classified in the warehouse announcement" }, amount: 670000 },
  { name: { fa: "ویژه برشی خورد شده", en: "Special cut scrap" }, specifications: { fa: "برشی خردشده، مطابق اعلامیه", en: "Cut into small pieces, as announced" }, amount: 650000 },
  { name: { fa: "سنگین بار درب و پنجره (درجه ۱)", en: "Heavy door and window scrap — grade 1" }, specifications: { fa: "زیر ۵۰ سانتی‌متر", en: "Under 50 cm" }, amount: 640000 },
  { name: { fa: "سنگین بار برشی", en: "Heavy cut scrap" }, specifications: { fa: "مطابق دسته‌بندی اعلامیهٔ انبار", en: "As classified in the warehouse announcement" }, amount: 620000 },
  { name: { fa: "چدن، سبک، گالوانیزه، حلب بدون چاپ", en: "Cast iron, light scrap, galvanized steel and unprinted tinplate" }, specifications: { fa: "گروه مشترک نرخ در اعلامیهٔ انبار", en: "Combined price group in the warehouse announcement" }, amount: 600000 },
];

export const priceItems: PriceItem[] = grades.map((grade, index) => ({
  ...grade,
  id: `khavarshahr-14050714-${index + 1}`,
  group: "scrap",
  direction: "buy",
  currency: "IRR",
  unit: { fa: "کیلوگرم", en: "kg" },
  priceType: "asking",
  tax: "unspecified",
  updatedAt: purchaseAnnouncement.date,
  source: { fa: "اعلامیهٔ خاورشهر — متن ارسالی مجموعه؛ لینک کانال", en: "Khavarshahr announcement supplied by the company; channel link" },
  sourceUrl: purchaseAnnouncement.sourceUrl,
  location: { fa: "سایت خاورشهر", en: "Khavarshahr site" },
  terms: { fa: "تسویهٔ کلیهٔ درجات: ۳ روز کاری. نرخ مربوط به تاریخ اعلامیه است؛ پیش از تحویل، اعتبار نرخ و شرایط پذیرش را با انبار تأیید کنید.", en: "All grades: payment: 3 working days. Rates relate to the announcement date; confirm current validity and acceptance terms before delivery." },
}));
