"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Atom, 
  Lightbulb, 
  Microscope, 
  Radio, 
  Telescope, 
  Zap,
  FlaskConical,
  GraduationCap,
  BookOpenCheck,
  Compass
} from "lucide-react";

export default function PhysicsPage() {
  const departmentFocus = [
    { 
      title: "Quantum Mechanics", 
      icon: Atom, 
      desc: "Investigating the fundamental particles and forces that govern the subatomic world." 
    },
    { 
      title: "Applied Electronics", 
      icon: Radio, 
      desc: "Practical training in circuit design, semiconductor physics, and digital communication." 
    },
    { 
      title: "Optics & Laser", 
      icon: Zap, 
      desc: "Exploring the behavior of light and its applications in modern fiber-optic technology." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Dept. of Physics"
        subtitle="Unraveling the laws of nature from the subatomic to the galactic scale."
        breadcrumb="Home / Academics / Departments / Physics"
        image={pageImages.academicsDepartmentPhysics}
      />

      {/* --- DEPARTMENT OVERVIEW --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Core of Innovation</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Exploring the <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Physics of Reality</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              The Department of Physics at Jayarani College serves as a hub for scientific 
              enquiry and experimental excellence. We empower young women to question 
              the natural world through rigorous laboratory practice and advanced theoretical 
              physics, preparing them for careers in research, space science, and industrial R&D.
            </p>
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <FlaskConical className="text-[#2F4A8A] shrink-0" size={24} />
              <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                "Physics is the attempt to find the simplest possible explanation for the 
                most complex phenomena in the universe."
              </p>
            </div>
          </div>

          <div className="bg-[#1A2E5A] p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <Telescope className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            <h3 className="text-2xl font-bold mb-8">Research & Discovery</h3>
            <div className="space-y-6 relative z-10">
              {[
                { label: "State-of-the-Art Darkrooms", icon: BookOpenCheck },
                { label: "Energy & Electronics Labs", icon: Lightbulb },
                { label: "Astrophysics Observation Wing", icon: Compass }
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

      {/* --- CORE COMPETENCIES --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Specialized Domains</h3>
            <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">Bridging Theory and Innovation</p>
            <div className="h-1 w-12 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {departmentFocus.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-[#2F4A8A]" />
                </div>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">{item.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAB INFRASTRUCTURE --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1A2E5A] rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <Zap className="absolute top-0 right-0 opacity-5" size={200} />
          <h3 className="text-3xl font-bold mb-6">Advanced Laboratory Facilities</h3>
          <p className="text-blue-100/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Our department is equipped with high-precision instruments for experiments in 
            spectroscopy, thermal physics, and semiconductor analysis, ensuring students 
            gain practical insights into industrial applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Spectroscopy", "Solid State", "Electronics", "Mechanics", "Optics"].map((lab) => (
              <div key={lab} className="px-6 py-3 border border-white/10 rounded-xl bg-white/5 text-[10px] font-bold uppercase tracking-widest">
                {lab} Lab
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-xl mx-auto">
          <GraduationCap className="mx-auto text-slate-200 mb-8" size={60} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Advance Your Scientific Journey</h3>
          <p className="text-slate-500 mb-10 text-sm font-light">
            Become a part of the Physics Department and explore the secrets of the physical world. 
            Admission open for the current academic year.
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