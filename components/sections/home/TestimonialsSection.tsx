"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const testimonials = [
  {
    id: 1,
    name: "Amir Khan",
    role: "CEO, TechNova Inc.",
    content: "Working with JMT was an absolutely transformative experience. Their strategy and execution consistently exceeded our expectations. They didn't just run ads; they built a revenue engine.",
    rating: 5,
    initial: "A",
    color: "bg-[#5E3BB0]",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder, Aura Lifestyle",
    content: "We were struggling with our ROAS before partnering with JMT. Within 3 months, they scaled our paid channels profitably and completely revamped our brand presence online.",
    rating: 5,
    initial: "S",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "David Chen",
    role: "CMO, FinServe",
    content: "The level of transparency and data-driven insight is unparalleled. JMT operates like an in-house team. The SEO growth alone doubled our inbound lead volume.",
    rating: 5,
    initial: "D",
    color: "bg-blue-500",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonial" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full max-w-3xl h-full bg-gradient-to-l from-purple-100/50 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Don't just take our word for it."
          subtitle="Hear from the founders and marketing leaders who trust JMT Solutions to scale their businesses."
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <GlassCard className="h-full flex flex-col bg-white">
                <Quote className="w-10 h-10 text-[#5E3BB0]/20 mb-6" />
                
                <p className="text-slate-600 leading-relaxed text-lg mb-8 flex-1 italic">
                  &quot;{t.content}&quot;
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xl shrink-0`}>
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
