"use client";

import { motion } from "motion/react";
import { Zap, Target, LineChart, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const advantages = [
  {
    id: "speed",
    title: "Lightning Fast Execution",
    description: "We move fast and break records. Our agile methodology ensures your campaigns launch quicker and optimize faster than the competition.",
    icon: Zap,
  },
  {
    id: "precision",
    title: "Laser-Targeted Precision",
    description: "No more wasted ad spend. We identify and target your ideal customer profile with surgical precision to maximize conversion rates.",
    icon: Target,
  },
  {
    id: "growth",
    title: "Scalable Growth Systems",
    description: "We don't just run campaigns; we build sustainable growth engines that scale alongside your business objectives.",
    icon: LineChart,
  },
  {
    id: "team",
    title: "Dedicated Expert Pods",
    description: "Get a dedicated team of specialists—strategists, creatives, and analysts—working synchronously on your account.",
    icon: Users,
  },
];

export default function AdvantagesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="The JMT Advantage"
              title="Built for speed. Designed for scale."
              subtitle="We combine data-driven strategy with relentless execution to deliver results that matter to your bottom line."
              alignment="left"
            />
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 lg:pl-10">
            {advantages.map((adv, index) => (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(94,59,176,0.08)] transition-all duration-500"
              >
                {/* Number Watermark */}
                <span className="absolute -top-6 -right-2 text-[120px] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-[#5E3BB0]/5 transition-colors duration-500">
                  0{index + 1}
                </span>

                <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#5E3BB0] transition-colors duration-500">
                    <adv.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 mb-3">{adv.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{adv.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
