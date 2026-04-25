import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  eyebrow?: string;
  alignment?: "left" | "center";
  className?: string;
  light?: boolean;
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  alignment = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const isCenter = alignment === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] shadow-sm backdrop-blur-sm border",
            light
              ? "bg-white/10 border-white/20 text-white"
              : "bg-[#5E3BB0]/5 border-[#5E3BB0]/20 text-[#5E3BB0]"
          )}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariants}
        className={cn(
          "text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.08] tracking-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          className={cn(
            "text-base sm:text-lg max-w-2xl leading-relaxed font-medium",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
