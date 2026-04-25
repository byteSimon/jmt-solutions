"use client";
import { motion } from "motion/react";
import { TrendingUp, Sparkles, Users, Rocket } from "lucide-react";

/* ─── Theme constants ───────────────────────────────────────────────────── */

const theme = {
  primary: "#5E3BB0",
  light: "#7B55CC",
  dark: "#3D2478",
  glow: "rgba(94, 59, 176, 0.35)",
  glowStrong: "rgba(94, 59, 176, 0.5)",
  textOnDark: "#EDE8FF",
  textMuted: "#C4B5F4",
  cardBg: "rgba(94, 59, 176, 0.06)",
  cardBorder: "rgba(94, 59, 176, 0.2)",
  cardBorderHover: "rgba(94, 59, 176, 0.4)",
};

/* ─── Card data ─────────────────────────────────────────────────────────── */

const bentoCards = [
  {
    id: "roi",
    type: "stat" as const,
    label: "Average ROI",
    value: "347%",
    sublabel: "across all campaigns",
    icon: <TrendingUp className="w-5 h-5" />,
    gridArea: "1 / 1 / 3 / 2",    // tall left
    rotate: "-2.5deg",
    delay: 0.1,
  },
  {
    id: "seo",
    type: "service" as const,
    label: "SEO & Growth",
    value: "Dominate Search",
    sublabel: "First-page rankings guaranteed",
    icon: <Rocket className="w-5 h-5" />,
    gridArea: "1 / 2 / 2 / 3",    // top right
    rotate: "2.5deg",
    delay: 0.2,
  },
  {
    id: "clients",
    type: "badge" as const,
    label: "Happy Clients",
    value: "500+",
    sublabel: "worldwide",
    icon: <Users className="w-5 h-5" />,
    gridArea: "2 / 2 / 3 / 3",    // bottom right small
    rotate: "-1.5deg",
    delay: 0.3,
  },
  {
    id: "ai",
    type: "visual" as const,
    label: "AI-Powered",
    value: "Smart Automation",
    sublabel: "Data-driven decisions",
    icon: <Sparkles className="w-5 h-5" />,
    gridArea: "3 / 1 / 4 / 3",    // full-width bottom
    rotate: "1.8deg",
    delay: 0.4,
  },
];

/* ─── Single Card ───────────────────────────────────────────────────────── */

interface CardProps {
  card: (typeof bentoCards)[number];
}

function BentoCard({ card }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: card.rotate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: card.delay, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{
        rotate: "0deg",
        y: -6,
        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.08), 0 0 24px ${theme.glowStrong}`,
        transition: { duration: 0.35, ease: "easeOut" },
      }}
      style={{
        gridArea: card.gridArea,
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
      }}
      className="
        relative overflow-hidden rounded-2xl
        backdrop-blur-xl
        border
        shadow-[0_8px_32px_rgba(94,59,176,0.08)]
        p-5 sm:p-6
        flex flex-col justify-between gap-4
        cursor-default select-none
        transition-all duration-300
        group
        will-change-transform
        md:rotate-0
        hover:border-[rgba(94,59,176,0.4)]
      "
    >
      {/* Decorative gradient orb */}
      <div
        className="
          absolute -top-8 -right-8 w-28 h-28 rounded-full
          bg-gradient-to-br from-[#7B55CC] to-[#5E3BB0]
          opacity-[0.08] blur-2xl
          group-hover:opacity-[0.18] group-hover:scale-125
          transition-all duration-500
        "
      />

      {/* Top row: icon + live dot */}
      <div className="flex items-start justify-between relative z-10">
        <div className="p-2.5 rounded-xl bg-[#5E3BB0]/10 group-hover:bg-[#5E3BB0]/15 group-hover:scale-105 transition-all duration-300">
          <span className="text-[#5E3BB0]">{card.icon}</span>
        </div>

        {/* Pulse indicator */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#7B55CC] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5E3BB0]" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C4B5F4] mb-1">
          {card.label}
        </p>
        <h4 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-800 group-hover:text-[#5E3BB0] transition-colors duration-300 leading-tight">
          {card.value}
        </h4>
        <p className="text-xs text-slate-400 mt-1.5 font-medium">{card.sublabel}</p>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-[#7B55CC] to-[#5E3BB0] opacity-0 group-hover:opacity-60 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-700" />
      </div>
    </motion.div>
  );
}

/* ─── Bento Grid ────────────────────────────────────────────────────────── */

export default function BentoGrid() {
  return (
    <div className="relative w-full h-full flex items-center justify-center py-8 lg:py-0">
      <div
        className="
          grid w-full gap-4 sm:gap-5
          grid-cols-1
          md:grid-cols-2 md:grid-rows-[auto_auto_auto]
          auto-rows-auto
        "
      >
        {bentoCards.map((card) => (
          <BentoCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
