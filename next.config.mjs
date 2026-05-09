/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: '.', // Tells Turbopack the current folder is the root
    },
  },
};

export default nextConfig;