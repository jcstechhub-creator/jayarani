"use client";

import React, { useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  ShieldCheck, 
  Leaf, 
  Monitor, 
  Settings, 
  Briefcase, 
  Users, 
  FileText,
  ArrowRight,
  Download,
  Info
} from "lucide-react";
import { pageImages } from "@/data/image";

export default function IQACPolicies() {

    const [open, setOpen] = useState(false);

  const policies = [
    {
      title: "Consultancy Policy",
      category: "Research & Development",
      desc: "Framework for the Knowledge Transfer Centre, outlining how faculty and students collaborate with the community and industry through specialized resources.",
      icon: Briefcase,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Green Policy",
      category: "Environment",
      desc: "Commitment to a sustainable campus through rainwater harvesting, waste management, and energy-efficient practices like LED lighting and solar grids.",
      icon: Leaf,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "IT & Wi-Fi Policy",
      category: "Infrastructure",
      desc: "Guidelines for the responsible use of IT resources, official websites, and administrative portals to ensure integrity and performance of digital systems.",
      icon: Monitor,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "E-Governance Policy",
      category: "Administration",
      desc: "The roadmap for paperless administration and transparency using ERP systems for admission, feedback, and communication across all levels.",
      icon: Settings,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Disabled-Friendly Policy",
      category: "Inclusion",
      desc: "Ensuring an inclusive environment for Divyangjan students with specialized facilities like ramps, handrails, and scribe assistance during examinations.",
      icon: Users,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Zero Tolerance Policy",
      category: "Ethics",
      desc: "A strict mandate against misconduct, discrimination, and harassment, supported by the Anti-Ragging and Grievance Redressal Cells.",
      icon: ShieldCheck,
      color: "bg-red-50 text-red-600"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Institutional Policies"
        subtitle="The regulatory framework guiding the quality and ethical standards of Jayarani College."
        breadcrumb="Home / IQAC / Policies"
        // image="/newgirlimages/image-90.jpeg"
        // image="/banner/banner4.jpeg"
        
                image = { pageImages.adminSecretary}
      />

      {/* --- PREAMBLE SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Quality Assurance</span>
              <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Standardizing <br />
                <span className="text-[#2F4A8A]/50 italic font-light">Excellence & Integrity</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                The Internal Quality Assurance Cell (IQAC) of Jayarani College has formulated 
                comprehensive policies to ensure transparency, accountability, and sustainable 
                growth. These guidelines serve as the foundation for our daily academic and 
                administrative operations.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                 <Info className="text-[#2F4A8A] shrink-0" size={24} />
                 <p className="text-sm text-slate-500 italic">
                   "Policies are reviewed every three years or as needed to maintain alignment 
                   with University and UGC regulations."
                 </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] rotate-3" />
              <div className="relative bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-6">Policy Governance</h4>
                <div className="space-y-4">
                  {[
                    "Strict adherence to Periyar University norms",
                    "Alignment with NAAC quality indicators",
                    "Stakeholder-inclusive policy drafting",
                    "Digital archiving and easy accessibility"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- POLICY GRID --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, i) => (
              <div 
                key={i} 
                className="group bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-[#2F4A8A]/20 hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${policy.color}`}>
                  <policy.icon size={28} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {policy.category}
                </span>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">{policy.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light mb-8 flex-grow">
                  {policy.desc}
                </p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                   <button 
        onClick={() => setOpen(true)} className="flex cursor-pointer items-center gap-2 text-xs font-bold text-[#2F4A8A] uppercase tracking-widest group-hover:gap-4 transition-all">
                      Read Policy <ArrowRight size={14} />
                   </button>
                   <button className="p-2 text-slate-300 hover:text-[#2F4A8A] transition-colors">
                      <Download size={18} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATUTORY ARCHIVE CTA --- */}
      <section className="py-24 text-center px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FileText className="mx-auto text-slate-100 mb-8" size={80} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Complete Statutory Archive</h3>
          <p className="text-slate-500 font-light mb-10 leading-relaxed">
            All institutional policies are authorized by the College Principal and the IQAC Coordinator. 
            For signed copies or past amendments, please visit the Internal Quality Assurance Cell office.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button
        onClick={() => setOpen(true)}
        className="bg-[#1A2E5A] cursor-pointer text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all"
      >
        View Full Repository
      </button>
             <button className="border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
               IQAC Handbook 2024-25
             </button>
          </div>
        </div>
      </section>



      {/* Modal Viewer */}
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
              src="https://drive.google.com/file/d/1V8T8R0J93BeYkpCZubGz-mPZMFaUDsHh/preview"
              className="w-full h-full"
              allow="autoplay"
            ></iframe>

          </div>
        </div>
      )}
    </main>
  );
}