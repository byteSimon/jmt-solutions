"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BarChart3,
  ShieldCheck,
  Code2,
  Cpu,
  Terminal,
  Activity,
  ArrowRight,
  Menu as MenuIcon,
  X,
  ChevronDown,
} from "lucide-react";

// ─── Styles ───────────────────────────────────────────────────────────────────

const navStyles = {
  wrapper: "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4",
  containerBase: "relative flex items-center justify-between lg:justify-start gap-4 md:gap-8 px-5 md:px-10 py-3 rounded-full border border-slate-200/60 transition-all duration-500 w-full max-w-[95vw] lg:w-auto",
  scrolled: "bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)]",
  unscrolled: "bg-white/40 backdrop-blur-md",
  dropdownCard: "absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-3xl rounded-[2.5rem] border border-slate-200 shadow-[0_20px_70px_rgba(0,0,0,0.1)] z-[60] hidden lg:block overflow-hidden",
  menuLinkWrapper: "flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group",
  menuLinkIcon: "w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-secondary group-hover:text-primary group-hover:bg-slate-200 transition-all shrink-0",
  btnPrimary: "px-6 py-2.5 rounded-full bg-[#5E3BB0] text-white text-sm font-bold hover:bg-[#7B55CC] transition-all active:scale-95 shadow-lg shadow-[rgba(94,59,176,0.25)]",
  btnGhost: "text-lg font-medium text-secondary hover:text-primary transition-colors px-4 py-2"
};

// ─── Menu Link ───────────────────────────────────────────────────────────────

const MenuLink = ({
  title,
  description,
  icon,
  titleColor = "text-white",
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  titleColor?: string;
}) => (
  <a
    href="#"
    className={navStyles.menuLinkWrapper}
  >
    {icon && (
      <div className={navStyles.menuLinkIcon}>
        {icon}
      </div>
    )}
    <div>
      <div className={`text-sm font-semibold transition-colors ${titleColor?.replace('text-white', 'text-slate-900') || 'text-slate-900'}`}>
        {title}
      </div>
      <div className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors line-clamp-1">
        {description}
      </div>
    </div>
  </a>
);

// ─── Dropdown Content for Services ────────────────────────────────────────────

const ServiceContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2 min-w-[300px] md:min-w-[750px]">
    <div className="space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-3">
        Web Services
      </h3>
      <div className="space-y-1">
        <MenuLink
          title="Modern Hosting"
          description="Edge infrastructure for modern apps"
          titleColor="text-indigo-400"
          icon={<Activity className="w-4 h-4" />}
        />
        <MenuLink
          title="Analytics"
          description="Real-time data visualization"
          titleColor="text-indigo-400"
          icon={<BarChart3 className="w-4 h-4" />}
        />
        <MenuLink
          title="Infrastructure"
          description="Scalable cloud solutions"
          titleColor="text-indigo-400"
          icon={<Cpu className="w-4 h-4" />}
        />
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-3">
        Creative Tooling
      </h3>
      <div className="space-y-1">
        <MenuLink
          title="UI Components"
          description="Pre-built Tailwind components"
          titleColor="text-cyan-400"
          icon={<Code2 className="w-4 h-4" />}
        />
        <MenuLink
          title="Template Library"
          description="Production-ready site layouts"
          titleColor="text-cyan-400"
          icon={<Terminal className="w-4 h-4" />}
        />
        <MenuLink
          title="Security"
          description="Enterprise protection"
          titleColor="text-cyan-400"
          icon={<ShieldCheck className="w-4 h-4" />}
        />
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-3">
        From the blog
      </h3>
      <div className="group cursor-pointer rounded-xl overflow-hidden bg-slate-800/30 border border-slate-800/50 hover:border-slate-700 transition-all p-2">
        <div className="aspect-video relative rounded-lg overflow-hidden bg-slate-900 mb-3">

        </div>
        <div className="px-1 py-1">
          <h4 className="text-sm font-medium text-white mb-1 group-hover:text-indigo-400 transition-colors">
            Introducing Acme Analytics 2.0
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            Faster queries, smarter dashboards, and real-time collaboration.
          </p>
          <div className="flex items-center text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
            Read more <ArrowRight className="ml-1 w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Nav Items Config ─────────────────────────────────────────────────────────

