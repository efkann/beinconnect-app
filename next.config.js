/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: [
      'media-designman.beinconnect.com.tr',
      'mediacms01.digiturkplay.com',
    ],
  },
};

module.exports = nextConfig;
