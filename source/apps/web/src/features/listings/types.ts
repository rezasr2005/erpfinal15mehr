import type { SupportedLocale } from "@kavian/config";

export type LocalizedText = Record<SupportedLocale, string>;
export type ProductGroup = "flat" | "long" | "hollow" | "scrap";
export type MarketItem = {
  id: string;
  name: LocalizedText;
  specifications: LocalizedText;
  group: ProductGroup;
  location: LocalizedText;
  updatedAt: string;
  source: LocalizedText;
  sourceUrl?: string;
  terms: LocalizedText;
  unit: LocalizedText;
};
export type InventoryItem = MarketItem & {
  quantity: number;
  availability: "available" | "confirm";
};
export type PriceItem = MarketItem & {
  sourceUrl: string;
  direction: "buy" | "sell";
  amount: number;
  currency: "IRR" | "toman";
  priceType: "asking" | "traded" | "estimated";
  tax: "included" | "excluded" | "unspecified";
};
