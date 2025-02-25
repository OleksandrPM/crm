import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

/* Version for GH-pages */
const productionConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

/* Base version */
const baseConfig: NextConfig = {};

const nextConfig: NextConfig = isProd ? productionConfig : baseConfig;

export default nextConfig;
