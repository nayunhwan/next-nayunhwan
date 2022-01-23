/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:3000"
        : "https://nayunhwan.github.io/",
  },
};

module.exports = nextConfig;
