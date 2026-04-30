"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  UserCheck, 
  Lightbulb, 
  Target, 
  FileText, 
  Handshake, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

import { highprofession } from "../../../data/image"; 

export default function VicePresident() {
  const responsibilities = [
    {
      title: "Academic Coordination",
      desc: "Liaising with departments to ensure the highest standards of teaching and curriculum delivery.",
      icon: Target
    },
    {
      title: "Strategic Planning",
      desc: "Assisting the President in formulating long-term development plans and campus expansion.",
      icon: Lightbulb
    },
    {
      title: "Student Relations",
      desc: "Working closely with student councils to maintain a vibrant and disciplined campus culture.",
      icon: Handshake
    },
    {
      title: "Administrative Audit",
      desc: "Overseeing the daily administrative workflows and ensuring compliance with university norms.",
      icon: FileText
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Vice President"
        subtitle="Driving institutional growth through dedicated administrative leadership."
        breadcrumb="Home / Administration / Vice President"
        image={pageImages.adminVicePresident}
      />

      {/* --- LEADERSHIP CARD --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F8FAFC] rounded-[3rem] p-8 md:p-16 border border-slate-100 flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-2/5">
              <div className="relative group">
                {/* Decorative Frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-[#2F4A8A] rounded-[2rem] opacity-20 group-hover:opacity-40 transition-opacity" />
                <img 
                src={highprofession?.VicePresident}
                  // src="/newgirlimages/image-42.jpeg" // Replace with actual photo
                  alt="Vice President"
                  className="relative z-10 rounded-[1.8rem] w-full h-[450px] object-cover shadow-xl"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <span className="bg-blue-100 text-[#2F4A8A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                Leadership Profile
              </span>
              <h2 className="text-4xl font-bold text-[#1A2E5A] mb-4">Rev. Sr. Sabin Mary, Provincial Superior</h2>
              <p className="text-slate-500 font-medium mb-8">Congregation of FIHM Sisters</p>
              
              <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
                <p>
                  As the Vice President of Jayarani College, my focus is on operational excellence 
                  and student-centric growth. We strive to create a bridge between the foundational 
                  vision of our founders and the modern aspirations of our students.
                </p>
                <div className="p-6 bg-white rounded-2xl border-l-4 border-yellow-400 shadow-sm italic text-base">
                  "Our goal is to ensure that every student who enters these gates leaves not just with 
                  a degree, but with a character that can withstand the challenges of the world."
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CORE RESPONSIBILITIES GRID --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A] mb-4">Administrative Focus</h3>
            <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#2F4A8A] transition-colors">
                  <item.icon className="text-[#2F4A8A] group-hover:text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACTION BAR --- */}
      <section className="py-20 text-center px-6">
        <div className="max-w-4xl mx-auto border-t border-slate-100 pt-20">
          <MessageSquare className="mx-auto text-slate-200 mb-6" size={48} />
          <h4 className="text-xl font-bold text-[#1A2E5A] mb-2">Office of the Vice President</h4>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto text-sm">
            For academic collaborations, student welfare initiatives, or administrative inquiries.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#1A2E5A] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#2F4A8A] transition-all">
            SUBMIT INQUIRY <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}