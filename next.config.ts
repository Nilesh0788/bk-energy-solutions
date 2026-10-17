import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Performance optimizations
  compress: true,
  swcMinify: true,
  // Enable experimental features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
