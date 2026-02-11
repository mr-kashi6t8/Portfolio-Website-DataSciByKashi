/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable React Server Components
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
