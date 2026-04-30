"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Target, 
  BookOpen, 
  Award, 
  Lightbulb, 
  TrendingUp, 
  FileText,
  ChevronRight,
  Search
} from "lucide-react";

export default function OutcomesPage() {
  const departments = [
    { name: "Computer Science", code: "CS", color: "bg-blue-500" },
    { name: "Commerce", code: "CO", color: "bg-emerald-500" },
    { name: "Mathematics", code: "MA", code_color: "bg-orange-500" },
    { name: "Physics", code: "PH", color: "bg-purple-500" },
    { name: "English", code: "EN", color: "bg-rose-500" },
  ];

  const definitionCards = [
    {
      title: "Program Outcomes (POs)",
      desc: "Statements that describe what students are expected to know and be able to do by the time of graduation.",
      icon: Target
    },
    {
      title: "Course Outcomes (COs)",
      desc: "Specific statements that describe the knowledge and skills students may acquire through a particular course.",
      icon: BookOpen
    },
    {
      title: "Program Specific Outcomes (PSOs)",
      desc: "What the graduates of a specific program should be able to do at the time of graduation.",
      icon: Lightbulb
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="POs & COs"
        subtitle="Outcome-Based Education: Defining the milestones of academic achievement."
        breadcrumb="Home / Academics / Outcomes"
        image={pageImages.academicsPosCos}
      />

      {/* --- OBE EXPLANATION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Academic Framework</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Outcome-Based <br />
              <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Education (OBE)</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              Jayarani College adopts the OBE framework to ensure that our teaching-learning 
              process is focused on the actual results achieved by students. This systematic 
              approach ensures that our graduates are well-equipped for their professional careers.
            </p>
            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <TrendingUp className="text-[#2F4A8A]" size={32} />
              <p className="text-sm font-medium text-slate-700">
                Aligned with Periyar University & NAAC Quality Indicators.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {definitionCards.map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#2F4A8A] transition-colors">
                  <card.icon className="text-[#2F4A8A] group-hover:text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2E5A] mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DEPARTMENT SELECTOR --- */}
      <section className="py-24 bg-[#1A2E5A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-[0.2em]">Departmental Outcomes</h3>
            <p className="text-blue-100/60 font-light max-w-2xl mx-auto">Select a department to view or download their detailed Program and Course Outcome documents.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-white transition-all duration-500 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${dept.color || 'bg-slate-700'}`}>
                    {dept.code}
                  </div>
                  <h4 className="font-bold group-hover:text-[#1A2E5A] transition-colors">{dept.name}</h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-50">
                  <FileText className="text-yellow-400 group-hover:text-[#2F4A8A]" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ASSESSMENT NOTE --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto border-2 border-dashed border-slate-200 rounded-[3rem] p-12 md:p-20">
          <Award className="mx-auto text-slate-200 mb-8" size={60} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-6">Attainment Tracking</h3>
          <p className="text-slate-500 text-lg leading-relaxed font-light mb-10">
            The attainment of POs and COs is periodically measured through direct and indirect 
            assessment methods, including internal exams, assignments, and student feedback, 
            facilitated by the IQAC cell.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="bg-[#2F4A8A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1A2E5A] transition-all">
               View OBE Manual
             </button>
             <button className="border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
               Feedback System
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}