"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    id: 1,
    client: "TechNova",
    category: "SaaS Growth",
    title: "Scaling MRR by 347% in 6 months",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    color: "bg-blue-500",
  },
  {
    id: 2,
    client: "Aura Lifestyle",
    category: "E-Commerce",
    title: "Record-breaking BFCM campaigns",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    color: "bg-rose-500",
  },
  {
    id: 3,
    client: "FinServe",
    category: "Financial Tech",
    title: "Lowering CAC by 40% with precision targeting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    color: "bg-emerald-500",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <SectionHeading
            eyebrow="Our Work"
            title="Results that speak louder than promises."
            subtitle="Explore how we've helped ambitious brands transform their digital presence and shatter their growth targets."
            alignment="left"
            className="lg:max-w-2xl"
          />
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:inline-flex items-center gap-2 px-8 py-4 bg-[#5E3BB0] text-white rounded-full font-bold hover:bg-[#7B55CC] transition-all duration-300 active:scale-95 shrink-0 shadow-[0_10px_30px_rgba(94,59,176,0.3)]"
          >
            View all case studies
          </motion.button>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[21/9] cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${project.color} text-white`}>
                    {project.category}
                  </span>
                  <span className="text-white/80 text-sm font-medium">{project.client}</span>
                </div>
                
                <div className="flex items-end justify-between gap-6">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight max-w-3xl translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100 border border-white/20 hover:bg-white hover:text-slate-900">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 w-full lg:hidden inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5E3BB0] text-white rounded-full font-bold active:scale-95 shadow-[0_10px_30px_rgba(94,59,176,0.3)]"
        >
          View all case studies
        </motion.button>
      </div>
    </section>
  );
}
