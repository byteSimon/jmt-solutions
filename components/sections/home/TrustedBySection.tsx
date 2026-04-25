"use client";

// motion unused
import { SectionHeading } from "@/components/ui/SectionHeading";

// Using simple abstract shapes as placeholder logos
const logos = [
  "Acme Corp", "TechNova", "GlobalScale", "Aura", "FinServe", "Pulse", "Nexus", "Elevate"
];

export default function TrustedBySection() {
  return (
    <section className="py-20 lg:py-24 overflow-hidden border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 mb-12">
        <SectionHeading
          title="Trusted by industry leaders"
          className="max-w-xl mx-auto"
        />
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Left/Right fading edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f4f4ff] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f4f4ff] to-transparent z-10" />

        <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-12 lg:px-20 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <span className="text-2xl font-black tracking-tighter text-slate-400 font-display uppercase">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
