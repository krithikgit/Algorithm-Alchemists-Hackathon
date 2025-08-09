/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
  // Disable font optimization to prevent hydration issues
  optimizeFonts: false,
  // Add swcMinify for better performance
  swcMinify: true,
}

module.exports = nextConfig
