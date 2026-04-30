"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages, contentImages } from "@/data/image";
import { 
  Heart, 
  MessageCircle, 
  Smile, 
  UserCheck, 
  ShieldCheck, 
  Lightbulb,
  Sparkles,
  HelpingHand
} from "lucide-react";

export default function StudentCounselling() {
  const counsellingAreas = [
    {
      title: "Academic Guidance",
      desc: "Assisting students in overcoming academic pressure and setting reasonable educational goals.",
      icon: Lightbulb
    },
    {
      title: "Emotional Support",
      desc: "Professional help for teenage meltdowns, anxiety, and building emotional resilience.",
      icon: Heart
    },
    {
      title: "Personal Development",
      desc: "Support for family disputes, financial strain, and navigating transitional life phases.",
      icon: Smile
    },
    {
      title: "Spiritual Mentoring",
      desc: "Aligning personal growth with the institutional path of peace and moral harmony.",
      icon: Sparkles
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Student Counselling"
        breadcrumb="Home / Student Support / Counselling"
        subtitle="A safe haven for your thoughts, fostering mental wellness and inner strength."
        image={pageImages.studentsCounselling}
      />

      {/* --- MENTOR-MENTEE PHILOSOPHY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] -rotate-2" />
            <img 
              src={contentImages.studentsCounsellingSession} 
              alt="Counselling Session" 
              className="relative z-10 rounded-[2.5rem] shadow-2xl h-[500px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl z-20 border border-slate-100 max-w-xs">
              <MessageCircle className="text-[#2F4A8A] mb-4" size={32} />
              <p className="text-sm font-medium text-slate-700 leading-relaxed italic">
                "Through patient attention, our mentors assist students in overcoming their deepest difficulties."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Mentoring & Care</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] leading-tight">
              Compassionate <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Listening & Support</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Mentoring at Jayarani College is a crucial practice. Our faculty serve as more than just 
              teachers; they are facilitators who pinpoint fears and support students in 
              strengthening their sense of self.
            </p>
            
            <div className="space-y-4">
               {[
                 "Monthly dedicated hour for Mentor-Mentee interaction",
                 "Pep Talks to pique enthusiasm in academic pursuits",
                 "Referral to professional counselors for complex issues",
                 "Collaborative parent-mentor support systems"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                      <UserCheck size={14} className="text-green-600" />
                   </div>
                   <span className="text-sm text-slate-700 font-medium">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- COUNSELLING DOMAINS --- */}
      <section className="py-24 bg-[#1A2E5A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-[0.2em]">Counselling Services</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {counsellingAreas.map((area, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2F4A8A] transition-colors">
                  <area.icon className="text-yellow-400" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#1A2E5A] transition-colors">{area.title}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed group-hover:text-slate-500 transition-colors">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONFIDENTIALITY GUARANTEE --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#2F4A8A] rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <ShieldCheck size={16} /> Privacy & Trust
          </div>
          <h3 className="text-3xl font-bold text-[#1A2E5A] mb-8">Our Commitment to Privacy</h3>
          <p className="text-slate-500 text-lg leading-relaxed font-light mb-12">
            The intimacy that emerges between students and mentors is respected with the highest 
            ethical standards. Every conversation held within our counseling walls is kept 
            strictly confidential, ensuring a sanctuary for your personal growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <div className="flex items-center gap-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-full sm:w-auto">
                <HelpingHand className="text-yellow-600" />
                <div className="text-left">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office Location</p>
                   <p className="text-sm font-bold text-[#1A2E5A]">Health & Wellness Centre</p>
                </div>
             </div>
             <button className="bg-[#2F4A8A] text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-widest hover:bg-[#1A2E5A] transition-all shadow-xl shadow-blue-900/10">
               BOOK A SESSION
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}