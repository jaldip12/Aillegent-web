export const site = {
  name: "Aillegent",
  url: "https://www.aillegent.com",
  tagline: "Product Engineering, AI, Cloud & Quality",
  description:
    "Aillegent is a custom software development company: product engineering, applied AI, data, cloud, quality, and cost optimisation, from rapid MVP to production-scale.",
  email: "info@aillegent.com",
  phone: "+91 90283 21652",
  phoneHref: "+919028321652",
  location: "Gandhinagar, India",
  ogImage: "/img/og-cover.jpg",
  linkedin: "https://www.linkedin.com/company/aillegent/",
} as const

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  // temporarily hidden - see app/industries/page.tsx
  // { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const services = [
  { slug: "product-engineering", title: "Product Engineering" },
  { slug: "applied-ai", title: "Applied AI" },
  { slug: "data-engineering", title: "Data Engineering" },
  { slug: "cloud-platform", title: "Cloud & Platform" },
  { slug: "quality-engineering", title: "Quality Engineering" },
  { slug: "cost-optimisation", title: "Cost Optimisation" },
] as const

export const products = [
  { slug: "shilp", title: "Shilp" },
  { slug: "eventik", title: "Eventik" },
  { slug: "safetysetu", title: "SafetySetu" },
] as const

// Industries section is temporarily hidden site-wide.
// Data kept intact for restore; nothing consumes it while hidden.
export const industries = [
  { slug: "finance", title: "Finance" },
  // temporarily hidden - see app/industries/intellectual-property/page.tsx
  // { slug: "intellectual-property", title: "Intellectual Property" },
  { slug: "advertising-technology", title: "Advertising Technology" },
  { slug: "recruitment", title: "Recruitment" },
] as const
