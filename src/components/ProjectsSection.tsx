"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects, t } from "@/data/portfolio";
import { useLanguage } from "@/context/language-context";
import { getUi } from "@/messages/ui";
import { BrowserMockup } from "./BrowserMockup";

export function ProjectsSection() {
  const { locale } = useLanguage();
  const m = getUi(locale);

  return (
    <section
      id="proyectos"
      className="scroll-mt-24 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#7c3aed]">
            {m.projects.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            {m.projects.title}
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            {m.projects.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-20">
          {projects.map((project) => (
            <article
              key={project.id}
              className="grid gap-8 rounded-2xl border border-slate-200/90 bg-white/70 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-8"
            >
              <div className="order-2 lg:order-1">
                <BrowserMockup src={project.image} alt={project.name} />
              </div>
              <div className="order-1 flex flex-col gap-4 lg:order-2">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {project.name}
                </h3>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  {t(project.description, locale)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-800 transition hover:border-[#7c3aed]/60 hover:text-[#7c3aed] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-[#7c3aed]/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[#7c3aed] hover:text-[#7c3aed] dark:border-slate-700 dark:text-slate-200"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    {m.projects.demo}
                  </Link>
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[#7c3aed] hover:text-[#7c3aed] dark:border-slate-700 dark:text-slate-200"
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    {m.projects.code}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
