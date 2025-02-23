import type { NextConfig } from 'next';

/* Version for GH-pages */
const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NODE_ENV === 'production' ? '/github-pages-demo' : '',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

/* Base version */
// const nextConfig: NextConfig = {};

export default nextConfig;
