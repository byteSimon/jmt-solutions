"use client";

import { GridPattern } from "./gridPatern";

const gridStyles = {
  glowOrange: "absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-[#7B55CC]/30 blur-[120px]",
  glowPrimary: "absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-[#5E3BB0]/25 blur-[100px]",
  glowBlue: "absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 dark:bg-blue-700/30 blur-[120px]",
  fadeTop: "pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#f4f4ff] to-transparent",
  fadeBottom: "pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f4f4ff] to-transparent",
  fadeLeft: "pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#f4f4ff] to-transparent",
  fadeRight: "pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#f4f4ff] to-transparent"
};


export function GridPatternDemo() {
  return (
    <div className="relative w-full h-full">
      <GridPattern className="origin-center scale-[1.15] skew-y-12" />

      {/* Bg Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={gridStyles.glowOrange} />
        <div className={gridStyles.glowPrimary} />
        <div className={gridStyles.glowBlue} />
      </div>

      <div className={gridStyles.fadeTop} />
      <div className={gridStyles.fadeBottom} />
      <div className={gridStyles.fadeLeft} />
      <div className={gridStyles.fadeRight} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_center,transparent_30%,rgba(244,244,255,0.85)_100%)]" />
    </div>
  );
}
