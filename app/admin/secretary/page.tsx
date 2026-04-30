"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  FileCheck, 
  Briefcase, 
  Scale, 
  PenTool, 
  Users, 
  History,
  Mail,
  FileSignature
} from "lucide-react";
import { highprofession } from "../../../data/image"; 

export default function SecretaryPage() {
  const executiveFunctions = [
    {
      title: "Legal Compliance",
      desc: "Ensuring the institution adheres to all statutory requirements of the University and State Government.",
      icon: Scale
    },
    {
      title: "Official Records",
      desc: "Maintaining the integrity of all institutional documents, minutes of meetings, and historical archives.",
      icon: FileCheck
    },
    {
      title: "Financial Planning",
      desc: "Strategizing budgetary allocations and overseeing the sustainable financial growth of the college.",
      icon: Briefcase
    },
    {
      title: "Liaison Officer",
      desc: "Acting as the primary point of contact between the Management, University, and Government bodies.",
      icon: Users
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Secretary"
        subtitle="Ensuring institutional integrity and administrative excellence."
        breadcrumb="Home / Administration / Secretary"
        image={pageImages.adminSecretary}
      />

      {/* --- EXECUTIVE PROFILE SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Sidebar Identity */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-yellow-400 rounded-2xl rotate-6 -z-10" />
                  <img 
                    src={highprofession?.Secretary}
                    // src="/newgirlimages/image-38.jpeg" // Replace with actual photo
                    alt="College Secretary"
                    className="rounded-2xl w-48 h-60 object-cover shadow-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#1A2E5A]">Rev. Sr. Dr. Jothi Mary, FIHM </h2>
                <p className="text-[#2F4A8A] font-bold text-xs uppercase tracking-widest mt-2">Executive Secretary</p>
                <div className="h-px w-12 bg-slate-200 mx-auto my-6" />
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                    <History size={16} className="text-yellow-600" />
                    <span>Serving since 2019</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                    <Mail size={16} className="text-yellow-600" />
                    <span>secretary@jcs.edu.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <span className="text-yellow-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Executive Statement</span>
              <h3 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Maintaining the <span className="italic text-[#2F4A8A]/60 font-light">Standards of Integrity</span>
              </h3>
              
              <div className="prose prose-slate max-w-none text-slate-600 text-lg font-light leading-relaxed space-y-6">
                <p>
                  The office of the Secretary is dedicated to the seamless integration of administrative discipline 
                  and institutional growth. Our focus is to ensure that Jayarani College remains a benchmark for 
                  transparency and professional ethics.
                </p>
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#2F4A8A] flex gap-6 items-start">
                  <PenTool className="text-[#2F4A8A] shrink-0" size={32} />
                  <p className="italic text-base m-0">
                    "Administration is the art of making the vision of the management a living reality for every student. 
                    We are committed to building a legacy of excellence through systematic planning and ethical governance."
                  </p>
                </div>
              </div>

              {/* Functional Grid */}
              <div className="mt-16 grid sm:grid-cols-2 gap-6">
                {executiveFunctions.map((func, i) => (
                  <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:border-blue-50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                      <func.icon className="text-[#2F4A8A]" size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{func.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{func.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- STATUTORY BODIES SECTION --- */}
      <section className="py-20 bg-[#1A2E5A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4">Statutory Compliance & Governance</h3>
              <p className="text-blue-100/60 text-sm font-light">
                The Secretary's office works in direct coordination with the Academic Council and 
                the Governing Body to ensure every institutional action is backed by official decree.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <FileSignature className="mx-auto text-yellow-400 mb-2" size={24} />
                <span className="text-[10px] uppercase font-bold tracking-widest">Authorized Docs</span>
              </div>
              <div className="px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <Scale className="mx-auto text-yellow-400 mb-2" size={24} />
                <span className="text-[10px] uppercase font-bold tracking-widest">Legal Audits</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}