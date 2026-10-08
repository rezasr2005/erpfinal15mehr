import type { PropsWithChildren } from "react";
import type { SupportedLocale } from "@kavian/config";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { messages } from "../navigation/messages";
import "./public-shell.css";

export function PublicLayout({ locale, children }: PropsWithChildren<{ locale: SupportedLocale }>) {
  return <div className="public-shell"><a className="skip-link" href="#public-content">{messages[locale].skip}</a><Header locale={locale} /><div id="public-content" className="public-content" tabIndex={-1}>{children}</div><Footer locale={locale} /></div>;
}
