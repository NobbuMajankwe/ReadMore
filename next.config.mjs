/** @type {import('next').NextConfig} */
//const { nextTranslate } = require('next-translate');
import nextTranslate from 'next-translate';
//const { nextTranslate } = pkg;

const nextConfig = nextTranslate({
  // Other Next.js configuration options...
  namespaces: ['common'],
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
});

export default nextConfig;
