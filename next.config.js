/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    reactStrictMode:false,
    pageExtensions: ['ts', 'tsx'],
    domains: ['lovelly.s3.us-east-2.amazonaws.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
