/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bulmatemplates.github.io', 'bulma.io']
  }
}

module.exports = nextConfig
