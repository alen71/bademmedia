/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    config.resolve.fallback = { fs: false }

    return config
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.bademmedia.com' }],
        destination: 'https://bademmedia.com/:path*',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
