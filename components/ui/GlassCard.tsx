import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  dark?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  dark = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      {...props}
      className={cn(
        "relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl border transition-all duration-400",
        dark
          ? "bg-[#1a1035]/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          : "bg-white/60 border-slate-200/60 shadow-[0_8px_32px_rgba(94,59,176,0.04)]",
        hoverEffect && [
          "hover:-translate-y-1.5",
          dark
            ? "hover:border-[#7B55CC]/40 hover:shadow-[0_20px_50px_rgba(123,85,204,0.15)]"
            : "hover:border-[#5E3BB0]/20 hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(94,59,176,0.08)]",
        ],
        className
      )}
    >
      {/* Subtle top glare effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none opacity-50" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
