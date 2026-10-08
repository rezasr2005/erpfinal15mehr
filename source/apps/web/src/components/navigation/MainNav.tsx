"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SupportedLocale } from "@kavian/config";
import { messages, navigation } from "./messages";

export function MainNav({ locale, onNavigate }: { locale: SupportedLocale; onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label={messages[locale].navigation} className="main-nav">
      {navigation.map(({ key, path }) => {
        const href = `/${locale}${path}`;
        const active = pathname === href || (path !== "" && pathname.startsWith(`${href}/`));
        return <Link key={key} href={href} aria-current={active ? "page" : undefined} onClick={() => onNavigate?.()}>{messages[locale][key]}</Link>;
      })}
    </nav>
  );
}
