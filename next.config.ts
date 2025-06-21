import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**', // All local images
      },
      {
        protocol: 'https',
        hostname: 'molecor-backend.onrender.com',
        port: '',
        pathname: '/**', // All backend images (news, case_studies, certificates, etc.)
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // All Cloudinary images
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**', // Only if you use this host
      },
    ],
  },
};

export default nextConfig;