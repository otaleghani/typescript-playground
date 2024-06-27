/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
    serverActions: true,
  },
};

export default nextConfig;
