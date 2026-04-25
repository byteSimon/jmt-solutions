"use client";

import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#5E3BB0]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Info */}
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Ready to scale your revenue?"
              subtitle="Drop us a line and let's discuss how we can build a custom growth strategy for your brand."
              alignment="left"
              className="mb-12"
            />

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-[#5E3BB0]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Email Us</h4>
                  <p className="text-slate-600">hello@jmtsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#5E3BB0]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Visit Us</h4>
                  <p className="text-slate-600">123 Innovation Drive<br/>Tech District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-[#5E3BB0]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <GlassCard className="!p-8 sm:!p-10 border border-slate-200 bg-white/60">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#7B55CC] focus:ring-1 focus:ring-[#7B55CC] transition-all shadow-sm"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#7B55CC] focus:ring-1 focus:ring-[#7B55CC] transition-all shadow-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Work Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#7B55CC] focus:ring-1 focus:ring-[#7B55CC] transition-all shadow-sm"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#7B55CC] focus:ring-1 focus:ring-[#7B55CC] transition-all resize-none shadow-sm"
                    placeholder="Tell us about your project goals..."
                  />
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2 bg-[#5E3BB0] text-white font-bold rounded-xl px-6 py-4 mt-2 transition-all duration-300 hover:bg-[#7B55CC] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(123,85,204,0.3)] active:scale-95 group">
                  Send Message
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
