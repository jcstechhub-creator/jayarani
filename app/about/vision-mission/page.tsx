"use client";

import React from "react";
import { Target, Eye, ShieldCheck, Award } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
              Foundational Ethos
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-none tracking-tighter">
              Vision & <span className="text-[#2F4A8A]/40 italic font-light">Mission</span>
            </h2>
          </div>
          <div className="hidden md:block h-px flex-grow bg-slate-100 mx-12 mb-4" />
          <div className="text-right">
            <p className="text-slate-400 font-medium text-sm">Jayarani College</p>
            <p className="text-slate-400 text-xs">Since 2019</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-1 px-1 bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl">
          
          {/* --- VISION BLOCK --- */}
          <div className="bg-white p-12 md:p-20 relative group transition-all duration-500 hover:bg-[#2F4A8A] hover:text-white">
            <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye size={120} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                <Target className="text-[#2F4A8A] group-hover:text-yellow-400" size={24} />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Our Vision</h3>
              <p className="text-lg leading-relaxed font-light opacity-80 group-hover:opacity-100">
                To cultivate an environment where women can realize their fullest potential, 
                both intellectually and personally. We are unwavering in our dedication 
                to fostering a culture of academic rigor, creativity, and inclusivity.
              </p>
              
              <div className="mt-10 h-1 w-12 bg-yellow-400 group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* --- MISSION BLOCK --- */}
          <div className="bg-white p-12 md:p-20 relative group transition-all duration-500 hover:bg-[#2F4A8A] hover:text-white border-l border-slate-50">
            <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck size={120} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                <Award className="text-yellow-600 group-hover:text-yellow-400" size={24} />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Our Mission</h3>
              <p className="text-lg leading-relaxed font-light opacity-80 group-hover:opacity-100">
                To deliver a holistic education that harmonizes scholarly excellence with 
                character formation. Through a rich spectrum of programs, we equip our 
                students with the intellectual prowess and moral compass needed to excel.
              </p>
              
              <div className="mt-10 h-1 w-12 bg-[#2F4A8A] group-hover:bg-yellow-400 group-hover:w-full transition-all duration-700" />
            </div>
          </div>

        </div>

        {/* --- MOTTO ACCENT --- */}
        <div className="mt-20 flex flex-col items-center justify-center">
            <p className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.5em] mb-4">The Core Principle</p>
            <h2 className="text-5xl md:text-7xl font-black text-slate-50 uppercase select-none leading-none">
              Empowering Women
            </h2>
        </div>
      </div>
    </section>
  );
}