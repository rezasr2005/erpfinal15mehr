export const companyContact = {
  website: "https://www.fooladkavian.com",
  email: "info@fooladkavian.com",
  // Public warehouse-channel post 396 names this number for WhatsApp.
  whatsapp: "https://wa.me/989191222762",
  billetTelegram: "https://t.me/fooladkavianshemsh",
  telegram: "https://t.me/Fooladkaviansepanta97",
  warehouseChannels: [
    { name: { fa: "تلگرام انبار خاورشهر", en: "Khavarshahr warehouse Telegram" }, href: "https://t.me/kaviankhavarshahr403", handle: "@kaviankhavarshahr403" },
    { name: { fa: "بلهٔ انبار خاورشهر", en: "Khavarshahr warehouse Bale" }, href: "https://ble.ir/kaviankhavarshahr97", handle: "@kaviankhavarshahr97" },
    { name: { fa: "روبیکای انبار خاورشهر", en: "Khavarshahr warehouse Rubika" }, href: "https://rubika.ir/khavarshahr_kavian97", handle: "@khavarshahr_kavian97" },
  ],
  warehouseContacts: [
    { number: "09121898819", role: { fa: "ارتباط با مدیریت — وظیفه", en: "Management — Vazifeh" } },
    { number: "09191222761", role: { fa: "مالی انبار", en: "Warehouse finance" } },
    { number: "09191222762", role: { fa: "مدیر داخلی هلدینگ", en: "Holding operations manager" } },
    { number: "09191222763", role: { fa: "خرید فلزات رنگی", en: "Non-ferrous metals purchasing" } },
  ],
  instagram: "https://www.instagram.com/fooladkaviansepantacompany/",
  officePhones: ["09191222761", "09191222762", "09191222763"],
  founderPhone: "09121898819",
  officeAddress: {
    fa: "تهران، پاسداران، حصار بوعلی، مجتمع تجاری و اداری سایه، بلوک A، طبقهٔ ۸، واحد ۸۰۸",
    en: "Unit 808, Floor 8, Block A, Sayeh Commercial and Office Complex, Hesar Bouali, Pasdaran, Tehran, Iran",
  },
  warehouseAddress: {
    fa: "جادهٔ خاوران، بعد از خاورشهر، نرسیده به عباس‌آباد علاقبند، بین طوس ۱۳ و ۱۴، آهن‌آلات فولاد کاویان سپنتا",
    en: "Khavaran Road, after Khavarshahr, before Abbasabad Alaqband, between Tous 13 and 14, Foolad Kavian Sepanta steel depot, Iran",
  },
};

export function telephoneHref(number: string) {
  return `tel:+98${number.slice(1)}`;
}

export function mapSearchHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
