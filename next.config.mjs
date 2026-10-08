/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Permit360 was rebranded as SafetySetu; keep old links and search results working.
      { source: "/products/permit360", destination: "/products/safetysetu", permanent: true },
    ]
  },
}

export default nextConfig
