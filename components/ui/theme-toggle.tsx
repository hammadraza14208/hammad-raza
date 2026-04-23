"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 hover:scale-[1.03] hover:text-foreground"
    >
      <span aria-hidden="true" className="text-lg">
        {theme === "dark" ? "◐" : "◑"}
      </span>
    </button>
  );
}
