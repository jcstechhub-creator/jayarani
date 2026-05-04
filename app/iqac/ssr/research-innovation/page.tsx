"use client";

import React from 'react';
import { 
  Microscope, 
  FileText, 
  Lightbulb, 
  Rocket, 
  Globe, 
  HandCoins, 
  ShieldCheck,
  Cpu
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const ResearchInnovation = () => {
  const outcomeMetrics = [
    {
      id: "9.1",
      title: "External Research Grants",
      desc: "Funds mobilized from government and non-governmental agencies for specialized research projects.",
      icon: <HandCoins className="text-emerald-600" />
    },
    {
      id: "9.2",
      title: "Research Publications",
      desc: "Scholarly articles published in peer-reviewed, UGC-CARE, Scopus, or Web of Science listed journals.",
      icon: <FileText className="text-blue-600" />
    },
    {
      id: "9.7",
      title: "Research Collaboration",
      desc: "MoUs with national and international institutions for technology transfer and faculty/student exchange.",
      icon: <Globe className="text-indigo-600" />
    },
    {
      id: "9.8",
      title: "Student Start-ups",
      desc: "Success ratio of student-led ventures incubated through the institutional Innovation Cell.",
      icon: <Rocket className="text-orange-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Research & Innovation"
        subtitle="Advancing institutional excellence through mobilizing external grants, high-impact publications, and fostering a startup ecosystem."
        breadcrumb="Home / Research / Innovation"
        image={pageImages.adminSecretary}
      />

      <main className="max-w-7xl mx-auto py-16 px-6">
        {/* Compliance Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Outcome Attribute 09 | SSR Compliance 2026
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Institutional Research Impact</h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomeMetrics.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-300">METRIC {item.id}</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* IPR & Technology Transfer Section */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-indigo-900 rounded-[3rem] p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-indigo-300 mb-6">
                <ShieldCheck className="w-8 h-8" />
                <h3 className="text-3xl font-bold tracking-tight">IPR & Patent Cell (9.6)</h3>
              </div>
              <p className="text-indigo-100 leading-relaxed mb-8 max-w-xl">
                The institution provides end-to-end support for <strong>Intellectual Property Rights</strong>. 
                From ideation to filing, we facilitate technology transfer that bridges the gap between 
                academic research and community-based industrial application.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="block text-2xl font-bold">12+</span>
                  <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider">Patents Filed</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="block text-2xl font-bold">05</span>
                  <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider">Copyrights Granted</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hidden md:block">
                  <span className="block text-2xl font-bold">UGC</span>
                  <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider">Care Standards</span>
                </div>
              </div>
            </div>
            <Cpu className="absolute -right-16 -bottom-16 w-64 h-64 text-white/5 rotate-12" />
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="text-yellow-500 w-8 h-8" />
                <h3 className="text-xl font-bold text-slate-800">Innovation Strategy</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0" />
                  Seed money for faculty research (9.1)
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0" />
                  Plagiarism-free publication policy
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0" />
                  Industrial Technology Transfer
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0" />
                  Inter-disciplinary research labs
                </li>
              </ul>
            </div>
            <button className="mt-8 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-colors shadow-lg shadow-indigo-100">
              Apply for Seed Grant
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-center border-t border-slate-100 py-12 bg-white">
        <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase font-bold">
          Research Outcome Compliance | Jayarani College © 2026
        </p>
      </footer>
    </div>
  );
};

export default ResearchInnovation;