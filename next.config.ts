// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["i.ibb.co"],
//   },
// };

// export default nextConfig;



import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**', // For your local development backend
      },
      {
        protocol: 'https',
        hostname: 'molecor-backend-2.onrender.com',
        port: '',
        pathname: '/media/**', // For your live Render backend
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Kept this in case you still need it
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;