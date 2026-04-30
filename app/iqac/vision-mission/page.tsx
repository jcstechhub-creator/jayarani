"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  Target, 
  Rocket, 
  LineChart, 
  ShieldCheck, 
  Users2, 
  Zap,
  CheckCircle2,
  Lightbulb
} from "lucide-react";
import { pageImages } from "@/data/image";

export default function IQACVisionMission() {
  const missionPoints = [
    {
      title: "Sustain & Enhance",
      desc: "Maintain and upgrade the quality measures established since the institution's inception in 2019.",
      icon: LineChart
    },
    {
      title: "Assessment & Accreditation",
      desc: "Arrange for periodic internal and external assessments and national accreditations.",
      icon: ShieldCheck
    },
    {
      title: "Teaching-Learning Quality",
      desc: "Stimulate the academic environment for the promotion of high-quality teaching and research.",
      icon: Rocket
    },
    {
      title: "Stakeholder Collaboration",
      desc: "Promote collaboration with other higher education stakeholders for quality sustenance.",
      icon: Users2
    },
    {
      title: "Accountability",
      desc: "Encourage self-evaluation and institutional accountability across all departments.",
      icon: CheckCircle2
    },
    {
      title: "Training & Consultancy",
      desc: "Promote quality-related research studies, consultancy, and faculty training programs.",
      icon: Lightbulb
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="IQAC Vision & Mission"
        subtitle="The guiding principles for maintaining academic excellence and quality culture."
        breadcrumb="Home / IQAC / Vision & Mission"
        // image="/newgirlimages/image-47.jpeg"
        // image="/banner/banner4.jpeg"
        
                image = { pageImages.adminSecretary}
      />

      {/* --- VISION SECTION --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[5rem]" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#2F4A8A] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Target size={16} /> Our North Star
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              IQAC <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Vision</span>
            </h2>
            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-yellow-400 rounded-full" />
              <p className="text-2xl text-slate-600 leading-relaxed font-light italic pl-8">
                "To develop a quality culture in the institution by promoting innovation, 
                advocating inclusion and catalyzing the holistic growth of its primary stakeholders."
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
             <div className="w-64 h-64 bg-[#1A2E5A] rounded-[3rem] rotate-6 flex items-center justify-center shadow-2xl relative">
                <Target className="text-yellow-400" size={100} strokeWidth={1} />
                <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                   <Zap className="text-[#2F4A8A]" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="py-24 bg-[#1A2E5A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-yellow-400 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Strategic Roadmap</span>
              <h2 className="text-4xl font-bold">Our Mission</h2>
            </div>
            <p className="text-blue-100/60 font-light max-w-sm text-right hidden md:block">
              A commitment to continuous catalytic improvement and institutional excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionPoints.map((point, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:group transition-all duration-500 group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#2F4A8A] transition-colors">
                  <point.icon className="text-yellow-400" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#1A2E5A] transition-colors">{point.title}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed font-light group-hover:text-slate-500 transition-colors">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE OBJECTIVE SUMMARY --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-1 w-12 bg-yellow-400 mx-auto rounded-full mb-12" />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-6">Objective of the IQAC</h3>
          <p className="text-slate-500 text-lg leading-relaxed font-light">
            Consistent catalytic improvement in the performance of the institution through 
            meticulous documentation, dissemination of best practices, and promotion of a 
            global educational perspective.
          </p>
        </div>
      </section>
    </main>
  );
}