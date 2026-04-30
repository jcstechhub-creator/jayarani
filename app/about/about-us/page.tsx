"use client";

import React from "react";
import {
  Quote, Target, Globe, Award, ShieldCheck,
  MapPin, Users, BookOpen, GraduationCap, ArrowRight, Building
} from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages, contentImages } from "@/data/image";

export default function AboutUs() {
  const legacyData = [
    {
      year: "1844",
      title: "The Founding",
      desc: "Fr. Louis Savy Dupuis establishes the FIHM Congregation in Pondicherry, pioneering women's education in India.",
    },
    {
      year: "1978",
      title: "Pontifical Status",
      desc: "The Congregation is elevated to Pontifical status, marking the beginning of a global era of service.",
    },
    {
      year: "2019",
      title: "Jayarani College",
      desc: "Opening its doors in Salem, the college carries forward the 180-year-old mission of academic empowerment.",
    }
  ];

  const sisterInstitutions = [
    { name: "Immaculate College of Education (B.Ed)", loc: "Pakkamudayanpet, Pondicherry" },
    { name: "Sacred Heart Teacher Training School", loc: "Pudupalayam, Cuddalore" },
    { name: "Idhaya Colleges for Women", loc: "Sakkottai, Kumbakonam" },
    { name: "Idhaya College of Arts & Science for Women", loc: "Pudupalayam, Thiruvannamalai" },
    { name: "Idhaya Engineering College for Women", loc: "Chinnasalem" },
    { name: "Immaculate Teacher Training School", loc: "Thirunallar, Karaikal" },
    { name: "Idhaya College of Arts & Science", loc: "Viriyur, Villupuram" },
    { name: "Idhaya College of Arts & Science for Women", loc: "Pakkamudayanpet, Pondicherry" },
    { name: "Idhaya College for Women", loc: "Sarugani, Sivagangai" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <PageHeader
        title="About Us"
        subtitle="Empowering women through a legacy of 180 years."
        breadcrumb="Home / About"
        image={pageImages.aboutAboutUs}
      />

      {/* --- SECTION 1: INTRODUCTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Identity</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              A Radiant Beacon <br />
              <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">of Excellence</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
              <p>
                Established in 2019 and affiliated with Periyar University, Jayarani College is devoted to the noble mission of empowering women.
              </p>
              <p>
                Under the guidance of the Immaculate Sisters, we nurture visionary leaders and agents of transformative change in society, carrying forward a legacy that began nearly two centuries ago.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-4 text-[#2F4A8A] font-semibold">
              <div className="p-3 bg-blue-50 rounded-full">
                <Award size={24} className="text-[#2F4A8A]" />
              </div>
              <span>Affiliated to Periyar University, Salem</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] -z-10 translate-x-4 translate-y-4"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-video lg:aspect-square">
              <img
                src={contentImages.aboutUsIntro}
                alt="Jayarani College Campus Life"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: VISION & MISSION --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-12 border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-amber-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Our Vision</h3>
            <p className="text-slate-500 font-light leading-relaxed text-lg">
              To cultivate an environment where women realize their fullest potential, intellectually and personally, through academic rigor and inclusivity.
            </p>
          </div>
          <div className="bg-white p-12 border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="text-blue-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Our Mission</h3>
            <p className="text-slate-500 font-light leading-relaxed text-lg">
              Delivering holistic education that harmonizes scholarly excellence with character formation and a global moral compass.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE JOURNEY (TIMELINE) --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-sm font-bold text-center mb-20 text-slate-400 uppercase tracking-[0.5em]">The Journey</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10 hidden md:block" />

          {legacyData.map((item, idx) => (
            <div key={idx} className="group relative bg-white md:bg-transparent">
              <span className="text-6xl font-black text-slate-100 group-hover:text-amber-100 transition-colors duration-500 block">
                {item.year}
              </span>
              <div className="mt-[-20px] md:mt-4">
                <h4 className="text-xl font-bold text-[#2F4A8A] mb-3">{item.title}</h4>
                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: GLOBAL STATS --- */}
      <section className="py-24 px-6 bg-[#2F4A8A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Countries", value: "09", icon: Globe },
              { label: "Sisters", value: "1000+", icon: Users },
              { label: "Convents", value: "178", icon: MapPin },
              { label: "Institutes", value: "14", icon: GraduationCap },
            ].map((stat, i) => (
              <div key={i} className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <stat.icon className="absolute top-4 right-4 text-white opacity-5 group-hover:opacity-20 transition-opacity" size={64} strokeWidth={1} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-amber-400 rounded-lg">
                      <stat.icon size={18} className="text-[#2F4A8A]" />
                    </div>
                    <div className="h-px w-8 bg-white/20" />
                  </div>
                  <h3 className="text-5xl font-black text-white tracking-tighter mb-2">{stat.value}</h3>
                  <p className="text-blue-200 text-[11px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: SISTER INSTITUTIONS --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">Network of Excellence</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 leading-tight">
                Other Institutions run by <br />
                <span className="italic font-light text-slate-400">Immaculate Heart of Mary Congregation</span>
              </h2>
            </div>
            <div className="h-px flex-grow bg-slate-200 hidden lg:block mx-8 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sisterInstitutions.map((inst, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#2F4A8A]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-slate-50 p-3 rounded-xl group-hover:bg-[#2F4A8A] group-hover:text-white transition-colors">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base group-hover:text-[#2F4A8A] transition-colors">
                      {inst.name}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1.5 text-slate-400">
                      <MapPin size={14} className="text-slate-300" />
                      <span className="text-xs uppercase tracking-wider font-medium">{inst.loc}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                  <ArrowRight className="w-5 h-5 text-[#2F4A8A] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: MOTTO QUOTE --- */}
      <section className="py-32 text-center px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Quote className="mx-auto text-slate-100 mb-10" size={80} strokeWidth={1} />
          <h3 className="text-3xl md:text-4xl font-serif italic text-slate-700 leading-relaxed">
            "Love and Sacrifice: The Sanctification of Sisters for the Sanctification of Women."
          </h3>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="h-1 w-20 bg-amber-400 rounded-full"></div>
            <div className="text-[#2F4A8A] font-bold text-xs tracking-[0.4em] uppercase">
              Jayarani Arts & Science College
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}