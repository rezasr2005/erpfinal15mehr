import { marketPrices } from "@/features/market-sources/prices";
import type { SupportedLocale } from "@kavian/config";
import { announcements } from "@/features/announcements/data";
import { inventoryItems, priceItems } from "@/features/listings/data";
import { inquiryContent } from "./content";

export function inquiryContext(locale: SupportedLocale, itemId: string | undefined) {
  if (!itemId) return undefined;
  const announcement = announcements.find(item => item.id === itemId);
  const item = [...priceItems, ...inventoryItems, ...marketPrices].find(item => item.id === itemId);
  if (!announcement && !item) return undefined;
  const fa = locale === "fa";
  const name = announcement?.title[locale] ?? item!.name[locale];
  const specifications = announcement?.summary[locale] ?? item!.specifications[locale];
  const date = announcement?.date ?? item!.updatedAt;
  const sourceUrl = announcement?.sourceUrl ?? item!.sourceUrl;
  const location = item?.location[locale] ?? (fa ? "محل تحویل مورد نظر: …" : "Preferred delivery location: …");
  const dateText = new Intl.DateTimeFormat(fa ? "fa-IR" : "en-GB", { dateStyle: "long", timeZone: "Asia/Tehran" }).format(new Date(date));
  const subject = item && "direction" in item && item.direction === "buy"
    ? (fa ? `استعلام شرایط خرید انبار برای ${name}` : `Warehouse purchasing inquiry for ${name}`)
    : (fa ? `استعلام ${name}` : `Inquiry about ${name}`);
  const rate = item && "amount" in item ? `${new Intl.NumberFormat(locale).format(item.amount)} ${item.currency === "IRR" ? (fa ? "ریال" : "IRR") : (fa ? "تومان" : "toman")} / ${item.unit[locale]}` : undefined;
  const terms = item?.terms[locale];
  const reference = fa
    ? `مرجع درخواست: ${name}\nمشخصات درج‌شده در مرجع: ${specifications}\nتاریخ مرجع: ${dateText}\n${rate ? `نرخ درج‌شده در مرجع (تاریخی): ${rate}\n` : ""}${sourceUrl ? `لینک مرجع: ${sourceUrl}\n` : ""}${terms ? `شرایط مرجع: ${terms}\n` : ""}لطفاً موجودی، قیمت، مشخصات و شرایط فعلی را تأیید کنید؛ این درخواست بر مبنای اطلاعات تاریخ‌دار تهیه شده است.`
    : `Request reference: ${name}\nSpecifications stated in the reference: ${specifications}\nReference date: ${dateText}\n${rate ? `Rate stated in the reference (historical): ${rate}\n` : ""}${sourceUrl ? `Source link: ${sourceUrl}\n` : ""}${terms ? `Reference terms: ${terms}\n` : ""}Please confirm current availability, prices, specifications and terms; this request uses dated reference information.`;
  // Announced supply quantities are reference information, never order quantities.
  const template = `${reference}\n\n${inquiryContent[locale].template
    .replace(fa ? "موضوع درخواست: …" : "Request subject: …", fa ? `موضوع درخواست: ${subject}` : `Request subject: ${subject}`)
    .replace(fa ? "نوع و مشخصات محصول یا ضایعات: …" : "Product or scrap type and specifications: …", fa ? `نوع و مشخصات محصول یا ضایعات: ${name} — مشخصات مورد نیاز من: …` : `Product or scrap type and specifications: ${name} — my required specifications: …`)
    .replace(fa ? "شهر و محل تحویل یا محموله: …" : "City and delivery or load location: …", fa ? `شهر و محل تحویل یا محموله: ${location}` : `City and delivery or load location: ${location}`)}`;
  return { id: itemId, name, date, dateText, sourceUrl, template };
}
