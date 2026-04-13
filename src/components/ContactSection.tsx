"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "@/data/portfolio";
import { useLanguage } from "@/context/language-context";
import { getUi } from "@/messages/ui";

export function ContactSection() {
  const { locale } = useLanguage();
  const m = getUi(locale);
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!message) {
      setStatus(m.contact.errorMessage);
      return;
    }
    const subject = encodeURIComponent(
      `Portfolio contact${name ? ` — ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        name && `${m.contact.name}: ${name}`,
        email && `${m.contact.email}: ${email}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setStatus(m.contact.successMessage);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 pb-20 pt-16 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#7c3aed]">
            {m.contact.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            {m.contact.title}
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            {m.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/30"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm text-slate-600 dark:text-slate-300">
                {m.contact.name}
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm text-slate-600 dark:text-slate-300">
                {m.contact.email}
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-sm text-slate-600 dark:text-slate-300">
              {m.contact.message}
              <textarea
                name="message"
                required
                rows={5}
                className="resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#7c3aed] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500 sm:w-auto sm:px-6"
            >
              {m.contact.submit}
            </button>
            {status && (
              <p className="text-sm text-slate-500 dark:text-slate-400" role="status">
                {status}
              </p>
            )}
          </form>

          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/60 p-6 dark:border-slate-800 dark:bg-slate-900/20">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {m.contact.networks}
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 transition hover:border-[#7c3aed] hover:text-[#7c3aed] dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
                LinkedIn
              </Link>
              <Link
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 transition hover:border-[#7c3aed] hover:text-[#7c3aed] dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200"
              >
                <Github className="h-5 w-5" aria-hidden />
                GitHub
              </Link>
              <Link
                href={`mailto:${LINKS.email}`}
                className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 transition hover:border-[#7c3aed] hover:text-[#7c3aed] dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200"
              >
                <Mail className="h-5 w-5" aria-hidden />
                {LINKS.email}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
