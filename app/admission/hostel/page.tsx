"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages, contentImages } from "@/data/image";
import { 
  Home, 
  ShieldCheck, 
  Utensils, 
  Wifi, 
  Users2, 
  Clock, 
  Heart,
  FileText,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function HostelPage() {
  const facilities = [
    { name: "Safe Haven", desc: "24/7 warden supervision and CCTV monitoring in a high-security perimeter.", icon: ShieldCheck },
    { name: "Balanced Diet", desc: "Hygienic and nutritious meals prepared with care in our modern mess hall.", icon: Utensils },
    { name: "Digital Connectivity", desc: "High-speed Wi-Fi access for research and academic projects during study hours.", icon: Wifi },
    { name: "Community Life", desc: "Fostering lifelong friendships and mutual respect among residents.", icon: Users2 },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Hostel Residency"
        subtitle="The Jayarani Hostel: A secure and nurturing home managed by the FIHM Sisters."
        breadcrumb="Home / Admission / Hostel"
        image={pageImages.admissionHostel}
      />

      {/* --- RESIDENTIAL PHILOSOPHY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">A Home Away From Home</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Nurturing <br />
              <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Body & Spirit</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              At Jayarani Hostel, we provide more than just accommodation. We offer an 
              environment where discipline meets compassion. Managed with maternal care, 
              our residents are encouraged to focus on their academic goals while 
              participating in daily spiritual gatherings for personal growth.
            </p>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
              <Heart className="text-[#2F4A8A] shrink-0" size={24} />
              <p className="text-sm text-slate-700 italic font-medium">
                "We are dedicated to emancipating women by providing a safe, spiritual, 
                and intellectual sanctuary."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <img src={contentImages.hostelRoom} alt="Hostel Room" className="rounded-3xl shadow-xl h-80 w-full object-cover" />
             <img src={contentImages.hostelStudyHall} alt="Study Hall" className="rounded-3xl shadow-xl h-64 w-full object-cover mt-12" />
          </div>
        </div>
      </section>

      {/* --- FACILITIES GRID --- */}
      <section className="py-24 bg-[#1A2E5A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-[0.2em]">Our Facilities</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((f, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <f.icon className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold mb-3">{f.name}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RULES & DISCIPLINE --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
              <h3 className="text-3xl font-bold text-[#1A2E5A]">Residency Guidelines</h3>
              <div className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={14} /> Ragging-Free Zone
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="text-[#2F4A8A] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-sm text-slate-800">Curfew & Timing</h5>
                    <p className="text-xs text-slate-500 mt-1">Strict adherence to evening roll-call and study hour timings is mandatory.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users2 className="text-[#2F4A8A] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-sm text-slate-800">Spiritual Gathering</h5>
                    <p className="text-xs text-slate-500 mt-1">Participation in collective prayer and moral instruction sessions is encouraged.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <AlertCircle className="text-[#2F4A8A] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-sm text-slate-800">Zero Tolerance</h5>
                    <p className="text-xs text-slate-500 mt-1">Direct expulsion for any student found guilty of ragging or illegal activities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#2F4A8A] shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-sm text-slate-800">Admission</h5>
                    <p className="text-xs text-slate-500 mt-1">Hostel seats are allotted based on bonafide college enrollment and merit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 text-center px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <Home className="mx-auto text-slate-200 mb-8" size={64} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Apply for Residency</h3>
          <p className="text-slate-500 font-light mb-10 leading-relaxed">
            Prospective students can obtain the hostel application along with the college 
            admission kit. Selection is finalized after an interaction with the Warden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
              Download Hostel Form
            </button>
            <button className="flex items-center gap-2 text-[#2F4A8A] font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-slate-50 rounded-xl transition-all">
              <FileText size={16} /> Hostel Rules (PDF)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}