import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  experimental: {
    // This helps reduce memory usage by not spawning too many workers
    webpackBuildWorker: false,
  },
  // Disable source maps in development if memory is an issue (optional, but helps)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
