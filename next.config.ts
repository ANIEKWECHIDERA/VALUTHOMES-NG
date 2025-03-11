import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
