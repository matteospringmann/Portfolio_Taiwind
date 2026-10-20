import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // One 404 page for unknown URLs, since the root layout lives under [lang].
    globalNotFound: true,
  },
  // French is the default language and stays at the root: "/" serves the /fr page.
  async rewrites() {
    return [{ source: "/", destination: "/fr" }];
  },
  async redirects() {
    return [{ source: "/fr", destination: "/", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
