"use client";

import React, { useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  FileText, 
  Download, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap,
  ArrowRight,
  Eye,
  Info,
  X // Added for the close button
} from "lucide-react";

import {contentImages} from "@/data/image";
import {aishe} from "@/data/image";
import Image from "next/image";


export default function ProspectusPage() {


      const [open, setOpen] = useState(false);
  const pdfUrl = aishe[4]; // Replace with your actual PDF path

  const highlights = [
    { title: "Academic Programmes", desc: "Detailed streams in Arts, Science, Literature, and Commerce.", icon: BookOpen },
    { title: "Admission Norms", desc: "Guidelines adhering to Tamil Nadu Govt & Periyar University.", icon: ShieldCheck },
    { title: "Fee Structures", desc: "Comprehensive fee guidelines and refund policy details.", icon: FileText },
    { title: "Financial Aid", desc: "Information on merit awards and government scholarships.", icon: GraduationCap },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="College Prospectus"
        subtitle="Your comprehensive guide to academic excellence, campus life, and institutional values."
        breadcrumb="Home / Admission / Prospectus"
        // image="/newgirlimages/image-4.jpeg"
        // image="/banner/banner5.jpeg"
        image="/banner/banner4.jpeg"
      />

     
      {/* --- PROSPECTUS FEATURE SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Book Mockup */}
            <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-[#2F4A8A]/5 rounded-[3rem] blur-2xl group-hover:bg-[#2F4A8A]/10 transition-all" />

      {/* Card */}
      <div className="relative bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-slate-100 transform group-hover:-rotate-1 transition-transform duration-700">

        {/* Single Image */}
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
          <Image
            src={contentImages.propspects}
            alt="Prospectus"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Bottom Info */}
        <div className="mt-8 flex items-center justify-between text-[#2F4A8A]">
          <span className="text-xs font-bold uppercase tracking-widest">
            Digital Publication
          </span>
          <span className="text-xs font-medium">
            PDF • 4.8 MB
          </span>
        </div>
      </div>
    </div>

            {/* Content & Details */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} /> New Academic Year
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] leading-tight">
                Explore the <br/>
                <span className="text-[#2F4A8A]/60 italic font-light">Jayarani Legacy</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                The prospectus provides a window into our world—from the rigorous Periyar University 
                curriculum to our vibrant campus culture. It outlines our commitment to a 
                <strong> Ragging-Free Campus</strong> and our mission of spiritual and 
                intellectual emancipation.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-[#2F4A8A]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setOpen(true)}
                  className="flex items-center justify-center gap-3 bg-[#2F4A8A] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#1A2E5A] transition-all shadow-xl shadow-blue-900/20"
                >
                  VIEW ONLINE <Eye size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- STATUTORY WARNING --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border-2 border-dashed border-red-100 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-200">
               <ShieldCheck size={40} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-red-900 mb-2">Zero Tolerance Policy</h4>
              <p className="text-sm text-red-800/70 font-light leading-relaxed">
                As detailed in the prospectus and per UGC regulations, Jayarani College maintains 
                a strictly ragging-free environment. All students and parents are required to 
                read and sign the anti-ragging undertaking before final admission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK LINKS --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-16 uppercase tracking-[0.2em]">What to expect inside</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Academic Streams", body: "Core subjects in English, Computer Science, Mathematics, Physics, and Commerce." },
              { title: "Code of Ethics", body: "Detailed conduct expectations for teachers, staff, and students." },
              { title: "Facilities", body: "Information on our Knowledge Transfer Centre, Library, and Green Campus." }
            ].map((box, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-1 bg-[#2F4A8A] mx-auto rounded-full" />
                <h4 className="text-xl font-bold text-[#2F4A8A]">{box.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{box.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <Info className="mx-auto text-slate-200 mb-8" size={64} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4 uppercase tracking-widest">Ready to join JCS?</h3>
          <p className="text-slate-500 font-light mb-10 leading-relaxed">
            After reviewing the prospectus, you can proceed to the admission procedure or 
            enquire directly at our administrative office for fee details and seat availability.
          </p>
          <div className="inline-flex items-center gap-2 text-[#2F4A8A] font-bold text-sm tracking-widest uppercase cursor-pointer group">
            Admission Procedure <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </section>
    {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
          
          <div className="w-[90%] h-[90%] bg-white rounded-2xl overflow-hidden relative">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>

            {/* Iframe PDF Viewer */}
            <iframe
              src={`${pdfUrl}`} 
             className="w-full h-full"
              allow="autoplay"
            ></iframe>

          </div>
        </div>
      )}

       {/* PDF Iframe */}
            {/* <div className="pt-16 h-full w-full z-[999]">
              <iframe 
               
                className="w-full h-full"
                title="Prospectus PDF"
              />
            </div> */}
    </main>
  );
}