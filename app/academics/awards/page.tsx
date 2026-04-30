"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages, contentImages } from "@/data/image";
import { Award, ShieldCheck, Star, Trophy, Target, Medal } from "lucide-react";

const awards = [
  {
    title: "Excellence in Academic Reform",
    year: "2025",
    organization: "Global Education Forum",
    description: "Recognized for implementing innovative curriculum structures that bridge the gap between theory and industry practice.",
    icon: <Trophy className="w-8 h-8 text-amber-500" />,
    color: "bg-amber-50",
  },
  {
    title: "Best Women's College - Regional",
    year: "2025",
    organization: "Higher Ed Analytics",
    description: "Awarded for outstanding student support services and empowerment initiatives in the science and arts sectors.",
    icon: <Medal className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Innovation in Digital Learning",
    year: "2024",
    organization: "Tech-Ed Council",
    description: "For the seamless integration of hybrid learning models and AI-driven student assessment tools.",
    icon: <Target className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-50",
  },
  {
    title: "Sustainable Campus Award",
    year: "2024",
    organization: "Green Earth Initiative",
    description: "Commended for our zero-waste campus policy and dedication to environmental education.",
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-50",
  },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
      <PageHeader
        title="Awards & Recognitions"
        subtitle="Celebrating our commitment to excellence in education, academic reform, and continuous improvement."
        breadcrumb="Home / Academics / Awards"
        image={pageImages.genericPage}
      />

      {/* Main Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-20">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
              Recent Accolades
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A2E5A] mb-6 leading-tight">
              A Legacy of <br />
              <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Academic Distinction</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Jayarani Arts and Science College for Women is honored to be recognized by leading educational bodies for our unwavering dedication to academic reform and student success.
            </p>
          </div>

          {/* Featured Image with Decorative Elements */}
          <div className="relative mb-24 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-amber-100 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <img
                src={contentImages?.awards}
                alt="Award Ceremony"
                className="w-full h-auto object-cover min-h-[500px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A2E5A]/80 to-transparent p-12">
                <p className="text-white text-xl font-medium italic">"Quality is not an act, it is a habit."</p>
              </div>
            </div>
          </div>

          {/* Awards Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl ${award.color} transition-transform duration-500 group-hover:scale-110`}>
                    {award.icon}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-3 inline-block">
                      {award.year}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1A2E5A] mb-2">{award.title}</h3>
                    <p className="text-[#2F4A8A] font-semibold text-sm mb-4 uppercase tracking-wider">
                      {award.organization}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

        </div>
      </section>

      {/* Trust Banner */}
      {/* <section className="bg-[#1A2E5A] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-white/60 text-sm font-bold uppercase tracking-[0.3em] mb-8">Accredited & Affiliated With</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          
            <div className="h-12 w-32 bg-white/20 rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-white/20 rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-white/20 rounded-lg animate-pulse" />
          </div>
        </div>
      </section>  */}
    </main>
  );
}