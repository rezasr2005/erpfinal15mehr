import { MarketPrices } from "@/features/market-sources/MarketPrices";
import { CompanyAnnouncements } from "@/features/announcements/CompanyAnnouncements";
import { WarehousePurchaseSummary } from "@/components/shared/WarehousePurchaseSummary";
import type { SupportedLocale } from "@kavian/config";
import { HomeLink } from "@/features/home/HomeLink";
import { PriceSources } from "./PriceSources";
import { ListingResults } from "./ListingResults";
import { listingContent } from "./content";
import { validateInventory, validatePrices } from "./validate";
import { inventoryItems, priceItems } from "./data";
import "../home/home.css";
import "../market/market.css";
import "./listings.css";

export function ListingPage({ locale, kind }: { locale: SupportedLocale; kind: "inventory" | "prices" }) {
  const text = listingContent[locale];
  return <main className="home-page">
    <section className="container market-hero"><p className="home-eyebrow">{text.eyebrow}</p><h1>{text[kind]}</h1><p>{kind === "inventory" ? text.inventoryIntro : text.pricesIntro}</p><p className="listing-notice">{text.note}</p></section>
    {kind === "prices" && <MarketPrices locale={locale} />}
    {kind === "prices" && <div className="container"><WarehousePurchaseSummary locale={locale} full /></div>}
    {kind === "inventory" ? <ListingResults locale={locale} kind="inventory" items={validateInventory(inventoryItems)} /> : <ListingResults locale={locale} kind="prices" items={validatePrices(priceItems)} />}
    {kind === "prices" && <CompanyAnnouncements locale={locale} kind="rates" />}
    {kind === "inventory" && <CompanyAnnouncements locale={locale} kind="supply" />}
    {kind === "prices" && <PriceSources locale={locale} />}
    <section className="container listing-links"><HomeLink href={`/${locale}/${kind === "inventory" ? "prices" : "inventory"}`}>{kind === "inventory" ? text.relatedPrices : text.relatedInventory}</HomeLink><HomeLink secondary href={`/${locale}/market`}>{text.market}</HomeLink></section>
  </main>;
}
