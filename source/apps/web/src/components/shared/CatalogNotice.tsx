import type { SupportedLocale } from "@kavian/config";

export function CatalogNotice({ locale }: { locale: SupportedLocale }) {
  return <p className="catalog-notice">{locale === "fa" ? "اطلاعات این بخش بر اساس کاتالوگ‌های قدیمی مجموعه درج شده و به‌روزرسانی خواهد شد." : "This section uses information from the group’s older catalogues and will be updated."}</p>;
}
