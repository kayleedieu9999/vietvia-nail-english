"use client";

import { useEffect } from "react";
import { useLocalSettings } from "@/lib/localSettings";

const SCALE_MAP: Record<string, string> = { sm: "93.75%", md: "100%", lg: "112.5%" };

/**
 * Applies the "Cỡ chữ" (text size) preference from Settings site-wide by
 * scaling the root font-size — every `rem`-based Tailwind text/spacing class
 * scales with it automatically, no per-component changes needed. Renders
 * nothing; mounted once in `AppShell`.
 */
export default function TextScaleEffect() {
  const { textScale } = useLocalSettings();

  useEffect(() => {
    document.documentElement.style.fontSize = SCALE_MAP[textScale] ?? "100%";
  }, [textScale]);

  return null;
}
