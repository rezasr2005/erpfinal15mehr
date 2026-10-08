export const supportedLocales = ["fa", "en"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];
export const defaultLocale: SupportedLocale = "fa";
export const localeDirection: Record<SupportedLocale, "rtl" | "ltr"> = {
  fa: "rtl",
  en: "ltr",
};
