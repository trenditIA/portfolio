"use client";

import { useLanguage } from "@/context/language-context";
import { getUi } from "@/messages/ui";

export function SiteFooter() {
  const { locale } = useLanguage();
  const m = getUi(locale);

  return (
    <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-900 dark:text-slate-500">
      © {new Date().getFullYear()} Lucas Oviedo. {m.footer.line}
    </footer>
  );
}
