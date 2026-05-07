"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  ShieldAlert, 
  Gavel, 
  Cctv, 
  Users, 
  Scale, 
  PhoneCall, 
  ExternalLink,
  Info,
  AlertTriangle,
  FileWarning,
  CheckCircle2,
  ShieldCheck,
  Download,
  Eye,
  X,
  ChevronRight,
  FileText,
  Leaf
} from "lucide-react";

// PDF Data Mapping
export const pdfData = {
  "annual-report": "/pdf/annual-report.pdf",
  "anti-ragging": "/pdf/anti-ragging.pdf",
  "letter": "/pdf/submission-letter.pdf", // This refers to the UGC Compliance Letter June 2023
};

// Dynamic import for PDF preview
const MagazinePreview = dynamic(() => import("../../components/MagazinePreview"), {
  ssr: false,
  loading: () => <div className="aspect-[3/4] bg-gray-100 animate-pulse rounded-xl" />,
});

export default function AntiRaggingCell() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activePdf, setActivePdf] = useState(pdfData["anti-ragging"]);

  const handlePreview = (path: string) => {
    setActivePdf(path);
    setIsPreviewOpen(true);
  };

  const primaryMeasures = [
    {
      title: "CCTV Surveillance",
      desc: "The campus is equipped with CCTV cameras at vital points to curb the menace of ragging.",
      icon: Cctv
    },
    {
      title: "Surprise Inspections",
      desc: "Regular inspections at hostels, canteens, and bus stands by the anti-ragging committee.",
      icon: ShieldAlert
    },
    {
      title: "Legal Sensitization",
      desc: "Annual awareness meetings with police officials (DSP rank) to brief students on legal measures.",
      icon: Gavel
    },
    {
      title: "Paperless Undertakings",
      desc: "Completely online procedure as per UGC June 2023 directives; no hard-copy affidavits required.",
      icon: Leaf
    }
  ];

  const objectives = [
    "To absolutely prohibit ragging within or outside the college campus",
    "To prevent the occurrence of ragging by following the provisions of Regulations in the institution",
    "To provide punishment to those indulging in ragging as provided for in Regulations",
    "To sensitize students, to adopt measures that will prevent ragging",
    "To uphold and comply with the directions of the Hon’ble Supreme Court",
    "To publicize the revised completely online procedure for Anti-Ragging Undertakings",
    "To consider complaints, conduct enquiries, and submit reports to the Committee",
    "Oversee the procedure of obtaining online undertakings (antiragging.in)",
    "Conduct workshops against ragging menace and orient the students",
    "Provide information pertaining to the National Anti-Ragging Helpline",
    "To offer services of counselling and create awareness to the students",
    "To take all necessary measures for prevention of Ragging inside the Campus"
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* PDF MODAL */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-5 right-5 z-50 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-all"
            >
              <X size={24} />
            </button>
            <iframe src={`${activePdf}#toolbar=0`} className="w-full h-full border-none" title="Official Document" />
          </div>
        </div>
      )}

      <PageHeader 
        title="Anti-Ragging Cell"
        subtitle="Zero tolerance towards ragging. Ensuring a safe, respectful, and protected campus environment."
        breadcrumb="Home / Student Support / Anti-Ragging"
        image={pageImages.adminSecretary}
      />

      {/* --- WARNING BANNER --- */}
      <section className="bg-red-600 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="animate-pulse" />
            <span className="font-bold tracking-widest text-sm uppercase">Ragging is a Cognizable Offence</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-tighter">
            <span>UGC Directives 2023</span>
            <span className="w-1 h-1 bg-white rounded-full opacity-50" />
            <span>TN Anti-Ragging Act</span>
          </div>
        </div>
      </section>

      {/* --- DEFINITION & REVISED PROCEDURE SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Important Update</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Revised Compliance <br />
              <span className="text-red-600/60 italic font-light">Procedure 2025-26</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg mb-10">
              <p className="text-blue-900 font-medium">
                As per UGC D.O. F. No. 1-15/2009(ARC)PT.III, the procedure for filing Anti-Ragging undertakings is now completely online. 
              </p>
              <p className="text-base">
                To reduce compliance burden and conserve paper, students are <strong>no longer required</strong> to submit hard/printed affidavits or signed copies to the institute.
              </p>
            </div>

            {/* DOCUMENT PREVIEW CARDS */}
            <div className="grid gap-4">
              {/* Card 1: Official Policy */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex items-center gap-6">
                 <div className="w-20 h-24 shrink-0 bg-slate-50 rounded-lg overflow-hidden border group relative cursor-pointer" onClick={() => handlePreview(pdfData["anti-ragging"])}>
                    <MagazinePreview pdfPath={pdfData["anti-ragging"]} />
                 </div>
                 <div className="flex-1">
                   <h4 className="font-bold text-[#1A2E5A] text-sm mb-1">Anti-Ragging Policy</h4>
                   <div className="flex gap-2">
                     <button onClick={() => handlePreview(pdfData["anti-ragging"])} className="text-[10px] font-bold text-blue-600 hover:underline">VIEW POLICY</button>
                     <span className="text-slate-300">|</span>
                     <a href={pdfData["anti-ragging"]} download className="text-[10px] font-bold text-slate-500 hover:underline">DOWNLOAD</a>
                   </div>
                 </div>
              </div>

              {/* Card 2: UGC Compliance Letter */}
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-md flex items-center gap-6">
                 <div className="w-20 h-24 shrink-0 bg-white rounded-lg overflow-hidden border group relative cursor-pointer" onClick={() => handlePreview(pdfData["letter"])}>
                    <MagazinePreview pdfPath={pdfData["letter"]} />
                 </div>
                 <div className="flex-1">
                   <h4 className="font-bold text-[#1A2E5A] text-sm mb-1">UGC Revised Procedure</h4>
                   <p className="text-[10px] text-blue-700 mb-2 font-medium">D.O. Letter - June 12, 2023</p>
                   <button onClick={() => handlePreview(pdfData["letter"])} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[10px] font-bold text-blue-700 hover:bg-blue-600 hover:text-white transition-all">
                     <Eye size={12} /> READ LETTER
                   </button>
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-[#1A2E5A] mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-red-600" /> Preventative Measures
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {primaryMeasures.map((m, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <m.icon className="text-[#2F4A8A] mb-4" size={24} />
                    <h4 className="font-bold text-[#1A2E5A] text-sm mb-2">{m.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* OBJECTIVES LIST */}
            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                    <CheckCircle2 className="text-red-500" />
                    <h4 className="text-xl font-bold">Specific Objectives</h4>
                </div>
                <div className="grid gap-4">
                  {objectives.map((text, i) => (
                    <div key={i} className="flex gap-3 items-start group">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                      <p className="text-sm text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors">{text}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PUNISHMENTS SECTION --- */}
      <section className="py-24 bg-[#1A2E5A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
            <Scale size={300} />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Anti-Ragging Punishments</h3>
            <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
               {[
                 "Imprisonment as per TN Anti-Ragging Act.",
                 "Permanent Expulsion from the institution.",
                 "Suspension from academic privileges.",
                 "Fine with a mandatory public apology.",
                 "Withholding of results or scholarships.",
                 "Debarring from representing the college in events.",
                 "Cancellation of admission.",
                 "Debarring from other institutions."
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group">
                   <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                     <AlertTriangle size={14} className="text-red-500 group-hover:text-white" />
                   </div>
                   <span className="text-sm font-light text-blue-50">{item}</span>
                 </div>
               ))}
          </div>
        </div>
      </section>

      {/* --- REPORTING & ONLINE LINKS --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-slate-100 grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-[#1A2E5A] mb-6">Online Compliance</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                Access the official portals for undertaking submission and compliance tracking as mandated by the University Grants Commission.
              </p>
              <div className="space-y-4">
                <a href="http://www.antiragging.in" target="_blank" className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 transition-all group">
                  <div className="flex items-center gap-4">
                    <FileText className="text-blue-600" />
                    <span className="text-sm font-bold text-slate-700">File Online Undertaking</span>
                  </div>
                  <ExternalLink size={16} className="text-slate-400" />
                </a>
                <a href="https://www.antiragging.in/compliance_desclaimer.html" target="_blank" className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 transition-all group">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="text-green-600" />
                    <span className="text-sm font-bold text-slate-700">Institution Compliance Link</span>
                  </div>
                  <ExternalLink size={16} className="text-slate-400" />
                </a>
                <div className="p-8 bg-red-600 rounded-3xl text-white shadow-xl shadow-red-600/20">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white shrink-0 backdrop-blur-md">
                         <PhoneCall size={28} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mb-1">National Helpline (Toll Free)</p>
                        <p className="text-3xl font-black">1800-180-5522</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200">
               <Users className="text-[#2F4A8A] mb-6" size={32} />
               <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">Nodal Officers</h4>
               <p className="text-sm text-slate-500 leading-relaxed font-light mb-8 italic">
                 "The committee is headed by the Principal and supported by hostel wardens. Committee posters are displayed at Admission Centres, Departments, Library, Canteen, and Hostels."
               </p>
               <button className="w-full bg-[#1A2E5A] text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#2F4A8A] transition-all shadow-lg flex items-center justify-center gap-3 group">
                 View Anti-Ragging Committee <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}