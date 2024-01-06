import { config } from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...config,
  // publicPath: "/build/",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // serverConditions: ["deno", "worker"],
  // serverMainFields: ["main", "module"],
  // serverModuleFormat: "cjs",
  // serverPlatform: "node",
  // serverMinify: false,
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  // ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