type NavItem =
  | { title: string; href: string; id: string; content?: undefined }
  | { title: string; id: string; content: React.ReactNode; href?: undefined };

const navItems: NavItem[] = [
  { title: "Home", href: "#", id: "home" },
  { title: "About Us", href: "#about", id: "about" },
  { title: "Services", content: <ServiceContent />, id: "services" },
  { title: "Portfolio", href: "#portfolio", id: "portfolio" },
  { title: "Testimonial", href: "#testimonial", id: "testimonial" },
  { title: "Contact Us", href: "#contact", id: "contact" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const Navbar = () => {
  const [desktopActive, setDesktopActive] = useState<string | null>(null);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileActive(null);
  };

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav
        className={navStyles.wrapper}
        onMouseLeave={() => setDesktopActive(null)}
      >
        <div
          className={`${navStyles.containerBase} ${scrolled ? navStyles.scrolled : navStyles.unscrolled
            }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#5E3BB0] to-[#7B55CC] flex items-center justify-center shadow-lg shadow-[rgba(94,59,176,0.25)] group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
              JMT SOLUTIONS
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() =>
                  item.content
                    ? setDesktopActive(item.id)
                    : setDesktopActive(null)
                }
              >
                {item.content ? (
                  <button
                    className={`px-4 py-2 text-lg font-bold transition-all flex items-center gap-1 rounded-full outline-none ${desktopActive === item.id
                      ? "text-[#5E3BB0] bg-[#5E3BB0]/8"
                      : "text-slate-600 hover:text-[#5E3BB0]"
                      }`}
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${desktopActive === item.id ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={navStyles.btnGhost}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 ml-4">
            <button className={navStyles.btnPrimary}>
              Get Started
            </button>
          </div>

          {/* Desktop Dropdown */}
          <AnimatePresence>
            {desktopActive && (
              <motion.div
                layoutId="nav-dropdown"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className={navStyles.dropdownCard}
              >
                {navItems.find((item) => item.id === desktopActive)?.content}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ✅ Mobile Hamburger — always on top */}
          <button
            className="lg:hidden ml-auto p-2 text-slate-600 hover:text-slate-900 transition-colors relative z-[70] outline-none"
            onClick={() =>
              isMobileMenuOpen ? closeMobileMenu() : setIsMobileMenuOpen(true)
            }
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <MenuIcon className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu — rendered outside nav pill so z-index is independent ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[65] lg:hidden flex flex-col"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
              onClick={closeMobileMenu}
            />

            {/* Content */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex flex-col h-full overflow-y-auto px-6 pt-24 pb-10"
            >
              {/* ✅ Explicit close button inside mobile menu */}
              <button
                onClick={closeMobileMenu}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Nav Items */}
              <div className="flex flex-col gap-2 flex-1">
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-slate-800/50 pb-2"
                  >
                    {item.content ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between py-4 text-left group outline-none"
                          onClick={() =>
                            setMobileActive(
                              mobileActive === item.id ? null : item.id,
                            )
                          }
                        >
                          <span className="text-3xl font-bold text-white group-hover:text-slate-300 transition-colors">
                            {item.title}
                          </span>
                          <ChevronDown
                            className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${mobileActive === item.id
                              ? "rotate-180 text-white"
                              : ""
                              }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileActive === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="bg-slate-900/50 rounded-3xl border border-slate-800/50 mb-4 overflow-hidden">
                                {item.content}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="w-full flex items-center py-4 text-left group outline-none"
                      >
                        <span className="text-3xl font-bold text-white group-hover:text-slate-300 transition-colors">
                          {item.title}
                        </span>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 space-y-3 pt-6 border-t border-slate-800/50">
                <button className="w-full py-4 text-center text-lg font-medium text-slate-300 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
                  Sign in
                </button>
                <button className="w-full py-4 text-center text-lg font-bold text-white bg-[#5E3BB0] rounded-2xl active:scale-95 transition-all hover:bg-[#7B55CC]">
                  Get started
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
