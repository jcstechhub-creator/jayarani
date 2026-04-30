"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Network, 
  ShieldCheck, 
  Users, 
  ChevronDown, 
  GitMerge, 
  Building2,
  Workflow,
  ArrowRight,
  UserCheck
} from "lucide-react";

export default function OrganogramPage() {
const adminLevels = ["Superior General", "Provincial", "Secretary", "Principal"];

const principalDirectReports = [
  { title: "Deputy Principal" },
  { title: "Coordinator of IQAC" },
  { title: "Coordinator of Exam Cell & Staff" },
  { title: "Dean of Student" },
  { 
    title: "Head of the Department", 
    sub: ["Faculty", "Parents", "Alumni / Alumnae"] 
  },
  { title: "Coordinator of Service Units & Outreach" },
  { title: "Committees & Cells" },
  { title: "Teaching Faculty" },
  { 
    title: "Administrative & Supportive Staff", 
    sub: ["Infrastructure & Campus Maintenance"] 
  },
];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="College Organogram"
        subtitle="The administrative hierarchy and governance structure of Jayarani Arts & Science College for Women."
        breadcrumb="Home / Admin / Organogram"
        image={pageImages.adminOrganogram}
      />

      {/* --- GOVERNANCE OVERVIEW --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Flow</span>
              <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Governance & <br />
                <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Administrative Logic</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                Jayarani College follows a structured governance model that ensures 
                seamless coordination between the <strong>FIHM Congregation</strong> and the 
                academic administration. This hierarchical flow facilitates efficient 
                decision-making and maintains accountability at every level of the institution.
              </p>
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
                <ShieldCheck className="text-[#2F4A8A]" size={24} />
                <p className="text-sm font-medium text-slate-700 italic">
                  "A well-defined organogram is the roadmap for institutional excellence and spiritual growth."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-20 -z-10" />
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h3 className="text-xl font-bold text-[#1A2E5A] mb-6 flex items-center gap-2">
                  <Workflow className="text-[#2F4A8A]" size={20} />
                  Governance Tiers
                </h3>
                <div className="space-y-6">
                  {adminLevels.map((level, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1A2E5A] text-white flex items-center justify-center font-bold text-xs">
                        0{i + 1}
                      </div>
                      <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 font-bold text-[#2F4A8A] text-sm uppercase tracking-wider">
                        {level}
                      </div>
                      {i < adminLevels.length - 1 && <ArrowRight size={16} className="text-slate-300" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISUAL ORGANOGRAM TREE --- */}
    <section className="py-24 bg-slate-50 px-6">
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="text-center mb-20">
      <h3 className="text-3xl font-extrabold text-[#1A2E5A] tracking-tight">Institutional Organogram</h3>
      <div className="h-1.5 w-20 bg-yellow-400 mx-auto mt-4 rounded-full" />
    </div>

    {/* Management Chain (Top Level) */}
    <div className="flex flex-col items-center gap-4">
      {adminLevels.map((level, idx) => (
        <React.Fragment key={idx}>
          <div className="w-full max-w-[280px] py-4 bg-[#1A2E5A] text-white text-center rounded-xl shadow-xl border-b-4 border-yellow-500 font-bold uppercase tracking-wider text-sm transition-transform hover:scale-105">
            {level}
          </div>
          {/* Connector Line */}
          <div className="h-8 w-1 bg-slate-300" />
        </React.Fragment>
      ))}

      {/* The "Sprawl" - Operational Level */}
      <div className="w-full relative">
        {/* Horizontal bar connecting the sprawling items */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-300 hidden lg:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {principalDirectReports.map((report, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Connector dot for the sprawl line */}
              <div className="w-3 h-3 bg-blue-600 rounded-full mb-4 hidden lg:block" />
              
              <div className="w-full p-4 bg-white border-t-4 border-blue-600 shadow-lg rounded-lg text-center group hover:bg-blue-50 transition-colors">
                <span className="text-xs font-bold text-[#1A2E5A] uppercase">{report.title}</span>
                
                {/* Sub-items (Faculty, etc) */}
                {report.sub && (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {report.sub.map((sub, sIdx) => (
                      <div key={sIdx} className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full uppercase">
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* --- ADMINISTRATIVE ROLES NOTE --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <Building2 className="text-[#2F4A8A] mx-auto mb-4" />
                <h4 className="font-bold text-[#1A2E5A] mb-2">Management</h4>
                <p className="text-xs text-slate-500">Headed by the Superior General & Provincial of the FIHM Congregation.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <UserCheck className="text-[#2F4A8A] mx-auto mb-4" />
                <h4 className="font-bold text-[#1A2E5A] mb-2">Academic</h4>
                <p className="text-xs text-slate-500">Directed by the Principal, coordinating HODs, IQAC, and Exam Cells.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <Users className="text-[#2F4A8A] mx-auto mb-4" />
                <h4 className="font-bold text-[#1A2E5A] mb-2">Support</h4>
                <p className="text-xs text-slate-500">Administrative staff and service units managing campus maintenance.</p>
            </div>
          </div>
          
          <div className="mt-20 max-w-2xl mx-auto">
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-10">
                This organogram reflects our institutional commitment to a paperless, E-governed 
                environment as per our statutory compliance with the Tamil Nadu Private Colleges 
                (Regulation) Act.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
              Official Governance Document
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}