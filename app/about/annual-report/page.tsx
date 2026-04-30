"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  FileText, 
  Download, 
  History, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function AnnualReport() {
  const reports = [
    { year: "2024 - 2025", title: "Annual Academic Report", size: "2.4 MB", date: "April 2025" },
    { year: "2023 - 2024", title: "Annual Academic Report", size: "3.1 MB", date: "May 2024" },
    { year: "2022 - 2023", title: "Annual Academic Report", size: "2.8 MB", date: "April 2023" },
    { year: "2021 - 2022", title: "Annual Academic Report", size: "2.5 MB", date: "May 2022" },
    { year: "2020 - 2021", title: "Annual Academic Report", size: "1.9 MB", date: "June 2021" },
    { year: "2019 - 2020", title: "Inaugural Academic Report", size: "1.5 MB", date: "May 2020" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <PageHeader 
        title="Annual Reports"
        subtitle="A comprehensive record of our academic journey, achievements, and milestones."
        breadcrumb="Home / About / Annual Report"
        image={pageImages.aboutAnnualReport}
      />

      {/* --- FEATURED: LATEST REPORT --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <TrendingUp size={14} /> Latest Publication
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E5A] mb-6">
                  Annual Report <br /> Academic Year 2024-25
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8 font-light text-lg">
                  This report encapsulates the collective efforts of our faculty and students, 
                  detailing academic performance, research initiatives, and institutional growth 
                  over the past year.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-3 bg-[#2F4A8A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1A2E5A] transition-all shadow-lg shadow-blue-900/20">
                    <Download size={20} /> Download PDF
                  </button>
                  <button className="flex items-center gap-2 text-[#2F4A8A] px-8 py-4 font-bold hover:bg-slate-50 rounded-xl transition-all">
                    View Online <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="bg-[#2F4A8A] p-16 hidden lg:flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10">
                   <FileText size={400} className="text-white -rotate-12 translate-x-20 translate-y-10" />
                </div>
                <div className="relative z-10 bg-white p-8 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 w-64 h-80 flex flex-col justify-between border-t-8 border-[#2F4A8A]">
                   <div className="flex justify-between items-start">
                      <ShieldCheck className="text-[#2F4A8A]" size={32} />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">JCS</span>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-[#2F4A8A]">ANNUAL REPORT</p>
                      <p className="text-2xl font-black text-slate-800">2024-25</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ARCHIVES GRID --- */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <History className="text-yellow-500" size={28} />
            <h3 className="text-2xl font-bold text-[#1A2E5A]">Report Archives</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, i) => (
              <div 
                key={i} 
                className="group p-6 bg-[#F8FAFC] border border-slate-100 rounded-2xl hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-50 transition-colors">
                    <FileText className="text-[#2F4A8A]" size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{report.size}</span>
                </div>
                
                <h4 className="text-lg font-bold text-slate-800 mb-1">{report.year}</h4>
                <p className="text-sm text-slate-500 mb-6">{report.title}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={14} />
                    <span className="text-xs font-medium">{report.date}</span>
                  </div>
                  <button className="p-2 text-[#2F4A8A] hover:bg-blue-50 rounded-lg transition-colors">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRANSPARENCY NOTE --- */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-400 text-sm leading-relaxed italic">
            "These reports serve as a transparent record of Jayarani College's commitment to excellence 
            in higher education and the holistic empowerment of women."
          </p>
        </div>
      </section>
    </main>
  );
}