"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import {
    Search,
    Users,
    BarChart3,
    Globe2,
    ArrowUpRight,
    Database,
    Quote
} from "lucide-react";

export default function IRINSPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <PageHeader
                title="IRINS Faculty Profile"
                subtitle="Connecting our research community with the national scholarly network."
                breadcrumb="Home / Research / IRINS"
                image={pageImages.genericPage}
            />

            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Dashboard-Style Metric Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { label: "Faculty Profiles", value: "120+", icon: <Users className="w-5 h-5" /> },
                            { label: "Research Publications", value: "850+", icon: <Database className="w-5 h-5" /> },
                            { label: "Total Citations", value: "3.2k", icon: <Quote className="w-5 h-5" /> },
                            { label: "Global H-Index", value: "42", icon: <BarChart3 className="w-5 h-5" /> },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-3 text-blue-600 mb-2">
                                    {stat.icon}
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</span>
                                </div>
                                <div className="text-3xl font-bold text-[#1A2E5A]">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">National Research Database</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                                Showcasing our <br />
                                <span className="text-[#2F4A8A]/50 italic font-light">Academic Impact</span>
                            </h2>

                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                                <p>
                                    The Indian Research Information Network System (IRINS) is a web-based Research Information Management (RIM) service provided by the INFLIBNET Centre.
                                </p>
                                <p>
                                    It allows our faculty to showcase their scholarly communication activities and provides an opportunity to create a digital identity for our institution in the global research ecosystem.
                                </p>
                            </div>

                            <a
                                href="https://irins.org/"
                                target="_blank"
                                className="inline-flex items-center gap-3 bg-[#1A2E5A] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all group"
                            >
                                Access IRINS Portal
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        {/* Right Card / Visual */}
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-amber-500 rounded-[2.5rem] blur-xl opacity-20"></div>
                                <div className="relative bg-white border border-slate-200 p-8 rounded-[2rem] shadow-xl">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Globe2 className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <span className="font-bold text-[#1A2E5A]">Global Visibility</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {[
                                            "Centralized Research Profiles",
                                            "Impact Analytics & Citations",
                                            "Inter-departmental Collaboration",
                                            "Seamless ORCID Integration"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-slate-600">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 pt-8 border-t border-slate-100">
                                        <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-4">
                                            <Search className="w-5 h-5 text-slate-400" />
                                            <div className="h-4 w-32 bg-slate-200 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Institutional Branding Section */}
            <section className="bg-[#f8fafc] border-y border-slate-200 py-16">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Powered By</h3>
                    <div className="flex justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
                        {/* INFLIBNET Logo Placeholder */}
                        <div className="h-16 flex flex-col items-center justify-center font-bold text-2xl text-slate-800">
                            INFLIBNET
                            <span className="text-[10px] tracking-[0.4em] uppercase font-light -mt-1 text-slate-400">Centre</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}