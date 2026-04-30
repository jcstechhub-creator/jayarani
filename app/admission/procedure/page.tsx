"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  ClipboardCheck, 
  FileText, 
  UserPlus, 
  CheckCircle2, 
  ArrowRight,
  Info,
  AlertCircle,
  Clock,
  Download,
  ShieldCheck
} from "lucide-react";

export default function AdmissionProcedure() {
  const steps = [
    {
      title: "Registration",
      desc: "Fill out the online enquiry form or visit the campus to obtain the application kit. Admission begins in June.",
      icon: UserPlus,
    },
    {
      title: "Documentation",
      desc: "Submit the completed application along with necessary certificates and transcripts for verification.",
      icon: FileText,
    },
    {
      title: "Interview",
      desc: "A personal interaction to understand your aspirations, merit, and aptitude for the chosen program.",
      icon: ClipboardCheck,
    },
    {
      title: "Enrollment",
      desc: "Upon selection, secure your seat by completing the fee formalities and submitting original certificates.",
      icon: CheckCircle2,
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Admission Procedure"
        subtitle="Transparent, merit-based, and inclusive. Join the academic community at JCS."
        breadcrumb="Home / Admission / Procedure"
        // image="/newgirlimages/image-30.jpeg"
        image="/banner/banner4.jpeg"
      />

      {/* --- THE JOURNEY MAP --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Process</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A2E5A]">Four Steps to Your Future</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block" />
            
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:border-[#2F4A8A] group-hover:bg-[#2F4A8A] transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-900/10">
                  <step.icon className="text-[#2F4A8A] group-hover:text-yellow-400" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-3">0{i+1}. {step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DOCUMENTATION & ELIGIBILITY --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16">
                <h3 className="text-3xl font-bold text-[#1A2E5A] mb-8">Required Documents  </h3>
                <div className="space-y-4">
                  {[
 "Original Marksheets (10th, 11th & 12th)",
  "Transfer Certificate (TC)",
  "Community Certificate",
  "Aadhaar Card Copy",
  "Blood Group Certificate",
  "Passport Size Photos (3 Nos.)",
  "EMIS Number, Mobile Number & Email ID",
  "Income Certificate / Letter from Parish Priest (for Scholarship)"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                      <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-tighter">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#2F4A8A] p-10 md:p-16 text-white flex flex-col justify-center">
                <ShieldCheck className="text-yellow-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-white">Eligibility Criteria</h3>
                <p className="text-blue-100/80 leading-relaxed font-light mb-8">
                  Candidates who have passed the Higher Secondary Course conducted by the Govt. of Tamil Nadu or an equivalent examination are eligible for UG programmes. 
                  Admission is purely on the basis of merit, ensuring equal opportunity irrespective of socio-economic background.
                </p>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                   <div className="flex items-center gap-3 mb-2">
                      <AlertCircle size={16} className="text-yellow-400" />
                      <span className="text-xs font-bold uppercase tracking-widest">Foreign Students</span>
                   </div>
                   <p className="text-xs text-blue-50">Foreign students must obtain eligibility clearance from The Registrar, Periyar University before confirming admission.</p>
                </div>
                   <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                   <div className="flex items-center gap-3 mb-2">
                      <AlertCircle size={16} className="text-yellow-400" />
                      <span className="text-xs font-bold uppercase tracking-widest">Link flyer will come as poster note this vengatesh</span>
                   </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ANTI-RAGGING MANDATE --- */}
 {/* --- COMPLIANCE & ADMISSION TIMELINES --- */}
<section className="py-24 px-6 bg-white overflow-hidden">
  <div className="max-w-5xl mx-auto text-center">
    {/* Status Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm border border-red-100">
      <AlertCircle size={14} className="animate-pulse" /> Mandatory Compliance
    </div>

    {/* Main Headline */}
    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2E5A] mb-6">
      Admission & <span className="text-[#2F4A8A]/50 italic font-light">Statutory Requirements</span>
    </h3>
    
    <div className="max-w-3xl mx-auto">
      <p className="text-slate-500 font-light leading-relaxed mb-12 text-lg">
        As per <span className="font-semibold text-slate-700">UGC Regulations</span>, every student and parent must submit an 
        <strong> Online Anti-Ragging Undertaking</strong> every academic year. 
        Failure to comply results in the summary rejection of the application.
      </p>
    </div>

    {/* Timelines Grid */}
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      
      {/* UG Programmes Card */}
      <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
        <div className="w-12 h-12 bg-[#2F4A8A] text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
          UG
        </div>
        <h4 className="text-[#1A2E5A] font-bold uppercase tracking-widest text-xs mb-6">Regular Programmes</h4>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="block text-3xl font-black text-[#2F4A8A]">June</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 block"> 2026 - 2027 Academic Year <br /> Admissions are going on</span>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div className="text-center">
            <span className="block text-xs font-bold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-100">Girls Only</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2 block">Eligibility</span>
          </div>
        </div>
      </div>

      {/* ODL Programmes Card */}
      <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
        <div className="w-12 h-12 bg-[#1A2E5A] text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
          ODL
        </div>
        <h4 className="text-[#1A2E5A] font-bold uppercase tracking-widest text-xs mb-6">online and Distance Learning</h4>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="block text-3xl font-black text-[#2F4A8A]">January & June</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 block"> Calendar Year & Academic Year <br /> Admissions are going on</span>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div className="text-center">
             <span className="block text-xs font-bold text-[#1A2E5A] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 whitespace-nowrap">Co-Education</span>
             <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2 block">Boys & Girls</span>
          </div>
        </div>
      </div>

    </div>

    {/* Footer Detail */}
    <p className="mt-12 text-slate-400 text-[11px] font-medium uppercase tracking-[0.3em]">
      * All admissions strictly based on merit and university norms
    </p>
  </div>
</section>

      {/* --- HELP / CONTACT --- */}
      <section className="py-24 px-6 bg-slate-50 text-center">
        <div className="max-w-2xl mx-auto">
          <Info className="mx-auto text-slate-300 mb-8" size={64} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Need Assistance?</h3>
          <p className="text-slate-500 font-light mb-10 leading-relaxed">
            Our admission counselors are here to help you navigate the process. 
            For any queries regarding eligibility or document submission, visit the administrative office.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
              Apply Now form needed
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
              <Download size={16} /> Download Guide (PDF)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}