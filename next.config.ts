import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * This project lives at `C:\Users\ABC\summiyaashraf-portfolio`, but its
   * user home directory (`C:\Users\ABC`) holds an unrelated project with its
   * own `package.json` + `package-lock.json` + `node_modules`. Left
   * unconfigured, Next.js walks upward for a lockfile, picks the parent's,
   * and assumes the home directory is the workspace root — which inflates the
   * file-tracing graph and prints:
   *
   *   "Next.js inferred your workspace root, but it may not be correct."
   *
   * Pinning the root to this directory makes tracing (and Turbopack's file
   * watcher in `next dev`) stay scoped here. On Vercel this is the repository
   * root either way, so the setting is a no-op there.
   */
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
