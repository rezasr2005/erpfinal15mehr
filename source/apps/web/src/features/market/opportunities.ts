import type { LocalizedText } from "@/features/listings/types";

export type Opportunity = {
  id: string;
  type: "auction" | "tender";
  status: "open" | "closed";
  title: LocalizedText;
  organizer: LocalizedText;
  city: LocalizedText;
  description: LocalizedText;
  deadline: string;
  requirements: LocalizedText;
};

// Fictional fixtures for local development. These are not commercial opportunities.
export const demoOpportunities: Opportunity[] = [
  {
    id: "demo-auction-01", type: "auction", status: "open",
    title: { fa: "نمونهٔ مزایدهٔ ضایعات آهن تفکیک‌شده", en: "Sample auction: sorted ferrous scrap" },
    organizer: { fa: "برگزارکنندهٔ آزمایشی الف", en: "Demo organizer A" },
    city: { fa: "تهران — محل آزمایشی", en: "Tehran — demo location" },
    description: { fa: "نمونه‌ای برای نمایش مشخصات محموله، شرایط بازدید و پیگیری فرصت. محمولهٔ واقعی برای عرضه وجود ندارد.", en: "A fixture illustrating load details, inspection terms and opportunity review. No actual load is offered." },
    deadline: "2026-10-20T16:00:00+03:30",
    requirements: { fa: "در نسخهٔ واقعی، شرایط بازدید، تضمین شرکت، نحوهٔ پیشنهاد و حمل باید از آگهی اصلی استخراج شوند.", en: "For a real announcement, inspection, participation guarantees, bidding and transport terms must come from the original source." },
  },
  {
    id: "demo-tender-01", type: "tender", status: "open",
    title: { fa: "نمونهٔ مناقصهٔ تأمین مقاطع فولادی", en: "Sample tender: steel section supply" },
    organizer: { fa: "برگزارکنندهٔ آزمایشی ب", en: "Demo organizer B" },
    city: { fa: "اصفهان — محل آزمایشی", en: "Isfahan — demo location" },
    description: { fa: "نمونهٔ درخواست تأمین برای بررسی شکل نمایش نوع کالا، استاندارد و شرایط تحویل؛ سفارش واقعی نیست.", en: "A supply-request fixture showing product type, standards and delivery terms; not a real order." },
    deadline: "2026-10-22T12:00:00+03:30",
    requirements: { fa: "در آگهی واقعی، فهرست مقاطع، مقدار، استاندارد، مدارک و برنامهٔ تحویل باید اعلام شوند.", en: "A real tender must specify sections, quantities, standards, required documents and delivery schedule." },
  },
  {
    id: "demo-auction-02", type: "auction", status: "closed",
    title: { fa: "نمونهٔ فرصت پایان‌یافتهٔ تجهیزات صنعتی", en: "Sample closed opportunity: industrial equipment" },
    organizer: { fa: "برگزارکنندهٔ آزمایشی ج", en: "Demo organizer C" },
    city: { fa: "یزد — محل آزمایشی", en: "Yazd — demo location" },
    description: { fa: "این نمونه برای نمایش آرشیو فرصت‌ها و فیلتر وضعیت پایان‌یافته است؛ آگهی تجاری واقعی ندارد.", en: "This fixture demonstrates archived opportunities and closed-status filtering. It has no real commercial announcement." },
    deadline: "2026-10-01T16:00:00+03:30",
    requirements: { fa: "فرصت‌های پایان‌یافته باید از فرصت‌های قابل پیگیری تفکیک شوند و تاریخ اصلی آگهی حفظ شود.", en: "Closed opportunities should be distinguished from active ones while preserving the original announcement date." },
  },
];
