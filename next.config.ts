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
            value: "frame-ancestors 'self' http://localhost:3000 https://2it.app",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
