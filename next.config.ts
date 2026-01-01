/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**', // Allows all paths from this host
      },
    ],
  },
};

module.exports = nextConfig;