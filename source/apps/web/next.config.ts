import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  reactStrictMode: true,
  transpilePackages: ["@kavian/ui", "@kavian/config", "@kavian/types", "@kavian/validation"],
};

export default nextConfig;
