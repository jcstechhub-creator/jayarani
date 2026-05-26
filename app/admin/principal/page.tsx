"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { highprofession } from "../../../data/image"; 
import { 
  Quote, 
  GraduationCap, 
  Lightbulb, 
  Award, 
  Users, 
  MessageCircle,
  Clock,
  BookOpen
} from "lucide-react";

export default function PrincipalPage() {
  const academicPillars = [
    {
      title: "Academic Rigor",
      desc: "Championing a curriculum that challenges and prepares students for global standards.",
      icon: GraduationCap
    },
    {
      title: "Student Mentorship",
      desc: "Focusing on the personal growth and psychological well-being of every young woman.",
      icon: Users
    },
    {
      title: "Innovation in Pedagogy",
      desc: "Integrating modern technology and research-driven teaching methods in the classroom.",
      icon: Lightbulb
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Principal's Desk"
        subtitle="Leading with a vision to nurture visionary leaders of tomorrow."
        breadcrumb="Home / Administration / Principal"
        image={pageImages.adminPrincipal}
      />

      {/* --- PRINCIPAL INTRODUCTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Section */}
          <div className="lg:col-span-5 relative">
            <div className="absolute top-0 right-0 w-full h-full bg-slate-50 -z-10 translate-x-6 translate-y-6 rounded-[2rem]" />
            <div className="overflow-hidden rounded-[2rem] shadow-2xl border-b-8 border-[#2F4A8A]">
              <img 
              //  src={highprofession?.Principal}
                // src="/newgirlimages/image-37.jpeg" // Replace with actual photo
                alt="College Principal"
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex-1 bg-white p-4 border border-slate-100 rounded-xl shadow-sm flex items-center gap-3">
                <Clock className="text-yellow-600" size={18} />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Office Hours: 9 AM - 4 PM</span>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="lg:col-span-7">
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">From the Desk of the Principal</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Empowering Minds, <br />
              <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Enriching Souls</span>
            </h2>
            
            <div className="relative">
              <Quote className="absolute -top-10 -left-6 text-slate-100 w-24 h-24 -z-10" />
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>
                  "Welcome to Jayarani College of Arts and Science for Women. Here, we don't just teach 
                  subjects; we cultivate character. My mission is to ensure that our students emerge as 
                  confident, skilled, and compassionate individuals."
                </p>
                <p>
                  As an institution affiliated with Periyar University, we maintain academic excellence 
                  while staying true to our foundational FIHM values of love and sacrifice. 
                  Our doors are always open to those who seek the light of knowledge.
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-slate-100 pt-8">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Award className="text-[#2F4A8A]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#1A2E5A]">Rev. Sr. Dr. Jenitta Arockiasamy, FIHM</h4>
                <p className="text-sm text-slate-400 font-medium">Ph.D.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ACADEMIC PILLARS GRID --- */}
      <section className="py-24 bg-[#F8FAFC] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4 uppercase tracking-[0.2em]">Our Core Focus</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {academicPillars.map((pillar, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#2F4A8A] transition-colors">
                  <pillar.icon className="text-[#2F4A8A] group-hover:text-yellow-400" size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#1A2E5A] rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <MessageCircle size={200} className="text-white" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Connect with the Office</h3>
            <p className="text-blue-200 mb-10 max-w-xl mx-auto font-light">
              Students and parents are encouraged to schedule appointments for academic counseling or administrative guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:principal@jayaranicollege.edu.in" className="bg-yellow-400 text-[#1A2E5A] px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white transition-colors">
                SEND AN EMAIL
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BookOpen size={16} /> <span>Official Reports</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}