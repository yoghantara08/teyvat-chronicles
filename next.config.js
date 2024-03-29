/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.genshin.dev", "api.ambr.top"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
