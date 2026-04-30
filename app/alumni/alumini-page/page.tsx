"use client";

import React from "react";
// import PageHeader from "@/components/PageHeader";
import { Users, Target, Heart, Briefcase, Mail, Award, Globe } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";

const AlumniAssociation = () => {
    const stats = [
        { label: "Members", value: "500+", icon: <Users size={20} /> },
        { label: "Established", value: "2024", icon: <Globe size={20} /> },
        { label: "Committees", value: "12+", icon: <Award size={20} /> }
    ];

    const objectives = [
        "Reconnect and reunite with fellow alumni/ae",
        "Provide a platform for networking and career development",
        "Promote social responsibility and community service",
        "Support the institution's growth and development",
        "Preserve and promote the legacy of JCS"
    ];

    const benefits = [
        { title: "Networking", desc: "Opportunities for career advancement and professional connections.", icon: <Briefcase className="text-blue-600" /> },
        { title: "Exclusive Events", desc: "Access to reunions and specialized alumni-only campus events.", icon: <Users className="text-red-900" /> },
        { title: "Give Back", desc: "Chance to lead social responsibility initiatives and mentor students.", icon: <Heart className="text-pink-600" /> },
        { title: "Stay Informed", desc: "Updates on the latest news and developments at Jayarani College.", icon: <Target className="text-green-600" /> }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <PageHeader
                title="Alumni Association"
                subtitle="Staying connected with our roots and building a proud tradition of excellence."
                breadcrumb="Home / Community / Alumni"
                // image="/newgirlimages/image-100.jpeg"
                image="/banner/banner4.jpeg"
            />

            <div className="max-w-7xl mx-auto px-6 mt-16 space-y-20">

                {/* Intro & Stats Section */}
                <section className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">A Vibrant Global Community</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            The JCS Alumni Association is a vibrant community of former students who share a common bond and pride in their alma mater.
                            Officially established in the academic year <strong>2024 - 2025</strong>, we currently boast a growing network
                            of over <strong>500+ members</strong> across various disciplines.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#2F4A8A]">
                            <h4 className="font-bold text-[#2F4A8A] mb-2">Our Vision</h4>
                            <p className="text-sm text-slate-700 italic">"To build a strong community of alumni/ae who support each other and their alma mater."</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-[#2F4A8A] p-6 rounded-3xl text-white flex items-center justify-between shadow-lg shadow-blue-900/20">
                                <div>
                                    <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold">{stat.value}</p>
                                </div>
                                <div className="p-3 bg-white/10 rounded-xl">{stat.icon}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Objectives & Mission */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <Target className="text-red-900" /> Our Mission & Objectives
                        </h3>
                        <p className="text-slate-600 mb-8">
                            To foster a lifelong connection among alumni/ae, promote the values of excellence, integrity, and service,
                            and support the growth and development of JCS.
                        </p>
                        <ul className="space-y-4">
                            {objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-900 shrink-0" />
                                    <span className="text-sm font-medium leading-relaxed">{obj}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Association Leadership</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase">Secretary & Director</p>
                                <p className="text-lg font-bold text-[#2F4A8A]">Dr. Sr. Jothi Mary</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase">Convener</p>
                                <p className="text-lg font-bold text-[#2F4A8A]">Ms. T. Poornima </p>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs text-slate-500 italic">Supported by the Student Council Executive Members [cite: 443-446].</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-900">Member Benefits</h3>
                        <p className="text-slate-500 mt-2">Why join the JCS Alumni network?</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group">
                                <div className="mb-6 p-3 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-3">{benefit.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Footer */}
                <section className="bg-slate-900 rounded-[3rem] p-12 text-white text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Reconnect with Your Roots</h2>
                        <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Join us in preserving our legacy and being part of a proud tradition of excellence.
                            We look forward to welcoming you home.
                        </p>
                        <a
                            href="mailto:alumni@jcs.edu.in"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-50 transition shadow-xl"
                        >
                            <Mail size={20} />
                            alumni@jcs.edu.in
                        </a>
                    </div>
                    <Users className="absolute -right-20 -bottom-20 w-80 h-80 text-white/5 -rotate-12" />
                </section>
            </div>
        </div>
    );
};

export default AlumniAssociation;