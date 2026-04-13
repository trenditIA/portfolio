"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { LINKS } from "@/data/portfolio";
import { useLanguage } from "@/context/language-context";
import { publicUrl } from "@/lib/publicUrl";
import { getUi } from "@/messages/ui";

const PROFILE_PRIMARY = publicUrl("/image_0.png");
const PROFILE_FALLBACK = "https://i.ibb.co/pvJzJyBB/myFace.webp";

export function Hero() {
  const { locale } = useLanguage();
  const m = getUi(locale);
  const [profileSrc, setProfileSrc] = useState(PROFILE_PRIMARY);

  const onProfileError = useCallback(() => {
    setProfileSrc(PROFILE_FALLBACK);
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-slate-100 dark:border-slate-800/60 dark:from-slate-950 dark:to-slate-950"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[minmax(0,280px)_1fr] md:items-center md:gap-12 md:py-24 lg:px-8">
        <div className="mx-auto flex max-w-xs flex-col items-center text-center md:mx-0 md:items-start md:text-left">
          <div className="relative mb-6 h-40 w-40 shrink-0 rounded-full ring-4 ring-[#7c3aed]/85 sm:h-48 sm:w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 ring-2 ring-slate-200 transition-[box-shadow] duration-300 hover:shadow-[0_0_0_1px_#7c3aed33,0_0_40px_-10px_#7c3aed55] dark:from-slate-800 dark:to-slate-900 dark:ring-slate-800 dark:hover:shadow-[0_0_0_1px_#7c3aed33,0_0_40px_-10px_#7c3aed66]" />
            <Image
              src={profileSrc}
              alt="Lucas Oviedo"
              width={192}
              height={192}
              priority
              unoptimized={profileSrc.startsWith("http")}
              onError={onProfileError}
              className="relative z-10 h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500">
            {m.hero.profileLabel}
          </p>
        </div>

        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
              Lucas Oviedo
            </h1>
            <h2 className="font-display text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl">
              {m.hero.role}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
            {m.hero.bio}
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-start">
            <Link
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#7c3aed] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:bg-violet-500 hover:shadow-violet-800/25 dark:shadow-violet-900/25 dark:hover:shadow-violet-800/30"
            >
              {m.hero.contact}
            </Link>
            <Link
              href={LINKS.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#7c3aed] hover:text-[#7c3aed] dark:border-slate-600 dark:bg-transparent dark:text-slate-200"
            >
              {m.hero.downloadCv}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
