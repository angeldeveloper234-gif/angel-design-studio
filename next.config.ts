import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "fumcon.com.mx",
      },
      {
        protocol: "https",
        hostname: "bigcat.mx",
      },
      {
        protocol: "https",
        hostname: "nmnofwinjufyyykyaelc.supabase.co",
      },
      {
        protocol: "https",
        hostname: "banuelos-villalba-asociados.netlify.app",
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
