export const companyContact = {
  website: "https://www.fooladkavian.com",
  email: "info@fooladkavian.com",
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
