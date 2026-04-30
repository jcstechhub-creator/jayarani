"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { History, Quote, Landmark, ScrollText, Users } from "lucide-react";

export default function CollegeHistory() {
  const historyMilestones = [
    {
      year: "1844",
      title: "The Visionary Seed",
      content: "Amidst a conservative climate, Fr. Louis Savy Dupuis founded the Congregation of Franciscan Sisters (FIHM). His goal was radical for the time: restoring dignity through women's education.",
      image: "/newgirlimages/image-31.jpeg"
    },
    {
      year: "1978",
      title: "The Pontifical Era",
      content: "Elevated to Pontifical status by Pope John Paul I, the Congregation's mission crossed borders, evolving into a global movement of service across 9 countries.",
      image: "/newgirlimages/image-32.jpeg"
    },
    {
      year: "2019",
      title: "Jayarani College Salem",
      content: "Established and affiliated with Periyar University, our institution was born to continue this 180-year legacy, focusing on higher education for the modern woman.",
      image: "/newgirlimages/image-33.jpeg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FCFCFD] selection:bg-[#2F4A8A] selection:text-white">
      <PageHeader 
        title="College History"
        subtitle="Tracing a journey of resilience, faith, and transformation."
        breadcrumb="Home / About / History"
        image={pageImages.aboutHistory}
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <Landmark className="mx-auto text-yellow-500 mb-8 opacity-40" size={48} />
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
          A Legacy Forged in <br />
          <span className="italic text-[#2F4A8A]/70 font-light">Service & Sacrifice</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed font-light mb-12">
          In the mid-19th century, women were relegated to subservient roles, and education was a forsaken concept. 
          Missionaries believed that empowering women was the key to restoring their dignity and uplifting the social fabric.
        </p>
        <div className="h-px w-24 bg-slate-200 mx-auto" />
      </section>

      {/* --- FOUNDATION HIGHLIGHT --- */}
      <section className="py-20 bg-[#1A2E5A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <Quote className="absolute -top-10 -left-10 text-white opacity-10 w-32 h-32" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4 block">The Synod of Pondicherry (1844)</span>
            <h3 className="text-3xl font-bold mb-6">The Mandate for Change</h3>
            <p className="text-blue-100/80 text-lg font-light leading-relaxed mb-8">
              Under Bishop Clement Bonnand, girl child education emerged as a matter of paramount importance. 
              Fr. Dupuis was entrusted with establishing a press, a congregation, and schools specifically for female children.
            </p>
            <ul className="space-y-4">
              {["Founding of FIHM", "Canonical Approval (1864)", "10 Convents in 30 years"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-yellow-200/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <img 
              src="/newgirlimages/image-34.jpeg" 
              alt="Historical Foundation" 
              className="relative rounded-2xl shadow-2xl z-10"
            />
          </div>
        </div>
      </section>

      {/* --- EDITORIAL TIMELINE --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {historyMilestones.map((item, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center mb-32 last:mb-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <span className="text-7xl md:text-9xl font-black text-slate-50 absolute -top-12 -left-4 -z-10">{item.year}</span>
                  <h4 className="text-3xl font-bold text-[#1A2E5A] mb-6 flex items-center gap-4">
                    <span className="w-8 h-px bg-yellow-400" /> {item.title}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                    {item.content}
                  </p>
                  <button className="text-[#2F4A8A] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group">
                    Read Details <div className="w-6 h-px bg-[#2F4A8A] group-hover:w-12 transition-all duration-300" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-3xl shadow-xl aspect-video">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CLOSING --- */}
      <section className="py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollText size={40} className="mx-auto text-[#2F4A8A] mb-8 opacity-30" />
          <h3 className="text-2xl md:text-3xl font-serif text-[#1A2E5A] italic leading-relaxed">
            "What began as a seed of hope has grown into a mighty banyan tree, offering shelter and knowledge to women across the globe."
          </h3>
          <div className="mt-8 text-slate-400 font-medium uppercase text-xs tracking-[0.3em]">
            Legacy of Fr. Louis Savy Dupuis
          </div>
        </div>
      </section>
    </main>
  );
}