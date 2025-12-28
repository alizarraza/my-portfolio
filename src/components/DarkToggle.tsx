// components/DarkToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState<boolean>(() =>
    typeof window !== "undefined" ? document.documentElement.classList.contains("dark") : false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    // optional: persist choice
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setIsDark(true);
    else if (saved === "light") setIsDark(false);
    // else leave system default
  }, []);

  return (
    <button
      onClick={() => setIsDark((s) => !s)}
      className="px-3 py-1 rounded-md border"
      aria-label="Toggle theme"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
