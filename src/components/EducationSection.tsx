"use client";

import { education, t } from "@/data/portfolio";
import { useLanguage } from "@/context/language-context";
import { getUi } from "@/messages/ui";

export function EducationSection() {
  const { locale } = useLanguage();
  const m = getUi(locale);

  return (
    <section
      id="estudios"
      className="scroll-mt-24 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#7c3aed]">
            {m.education.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            {m.education.title}
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            {m.education.subtitle}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <article
              key={`${item.institution}-${index}`}
              className="flex flex-col rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:border-[#7c3aed]/35 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-[#7c3aed]/35"
            >
              <div className="flex-1 space-y-2">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50">
                  {t(item.degree, locale)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {item.institution}
                </p>
                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {t(item.period, locale)}
                </p>
                <p className="pt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {t(item.detail, locale)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
