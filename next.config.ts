import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (custom domain thinkvelociti.com, see CNAME).
  // Host-level 301s for velociti.club live in /redirects.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
