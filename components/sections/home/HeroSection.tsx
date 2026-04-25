"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Zap,
  BarChart3,
  Globe,
  Palette,
  Code2,
  Megaphone,
  Search,
  LineChart,
  TrendingUp,
  Quote,
  Send,
  Package,
  Star,
} from "lucide-react";
import { GridPatternDemo } from "@/components/ui/gridPatternDemo";

/* ─── Style Tokens ──────────────────────────────────────────────────────── */

const heroStyles = {
  btnPrimary:
    "inline-flex items-center gap-2.5 bg-[#5E3BB0] text-white font-bold rounded-full transition-all duration-300 cursor-pointer px-9 py-4.5 text-base shadow-lg shadow-[rgba(94,59,176,0.3)] hover:shadow-2xl hover:shadow-[rgba(94,59,176,0.45)] hover:-translate-y-1 hover:bg-[#7B55CC] active:scale-[0.97] group",
  btnOutline:
    "inline-flex items-center gap-2.5 bg-white/70 backdrop-blur-sm border-2 border-[#5E3BB0]/25 text-[#5E3BB0] font-bold rounded-full transition-all duration-300 cursor-pointer px-8 py-4.5 text-base shadow-sm hover:shadow-lg hover:bg-[#5E3BB0] hover:text-white hover:-translate-y-1 hover:border-[#5E3BB0] active:scale-[0.97]",
};

/* ─── Fade-up animation variants ────────────────────────────────────────── */

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─── Bento Grid (inline — original layout) ─────────────────────────────── */

function BentoGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-[580px] mx-auto lg:mx-0 lg:max-w-none">

      {/* Card 1 — Testimonial (top-left, tall) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="row-span-2 bg-[#C8B8F0] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 cursor-default overflow-hidden relative"
      >
        <div>
          <Quote className="w-9 h-9 text-[#5E3BB0] mb-3 fill-[#5E3BB0]/20" />
          <p className="text-sm sm:text-base leading-relaxed text-[#3D2478] font-medium">
            Working with JMT was an absolutely transformative experience. Their strategy
            and execution consistently exceeded our expectations.
          </p>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#5E3BB0] flex items-center justify-center text-sm font-bold text-white">A</div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-[#3D2478] uppercase tracking-wider">Amir Khan</p>
            <p className="text-[11px] sm:text-xs text-[#5E3BB0]/70">TechNova Inc.</p>
          </div>
        </div>
      </motion.div>

      {/* Card 2 — Stats (top-right, short) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#5E3BB0] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 cursor-default overflow-hidden relative"
      >
        <TrendingUp className="w-7 h-7 text-[#EDE8FF]/60 mb-2" />
        <div>
          <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">347%</h3>
          <p className="text-xs sm:text-sm text-[#EDE8FF]/70 font-semibold mt-2 uppercase tracking-wider">Avg. ROI</p>
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/5 blur-sm" />
      </motion.div>

      {/* Card 3 — Services (bottom-right, short) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#3D2478] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 cursor-default overflow-hidden relative"
      >
        <div className="flex items-center gap-2 mb-3">
          {[Star, Package].map((Icon, i) => (
            <div key={i} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-[#C8B8F0]" />
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-black text-white leading-tight uppercase tracking-tight">The Full Package</h3>
          <p className="text-xs sm:text-sm text-[#C4B5F4] mt-2 leading-relaxed">SEO, Ads, Design &amp; Dev. Everything your brand needs.</p>
        </div>
        <div className="mt-3">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#C8B8F0] bg-white/10 px-4 py-2 rounded-full">
            Explore Services
          </span>
        </div>
      </motion.div>

      {/* Card 4 — CTA / Contact (full-width bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="col-span-2 bg-[#1a1035] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex items-center justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-400 cursor-default overflow-hidden relative"
      >
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
            Ready to grow?
          </h3>
          <p className="text-sm sm:text-base text-[#C4B5F4] mt-2 font-medium">hello@jmtsolutions.com</p>
        </div>
        <div className="relative z-10 w-14 h-14 rounded-full bg-[#5E3BB0] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#7B55CC] transition-all duration-300">
          <Send className="w-5 h-5 text-white -rotate-12" />
        </div>
        {/* Dashed arc decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <div className="w-36 h-36 border-2 border-dashed border-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Scrolling Marquee ─────────────────────────────────────────────────── */

const marqueeItems = [
  { icon: Search, label: "SEO Optimization" },
  { icon: Megaphone, label: "Paid Advertising" },
  { icon: Palette, label: "Brand Design" },
  { icon: Code2, label: "Web Development" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Globe, label: "Social Media" },
  { icon: LineChart, label: "Growth Strategy" },
  { icon: Zap, label: "Performance Marketing" },
];

function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden py-5 mt-auto">
      <div className="flex animate-[marquee_25s_linear_infinite] w-max gap-8">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-[#5E3BB0]/10 shadow-sm hover:border-[#5E3BB0]/30 hover:shadow-md transition-all duration-300 whitespace-nowrap group"
          >
            <item.icon className="w-4 h-4 text-[#5E3BB0] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-slate-600 group-hover:text-[#5E3BB0] transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Floating Stats Counter ────────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "98%", label: "Client Retention" },
  { value: "2.5M+", label: "Revenue Generated" },
  { value: "50+", label: "Team Members" },
];

function StatsStrip() {
  return (
    <motion.div
      {...fadeUp(0.6)}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full pt-6 mt-2"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center lg:items-start gap-0.5 group"
        >
          <span className="text-2xl sm:text-3xl font-black font-display text-[#5E3BB0] tracking-tight group-hover:scale-105 transition-transform origin-left">
            {stat.value}
          </span>
          <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

/* ─── Floating Orbs (decorative) ────────────────────────────────────────── */

function FloatingOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-[15%] right-[8%] w-72 h-72 rounded-full bg-gradient-to-br from-[#7B55CC]/20 to-[#5E3BB0]/10 blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-56 h-56 rounded-full bg-gradient-to-tr from-blue-400/10 to-[#5E3BB0]/15 blur-3xl pointer-events-none"
        animate={{ y: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[35%] w-40 h-40 rounded-full bg-gradient-to-bl from-amber-300/10 to-[#7B55CC]/10 blur-3xl pointer-events-none"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* ─── Hero Section ──────────────────────────────────────────────────────── */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <GridPatternDemo />
      </div>

      {/* Floating Decorative Orbs */}
      <FloatingOrbs />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center pt-24 lg:pt-28 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 xl:gap-16 items-center w-full">

          {/* ─── Left: Text + CTA ─────────────────────────────────────── */}
          <div className="order-2 lg:order-1 flex flex-col gap-5 lg:gap-6 items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#5E3BB0]/5 backdrop-blur-sm border border-[#5E3BB0]/20 text-xs font-bold uppercase tracking-[0.15em] text-[#5E3BB0] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#5E3BB0] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5E3BB0]" />
                </span>
                Now Accepting Projects
              </span>
            </motion.div>

            {/* Headline — MUCH LARGER */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold font-display leading-[1.04] tracking-tight text-slate-900"
            >
              We Build Brands
              <br />
              That{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#7B55CC] to-[#5E3BB0] bg-clip-text text-transparent">
                  Stand Out
                </span>
                {/* Animated underline decoration */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[5px] rounded-full bg-gradient-to-r from-[#7B55CC] to-[#5E3BB0] origin-left"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            {/* Subheadline — slightly larger */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-lg sm:text-xl text-slate-500 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0"
            >
              Strategy-driven digital marketing that transforms your online
              presence into a{" "}
              <span className="text-[#5E3BB0] font-semibold">
                revenue-generating machine
              </span>
              .
            </motion.p>

            {/* CTA Buttons — bigger */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <Link href="#contact" className={heroStyles.btnPrimary}>
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className={heroStyles.btnOutline}>
                <Play className="w-4 h-4" />
                Watch Showreel
              </button>
            </motion.div>

            {/* Social proof + Stars */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex items-center justify-center lg:justify-start gap-5 pt-3"
            >
              <div className="flex -space-x-2.5">
                {[
                  "from-[#7B55CC] to-[#5E3BB0]",
                  "from-[#5E3BB0] to-[#3D2478]",
                  "from-[#7B55CC] to-[#3D2478]",
                  "from-[#5E3BB0] to-[#7B55CC]",
                ].map((g, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-white shadow-sm flex items-center justify-center text-[11px] font-bold text-white`}
                  >
                    {["J", "A", "M", "S"][i]}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-semibold mt-0.5">
                  Trusted by 500+ brands
                </span>
              </div>
            </motion.div>

            {/* Stats Counter Strip */}
            <StatsStrip />
          </div>

          {/* ─── Right: Bento Grid ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <BentoGrid />
          </motion.div>

        </div>
      </div>

      {/* Bottom Marquee Strip */}
      <div className="relative z-10">
        <MarqueeStrip />
      </div>
    </section>
  );
}