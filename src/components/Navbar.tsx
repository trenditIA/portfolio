"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  Globe,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage, type Locale } from "@/context/language-context";
import { getUi } from "@/messages/ui";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale } = useLanguage();
  const m = getUi(locale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-[#7c3aed] hover:text-[#7c3aed] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[#7c3aed]"
      aria-label={isDark ? m.theme.light : m.theme.dark}
      title={m.theme.toggle}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden />
      ) : (
        <Moon className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}

function LanguageMenu() {
  const { locale, setLocale } = useLanguage();
  const m = getUi(locale);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-700 transition hover:border-[#7c3aed] hover:text-[#7c3aed] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[#7c3aed] sm:px-3 sm:text-sm"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={m.language.label}
      >
        <Globe className="h-4 w-4 shrink-0" aria-hidden />
        <span className="hidden uppercase sm:inline">
          {locale === "es" ? "ES" : "EN"}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 transition ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-[60] mt-1 min-w-[10rem] overflow-hidden rounded-lg border border-slate-200 bg-white py-1 text-sm shadow-lg dark:border-slate-700 dark:bg-slate-900"
        >
          <li role="option" aria-selected={locale === "es"}>
            <button
              type="button"
              onClick={() => pick("es")}
              className={`flex w-full items-center px-3 py-2 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                locale === "es"
                  ? "text-[#7c3aed]"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {m.language.es}
            </button>
          </li>
          <li role="option" aria-selected={locale === "en"}>
            <button
              type="button"
              onClick={() => pick("en")}
              className={`flex w-full items-center px-3 py-2 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                locale === "en"
                  ? "text-[#7c3aed]"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {m.language.en}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export function Navbar() {
  const { locale } = useLanguage();
  const m = getUi(locale);

  const navItems = [
    { href: "#sobre-mi", label: m.nav.about },
    { href: "#proyectos", label: m.nav.projects },
    { href: "#experiencia", label: m.nav.experience },
    { href: "#estudios", label: m.nav.education },
    { href: "#contacto", label: m.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="#sobre-mi"
          className="shrink-0 font-display text-sm font-bold tracking-tight text-slate-900 transition-colors hover:text-[#7c3aed] dark:text-slate-50 sm:text-base"
        >
          Lucas Oviedo
        </Link>

        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-2 sm:gap-3">
          <ul className="flex flex-wrap items-center justify-end gap-0.5 text-[11px] sm:gap-1 sm:text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-1.5 py-1.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#7c3aed] dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-[#7c3aed] sm:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5 border-l border-slate-200 pl-2 dark:border-slate-800 sm:gap-2 sm:pl-3">
            <LanguageMenu />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
