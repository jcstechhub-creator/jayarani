"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  School, 
  CheckCircle2, 
  Users2, 
  Globe2, 
  FileBadge 
} from "lucide-react";

export default function CollegeProfile() {
  const profileDetails = [
    { label: "Name of the Institution", value: "Jayarani College of Arts and Science for Women", icon: Building2 },
    { label: "Year of Establishment", value: "2019", icon: Calendar },
    { label: "Affiliation", value: "Periyar University, Salem", icon: School },
    { label: "Management", value: "Congregation of FIHM Sisters", icon: Users2 },
    { label: "Status", value: "Self-Financing (Women's College)", icon: CheckCircle2 },
    { label: "Location", value: "Salem, Tamil Nadu, India", icon: MapPin },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="College Profile"
        subtitle="Comprehensive overview and institutional identity."
        breadcrumb="Home / About / Profile"
        image={pageImages.aboutProfile}
      />

      {/* --- QUICK STATS BAR --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "University", value: "Periyar" },
            { label: "Type", value: "Women Only" },
            { label: "Founder", value: "FIHM" },
            { label: "District", value: "Salem" },
          ].map((item, i) => (
            <div key={i} className="bg-[#2F4A8A] p-6 rounded-2xl shadow-xl text-center border border-white/10">
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-white font-bold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE PROFILE DATA --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A2E5A] mb-4">Institutional Identity</h2>
          <div className="h-1 w-16 bg-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="grid gap-4">
          {profileDetails.map((detail, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 mb-2 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <detail.icon className="text-[#2F4A8A] w-5 h-5" />
                </div>
                <span className="text-slate-500 font-medium text-sm md:text-base">{detail.label}</span>
              </div>
              <span className="text-[#1A2E5A] font-bold text-sm md:text-lg md:text-right">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- AFFILIATION & RECOGNITION --- */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <FileBadge size={200} />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#1A2E5A] mb-6">Affiliation Details</h3>
                <p className="text-slate-600 leading-relaxed mb-8 font-light">
                  Jayarani College of Arts and Science for Women is officially recognized 
                  and affiliated with <strong>Periyar University, Salem</strong>. 
                  All academic programs, examination patterns, and degree awards are 
                  conducted under the direct regulations of the University.
                </p>
                <div className="space-y-4">
                  {[
                    "Strict Adherence to University Syllabus",
                    "Choice Based Credit System (CBCS)",
                    "Outcome Based Education Framework",
                    "Government Approved Fee Structure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="text-green-600 w-3 h-3" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A2E5A] p-10 rounded-3xl text-white">
                <Globe2 className="text-yellow-400 mb-6" size={40} />
                <h4 className="text-xl font-bold mb-4">Global Network</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed mb-6 font-light">
                  As an institution managed by the FIHM Sisters, we are part of a 
                  global educational network spanning 9 countries. This connection 
                  provides our students with a broader perspective and a strong 
                  moral and spiritual foundation.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">Governance</p>
                  <p className="text-sm mt-2 font-medium">Pontifical Status Since 1978</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}