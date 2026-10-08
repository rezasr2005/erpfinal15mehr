import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { marketContent } from "./content";

export function MarketCards({ locale }: { locale: SupportedLocale }) {
  const text = marketContent[locale];
  return <div className="sector-grid">{text.areas.map((area) => <article className="sector-card" key={area.id}><span className="market-status">{text.pending}</span><h3>{area.title}</h3><p>{area.text}</p><Link className="sector-link" href={`/${locale}/market#${area.id}`}>{area.link}<ArrowIcon /></Link></article>)}</div>;
}
