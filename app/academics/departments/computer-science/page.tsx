"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  Laptop, 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  ShieldCheck,
  BookOpen,
  Users,
  Terminal,
  BrainCircuit,
  Network
} from "lucide-react";
import { pageImages } from "@/data/image";

export default function ComputerSciencePage() {
  const specializedLabs = [
    { 
      title: "AI & Data Science Hub", 
      icon: BrainCircuit, 
      desc: "Equipped for Machine Learning, Deep Learning, and Neural Network modeling." 
    },
    { 
      title: "Software Engineering Lab", 
      icon: Code2, 
      desc: "Focusing on Agile methodologies, SDLC, and modern Full-stack development." 
    },
    { 
      title: "Network & Security", 
      icon: Network, 
      desc: "Advanced infrastructure for studying Cybersecurity and Distributed Systems." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Dept. of Computer Science"
        subtitle="Empowering women to lead the digital revolution through logic and innovation."
        breadcrumb="Home / Academics / Departments / Computer Science"
        // image="/banner/banner4.jpeg"
        
                image = { pageImages.adminSecretary}
        
      />

   
      {/* --- DEPARTMENT VISION SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Innovation First</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Architecting the <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Future of Tech</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              The Department of Computer Science at Jayarani College is a premier center for 
              technological education. We focus on transforming students into industry-ready 
              professionals by providing a deep understanding of software systems, 
              algorithm design, and the emerging paradigms of <strong>Artificial Intelligence</strong>.
            </p>
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <Terminal className="text-[#2F4A8A] shrink-0" size={24} />
              <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                "Our students don't just use technology; they build the logic that drives the global economy."
              </p>
            </div>
          </div>

          <div className="bg-[#1A2E5A] p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <Cpu className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            <h3 className="text-2xl font-bold mb-8">Academic Pillars</h3>
            <div className="space-y-6 relative z-10">
              {[
                { label: "B.Sc. CS with AI & Data Science", icon: BrainCircuit },
                { label: "Full-Stack Development Certification", icon: Globe },
                { label: "JCS Tech Hub & Incubation", icon: ShieldCheck }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                    <pill.icon size={20} className="text-white group-hover:text-[#1A2E5A]" />
                  </div>
                  <span className="font-medium tracking-wide">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE SECTION --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Specialized Laboratories</h3>
            <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">Industry-Standard Learning Environments</p>
            <div className="h-1 w-12 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specializedLabs.map((lab, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <lab.icon size={28} className="text-[#2F4A8A]" />
                </div>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">{lab.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {lab.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAREER & PLACEMENT SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1A2E5A] rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
          <Globe className="absolute top-0 left-0 opacity-5" size={200} />
          <h3 className="text-3xl font-bold mb-6">Global Career Pathways</h3>
          <p className="text-blue-100/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Graduates from our Computer Science department are placed in top-tier multinational 
            corporations. We provide 100% placement assistance and specialized training for 
            technical interviews and competitive coding.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["AI Engineer", "Software Dev", "Data Analyst", "UI/UX Designer"].map((role) => (
              <div key={role} className="px-6 py-3 border border-white/10 rounded-xl bg-white/5 text-[10px] font-bold uppercase tracking-widest">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-xl mx-auto">
          <Laptop className="mx-auto text-slate-200 mb-8" size={60} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Start Your Tech Journey</h3>
          <p className="text-slate-500 mb-10 text-sm font-light">
            Admissions are currently open for B.Sc. Computer Science and B.Sc. AI & Data Science. 
            Join us and become a leader in the technological era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#2F4A8A] transition-all shadow-lg">
              Enroll Now
            </button>
            <button className="flex items-center gap-2 text-[#2F4A8A] font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-slate-50 rounded-xl transition-all">
              Download Syllabus
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}