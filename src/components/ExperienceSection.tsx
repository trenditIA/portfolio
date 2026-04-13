"use client";

import { experience, t } from "@/data/portfolio";
import { useLanguage } from "@/context/language-context";
import { getUi } from "@/messages/ui";

export function ExperienceSection() {
  const { locale } = useLanguage();
  const m = getUi(locale);

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#7c3aed]">
            {m.experience.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            {m.experience.title}
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            {m.experience.subtitle}
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8">
          <div
            className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-[#7c3aed]/70 via-slate-300 to-slate-200 dark:via-slate-800 dark:to-slate-800 sm:left-[15px]"
            aria-hidden
          />
          <ol className="space-y-10">
            {experience.map((role, index) => (
              <li key={`${role.company}-${index}`} className="relative">
                <span
                  className="absolute -left-1 top-2 flex h-3 w-3 -translate-x-[calc(50%-2px)] items-center justify-center rounded-full border border-[#7c3aed]/60 bg-white dark:bg-slate-950 sm:h-3.5 sm:w-3.5"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
                </span>
                <article className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:border-[#7c3aed]/40 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-[#7c3aed]/40 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50 sm:text-xl">
                        {t(role.title, locale)}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        {role.company}
                      </p>
                    </div>
                    <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400 sm:mt-0 sm:text-sm">
                      {t(role.period, locale)}
                    </p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 marker:text-[#7c3aed] dark:text-slate-200">
                    {role.highlights[locale].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
