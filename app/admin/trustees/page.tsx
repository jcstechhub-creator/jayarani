"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  GanttChart, 
  ShieldCheck, 
  Landmark, 
  Handshake, 
  Compass,
  ArrowRight,
  Users
} from "lucide-react";

export default function BoardOfTrustees() {
  const boardRoles = [
    {
      role: "Strategic Oversight",
      desc: "Guiding the long-term vision and master plan of the institution to ensure multi-generational impact.",
      icon: Compass
    },
    {
      role: "Asset Stewardship",
      desc: "Managing and protecting the physical and financial assets of the college with absolute transparency.",
      icon: Landmark
    },
    {
      role: "Mission Protection",
      desc: "Ensuring every institutional decision remains aligned with the core FIHM charism of love and sacrifice.",
      icon: ShieldCheck
    },
    {
      role: "External Relations",
      desc: "Liaising with global educational bodies and benefactors to expand the college's reach.",
      icon: Handshake
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Board of Trustees"
        subtitle="The guardians of our institutional legacy and future roadmap."
        breadcrumb="Home / Administration / Trustees"
        image={pageImages.adminTrustees}
      />

      {/* --- BOARD OVERVIEW SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Governance</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Stewards of <br />
                <span className="text-[#2F4A8A]/60 italic font-light">Purpose & Legacy</span>
              </h2>
              <div className="w-16 h-1.5 bg-yellow-400 mb-8 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                The Board of Trustees at Jayarani College consists of seasoned leaders from the 
                Congregation of FIHM Sisters and invited experts. Their collective responsibility is 
                to safeguard the institution's values while navigating the complexities of modern 
                higher education.
              </p>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <GanttChart className="text-[#2F4A8A]" size={20} />
                </div>
                <p className="text-sm font-medium text-slate-700">
                  Meeting quarterly to review strategic development and capital projects.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-[#1A2E5A] p-8 rounded-3xl text-white">
                   <Users className="text-yellow-400 mb-4" size={32} />
                   <h4 className="font-bold text-lg">Collective Wisdom</h4>
                </div>
                <img 
                  src="/newgirlimages/image-40.jpeg" 
                  alt="Board Governance" 
                  className="rounded-3xl h-64 w-full object-cover shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="/newgirlimages/image-41.jpeg" 
                  alt="Professional Oversight" 
                  className="rounded-3xl h-80 w-full object-cover shadow-xl"
                />
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                   <h4 className="font-bold text-[#1A2E5A] text-lg">180 Year</h4>
                   <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">FIHM Legacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUSTEE ROLES GRID --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardRoles.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 transition-all duration-300 hover:shadow-2xl group">
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2F4A8A] transition-colors">
                  <item.icon className="text-[#2F4A8A] group-hover:text-yellow-400" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-4 tracking-tight">{item.role}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOARD COMPOSITION CTA --- */}
      <section className="py-24 text-center px-6 bg-white relative">
        {/* Subtle geometric decor */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />
        
        <div className="inline-block bg-white px-12 relative z-10">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1A2E5A] mb-6">Transparency & Governance</h3>
            <p className="text-slate-500 mb-10 text-sm font-light leading-relaxed">
              The Board of Trustees operates under the direct ecclesiastical and civil authority 
              of the Congregation, ensuring that Jayarani College remains a sanctuary of 
              integrity and educational growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-colors shadow-lg shadow-blue-900/10">
                Governance Charter
              </button>
              <button className="flex items-center gap-2 text-[#2F4A8A] font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-slate-50 rounded-full transition-all">
                Annual Reports <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}