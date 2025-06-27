// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Type",
            value: "text/html; charset=UTF-8",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
