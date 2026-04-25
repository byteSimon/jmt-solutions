"use client";

import { useState, useRef } from "react";

export const InfiniteGrid = () => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background"
    >
      <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-400/40 dark:bg-orange-600/20 blur-[120px]" />
      <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[100px]" />
      <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 dark:bg-blue-600/20 blur-[120px]" />
    </div>
  );
};
