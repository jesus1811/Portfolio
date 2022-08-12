/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx"],
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
