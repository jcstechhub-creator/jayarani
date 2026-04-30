"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Wallet, 
  PieChart, 
  ShieldCheck, 
  FileSpreadsheet, 
  HandCoins, 
  TrendingUp,
  Receipt,
  Mail
} from "lucide-react";
import { highprofession } from "../../../data/image"; 

export default function TreasurerPage() {
  const financialPillars = [
    {
      title: "Fee Management",
      desc: "Overseeing the structured collection of fees and ensuring a transparent refund policy.",
      icon: Receipt
    },
    {
      title: "Scholarship Disbursement",
      desc: "Managing state and management scholarships to support deserving students.",
      icon: HandCoins
    },
    {
      title: "Budgetary Oversight",
      desc: "Allocating resources effectively for campus infrastructure and academic development.",
      icon: PieChart
    },
    {
      title: "Financial Audits",
      desc: "Conducting regular internal and external audits to maintain absolute fiscal integrity.",
      icon: ShieldCheck
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Treasurer"
        subtitle="Ensuring fiscal transparency and sustainable institutional growth."
        breadcrumb="Home / Administration / Treasurer"
        image={pageImages.adminTreasurer}
        // image={highprofession?.Treasurer}
      />

      {/* --- TREASURER PROFILE --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Identity Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="text-yellow-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Institutional Stewardship</span>
              <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Managing Resources with <br />
                <span className="text-[#2F4A8A]/60 italic font-light">Integrity & Vision</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>
                  "The role of the Treasurer is rooted in the principle of stewardship. Every resource 
                  entrusted to Jayarani College is managed with the utmost transparency to ensure 
                  it directly benefits the academic and personal growth of our students."
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                    <Wallet className="text-[#2F4A8A]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2E5A]">Rev. Sr. Dr. Jothi Mary, FIHM</h4>
                    <p className="text-sm text-slate-400 font-medium">Finance Controller, Jayarani College</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-slate-100 rounded-[2.5rem] -z-10" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-[#2F4A8A] h-64 rounded-2xl flex flex-col justify-end p-6 text-white">
                      <TrendingUp className="mb-4 text-yellow-400" size={32} />
                      <p className="text-xs uppercase tracking-widest font-bold opacity-60">Goal</p>
                      <p className="text-xl font-bold">Sustainable Growth</p>
                    </div>
                    <div className="bg-slate-100 h-40 rounded-2xl flex flex-col justify-end p-6 text-slate-800">
                      <FileSpreadsheet className="mb-4 text-[#2F4A8A]" size={32} />
                      <p className="text-xl font-bold text-[#1A2E5A]">Transparency</p>
                    </div>
                  </div>
                  <div className="pt-12">
                    <img 
                   src={highprofession?.Treasurer} 
                      // src="/newgirlimages/image-39.jpeg" 
                      alt="Financial Management"
                      className="rounded-2xl h-[420px] w-full object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FINANCIAL RESPONSIBILITIES --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4 uppercase tracking-[0.2em]">Key Responsibilities</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialPillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#2F4A8A]/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <pillar.icon className="text-[#2F4A8A]" size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{pillar.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEE OFFICE CTA --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto border-2 border-dashed border-slate-200 rounded-[3rem] p-12">
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Treasurer's Office</h3>
          <p className="text-slate-500 mb-8 font-light">
            For inquiries regarding fee structures, online payments, or scholarship eligibility, 
            please contact the finance department.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:treasurer@jcs.edu.in" className="flex items-center gap-2 text-[#2F4A8A] font-bold">
              <Mail size={18} className="text-yellow-600" /> treasurer@jcs.edu.in
            </a>
            <button className="bg-[#1A2E5A] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-colors">
              Payment Portal
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}