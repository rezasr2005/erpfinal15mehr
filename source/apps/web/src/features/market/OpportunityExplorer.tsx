"use client";

import { useId, useState } from "react";
import type { SupportedLocale } from "@kavian/config";
import type { Opportunity } from "./opportunities";

const messages = {
  fa: { demo: "پیش‌نمایش آزمایشی مزایده و مناقصه", notice: "همهٔ فرصت‌ها و برگزارکنندگان این فهرست ساختگی‌اند و صرفاً برای بررسی ظاهر و عملکرد نسخهٔ محلی نمایش داده می‌شوند. هیچ فرصت واقعی برای شرکت یا معامله وجود ندارد.", search: "جست‌وجوی موضوع، برگزارکننده یا شهر", type: "نوع فرصت", all: "همه", auction: "مزایده", tender: "مناقصه", status: "وضعیت نمونه", open: "نمونهٔ باز", closed: "نمونهٔ پایان‌یافته", organizer: "برگزارکننده", city: "محل", deadline: "مهلت نمونه (تهران)", details: "جزئیات نمونه", source: "این نمونه آگهی اصلی ندارد.", results: "تعداد نمونه", clear: "پاک‌کردن فیلترها", empty: "نمونه‌ای مطابق این فیلترها پیدا نشد." },
  en: { demo: "Auction and tender demo preview", notice: "Every opportunity and organizer below is fictional and is displayed only to review the local interface. There is no real opportunity to bid or trade.", search: "Search subject, organizer or city", type: "Opportunity type", all: "All", auction: "Auction", tender: "Tender", status: "Demo status", open: "Open sample", closed: "Closed sample", organizer: "Organizer", city: "Location", deadline: "Sample deadline (Tehran)", details: "Sample details", source: "This fixture has no original announcement.", results: "Samples", clear: "Clear filters", empty: "No samples match these filters." },
};

export function OpportunityExplorer({ locale, items }: { locale: SupportedLocale; items: Opportunity[] }) {
  const text = messages[locale];
  const id = useId();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const query = search.trim().toLowerCase();
  const results = items.filter(item => (!type || type === item.type) && (!status || status === item.status) && `${item.title[locale]} ${item.organizer[locale]} ${item.city[locale]}`.toLowerCase().includes(query));
  const date = new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Tehran" });
  return <div className="container opportunity-explorer">
    <div className="opportunity-demo"><h3>{text.demo}</h3><p>{text.notice}</p></div>
    <div className="listing-filters">
      <div><label htmlFor={`${id}-search`}>{text.search}</label><input id={`${id}-search`} type="search" value={search} onChange={e => setSearch(e.target.value)} /></div>
      <div><label htmlFor={`${id}-type`}>{text.type}</label><select id={`${id}-type`} value={type} onChange={e => setType(e.target.value)}><option value="">{text.all}</option><option value="auction">{text.auction}</option><option value="tender">{text.tender}</option></select></div>
      <div><label htmlFor={`${id}-status`}>{text.status}</label><select id={`${id}-status`} value={status} onChange={e => setStatus(e.target.value)}><option value="">{text.all}</option><option value="open">{text.open}</option><option value="closed">{text.closed}</option></select></div>
    </div>
    <div className="listing-summary"><p role="status" aria-live="polite">{text.results}: {new Intl.NumberFormat(locale).format(results.length)}</p><button type="button" onClick={() => { setSearch(""); setType(""); setStatus(""); }}>{text.clear}</button></div>
    <div className="listing-grid">{results.map(item => <article className="listing-card" key={item.id}><span className="listing-group">{text[item.type]} · {text[item.status]}</span><h3>{item.title[locale]}</h3><p className="listing-specifications">{item.description[locale]}</p><dl><div><dt>{text.organizer}</dt><dd>{item.organizer[locale]}</dd></div><div><dt>{text.city}</dt><dd>{item.city[locale]}</dd></div><div><dt>{text.deadline}</dt><dd><time dateTime={item.deadline}>{date.format(new Date(item.deadline))}</time></dd></div></dl><details><summary>{text.details}</summary><p>{item.requirements[locale]}</p><p>{text.source}</p></details></article>)}</div>
    {!results.length && <p className="listing-empty">{text.empty}</p>}
  </div>;
}
