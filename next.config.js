/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
