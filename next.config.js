/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["s3.amazonaws.com","preview.cruip.com"],
  },
};

module.exports = nextConfig;
