/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure we're using the App Router
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
