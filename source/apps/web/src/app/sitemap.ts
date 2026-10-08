import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    ...["fa", "en"].flatMap((locale) => [{ url: `${base}/${locale}/market`, changeFrequency: "weekly" as const, priority: 0.9 }, { url: `${base}/${locale}/erp`, changeFrequency: "monthly" as const, priority: 0.8 }]),
    { url: `${base}/fa`, changeFrequency: "daily", priority: 1 },
    { url: `${base}/en`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/fa/products`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/products`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/fa/scrap`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/scrap`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/fa/sell-scrap`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/sell-scrap`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/fa/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/en/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/fa/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/en/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/fa/khavarshahr`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/en/khavarshahr`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
