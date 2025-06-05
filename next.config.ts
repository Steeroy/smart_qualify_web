import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'smart-qualify-assets.s3.af-south-1.amazonaws.com',
        pathname: '/university-logos/**', // Optional: restrict to specific paths
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src/styles'], // Ensure Webpack looks in src/styles for SCSS files
  },
};

export default nextConfig;
