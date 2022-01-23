/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://test.io",
  },
};

module.exports = nextConfig;
