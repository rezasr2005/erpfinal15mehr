import { ArrowIcon } from "@/components/shared/ArrowIcon";
import { CompanyLogo } from "@/components/shared/CompanyLogo";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { MainNav } from "../navigation/MainNav";
import { MobileNav } from "../navigation/MobileNav";
import { LanguageSwitcher } from "../navigation/LanguageSwitcher";
import { messages } from "../navigation/messages";

export function Header({ locale }: { locale: SupportedLocale }) {
  const text = messages[locale];
  return (
    <header className="public-header">
      <div className="container header-top">
        <Link href={`/${locale}`} className="brand">
          <CompanyLogo className="brand-mark" />
          <span className="brand-copy"><strong>{text.brand}</strong><span>{text.brandCaption}</span></span>
        </Link>
        <div className="header-actions">
          <LanguageSwitcher locale={locale} />
          <Link href={`/${locale}/inquiry`} className="quote-link">{text.inquiry}<ArrowIcon /></Link>
          <MobileNav locale={locale} />
        </div>
      </div>
      <div className="desktop-navigation container"><MainNav locale={locale} /></div>
    </header>
  );
}
