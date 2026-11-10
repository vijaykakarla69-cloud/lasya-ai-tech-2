const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  env: {
    PORT: process.env.PORT,
    ENV: process.env.ENV,
    DEFAULT_COMPANY: process.env.DEFAULT_COMPANY,
    PRINT_NETWORK_CALLS: process.env.PRINT_NETWORK_CALLS,
    SITE_URL: process.env.SITE_URL,
  },
  webpack(config) {
    // Keep Next image-loader off .svg (it returns an object, not a React component)
    for (const rule of config.module.rules) {
      if (!Array.isArray(rule.oneOf)) continue;
      for (const r of rule.oneOf) {
        const loaders = []
          .concat(r.loader || [])
          .concat(r.use || [])
          .map((u) => (typeof u === "string" ? u : u?.loader || ""))
          .join("\n");
        if (loaders.includes("next-image-loader")) {
          r.exclude = /\.svg$/i;
        }
      }
    }

    // Icon SVGs → React components; skip font SVGs (boxicons) for SVGO
    config.module.rules.push({
      test: /\.svg$/i,
      exclude: /node_modules|[\\/]fonts[\\/]/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(module.exports, {
  org: "lasya-aitech-pvt-ltd",
  project: "lasyaaitech-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
