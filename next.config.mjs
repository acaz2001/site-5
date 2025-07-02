/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
      env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  }
};

export default nextConfig;
