/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
    images: {
    domains: ['i.postimg.cc','cdn.sanity.io'],
  }
};

export default nextConfig;




{/*

const nextConfig = {
    env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  }
};

export default nextConfig;
  */}
