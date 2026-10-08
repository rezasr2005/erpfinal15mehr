import type { InventoryItem, MarketItem, PriceItem } from "./types";

function validateBase(item: MarketItem) {
  if (!item.id.trim() || !["flat", "long", "hollow", "scrap"].includes(item.group)) throw new Error("Invalid market item identity or group.");
  for (const field of [item.name, item.specifications, item.location, item.source, item.terms, item.unit]) {
    if (!field?.fa.trim() || !field.en.trim()) throw new Error(`Missing bilingual market details: ${item.id}`);
  }
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(item.updatedAt);
  const timestamp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(item.updatedAt);
  if ((!dateOnly && !timestamp) || !Number.isFinite(Date.parse(item.updatedAt))) throw new Error(`Recording date must be ISO; timestamps require a timezone: ${item.id}`);
  if (dateOnly && new Date(item.updatedAt).toISOString().slice(0, 10) !== item.updatedAt) throw new Error(`Invalid recording date: ${item.id}`);
  if (item.sourceUrl !== undefined) {
    const url = new URL(item.sourceUrl);
    if (url.protocol !== "https:" || url.username || url.password) throw new Error(`Source URL must be a public HTTPS link: ${item.id}`);
  }
}

export function validateInventory(items: InventoryItem[]): InventoryItem[] {
  const ids = new Set<string>();
  for (const item of items) {
    validateBase(item);
    if (ids.has(item.id) || !Number.isFinite(item.quantity) || item.quantity <= 0 || !["available", "confirm"].includes(item.availability)) throw new Error(`Invalid inventory record: ${item.id}`);
    ids.add(item.id);
  }
  return items;
}

export function validatePrices(items: PriceItem[]): PriceItem[] {
  const ids = new Set<string>();
  for (const item of items) {
    validateBase(item);
    if (!["buy", "sell"].includes(item.direction) || ids.has(item.id) || !item.sourceUrl || !Number.isFinite(item.amount) || item.amount <= 0 || !["IRR", "toman"].includes(item.currency) || !["asking", "traded", "estimated"].includes(item.priceType) || !["included", "excluded", "unspecified"].includes(item.tax)) throw new Error(`Invalid price record: ${item.id}`);
    ids.add(item.id);
  }
  return items;
}
