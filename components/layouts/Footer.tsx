"use client"
import Link from "next/link";
import Image from "next/image";
import { Activity } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative pt-32 pb-8">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5E3BB0]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 -mt-[200px] mb-16">
                <div className="p-8 md:p-12 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full bg-white/60 backdrop-blur-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5E3BB0]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-black font-display mb-4 tracking-tight">
                            Let&apos;s make your digital dream a reality.
                            <span className="text-[#5E3BB0] block mt-2">Effective Results.</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button className="bg-[#5E3BB0] text-white px-8 py-4 rounded-full font-bold shadow-[0_10px_30px_rgba(94,59,176,0.3)] hover:bg-[#7B55CC] hover:-translate-y-1 transition-all duration-300 active:scale-95">
                                Subscribe to our newsletter
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 flex flex-col space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5E3BB0] to-[#7B55CC] flex items-center justify-center shadow-lg shadow-[rgba(94,59,176,0.25)]">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-slate-900 font-display">
                                JMT SOLUTIONS
                            </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed max-w-sm">
                            Strategy-driven digital marketing that transforms your online presence into a revenue-generating machine.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-[#5E3BB0] hover:border-[#5E3BB0] transition-all duration-300">
                                <img src="/assets/icons/facebook.png" alt="Facebook" className="w-5 h-5 object-contain" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-[#5E3BB0] hover:border-[#5E3BB0] transition-all duration-300">
                                <img src="/assets/icons/instagram.png" alt="Instagram" className="w-5 h-5 object-contain" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-[#5E3BB0] hover:border-[#5E3BB0] transition-all duration-300">
                                <img src="/assets/icons/youtube.png" alt="YouTube" className="w-6 h-6 object-contain" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                            Company
                        </h3>
                        <div className="flex flex-col space-y-3">
                            <Link href="/" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Home</span>
                            </Link>
                            <Link href="#about" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">About Us</span>
                            </Link>
                            <Link href="#portfolio" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Portfolio</span>
                            </Link>
                            <Link href="#services" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Services</span>
                            </Link>
                            <Link href="#contact" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Contact</span>
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                            Services
                        </h3>
                        <div className="flex flex-col space-y-3">
                            <Link href="#" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">SEO Optimization</span>
                            </Link>
                            <Link href="#" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Paid Advertising</span>
                            </Link>
                            <Link href="#" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Web Development</span>
                            </Link>
                            <Link href="#" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Brand Design</span>
                            </Link>
                            <Link href="#" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Content Strategy</span>
                            </Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                            Legal
                        </h3>
                        <div className="flex flex-col space-y-3">
                            <Link href="#" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Privacy Policy</span>
                            </Link>
                            <Link href="#" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Terms & Conditions</span>
                            </Link>
                            <Link href="#" className="text-slate-600 hover:text-[#5E3BB0] transition-colors flex items-center group">
                                <span className="text-[#5E3BB0] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">›</span>
                                <span className="-translate-x-3 group-hover:translate-x-0 transition-all">Refund Policy</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-slate-200 mt-16 pt-8 pb-4">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>
                        © {new Date().getFullYear()} JMT Solutions. All rights reserved.
                    </p>
                    <p>
                        Designed to scale. Built to perform.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
