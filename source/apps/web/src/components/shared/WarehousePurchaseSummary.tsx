import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { purchaseAnnouncement } from "@/features/listings/data";

export function WarehousePurchaseSummary({ locale, full = false }: { locale: SupportedLocale; full?: boolean }) {
  const fa = locale === "fa";
  return <section className="warehouse-purchase-summary" id={full ? "khavarshahr-purchase" : undefined}>
    <h2>{fa ? "نرخ خرید ضایعات سایت خاورشهر" : "Khavarshahr site scrap purchase rates"}</h2>
    <p>{fa ? `اعلامیهٔ مورخ ${purchaseAnnouncement.persianDate}؛ مبالغ به ریال برای هر کیلوگرم.` : "Announcement dated 6 October 2026; amounts in IRR per kilogram."}</p>
    <p>{fa ? "تسویهٔ کلیهٔ درجات: ۳ روز کاری. وضعیت مالیات و پایان اعتبار نرخ در اعلامیه ذکر نشده؛ نرخ و شرایط پذیرش را پیش از تحویل با انبار تأیید کنید." : "Payment for all grades: 3 working days. Tax status and rate expiry were not stated; confirm rates and acceptance terms with the warehouse before delivery."}</p>
    <p>{fa ? "برای استعلام خرید فلزات رنگی با شمارهٔ ۰۹۱۹۱۲۲۲۷۶۳ تماس بگیرید؛ مبلغی برای این گروه در اعلامیه درج نشده است." : "For non-ferrous metals purchasing, call 09191222763; the announcement does not specify rates for this group."}</p>
    <div>{!full && <Link href={`/${locale}/prices#khavarshahr-purchase`}>{fa ? "مشاهدهٔ هشت ردیف نرخ اعلام‌شده" : "View the eight announced rates"}</Link>}<a href={purchaseAnnouncement.sourceUrl} target="_blank" rel="noopener noreferrer">{fa ? "کانال اعلام نرخ انبار (تب جدید)" : "Warehouse rate channel (new tab)"}</a></div>
  </section>;
}
