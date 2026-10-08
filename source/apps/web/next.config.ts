import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ["@kavian/ui", "@kavian/config", "@kavian/types", "@kavian/validation"],
};

export default nextConfig;
