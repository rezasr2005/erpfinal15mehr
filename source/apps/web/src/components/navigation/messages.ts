import type { SupportedLocale } from "@kavian/config";

export const navigation = [
  { key: "home", path: "" },
  { key: "market", path: "/market" },
  { key: "erp", path: "/erp" },
  { key: "products", path: "/products" },
  { key: "scrap", path: "/scrap" },
  { key: "inventory", path: "/inventory" },
  { key: "prices", path: "/prices" },
  { key: "sellScrap", path: "/sell-scrap" },
  { key: "inquiry", path: "/inquiry" },
  { key: "warehouse", path: "/khavarshahr" },
  { key: "clients", path: "/clients" },
  { key: "about", path: "/about" },
  { key: "contact", path: "/contact" },
] as const;

export const messages = {
  fa: {
    brand: "هلدینگ فولاد کاویان سپنتا", brandCaption: "تأمین و تجارت فولاد",
    market: "بازار کاویان", erp: "ERP کاویان", home: "خانه", products: "محصولات", scrap: "ضایعات", inventory: "موجودی روز",
    prices: "قیمت روز", sellScrap: "خرید ضایعات", inquiry: "استعلام قیمت",
    warehouse: "انبار خاورشهر", clients: "مشتریان و پروژه‌ها", about: "درباره ما", contact: "تماس با ما",
    navigation: "منوی اصلی", openMenu: "باز کردن منو", closeMenu: "بستن منو", language: "انتخاب زبان",
    skip: "رفتن به محتوای اصلی", intro: "هلدینگ فولاد کاویان سپنتا؛ تأمین و تجارت فولاد، آهن‌آلات و ضایعات صنعتی.",
    links: "دسترسی سریع", services: "خدمات", contactTitle: "ارتباط با ما",
    address: "آدرس: به‌زودی اعلام می‌شود", phone: "تلفن: به‌زودی اعلام می‌شود", email: "ایمیل: به‌زودی اعلام می‌شود",
    social: "شبکه‌های اجتماعی", socialPending: "لینک‌های رسمی به‌زودی اضافه می‌شوند",
    rights: "تمام حقوق محفوظ است.",
  },
  en: {
    brand: "Kavian Sepanta Steel Holding", brandCaption: "Steel supply & trading",
    market: "Kavian Market", erp: "Kavian ERP", home: "Home", products: "Products", scrap: "Scrap", inventory: "Daily inventory",
    prices: "Daily prices", sellScrap: "Sell scrap", inquiry: "Request a quote",
    warehouse: "Khavarshahr warehouse", clients: "Clients & projects", about: "About us", contact: "Contact us",
    navigation: "Main navigation", openMenu: "Open menu", closeMenu: "Close menu", language: "Select language",
    skip: "Skip to main content", intro: "Kavian Sepanta Steel Holding — supply and trading of steel, metal products and industrial scrap.",
    links: "Quick links", services: "Services", contactTitle: "Get in touch",
    address: "Address: to be announced", phone: "Phone: to be announced", email: "Email: to be announced",
    social: "Social media", socialPending: "Official links will be added soon",
    rights: "All rights reserved.",
  },
} satisfies Record<SupportedLocale, Record<string, string>>;
