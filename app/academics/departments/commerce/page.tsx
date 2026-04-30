"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Banknote, 
  BarChart3, 
  Briefcase, 
  Coins, 
  FileSpreadsheet, 
  Globe2,
  Handshake,
  PieChart,
  ShieldCheck,
  TrendingUp,
  UserCheck
} from "lucide-react";

export default function CommercePage() {
  const departmentFocus = [
    { 
      title: "Financial Accounting", 
      icon: FileSpreadsheet, 
      desc: "Mastering the systematic recording, reporting, and analysis of financial transactions." 
    },
    { 
      title: "Corporate Governance", 
      icon: ShieldCheck, 
      desc: "Understanding the legal frameworks and ethical practices that drive modern businesses." 
    },
    { 
      title: "Marketing & Strategy", 
      icon: TrendingUp, 
      desc: "Developing global marketing strategies and consumer behavior insights." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Dept. of Commerce"
        subtitle="Cultivating ethical leaders for the global financial and corporate landscape."
        breadcrumb="Home / Academics / Departments / Commerce"
        image={pageImages.academicsDepartmentCommerce}
      />

      {/* --- DEPARTMENT OVERVIEW --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Engine of Economy</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Empowering <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Corporate Visionaries</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              The Department of Commerce at Jayarani College is one of our flagship wings, 
              designed to bridge the gap between academic theory and the fast-paced 
              corporate world. We offer specialized training in <strong>B.Com General</strong> 
              and <strong>B.Com Computer Applications</strong>, ensuring our students 
              are adept at both financial logic and digital tools.
            </p>
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <Handshake className="text-[#2F4A8A] shrink-0" size={24} />
              <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                "Our goal is to nurture women entrepreneurs and professionals who lead 
                with integrity, transparency, and fiscal intelligence."
              </p>
            </div>
          </div>

          <div className="bg-[#1A2E5A] p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <BarChart3 className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            <h3 className="text-2xl font-bold mb-8">Professional Pathways</h3>
            <div className="space-y-6 relative z-10">
              {[
                { label: "CA / ACS Foundation Coaching", icon: UserCheck },
                { label: "Digital Accounting & Tally GST", icon: Coins },
                { label: "Entrepreneurship Incubation", icon: Briefcase }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                    <pill.icon size={20} className="text-white group-hover:text-[#1A2E5A]" />
                  </div>
                  <span className="font-medium tracking-wide">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE COMPETENCIES --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Curriculum Focus</h3>
            <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">Integrating Finance & Technology</p>
            <div className="h-1.5 w-12 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {departmentFocus.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-[#2F4A8A]" />
                </div>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">{item.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRY READINESS --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1A2E5A] rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
          <Globe2 className="absolute top-0 right-0 opacity-5" size={200} />
          <h3 className="text-3xl font-bold mb-6">Global Industry Readiness</h3>
          <p className="text-blue-100/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            Our students undergo intensive training in soft skills, business communication, 
            and data analysis to meet the high demands of the global banking and financial sectors.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Banking", "Insurance", "Auditing", "Stock Market"].map((sector) => (
              <div key={sector} className="px-6 py-3 border border-white/10 rounded-xl bg-white/5 text-[10px] font-bold uppercase tracking-widest">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-xl mx-auto">
          <PieChart className="mx-auto text-slate-200 mb-8" size={60} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Shape Your Corporate Future</h3>
          <p className="text-slate-500 mb-10 text-sm font-light">
            Join a legacy of successful commerce professionals. Admissions are now 
            open for the B.Com (General) and B.Com (Computer Applications) programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#2F4A8A] transition-all shadow-lg">
              Apply Now
            </button>
            <button className="flex items-center gap-2 text-[#2F4A8A] font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-slate-50 rounded-xl transition-all">
              Download Syllabus
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}