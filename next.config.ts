import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** GitHub Pages is served under /portfolio; local dev uses site root so `/` works. */
const basePath =
  process.env.NODE_ENV === "development" ? "" : "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co", pathname: "/**" },
    ],
  },
};

export default nextConfig;
