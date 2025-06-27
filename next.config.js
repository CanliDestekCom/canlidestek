// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: "standalone", // Vercel dışı deploylar için önemli

  async headers() {
    return [
      {
        source: "/(.*)", // Tüm yollar için geçerli
        headers: [
          {
            key: "Content-Type",
            value: "text/html; charset=UTF-8", // Dosya indirme hatalarını önler
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;