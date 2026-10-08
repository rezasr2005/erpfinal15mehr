export const iranMobilePattern = /^09\d{9}$/;
export const isSupportedLocale = (value: string): value is "fa" | "en" => value === "fa" || value === "en";
