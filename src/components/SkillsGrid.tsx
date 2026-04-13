"use client";

import { Cloud, LayoutTemplate, Server } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { useLanguage } from "@/context/language-context";
import { getUi } from "@/messages/ui";

const icons = {
  server: Server,
  layout: LayoutTemplate,
  cloud: Cloud,
} as const;

export function SkillsGrid() {
  const { locale } = useLanguage();
  const m = getUi(locale);

  return (
    <section
      id="habilidades"
      className="scroll-mt-24 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#7c3aed]">
            {m.skills.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            {m.skills.title}
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            {m.skills.subtitle}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <article
                key={group.title}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:border-[#7c3aed]/50 hover:shadow-[0_0_0_1px_#7c3aed22] dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-[#7c3aed]/50 dark:hover:shadow-[0_0_0_1px_#7c3aed22]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition group-hover:border-[#7c3aed]/40 group-hover:text-[#7c3aed] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:group-hover:border-[#7c3aed]/40">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 font-mono text-sm text-slate-600 dark:text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-800 transition group-hover:border-[#7c3aed]/35 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 dark:group-hover:border-[#7c3aed]/35">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
