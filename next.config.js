/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.mlbstatic.com",
      },
      {
        protocol: "https",
        hostname: "**.newsapi.org",
      },
    ],
    unoptimized: false,
  },
};

module.exports = nextConfig;
