"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Users2, 
  Settings, 
  CheckSquare, 
  MessagesSquare, 
  FileText,
  ShieldAlert,
  GraduationCap
} from "lucide-react";

export default function CollegeCommittee() {
  const committees = [
    {
      name: "Planning & Development",
      role: "Overseeing infrastructure and institutional expansion projects.",
      icon: Settings
    },
    {
      name: "Academic Excellence",
      role: "Monitoring teaching standards and student performance metrics.",
      icon: GraduationCap
    },
    {
      name: "Student Welfare",
      role: "Ensuring a safe, inclusive, and supportive campus environment.",
      icon: Users2
    },
    {
      name: "Discipline & Ethics",
      role: "Maintaining the moral fabric and code of conduct of the institution.",
      icon: ShieldAlert
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="College Committee"
        subtitle="Collaborative governance for operational excellence and student success."
        breadcrumb="Home / Administration / Committee"
        image={pageImages.adminCommittee}
      />

      {/* --- COMMITTEE OVERVIEW --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
               <div className="absolute -inset-4 bg-[#2F4A8A]/5 rounded-[3rem] scale-95" />
               <img 
                src="/newgirlimages/image-36.jpeg" 
                alt="Committee Collaboration" 
                className="relative rounded-[2.5rem] shadow-2xl z-10 h-[500px] w-full object-cover"
               />
               <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <CheckSquare className="text-[#2F4A8A]" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency</p>
                    <p className="text-sm font-bold text-[#1A2E5A]">Action-Oriented Leadership</p>
                  </div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Operational Governance</span>
              <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Unified Voice, <br />
                <span className="text-[#2F4A8A]/50 italic font-light">Collective Vision</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                The College Committee acts as the executive engine of Jayarani College. Comprising 
                departmental heads, administrative leads, and management representatives, it ensures 
                that daily operations align perfectly with our institutional goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                  <MessagesSquare className="text-yellow-600 mt-1" size={20} />
                  <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Regular Consultation:</span> Meeting monthly to address immediate campus needs and faculty feedback.</p>
                </div>
                <div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                  <FileText className="text-yellow-600 mt-1" size={20} />
                  <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Policy Execution:</span> Translating board-level strategy into actionable campus policies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMMITTEE SPECIALIZATIONS --- */}
      <section className="py-24 bg-[#1A2E5A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-[0.2em]">Functional Committees</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committees.map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2F4A8A] transition-colors">
                  <item.icon className="text-yellow-400" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-[#2F4A8A] transition-colors mb-4">{item.name}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed group-hover:text-slate-500 transition-colors">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <Users2 className="mx-auto text-slate-200 mb-8" size={60} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4 tracking-tight">Administrative Synergy</h3>
          <p className="text-slate-500 font-light leading-relaxed mb-10">
            For specific queries regarding committee proceedings or to submit agenda items for 
            the upcoming development meeting, please reach out to the Administrative Office.
          </p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
            Inquire Office
          </button>
        </div>
      </section>
    </main>
  );
}