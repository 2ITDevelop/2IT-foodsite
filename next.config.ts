import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ❗ Permetti solo al portfolio di incorniciarti
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' http://localhost:3000 https://matteoferrea-site.vercel.app",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
