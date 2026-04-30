"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  ClipboardCheck, 
  TrendingUp, 
  Globe, 
  FileSearch, 
  Users2, 
  Award,
  CheckCircle2,
  CalendarDays
} from "lucide-react";

export default function AboutIQAC() {
  const coreFunctions = [
    {
      title: "Documentation",
      desc: "Systematic record-keeping of all curricular, co-curricular, and extra-curricular activities on campus.",
      icon: ClipboardCheck
    },
    {
      title: "Best Practices",
      desc: "Disseminating information on institutional best practices among the faculty and departments.",
      icon: Award
    },
    {
      title: "Global Strategies",
      desc: "Promoting awareness of global educational strategies and modern teaching-learning paradigms.",
      icon: Globe
    },
    {
      title: "Research Promotion",
      desc: "Initiating new courses and examining the relevance of current programs for research promotion.",
      icon: FileSearch
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="About IQAC"
        subtitle="The Internal Quality Assurance Cell: Consistently working for catalytic institutional improvement."
        breadcrumb="Home / IQAC / About"
        // image="/newgirlimages/image-49.jpeg"
        image="/banner/banner4.jpeg"
      />

      {/* --- CELL INTRODUCTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Quality Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              A Conscious Contribution <br />
              <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">to Excellence</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
              <p>
                The Internal Quality Assurance Cell (IQAC) of Jayarani College consistently works 
                for catalytic improvement and consciously contributes towards the overall 
                excellence of the institution. 
              </p>
              <p className="text-base text-slate-500">
                Established since the college's inception in 2019, the IQAC has become the 
                backbone of our academic and administrative audits, ensuring that every 
                process follows the highest benchmarks set by the UGC and Periyar University.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-4">
               <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CalendarDays className="text-yellow-600" size={20} />
                  <span className="text-xs font-bold text-[#1A2E5A] uppercase tracking-widest">Established in 2019</span>
               </div>
               <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Users2 className="text-yellow-600" size={20} />
                  <span className="text-xs font-bold text-[#1A2E5A] uppercase tracking-widest">Multi-Stakeholder Body</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] rotate-3 -z-10" />
            <div className="bg-[#1A2E5A] p-12 rounded-[2.5rem] shadow-2xl text-white">
               <TrendingUp className="text-yellow-400 mb-6" size={48} />
               <h3 className="text-2xl font-bold mb-6">Quality Mandate</h3>
               <p className="text-blue-100/70 text-sm leading-relaxed mb-8 font-light">
                 The IQAC serves to internalize and institutionalize the quality-enhancement 
                 initiatives through periodic assessment and accreditations.
               </p>
               <div className="space-y-4">
                 {[
                   "Accreditation Preparedness",
                   "Strategic Planning",
                   "Quality Benchmarking",
                   "Best Practice Internalization"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 size={16} className="text-yellow-400" />
                     <span className="text-sm font-medium opacity-90">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE FUNCTIONS GRID --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4 uppercase tracking-[0.2em]">Key Objectives</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFunctions.map((func, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2F4A8A] transition-colors">
                  <func.icon className="text-[#2F4A8A] group-hover:text-yellow-400" size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#1A2E5A] mb-4">{func.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  {func.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SUPPORT --- */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
             <ClipboardCheck size={200} />
          </div>
          <h3 className="text-3xl font-bold text-[#1A2E5A] mb-6">IQAC Secretariat</h3>
          <p className="text-slate-500 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            The IQAC office is located in the Administrative Block and is open to faculty and 
            students for consultations regarding quality initiatives and academic audits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
               Email IQAC Coordinator
             </button>
             <button className="border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
               View Members
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}