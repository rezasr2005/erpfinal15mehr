import type { PriceItem } from "@/features/listings/types";

export type ExternalPrice = Omit<PriceItem, "group"> & { sourceTime: string };
// Manually reviewed source snapshot; never merged with Kavian purchase rates.
export const marketPrices: ExternalPrice[] = [
  {
    "id": "esfahan-rebar-14",
    "name": {
      "fa": "میلگرد 14 ذوب آهن اصفهان",
      "en": "Esfahan Steel A3 rebar, 14 mm"
    },
    "specifications": {
      "fa": "A3، قطر ۱۴ میلی‌متر، طول ۱۲ متر",
      "en": "A3, 14 mm diameter, 12 m length"
    },
    "location": {
      "fa": "اصـفهان",
      "en": "Isfahan"
    },
    "updatedAt": "2026-10-08",
    "sourceTime": "09:05",
    "source": {
      "fa": "اصفهان‌آهن",
      "en": "Esfahan Ahan"
    },
    "sourceUrl": "https://esfahanahan.com/product/میلگرد-ذوب-آهن-اصفهان/size-14/",
    "terms": {
      "fa": "نرخ فروش منتشرشدهٔ اصفهان‌آهن، شامل ۱۰٪ مالیات ارزش افزوده؛ عرضه و قیمت کاویان نیست. هزینهٔ حمل و شرایط تسویه باید جداگانه تأیید شوند.",
      "en": "Esfahan Ahan published selling rate, including 10% VAT; not a Kavian offer. Confirm freight costs and settlement terms separately."
    },
    "unit": {
      "fa": "کیلوگرم",
      "en": "kg"
    },
    "direction": "sell",
    "amount": 1240000,
    "currency": "IRR",
    "priceType": "asking",
    "tax": "included"
  },
  {
    "id": "esfahan-rebar-16",
    "name": {
      "fa": "میلگرد 16 ذوب آهن اصفهان",
      "en": "Esfahan Steel A3 rebar, 16 mm"
    },
    "specifications": {
      "fa": "A3، قطر ۱۶ میلی‌متر، طول ۱۲ متر",
      "en": "A3, 16 mm diameter, 12 m length"
    },
    "location": {
      "fa": "اصـفهان",
      "en": "Isfahan"
    },
    "updatedAt": "2026-10-08",
    "sourceTime": "09:05",
    "source": {
      "fa": "اصفهان‌آهن",
      "en": "Esfahan Ahan"
    },
    "sourceUrl": "https://esfahanahan.com/product/میلگرد-ذوب-آهن-اصفهان/size-16/",
    "terms": {
      "fa": "نرخ فروش منتشرشدهٔ اصفهان‌آهن، شامل ۱۰٪ مالیات ارزش افزوده؛ عرضه و قیمت کاویان نیست. هزینهٔ حمل و شرایط تسویه باید جداگانه تأیید شوند.",
      "en": "Esfahan Ahan published selling rate, including 10% VAT; not a Kavian offer. Confirm freight costs and settlement terms separately."
    },
    "unit": {
      "fa": "کیلوگرم",
      "en": "kg"
    },
    "direction": "sell",
    "amount": 1220000,
    "currency": "IRR",
    "priceType": "asking",
    "tax": "included"
  },
  {
    "id": "esfahan-rebar-18",
    "name": {
      "fa": "میلگرد 18 ذوب آهن اصفهان",
      "en": "Esfahan Steel A3 rebar, 18 mm"
    },
    "specifications": {
      "fa": "A3، قطر ۱۸ میلی‌متر، طول ۱۲ متر",
      "en": "A3, 18 mm diameter, 12 m length"
    },
    "location": {
      "fa": "اصـفهان",
      "en": "Isfahan"
    },
    "updatedAt": "2026-10-08",
    "sourceTime": "09:05",
    "source": {
      "fa": "اصفهان‌آهن",
      "en": "Esfahan Ahan"
    },
    "sourceUrl": "https://esfahanahan.com/product/میلگرد-ذوب-آهن-اصفهان/size-18/",
    "terms": {
      "fa": "نرخ فروش منتشرشدهٔ اصفهان‌آهن، شامل ۱۰٪ مالیات ارزش افزوده؛ عرضه و قیمت کاویان نیست. هزینهٔ حمل و شرایط تسویه باید جداگانه تأیید شوند.",
      "en": "Esfahan Ahan published selling rate, including 10% VAT; not a Kavian offer. Confirm freight costs and settlement terms separately."
    },
    "unit": {
      "fa": "کیلوگرم",
      "en": "kg"
    },
    "direction": "sell",
    "amount": 1195000,
    "currency": "IRR",
    "priceType": "asking",
    "tax": "included"
  },
  {
    "id": "esfahan-sheet-roll-2",
    "name": {
      "fa": "ورق سیاه 2 میل-عرض 1 متر-رول",
      "en": "Mobarakeh hot-rolled coil, 2 mm"
    },
    "specifications": {
      "fa": "فولاد مبارکه؛ ضخامت ۲ میلی‌متر، عرض ۱ متر، رول",
      "en": "Mobarakeh; 2 mm thick, 1 m wide, coil"
    },
    "location": {
      "fa": "اصفهان-انبار",
      "en": "Isfahan warehouse"
    },
    "updatedAt": "2026-10-08",
    "sourceTime": "07:51",
    "source": {
      "fa": "اصفهان‌آهن",
      "en": "Esfahan Ahan"
    },
    "sourceUrl": "https://esfahanahan.com/product/ورق-سیاه-فولاد-مبارکه/zekhamat_mm-2/",
    "terms": {
      "fa": "نرخ فروش منتشرشدهٔ اصفهان‌آهن، شامل ۱۰٪ مالیات ارزش افزوده؛ عرضه و قیمت کاویان نیست. هزینهٔ حمل و شرایط تسویه باید جداگانه تأیید شوند.",
      "en": "Esfahan Ahan published selling rate, including 10% VAT; not a Kavian offer. Confirm freight costs and settlement terms separately."
    },
    "unit": {
      "fa": "کیلوگرم",
      "en": "kg"
    },
    "direction": "sell",
    "amount": 1595000,
    "currency": "IRR",
    "priceType": "asking",
    "tax": "included"
  },
  {
    "id": "esfahan-sheet-cut-2",
    "name": {
      "fa": "ورق سیاه 2 میل-2*1 متر-برش‌خورده",
      "en": "Mobarakeh cut sheet, 2 mm"
    },
    "specifications": {
      "fa": "فولاد مبارکه؛ ضخامت ۲ میلی‌متر، ابعاد ۲ × ۱ متر، برش‌خورده",
      "en": "Mobarakeh; 2 mm thick, 2 × 1 m cut sheet"
    },
    "location": {
      "fa": "اصفهان-انبار",
      "en": "Isfahan warehouse"
    },
    "updatedAt": "2026-10-08",
    "sourceTime": "07:51",
    "source": {
      "fa": "اصفهان‌آهن",
      "en": "Esfahan Ahan"
    },
    "sourceUrl": "https://esfahanahan.com/product/ورق-سیاه-فولاد-مبارکه/zekhamat_mm-2-9/",
    "terms": {
      "fa": "نرخ فروش منتشرشدهٔ اصفهان‌آهن، شامل ۱۰٪ مالیات ارزش افزوده؛ عرضه و قیمت کاویان نیست. هزینهٔ حمل و شرایط تسویه باید جداگانه تأیید شوند.",
      "en": "Esfahan Ahan published selling rate, including 10% VAT; not a Kavian offer. Confirm freight costs and settlement terms separately."
    },
    "unit": {
      "fa": "کیلوگرم",
      "en": "kg"
    },
    "direction": "sell",
    "amount": 1615000,
    "currency": "IRR",
    "priceType": "asking",
    "tax": "included"
  },
  {
    "id": "esfahan-dri-golgohar",
    "name": {
      "fa": "آهن اسفنجی گل گهر",
      "en": "Gol Gohar direct-reduced iron"
    },
    "specifications": {
      "fa": "آهن اسفنجی گل گهر؛ واحد درج‌شده کیلوگرم",
      "en": "Gol Gohar DRI; source unit: kilogram"
    },
    "location": {
      "fa": "سیرجان",
      "en": "Sirjan"
    },
    "updatedAt": "2026-10-07",
    "sourceTime": "12:54",
    "source": {
      "fa": "اصفهان‌آهن",
      "en": "Esfahan Ahan"
    },
    "sourceUrl": "https://esfahanahan.com/product/آهن-اسفنجی/آهن-اسفنجی-گل-گهر/",
    "terms": {
      "fa": "نرخ فروش منتشرشدهٔ اصفهان‌آهن، شامل ۱۰٪ مالیات ارزش افزوده؛ عرضه و قیمت کاویان نیست. هزینهٔ حمل و شرایط تسویه باید جداگانه تأیید شوند.",
      "en": "Esfahan Ahan published selling rate, including 10% VAT; not a Kavian offer. Confirm freight costs and settlement terms separately."
    },
    "unit": {
      "fa": "کیلوگرم",
      "en": "kg"
    },
    "direction": "sell",
    "amount": 638000,
    "currency": "IRR",
    "priceType": "asking",
    "tax": "included"
  },
  {
    "id": "esfahan-dri-baft",
    "name": {
      "fa": "آهن اسفنجی بافت",
      "en": "Baft direct-reduced iron"
    },
    "specifications": {
      "fa": "آهن اسفنجی بافت؛ واحد درج‌شده کیلوگرم",
      "en": "Baft DRI; source unit: kilogram"
    },
    "location": {
      "fa": "کرمان",
      "en": "Kerman"
    },
    "updatedAt": "2026-10-07",
    "sourceTime": "12:54",
    "source": {
      "fa": "اصفهان‌آهن",
      "en": "Esfahan Ahan"
    },
    "sourceUrl": "https://esfahanahan.com/product/آهن-اسفنجی/آهن-اسفنجی-بافت/",
    "terms": {
      "fa": "نرخ فروش منتشرشدهٔ اصفهان‌آهن، شامل ۱۰٪ مالیات ارزش افزوده؛ عرضه و قیمت کاویان نیست. هزینهٔ حمل و شرایط تسویه باید جداگانه تأیید شوند.",
      "en": "Esfahan Ahan published selling rate, including 10% VAT; not a Kavian offer. Confirm freight costs and settlement terms separately."
    },
    "unit": {
      "fa": "کیلوگرم",
      "en": "kg"
    },
    "direction": "sell",
    "amount": 643500,
    "currency": "IRR",
    "priceType": "asking",
    "tax": "included"
  }
];
