"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { Quote, Award, ShieldCheck, Heart, Mail, ExternalLink, Users2 } from "lucide-react";
import { highprofession } from "../../../data/image"; 

export default function ChairmanPresident() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Chairman & President"
        subtitle="The visionary leadership steering Jayarani towards global excellence."
        breadcrumb="Home / Administration / Chairman"
        image={pageImages.adminChairman}
      />

      {/* --- LEADERSHIP PROFILE SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Portrait & Brief Info */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-slate-100 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative z-10 bg-white p-4 rounded-[2rem] shadow-2xl border border-slate-100">
              <img 
               src={highprofession?.Prisident}
                // src="/newgirlimages/image-35.jpeg" // Replace with actual photo
                alt="Rev. Sr. Superior General"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
              <div className="mt-8 text-center pb-4">
                <h2 className="text-2xl font-bold text-[#1A2E5A]">VERY REV. MOTHER L. JAYAMARY</h2>
                {/* <p className="text-[#2F4A8A] font-semibold text-sm uppercase tracking-widest mt-1">President & Chairman</p> */}
                <p className="text-[#2F4A8A] font-semibold text-sm uppercase tracking-widest mt-1">Superior General of the Franciscan </p>
                <p className="text-slate-400 text-xs mt-2 uppercase tracking-tighter">Sisters of the Immaculate Heart of Mary (FIHM) Congregation</p>
              </div>
            </div> 
          </div>

          {/* Message & Vision */}
          <div className="lg:col-span-7 pt-4">
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Leadership Message</span>
            <h3 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Inspiring Growth and <br />
              <span className="text-[#2F4A8A]/60 italic font-light">Spiritual Wisdom</span>
            </h3>
            
            <div className="relative">
              <Quote className="absolute -top-6 -left-6 text-yellow-400/20 w-20 h-20 -z-10" />
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light italic">
                <p>
                  "At Jayarani College, our administration is not merely about management; it is a sacred mission 
                  of service. We believe that when we empower a woman with knowledge and values, we are 
                  transforming an entire generation."
                </p>
                <p className="not-italic text-base">
                  Our commitment remains rooted in the charism of 'Love and Sacrifice' established by our 
                  Founder Fr. Louis Savy Dupuis. We strive to provide an environment where academic 
                  brilliance meets moral integrity.
                </p>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <ShieldCheck className="text-[#2F4A8A] mb-4" size={28} />
                <h4 className="font-bold text-slate-800 mb-2">Governance</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Overseeing the institutional policies to ensure alignment with Pontifical and University standards.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Heart className="text-yellow-600 mb-4" size={28} />
                <h4 className="font-bold text-slate-800 mb-2">Welfare</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Prioritizing the spiritual and personal wellbeing of every student and staff member.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ADMINISTRATIVE ROLES --- */}
      <section className="py-20 bg-[#1A2E5A] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Award className="text-yellow-400" />
            </div>
            <h4 className="text-xl font-bold">Policy Leadership</h4>
            <p className="text-blue-100/60 text-sm leading-relaxed">Defining the long-term strategic goals and academic roadmap for the college.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-yellow-400" />
            </div>
            <h4 className="text-xl font-bold">Financial Oversight</h4>
            <p className="text-blue-100/60 text-sm leading-relaxed">Ensuring transparent and ethical financial management of institutional resources.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Users2 className="text-yellow-400" size={24}/>
            </div>
            <h4 className="text-xl font-bold">Institutional Growth</h4>
            <p className="text-blue-100/60 text-sm leading-relaxed">Spearheading infrastructure development and global collaboration initiatives.</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT/OFFICE --- */}
      <section className="py-24 text-center px-6 bg-white">
        <div className="max-w-2xl mx-auto p-10 rounded-[2rem] border-2 border-dashed border-slate-100">
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">President's Secretariat</h3>
          <p className="text-slate-500 mb-8 text-sm">For official correspondence and appointments with the Chairman's office.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:president@jcs.edu.in" className="flex items-center gap-2 text-[#2F4A8A] font-bold hover:underline">
              <Mail size={18} /> president@jcs.edu.in
            </a>
            <div className="w-2 h-2 rounded-full bg-slate-200 hidden sm:block" />
            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1A2E5A] transition-colors">
              Contact Office <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}