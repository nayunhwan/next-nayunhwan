/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://nayunhwan.github.io/",
  },
};

module.exports = nextConfig;
