/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/newblog',
  output: 'export',
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: false
  },
  trailingSlash: true
};

module.exports = nextConfig;
