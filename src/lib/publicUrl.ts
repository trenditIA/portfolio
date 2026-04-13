/** Prefix for files in `public/` when the app uses `basePath` (e.g. GitHub Pages). */
export function publicUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
