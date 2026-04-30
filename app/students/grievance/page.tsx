"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Scale, 
  ShieldCheck, 
  Inbox, 
  Mail, 
  AlertCircle, 
  CheckCircle2,
  FileSearch,
  MessageSquare,
  ExternalLink
} from "lucide-react";

export default function GrievanceRedressal() {
  const mechanisms = [
    {
      title: "Offline Reporting",
      desc: "Complaint and suggestion boxes are kept at vantage points across the campus to ensure easy access.",
      icon: Inbox
    },
    {
      title: "Formal Letter",
      desc: "In-person complaints can be submitted via a signed letter addressed to the Principal or the Grievance Cell.",
      icon: MessageSquare
    },
    {
      title: "Digital Submission",
      desc: "Online complaints can be sent directly to the Principal's official email ID for prompt digital record-keeping.",
      icon: Mail
    },
    {
      title: "Mentor System",
      desc: "Students can also voice their concerns through their assigned mentors as per the Tutor-Ward system.",
      icon: ShieldCheck
    }
  ];

  const grievanceLinks = [
    {
      title: "Submit Student Grievances",
      link: "#", // 🔁 replace with your real link
    },
    {
      title: "Submit Staff Grievances",
      link: "#",
    },
    {
      title: "Staff Redressal Committee Members",
      link: "#",
    },
    {
      title: "Student Redressal Committee Members",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Grievance Redressal Cell"
        subtitle="Ensuring a fair, transparent, and respectful environment for all members of JCS."
        breadcrumb="Home / Student Support / Grievance"
        image={pageImages.studentsGrievance}
      />

      {/* --- CELL OVERVIEW --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Zero Tolerance Policy</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                A Voice for Every <br />
                <span className="text-[#2F4A8A]/50 italic font-light">Student concern</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                Jayarani College is dedicated to maintaining a respectful and secure environment. 
                Our Grievance Redressal Cell provides an unbiased platform where academic or 
                personal differences are resolved through peaceful methods and a spirit of 
                <strong> "give and take"</strong>.
              </p>
              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Scale className="text-[#2F4A8A]" size={20} />
                </div>
                <p className="text-sm font-medium text-slate-700 italic">
                  "Any difference among students and staff should be resolved by peaceful methods."
                </p>
              </div>
            </div>

            <div className="bg-[#1A2E5A] p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-10 opacity-5">
                  <FileSearch size={250} />
               </div>
               <h3 className="text-2xl font-bold mb-8 relative z-10">Investigation Protocol</h3>
               <div className="space-y-6 relative z-10">
                  {[
                    "Prompt and unbiased investigations",
                    "Absolute confidentiality for the complainant",
                    "Summary rejection of malicious/anonymous complaints",
                    "Adherence to UGC & Management guidelines"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 size={20} className="text-yellow-400 shrink-0" />
                      <span className="text-blue-50 font-light leading-snug">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REPORTING CHANNELS --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4 uppercase tracking-[0.2em]">Reporting Mechanisms</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mechanisms.map((m, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2F4A8A] transition-colors">
                  <m.icon className="text-[#2F4A8A] group-hover:text-yellow-400" size={28} />
                </div>
                <h4 className="text-lg font-bold text-[#1A2E5A] mb-4">{m.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: QUICK LINKS SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-10 uppercase tracking-[0.2em]">
            Grievance Portal & Committees
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {grievanceLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:bg-blue-50 transition group"
              >
                <span className="text-sm font-bold text-[#1A2E5A]">
                  {item.title}
                </span>
                <ExternalLink className="text-slate-400 group-hover:text-[#2F4A8A]" size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPORTANT WARNING --- */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-red-50 border-2 border-dashed border-red-100 rounded-[2.5rem] p-10 md:p-16">
          <div className="flex flex-col items-center text-center">
            <AlertCircle className="text-red-500 mb-6" size={48} />
            <h3 className="text-2xl font-bold text-red-900 mb-6 uppercase tracking-tighter">Note on Frivolous Complaints</h3>
            <p className="text-red-800/70 font-light leading-relaxed mb-8">
              Any false, frivolous, or anonymous complaints not bearing the student’s name or signature 
              shall be summarily rejected. If a complaint is found to be made with malicious intent, 
              severe disciplinary action will be taken against the complainant.
            </p>
            <div className="bg-white/50 px-6 py-3 rounded-full text-xs font-bold text-red-900 uppercase tracking-widest">
              Policy as per JCS Student Handbook
            </div>
          </div>
        </div>
      </section>

      {/* --- CLOSING CTA --- */}
      <section className="py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-[#1A2E5A] mb-4">Need immediate help?</h3>
          <p className="text-slate-500 mb-8 text-sm">Our mentors and grievance officers are available during college hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
             <button className="bg-[#2F4A8A] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#1A2E5A] transition-all">
               Email the Principal
             </button>
             <button className="border border-slate-200 text-slate-700 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
               Cell Convener Details
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}