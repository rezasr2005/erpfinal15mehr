"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { SupportedLocale } from "@kavian/config";
import { messages } from "./messages";

export function LanguageSwitcher({ locale }: { locale: SupportedLocale }) {
  const pathname = usePathname();
  const target = locale === "fa" ? "en" : "fa";
  const href = pathname.replace(/^\/(fa|en)(?=\/|$)/, `/${target}`);
  const link = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const syncDestination = () => {
      if (link.current) link.current.href = `${href}${window.location.search}${window.location.hash}`;
    };
    syncDestination();
    window.addEventListener("hashchange", syncDestination);
    window.addEventListener("popstate", syncDestination);
    return () => {
      window.removeEventListener("hashchange", syncDestination);
      window.removeEventListener("popstate", syncDestination);
    };
  }, [href]);
  return (
    <div className="language-switcher" role="group" aria-label={messages[locale].language} dir="ltr">
      <span aria-current="true">{locale.toUpperCase()}</span>
      <span aria-hidden="true" className="language-divider">/</span>
      <a ref={link} href={href} hrefLang={target} lang={target} onClick={(event) => {
        event.currentTarget.href = `${href}${window.location.search}${window.location.hash}`;
      }}>{target.toUpperCase()}</a>
    </div>
  );
}
