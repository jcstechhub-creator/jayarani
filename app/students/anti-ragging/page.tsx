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
  ChevronRight
} from "lucide-react";

// PDF Data Mapping
export const pdfData = {
  "annual-report": "/pdf/annual-report.pdf",
  "anti-ragging": "/pdf/anti-ragging.pdf",
  "letter": "/pdf/letter.pdf",
};

// Dynamic import for PDF preview
const MagazinePreview = dynamic(() => import("../../components/MagazinePreview"), {
  ssr: false,
  loading: () => <div className="aspect-[3/4] bg-gray-100 animate-pulse rounded-xl" />,
});

export default function AntiRaggingCell() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const antiRaggingPdf = pdfData["anti-ragging"];

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
      title: "Online Undertakings",
      desc: "Mandatory annual online undertaking submission by every student and parent as per UGC norms.",
      icon: FileWarning
    }
  ];

  const objectives = [
    "To absolutely prohibit ragging within or outside the college campus",
    "To prevent the occurrence of ragging by following the provisions of Regulations in the institution",
    "To provide punishment to those indulging in ragging as provided for in Regulations and the appropriate law in force",
    "To sensitize students, to adopt measures that will prevent ragging",
    "To uphold and comply with the directions of the Hon’ble Supreme Court and be vigilant on any acts amounting to ragging",
    "To publicize to all students the prevalent directives and actions that can be taken against those indulging in ragging",
    "To consider the complaints received from the students, conduct enquiry and submit report to the Committee",
    "Oversee the procedure of obtaining undertaking from the students in accordance with the provisions",
    "Conduct workshops against ragging menace and orient the students",
    "To provide students the information pertaining to contact address and telephone numbers of distress call centers",
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
            <iframe src={`${antiRaggingPdf}#toolbar=0`} className="w-full h-full border-none" title="Anti-Ragging Regulations" />
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
            <span>UGC Regulation 2009</span>
            <span className="w-1 h-1 bg-white rounded-full opacity-50" />
            <span>TN Anti-Ragging Act</span>
          </div>
        </div>
      </section>

      {/* --- DEFINITION & DOCUMENT SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Safety</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Zero Tolerance <br />
              <span className="text-red-600/60 italic font-light">Campus Environment</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg mb-10">
              <p>
                According to the Hon'ble Supreme Court of India, ragging includes disorderly behavior 
                or treatment that has the effect of teasing, handling with rudeness, or indulging 
                in rowdy activities causing physical or psychological harm.
              </p>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl italic text-base text-slate-700">
                "Any act of physical or mental abuse targeted at another student on grounds of color, 
                race, religion, caste, gender, sexual orientation, appearance, or nationality."
              </div>
            </div>

            {/* DOCUMENT PREVIEW CARD */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-xl flex items-center gap-8">
               <div className="w-32 h-40 shrink-0 bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shadow-inner group relative cursor-pointer" onClick={() => setIsPreviewOpen(true)}>
                  <MagazinePreview pdfPath={antiRaggingPdf} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all">
                    <Eye className="text-white opacity-0 group-hover:opacity-100" />
                  </div>
               </div>
               <div>
                 <h4 className="font-bold text-[#1A2E5A] mb-1">Official Policy</h4>
                 <p className="text-xs text-slate-500 mb-4">Anti-Ragging Guidelines PDF</p>
                 <div className="flex gap-3">
                   <button onClick={() => setIsPreviewOpen(true)} className="p-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                     <Eye size={18} />
                   </button>
                   <a href={antiRaggingPdf} download className="flex items-center gap-2 px-4 py-2 bg-[#1A2E5A] text-white rounded-lg text-xs font-bold hover:bg-[#2F4A8A] transition-colors">
                     <Download size={14} /> DOWNLOAD
                   </a>
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
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2 group-hover:scale-150 transition-transform" />
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
                 "Suspension from the institution and academic privileges.",
                 "Fine with a mandatory public apology.",
                 "Withholding of scholarships or other financial grants.",
                 "Withholding of examination results.",
                 "Debarring from representation in college events or tests.",
                 "Cancellation of admission and debarring from other institutions."
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                   <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                     <AlertTriangle size={14} className="text-red-500 group-hover:text-white" />
                   </div>
                   <span className="text-sm font-light text-blue-50 leading-relaxed">{item}</span>
                 </div>
               ))}
          </div>
        </div>
      </section>

      {/* --- REPORTING CHANNELS --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-slate-100 grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-[#1A2E5A] mb-6">Emergency Assistance</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                If you are a victim of ragging or witness any such activity, report it immediately. 
                Our committee ensures 100% confidentiality and immediate action.
              </p>
              <div className="space-y-4">
                <a href="https://www.antiragging.in" target="_blank" className="flex items-center justify-between p-5 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-colors group">
                  <div className="flex items-center gap-4">
                    <Info className="text-[#2F4A8A]" />
                    <span className="text-sm font-bold text-slate-700">National Anti-Ragging Portal</span>
                  </div>
                  <ExternalLink size={16} className="text-[#2F4A8A]" />
                </a>
                <div className="p-8 bg-red-600 rounded-3xl text-white shadow-xl shadow-red-600/20">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white shrink-0 backdrop-blur-md">
                         <PhoneCall size={28} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mb-1">24x7 National Helpline</p>
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
                 "The committee is headed by the Principal and supported by hostel wardens and department heads. 
                 Committee member contact details are prominently displayed in all blocks."
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