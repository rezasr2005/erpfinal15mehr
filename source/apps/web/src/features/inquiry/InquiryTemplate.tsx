"use client";

import { useId, useRef, useState } from "react";
import type { SupportedLocale } from "@kavian/config";

const messages = {
  fa: { label: "متن درخواست شما", help: "جزئیات را در همین متن جایگزین کنید، سپس آن را کپی و از طریق راه‌های تماس ارسال کنید. متن با بازخوانی صفحه پاک می‌شود.", copy: "کپی متن درخواست", copying: "در حال کپی…", copied: "متن کپی شد؛ می‌توانید آن را در پیام یا ایمیل قرار دهید.", manual: "کپی خودکار در دسترس نیست. متن انتخاب شد؛ آن را با گزینهٔ کپی دستگاه یا Ctrl+C کپی کنید." },
  en: { label: "Your request text", help: "Replace the details below, then copy the text and send it using the contact channels. Reloading the page clears your edits.", copy: "Copy request text", copying: "Copying…", copied: "Text copied. You can paste it into a message or email.", manual: "Automatic copying is unavailable. The text is selected; use your device’s Copy option or Ctrl+C." },
};

export function InquiryTemplate({ locale, template }: { locale: SupportedLocale; template: string }) {
  const id = useId();
  const input = useRef<HTMLTextAreaElement>(null);
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
    <textarea ref={input} id={id} aria-describedby={`${id}-help`} className="inquiry-outline" defaultValue={template} rows={9} onChange={() => setStatus("")} />
    <div className="inquiry-template-actions">
      <button className="inquiry-copy" type="button" disabled={copying} onClick={copy}>{copying ? text.copying : text.copy}</button>
      <p className="inquiry-copy-status" role="status" aria-live="polite">{status}</p>
    </div>
  </div>;
}
