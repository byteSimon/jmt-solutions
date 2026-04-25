"use client";

import { motion } from "motion/react";
import { Search, Megaphone, Palette, Code2, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    id: "seo",
    title: "SEO & Growth",
    description: "Dominate search rankings and capture high-intent organic traffic that converts into paying customers.",
    icon: Search,
    color: "from-emerald-400 to-emerald-600",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100/50",
    iconColor: "text-emerald-600",
  },
  {
    id: "ads",
    title: "Paid Advertising",
    description: "Maximize your ROI with data-driven campaigns across Google, Meta, TikTok, and LinkedIn.",
    icon: Megaphone,
    color: "from-[#7B55CC] to-[#5E3BB0]",
    bg: "bg-purple-50",
    iconBg: "bg-[#5E3BB0]/10",
    iconColor: "text-[#5E3BB0]",
  },
  {
    id: "design",
    title: "Brand Design",
    description: "Craft a memorable visual identity that resonates with your audience and stands out in a crowded market.",
    icon: Palette,
    color: "from-amber-400 to-amber-600",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100/50",
    iconColor: "text-amber-600",
  },
  {
    id: "dev",
    title: "Web Development",
    description: "Build blazing fast, responsive websites optimized for user experience and high conversion rates.",
    icon: Code2,
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100/50",
    iconColor: "text-blue-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Decorative background element */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to scale."
          subtitle="A comprehensive suite of digital marketing services designed to work together seamlessly for maximum impact."
          className="mb-16 lg:mb-20"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <GlassCard className="h-full group cursor-pointer border-slate-200 bg-white/40 hover:bg-white/80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 group-hover:text-[#5E3BB0] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center text-sm font-bold text-[#5E3BB0]">
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Learn more</span>
                      <span className="inline-block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#7B55CC]">Learn more</span>
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
