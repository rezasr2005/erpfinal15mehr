import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: `${getSiteUrl()}/sitemap.xml`,
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api"] }],
  };
}
