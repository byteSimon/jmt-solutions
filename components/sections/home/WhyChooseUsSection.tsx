"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
// cn unused

const traditionalPoints = [
  "Cookie-cutter strategies",
  "Slow communication & reporting",
  "Focus on vanity metrics",
  "Hidden fees & lock-in contracts",
  "Fragmented team structure",
];

const jmtPoints = [
  "Custom, data-driven growth plans",
  "Transparent, real-time reporting",
  "Hyper-focus on ROI and revenue",
  "Clear pricing, no hidden surprises",
  "Cohesive, dedicated expert team",
];

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Not your average agency."
          subtitle="We do things differently because the old way of doing digital marketing is broken. Here is how we stack up."
          className="mb-16 lg:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Traditional Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col"
          >
            <div className="bg-white/40 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 lg:p-12 h-full flex flex-col relative overflow-hidden">
              {/* Subtle texture overlay */}
              {/* <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}

              <h3 className="text-2xl font-bold text-slate-500 mb-8 font-display">Traditional Agencies</h3>

              <ul className="space-y-6 flex-1 flex flex-col justify-center">
                {traditionalPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-500">
                    <div className="w-6 h-6 rounded-full bg-slate-200/50 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* JMT Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col"
          >
            <GlassCard dark className="h-full flex flex-col !p-8 lg:!p-12">
              {/* Background glow specific to JMT side */}
              {/* Background glow specific to JMT side - Removed per user request */}
              <h3 className="text-3xl font-black text-white mb-8 font-display tracking-tight">JMT Solutions</h3>

              <ul className="space-y-6 flex-1 flex flex-col justify-center relative z-10">
                {jmtPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-4 text-[#EDE8FF]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#7B55CC] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(123,85,204,0.5)]">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
