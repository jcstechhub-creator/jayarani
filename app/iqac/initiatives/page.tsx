"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  Zap, 
  BarChart3, 
  Search, 
  Globe2, 
  Leaf, 
  BookOpenCheck, 
  Users, 
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

export default function QualityInitiatives() {
  const initiatives = [
    {
      title: "National Rankings",
      items: ["NIRF India Ranking Participation", "AISHE Survey Participation"],
      icon: Globe2,
      desc: "Regular participation in national frameworks to benchmark our institutional performance."
    },
    {
      title: "Internal & External Audits",
      items: ["Academic and Administrative Audit", "Gender Audit", "Energy, Green, and Environment Audit"],
      icon: Search,
      desc: "Comprehensive periodic assessments to ensure sustainability and operational efficiency."
    },
    {
      title: "Digital Transformation",
      items: ["E-Governance in Documentation", "Feedbacking Mechanism", "IPR Initiatives"],
      icon: Zap,
      desc: "Leveraging technology for paperless administration and transparent stakeholder feedback."
    },
    {
      title: "Capacity Building",
      items: ["Faculty Development Programmes", "Student Induction & Orientation", "Professional Development for Admin Staff"],
      icon: Users,
      desc: "Continuous training for staff and students to align with global educational strategies."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Quality Initiatives"
        subtitle="Catalytic improvements and strategic actions for institutional excellence."
        breadcrumb="Home / IQAC / Initiatives"
        // image="/newgirlimages/image-54.jpeg"
        image="/banner/banner4.jpeg"
      />

      {/* --- STRATEGIC FOCUS SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Continuous Improvement</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Driving the <br />
                <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Quality Culture</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                Since its inception in 2019, the IQAC has initiated numerous quality measures 
                to stimulate the academic environment. We promote collaboration with 
                stakeholders for the sustenance of teaching-learning and research excellence.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-bold border border-yellow-100">
                <ShieldCheck size={18} /> Established 2019
              </div>
            </div>
            
            <div className="bg-[#1A2E5A] p-10 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
               <BarChart3 className="absolute -bottom-10 -right-10 text-white/5" size={300} />
               <h3 className="text-2xl font-bold mb-8 relative z-10">Core Objectives</h3>
               <div className="space-y-6 relative z-10">
                  {[
                    "Documentation of all campus activities",
                    "Awareness of global educational strategies",
                    "Promotion of research-based studies",
                    "Collaboration for quality evaluation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="text-blue-50 font-light">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INITIATIVES GRID --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((init, i) => (
              <div 
                key={i} 
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#2F4A8A] transition-colors">
                    <init.icon className="text-[#2F4A8A] group-hover:text-yellow-400" size={28} />
                  </div>
                  <ArrowUpRight className="text-slate-300 group-hover:text-[#2F4A8A]" />
                </div>
                
                <h4 className="text-2xl font-bold text-[#1A2E5A] mb-4">{init.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                  {init.desc}
                </p>
                
                <div className="space-y-3 pt-6 border-t border-slate-50">
                  {init.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <BookOpenCheck size={14} className="text-yellow-600" />
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-tighter">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AUDIT COMPLIANCE BANNER --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 border-2 border-dashed border-slate-200">
          <Leaf className="mx-auto text-green-500 mb-6" size={48} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Environmental Stewardship</h3>
          <p className="text-slate-500 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Our quality initiatives extend beyond academics to environmental sustainability. 
            The Green, Energy, and Environment audits are conducted periodically to maintain 
            a sustainable campus for future generations.
          </p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
            View Audit Reports
          </button>
        </div>
      </section>
    </main>
  );
}