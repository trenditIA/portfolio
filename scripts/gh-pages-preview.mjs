import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const previewRoot = path.join(root, "gh-preview-root");
const nested = path.join(previewRoot, "portfolio");

if (!fs.existsSync(outDir)) {
  console.error("Missing out/: run `npm run build` first.");
  process.exit(1);
}

fs.rmSync(previewRoot, { recursive: true, force: true });
fs.mkdirSync(nested, { recursive: true });
fs.cpSync(outDir, nested, { recursive: true });

console.log(
  "Mirrored export to gh-preview-root/portfolio/ (same URL shape as GitHub Pages).",
);
console.log("Run: npx serve@latest gh-preview-root -l 3000");
console.log("Open: http://localhost:3000/portfolio/");
