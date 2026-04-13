import Image from "next/image";

type BrowserMockupProps = {
  src: string;
  alt: string;
};

export function BrowserMockup({ src, alt }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100/90 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80 transition hover:ring-[#7c3aed]/25 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-[0_24px_80px_-32px_rgba(15,23,42,0.9)] dark:ring-slate-800/80 dark:hover:ring-[#7c3aed]/25">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-white/90 px-3 py-2.5 dark:border-slate-800 dark:bg-slate-900/90">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        <div className="ml-2 flex-1 truncate rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-center font-mono text-[10px] text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-500">
          preview.local
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-950">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 480px, 100vw"
          unoptimized
        />
      </div>
    </div>
  );
}
