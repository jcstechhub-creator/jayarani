"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  // HandsPraying, 
  Lightbulb, 
  Award, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { pageImages } from "@/data/image";

export default function UniquenessJCS() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Uniqueness of JCS"
        subtitle="Exploring the distinct values and best practices that define the Jayarani spirit."
        breadcrumb="Home / IQAC / Uniqueness"
        // image="/newgirlimages/image-5.jpeg"
        // image="/banner/banner4.jpeg"
        
                image = { pageImages.adminSecretary}
      />

      {/* --- CORE PHILOSOPHY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Identity</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
            More than just <br />
            <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Academic Excellence</span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed font-light">
            At Jayarani College, uniqueness is woven into our daily life. Through our specialized 
            Best Practices, we cultivate not just graduates, but enlightened citizens who embody 
            integrity and social harmony.
          </p>
        </div>
      </section>

      {/* --- BEST PRACTICE 01: HONESTY SHOP --- */}
      <section className="py-24 bg-slate-50 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-[#2F4A8A] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <ShieldCheck size={14} /> Best Practice - 01
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A2E5A] mb-6">The Honesty Shop</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-8 italic">
                "No legacy is as rich as honesty."
              </p>
              <div className="space-y-6 text-slate-500 font-light leading-relaxed">
                <p>
                  In a world of constant surveillance, our Honesty Shop stands as a testament to 
                  trust. Students pick up edibles and stationery, dropping the exact payment in 
                  coin boxes—unmonitored.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Self-purchase model",
                    "Price-tagged essentials",
                    "Profit helps needy students",
                    "Building moral fiber"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      <span className="text-xs font-bold text-[#1A2E5A] uppercase tracking-tighter">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
               <div className="absolute -inset-4 bg-blue-200/20 rounded-[3rem] rotate-3" />
               <div className="relative bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center">
                  <ShoppingBag className="mx-auto text-[#2F4A8A] mb-6" size={60} strokeWidth={1.5} />
                  <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">Inculcating Integrity</h4>
                  <p className="text-sm text-slate-400 font-light italic">
                    Evidence of Success: High student participation and self-regulation. 
                    Mutilated currency issues were eradicated through counseling, 
                    leading to a centralized-institutional success.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEST PRACTICE 02: HARMONY --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />
              <img 
                src="/newgirlimages/image-81.jpeg" 
                alt="Harmony Prayer" 
                className="rounded-[3rem] shadow-2xl relative z-10 h-[500px] w-full object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <Heart size={14} /> Best Practice - 02
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A2E5A] mb-6">Inter-Religious Harmony</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                Recognizing the cultural diversity of our region, we foster a community where 
                every student feels free to practice their faith with piety and reverence.
              </p>
              <div className="space-y-6">
                 <div className="p-6 bg-[#1A2E5A] text-white rounded-2xl flex items-start gap-4">
                    {/* <HandsPraying className="text-yellow-400 shrink-0" size={24} /> */}
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-widest mb-1">9:00 AM Prayer Ritual</h5>
                      <p className="text-xs text-blue-100/70 font-light">Includes hymns and religious songs from all major faiths, uniting the campus in peace.</p>
                    </div>
                 </div>
                 <p className="text-sm text-slate-500 font-light italic">
                   "Religious indifference is totally absent inside the campus, fostering 
                   enlightened intellectuals following the path of peace and harmony."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- UNIQUE METRICS --- */}
      <section className="py-24 bg-[#1A2E5A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Ethics", title: "Honesty Shop", icon: Award, desc: "A unique self-service model focused on character building." },
              { label: "Culture", title: "Global Inclusion", icon: Sparkles, desc: "Managed by FIHM sisters, connecting with a global network of 9 countries." },
              { label: "Growth", title: "Holistic Mentoring", icon: Lightbulb, desc: "Personal counselor support for spiritual and emotional wellbeing." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-yellow-400" size={32} />
                </div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-[0.4em] mb-2">{item.label}</p>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}