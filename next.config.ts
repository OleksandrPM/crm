import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

/* Version for GH-pages */
const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isProd ? '/crm/' : '',
  basePath: isProd ? '/crm' : '',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

/* Base version */
// const nextConfig: NextConfig = {};

export default nextConfig;
