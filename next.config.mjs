/** @type {import('next').NextConfig} */
const nextConfig = {
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
  // Enable experimental features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
