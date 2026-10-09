"use client";

import { useId, useState } from "react";
import type { SupportedLocale } from "@kavian/config";
import Link from "next/link";
import { listingContent } from "./content";
import type { InventoryItem, PriceItem, ProductGroup } from "./types";

type Props = { locale: SupportedLocale } & (
  { kind: "inventory"; items: InventoryItem[] } | { kind: "prices"; items: PriceItem[] }
);

function normalize(value: string) {
  return value.normalize("NFKC").replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/[۰-۹]/g, c => String(c.charCodeAt(0) - 1776)).replace(/[٠-٩]/g, c => String(c.charCodeAt(0) - 1632)).toLowerCase().trim();
}

export function ListingResults({ locale, kind, items }: Props) {
  const id = useId();
  const text = listingContent[locale];
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("");
  const [priceType, setPriceType] = useState("");
  const results = items.filter(item => (!group || item.group === group) && (!priceType || ("priceType" in item && item.priceType === priceType)) && normalize(`${item.name[locale]} ${item.specifications[locale]} ${item.location[locale]}`).includes(normalize(search)));
  const day = new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", { dateStyle: "medium", timeZone: "Asia/Tehran" });
  const hasFilters = Boolean(search || group || priceType);
  const number = new Intl.NumberFormat(locale);
  const date = new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Tehran" });

  function clear() { setSearch(""); setGroup(""); setPriceType(""); }

  return <section className="container listing-section" aria-label={text[kind]}>
    <div className="listing-filters">
      <div><label htmlFor={`${id}-search`}>{text.search}</label><input id={`${id}-search`} type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder={text.searchPlaceholder} disabled={!items.length} /></div>
      <div><label htmlFor={`${id}-group`}>{text.group}</label><select id={`${id}-group`} value={group} onChange={e => setGroup(e.target.value)} disabled={!items.length}><option value="">{text.all}</option>{(Object.keys(text.groups) as ProductGroup[]).map(key => <option value={key} key={key}>{text.groups[key]}</option>)}</select></div>
      {kind === "prices" && <div><label htmlFor={`${id}-type`}>{text.priceType}</label><select id={`${id}-type`} value={priceType} onChange={e => setPriceType(e.target.value)} disabled={!items.length}><option value="">{text.allTypes}</option>{Object.entries(text.priceTypes).map(([key, label]) => <option value={key} key={key}>{label}</option>)}</select></div>}
    </div>
    <div className="listing-summary"><p role="status" aria-live="polite">{text.results}: {number.format(results.length)}</p>{hasFilters && <button type="button" onClick={clear}>{text.clear}</button>}</div>
    {results.length ? <div className="listing-grid">{results.map(item => <article className="listing-card" key={item.id}>
      <span className="listing-group">{text.groups[item.group]}</span><h2>{item.name[locale]}</h2><p className="listing-specifications">{item.specifications[locale]}</p>
      <dl>
        <div><dt>{text.location}</dt><dd>{item.location[locale]}</dd></div>
        {"quantity" in item && <><div><dt>{text.quantity}</dt><dd>{number.format(item.quantity)} {item.unit[locale]}</dd></div><div><dt>{text.inventory}</dt><dd>{text[item.availability === "available" ? "available" : "confirm"]}</dd></div></>}
        {"amount" in item && <><div><dt>{text[item.direction]}</dt><dd>{number.format(item.amount)} {text.currencies[item.currency]} / {item.unit[locale]}</dd></div><div><dt>{text.priceType}</dt><dd>{text.priceTypes[item.priceType]} · {text.tax[item.tax]}</dd></div></>}
        <div><dt>{item.updatedAt.length === 10 ? text.date : text.updated}</dt><dd><time dateTime={item.updatedAt}>{item.updatedAt.length === 10 ? day.format(new Date(item.updatedAt)) : date.format(new Date(item.updatedAt))}</time></dd></div>
        <div><dt>{text.source}</dt><dd>{item.sourceUrl ? <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">{item.source[locale]} ({locale === "fa" ? "تب جدید" : "new tab"})</a> : item.source[locale]}</dd></div>
        <div><dt>{text.terms}</dt><dd>{item.terms[locale]}</dd></div>
      </dl>
      <Link className="listing-inquiry" href={`/${locale}/inquiry?item=${encodeURIComponent(item.id)}#request-template`}>{text.inquiry}</Link>
    </article>)}</div> : <div className="listing-empty"><h2>{items.length ? text.noResults : text.emptyTitle}</h2><p>{items.length ? text.noResultsHelp : kind === "inventory" ? text.emptyInventory : text.emptyPrices}</p><div className="listing-empty-links"><Link href={`/${locale}/inquiry`}>{text.inquiry}</Link><Link href={`/${locale}/contact`}>{text.contact}</Link></div></div>}
  </section>;
}
