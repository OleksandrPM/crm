import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {};

/* Updating for GH-pages */
if (isProd) {
  nextConfig.output = 'export';
  nextConfig.reactStrictMode = true;
  nextConfig.basePath = '/crm';
  nextConfig.images = {
    unoptimized: true, // Required for static export
    loader: 'custom',
    loaderFile: './gh-loader.ts',
  };
}

export default nextConfig;
