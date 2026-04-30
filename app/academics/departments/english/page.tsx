"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Library, 
  PenTool, 
  Languages, 
  Mic2, 
  Globe, 
  ScrollText,
  BookOpen,
  Users,
  Quote
} from "lucide-react";

export default function EnglishDepartmentPage() {
  const specializedLabs = [
    { 
      title: "Language Lab", 
      icon: Mic2, 
      desc: "Advanced phonetic software for accent neutralization and linguistic mastery." 
    },
    { 
      title: "Creative Writing Wing", 
      icon: PenTool, 
      desc: "A dedicated space for workshops in poetry, fiction, and digital storytelling." 
    },
    { 
      title: "Literary Archives", 
      icon: Library, 
      desc: "Extensive collection of classic and contemporary global literature." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Dept. of English"
        subtitle="Empowering voices through literature, critical inquiry, and linguistic excellence."
        breadcrumb="Home / Academics / Departments / English"
        image={pageImages.academicsDepartmentEnglish}
      />

      {/* --- DEPARTMENT OVERVIEW --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Art of Expression</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Shaping the <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Narrative of Tomorrow</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              The Department of English at Jayarani College fosters a deep appreciation for 
              the humanities. Beyond the printed page, we analyze cultural contexts, 
              sharpen communication skills, and develop the critical thinking necessary 
              to navigate a media-rich global landscape.
            </p>
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <Quote className="text-[#2F4A8A] shrink-0" size={24} />
              <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                "Our mission is to cultivate eloquent communicators and visionary thinkers 
                ready to lead in education, journalism, and the creative arts."
              </p>
            </div>
          </div>

          <div className="bg-[#1A2E5A] p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <ScrollText className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            <h3 className="text-2xl font-bold mb-8">Academic Pillars</h3>
            <div className="space-y-6">
              {[
                { label: "Comparative Literature Study", icon: BookOpen },
                { label: "Linguistic & Phonetic Training", icon: Languages },
                { label: "Soft Skills & Professionalism", icon: Globe }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <pill.icon size={20} className="text-yellow-400" />
                  </div>
                  <span className="font-medium tracking-wide">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SPECIALIZED FACILITIES --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Learning Environment</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specializedLabs.map((lab, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2F4A8A] group-hover:text-white transition-colors">
                  <lab.icon size={28} />
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

      {/* --- QUICK CONTACT --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-xl mx-auto">
          <Users className="mx-auto text-slate-200 mb-8" size={60} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Admissions & Inquiries</h3>
          <p className="text-slate-500 mb-10 text-sm font-light">
            Passionate about the power of words? Join our literary community 
            and explore the depths of human expression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#2F4A8A] transition-all">
              Apply Now
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