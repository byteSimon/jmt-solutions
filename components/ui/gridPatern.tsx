"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  cellSize?: number;
  centerSquares?: number;
  outerSquares?: number;
}

export function GridPattern({
  className,
  cellSize = 38,
  centerSquares = 20,
  outerSquares = 22,
}: GridPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;

    const draw = () => {
      // ✅ FIX: read parent size, not canvas size
      const parent = canvas.parentElement;
      const W = parent ? parent.clientWidth : window.innerWidth;
      const H = parent ? parent.clientHeight : window.innerHeight;

      if (!W || !H) return;

      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      canvas.width = W * dpr;
      canvas.height = H * dpr;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      const cols = Math.ceil(W / cellSize) + 2;
      const rows = Math.ceil(H / cellSize) + 2;

      // Grid lines
      ctx.strokeStyle = "rgba(0,0,0,0.09)";
      ctx.lineWidth = 0.8;
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * cellSize, 0);
        ctx.lineTo(x * cellSize, H);
        ctx.stroke();
      }
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * cellSize);
        ctx.lineTo(W, y * cellSize);
        ctx.stroke();
      }

      const used = new Set<string>();
      const squares: [number, number, number][] = [];
      const cx = Math.floor(cols / 2);
      const cy = Math.floor(rows / 2);

      while (squares.length < centerSquares) {
        const x = cx + Math.floor((Math.random() * 2 - 1) * 6);
        const y = cy + Math.floor((Math.random() * 2 - 1) * 5);
        const k = `${x},${y}`;
        if (used.has(k) || x < 1 || y < 1 || x >= cols - 1 || y >= rows - 1)
          continue;
        used.add(k);
        squares.push([x, y, 0.25 + Math.random() * 0.15]);
      }

      while (squares.length < centerSquares + outerSquares) {
        const x = 1 + Math.floor(Math.random() * (cols - 2));
        const y = 1 + Math.floor(Math.random() * (rows - 2));
        const k = `${x},${y}`;
        if (used.has(k)) continue;
        used.add(k);
        squares.push([x, y, 0.12 + Math.random() * 0.1]);
      }

      squares.forEach(([x, y, alpha]) => {
        ctx.fillStyle = `rgba(100,105,120,${alpha})`;
        ctx.fillRect(
          x * cellSize + 1,
          y * cellSize + 1,
          cellSize - 2,
          cellSize - 2,
        );
      });
    };

    draw();

    const parent = canvas.parentElement;
    const observer = new ResizeObserver(draw);
    if (parent) observer.observe(parent);
    else observer.observe(canvas);

    return () => observer.disconnect();
  }, [cellSize, centerSquares, outerSquares]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
