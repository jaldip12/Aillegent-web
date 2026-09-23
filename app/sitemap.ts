import type { MetadataRoute } from "next"
import { site, services, products } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    "",
    "/services",
    "/products",
    "/about",
    "/contact",
    ...services.map((s) => `/services/${s.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    // "/industries" + children temporarily hidden - see app/industries/page.tsx
  ]

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }))
}
