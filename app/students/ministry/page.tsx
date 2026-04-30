"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages, contentImages } from "@/data/image";
import { 
  Heart, 
  Music, 
  Sparkles, 
  Anchor, 
  Sun,
  Quote,
  Clock
} from "lucide-react";

export default function CampusMinistry() {
  const spiritualActivities = [
    {
      title: "Daily Morning Prayer",
      time: "9:00 AM",
      desc: "Every working day begins with hymns and religious songs from all major faiths, fostering a sense of community and peace.",
      icon: Sun
    },
    {
      title: "Inter-Religious Harmony",
      time: "Continuous",
      desc: "Regardless of religious background, we provide spiritual sustenance to promote wellbeing and personal growth.",
      icon: Sparkles
    },
    {
      title: "Value Education",
      time: "Weekly",
      desc: "Promoting the growth of moral principles and encouraging integrity within the college community.",
      icon: Anchor
    },
    {
      title: "Festival Celebrations",
      time: "Seasonal",
      desc: "All religious festivals are celebrated with piety and reverence, establishing an environment of mutual respect.",
      icon: Sparkles
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Campus Ministry"
        subtitle="Nurturing the soul and fostering a culture of peace, harmony, and mutual respect."
        breadcrumb="Home / Student Support / Campus Ministry"
        image={pageImages.studentsMinistry}
      />

      {/* --- SPIRITUAL VISION SECTION --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-xl rounded-full mb-8">
            <Heart className="text-[#2F4A8A]" size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
            The Sanctification of <br />
            <span className="text-[#2F4A8A]/50 italic font-light">Minds & Spirits</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              At Jayarani College, we recognize that true education harmonizes scholarly excellence 
              with spiritual wisdom. Our Campus Ministry serves as the spiritual heart of the institution, 
              drawing inspiration from the charism of <strong>"Love and Sacrifice"</strong>.
            </p>
            <p className="text-slate-500 leading-relaxed italic">
              "To establish a welcoming and inclusive campus culture by fostering an atmosphere 
              where people are appreciated and accepted for their religious convictions."
            </p>
          </div>
          <div className="w-24 h-px bg-slate-200 mx-auto mt-12" />
        </div>
      </section>

      {/* --- THE 9 AM TRADITION --- */}
      <section className="py-20 bg-[#1A2E5A] text-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-yellow-400/10 rounded-[2.5rem] blur-xl" />
            <img 
              src={contentImages.studentsMinistrySession} 
              alt="Morning Prayer" 
              className="relative z-10 rounded-[2rem] shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
               <Music className="text-yellow-400 mb-2" size={24} />
               <p className="text-xs font-bold uppercase tracking-widest">Hymns of Harmony</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Clock className="text-yellow-400" size={20} />
              <span className="text-yellow-400 font-bold text-xs uppercase tracking-[0.4em]">Daily Ritual</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">Promoting Inter-Religious <br/> Harmony Through Prayer</h3>
            <p className="text-blue-100/70 font-light leading-relaxed">
              Every morning at 9:00 AM, the campus gathers to provide people with spiritual sustenance. 
              The sessions include religious songs from all major faiths, acknowledging the cultural 
              diversity of our staff and students.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic text-sm text-blue-100">
               "Any kind of indifference towards religion is totally absent inside the campus, 
               fostering a community of enlightened intellectuals following the path of peace."
            </div>
          </div>
        </div>
      </section>

      {/* --- ACTIVITIES GRID --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spiritualActivities.map((act, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <act.icon className="text-[#2F4A8A]" size={24} />
                </div>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-2">{act.title}</h4>
                <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-4">{act.time}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE MOTTO --- */}
      <section className="py-24 text-center px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Quote className="mx-auto text-slate-100 mb-8 rotate-180" size={80} />
          <h3 className="text-2xl md:text-3xl font-serif text-[#1A2E5A] leading-relaxed mb-6">
            "Emancipating women from discrimination on the social, spiritual, and intellectual levels."
          </h3>
          <div className="h-1 w-12 bg-yellow-400 mx-auto rounded-full mb-6" />
          <p className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em]">Campus Ministry • Jayarani College</p>
        </div>
      </section>
    </main>
  );
}