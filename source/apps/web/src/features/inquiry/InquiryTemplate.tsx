"use client";

import { companyContact } from "@/config/company";

import { useId, useRef, useState } from "react";
import type { SupportedLocale } from "@kavian/config";

const messages = {
  fa: { label: "متن درخواست شما", help: "جزئیات را در همین متن جایگزین کنید، سپس آن را کپی و از طریق راه‌های تماس ارسال کنید. متن با بازخوانی صفحه پاک می‌شود.", copy: "کپی متن درخواست", copying: "در حال کپی…", copied: "متن کپی شد؛ می‌توانید آن را در پیام یا ایمیل قرار دهید.", manual: "کپی خودکار در دسترس نیست. متن انتخاب شد؛ آن را با گزینهٔ کپی دستگاه یا Ctrl+C کپی کنید." },
  en: { label: "Your request text", help: "Replace the details below, then copy the text and send it using the contact channels. Reloading the page clears your edits.", copy: "Copy request text", copying: "Copying…", copied: "Text copied. You can paste it into a message or email.", manual: "Automatic copying is unavailable. The text is selected; use your device’s Copy option or Ctrl+C." },
};

export function InquiryTemplate({ locale, template }: { locale: SupportedLocale; template: string }) {
  const id = useId();
  const input = useRef<HTMLTextAreaElement>(null);
  const [request, setRequest] = useState(template);
  const [status, setStatus] = useState("");
  const [copying, setCopying] = useState(false);
  const text = messages[locale];

  async function copy() {
    if (!input.current) return;
    const value = input.current.value;
    setCopying(true);
    setStatus("");
    try {
      await navigator.clipboard.writeText(value);
      setStatus(text.copied);
    } catch {
      input.current?.focus();
      input.current?.select();
      setStatus(text.manual);
    } finally {
      setCopying(false);
    }
  }

  return <div className="inquiry-template">
    <label className="inquiry-template-label" htmlFor={id}>{text.label}</label>
    <p id={`${id}-help`} className="inquiry-template-help">{text.help}</p>
    <textarea ref={input} id={id} aria-describedby={`${id}-help`} className="inquiry-outline" value={request} rows={9} onChange={(event) => { setRequest(event.target.value); setStatus(""); }} />
    <div className="inquiry-template-actions">
      <button className="inquiry-copy" type="button" disabled={copying} onClick={copy}>{copying ? text.copying : text.copy}</button>
      <a className="inquiry-send" href={`mailto:${companyContact.email}?subject=${encodeURIComponent(locale === "fa" ? "استعلام — فولاد کاویان سپنتا" : "Pricing inquiry — Kavian Sepanta")}&body=${encodeURIComponent(request)}`}>{locale === "fa" ? "باز کردن پیش‌نویس ایمیل" : "Open email draft"}</a>
      <a className="inquiry-send" href={`${companyContact.whatsapp}?text=${encodeURIComponent(request)}`} target="_blank" rel="noopener noreferrer">{locale === "fa" ? "آماده‌سازی پیام واتساپ (تب جدید)" : "Prepare WhatsApp message (new tab)"}</a>
      <p className="inquiry-copy-status" role="status" aria-live="polite">{status}</p>
    </div>
    <p className="inquiry-template-help">{locale === "fa" ? "با انتخاب ایمیل یا واتساپ، متن ویرایش‌شده در برنامهٔ مربوط باز می‌شود؛ ارسال نهایی با شماست. این سایت درخواست را ذخیره نمی‌کند و شمارهٔ پیگیری صادر نمی‌کند." : "Choosing email or WhatsApp opens your edited text in that application; you send it there. This website does not store requests or issue tracking numbers."}</p>
  </div>;
}
