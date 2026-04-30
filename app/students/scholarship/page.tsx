"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  HandCoins, 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  Info, 
  Banknote,
  Users2,
  Calendar,
  ExternalLink,
  Download,
  ShieldCheck,
  ClipboardList,
  ArrowRight,
  AlertCircle
} from "lucide-react";

export default function ScholarshipPage() {
  const scholarshipTypes = [
    {
      title: "Management Scholarship",
      desc: " Various Management scholarships are available to perume their studies. The deserving students are benefiting from the scholarships.",
      icon: HandCoins,
      reqs: ["College Office Application", "Management Review", "Deserving Student Verification"]
    },
    {
      title: "Non-Government Scholarship",
      desc: "Integrated Village Development Project (IVDP), Krishnagiri - HIGHER EDUCATION SCHOLARSHIP for Orphan and Semi orphan students. IVDP supports with Rs. 10,000 for orphan students and Rs. 7,500 for semi orphan students. Deserving students are provided a ₹5,000 scholarship by the Dr. A.P.J. Abdul Kalam Trust",
      icon: Users2,
      reqs: ["Orphan/Semi-orphan Status", "IVDP Krishnagiri Guidelines", "Higher Education Enrollment"]
    },
    {
      title: "Post Matric Scholarship",
      desc: "State and Central government schemes including BC Minority, SC, ST, SCC (Converted Christian) Community scholarships, and the Pudhumai Penn Scheme.",
      icon: Banknote,
      reqs: ["Online Portal Registration", "Community Certificate", "Income Certificate"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Scholarships & Financial Aid"
        subtitle="Empowering every student to pursue their dreams through financial support and merit awards."
        breadcrumb="Home / Student Support / Scholarship"
        image={pageImages.studentsScholarship}
      />

      {/* --- RULES & DISBURSEMENT SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">College Regulations</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Application & <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Disbursement Rules</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Those who wish to apply for, or renew scholarship can have the application forms from the College Office. 
                Duly filled in application should reach the College Office on or before the due date.
              </p>
              <p>
                Scholarship will be disbursed to students only after the amount is sent to the Principal by the Government. 
                Students should sign the register on receipt of the scholarship.
              </p>
              <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100">
                <div className="flex gap-4">
                  <AlertCircle className="text-amber-600 shrink-0" size={24} />
                  <div className="text-sm text-amber-900 font-medium leading-relaxed">
                    <p className="mb-2">All money due to the College will be recovered from the scholarship amount at the time of disbursement.</p>
                    <p>Intimation will be sent to parents and the balance amount if any, will be disbursed only after reply is received from them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1A2E5A] p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <ShieldCheck className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            <h3 className="text-2xl font-bold mb-8">Banking Policy</h3>
            <p className="text-blue-100/70 font-light mb-8 leading-relaxed">
              As per the present rules and regulations of the Government, each scholarship holder is expected to open a 
              saving account in a national bank, wherein the amount will be credited directly by the Government.
            </p>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-yellow-400" size={18} />
                <span className="text-sm">Nationalized Bank Savings Account</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-yellow-400" size={18} />
                <span className="text-sm">Direct Credit by Government</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCHOLARSHIP CARDS --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {scholarshipTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                  <type.icon className="text-[#2F4A8A]" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">{type.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                  {type.desc}
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Core Conditions</p>
                  <div className="space-y-2">
                    {type.reqs.map((req, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                        <span className="text-xs font-medium text-slate-600">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY CONDITIONS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Eligibility Conditions for Scholarships</h3>
            <p className="text-slate-500 mt-2">Detailed criteria for Government and Minority Schemes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3rem] border border-slate-100 bg-white shadow-sm hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-[#1A2E5A] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <GraduationCap size={20} className="text-[#2F4A8A]" />
                </div>
                1. SC, ST, SCC (Converted Christian)
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" /> Students belong to SC, ST, SCC community is Eligible for Apply the Scholarship.</li>
                <li className="flex gap-3"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" /> All UG, PG, M.Phil, and Ph.D., Students are Eligible to Apply for this Scholarship.</li>
                <li className="flex gap-3"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" /> Annual Income ceiling is Rs.2,50,000/- (Rupees Two Lakhs and Fifty Thousand only) for PG courses.</li>
                <li className="flex gap-3"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" /> <strong>No income limit for all UG courses.</strong></li>
              </ul>
            </div>
            <div className="p-10 rounded-[3rem] border border-slate-100 bg-white shadow-sm hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-[#1A2E5A] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Users2 size={20} className="text-[#2F4A8A]" />
                </div>
                2. Post Matric Minority Scholarship
              </h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" /> Muslims, Sikhs, Christians, Buddhists, Jain and Zoroastrians (Parsis) can apply this Scholarship.</li>
                <li className="flex gap-3"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" /> All UG, PG, M.Phil, and Ph.D., Students are eligible to apply for this Scholarship.</li>
                <li className="flex gap-3"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" /> Students Secured Minimum 50% Marks or Equivalent Grade in the Previous Year Final Examination.</li>
                <li className="flex gap-3"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" /> Annual Income ceiling is Rs.2,00,000/- (Rupees Two Lakhs only).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIST OF DOCUMENTS --- */}
      <section className="py-24 bg-[#1A2E5A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">LIST OF DOCUMENTS</h3>
              <p className="text-blue-200/60 max-w-xl">The following documents required for all types of Government scholarships</p>
            </div>
            <ClipboardList size={60} className="text-white/10 hidden md:block" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Fresh Application */}
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
              <h5 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" /> Fresh Scholarship Application
              </h5>
              <div className="grid grid-cols-1 gap-y-4">
                {[
                  "Income Certificate (Current Year Income Proof Only)", "Community Certificate Copy", "Aadhar Card Copy",
                  "Ration Card Copy", "Student Bank Account Book Copy", "10th and 12th Mark Sheet Copy",
                  "College Fee Receipt Copy", "Previous Year Attendance Certificate (Original)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-sm text-blue-50/80">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Renewal Application */}
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
              <h5 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" /> Renewal Scholarship Application
              </h5>
              <div className="grid grid-cols-1 gap-y-4">
                {[
                  "Community Certificate Copy", "Aadhar Card Copy", "Ration Card Copy",
                  "Student Bank Account Book Copy", "Previous Semesters Mark Sheet Copy",
                  "College Fee Receipt Copy", "Previous Year Attendance Certificate (Original)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-sm text-blue-50/80">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LINKS & DOWNLOADS --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm">
            <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/30">
                <h3 className="text-2xl font-bold text-[#1A2E5A]">Official Links & Downloads</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Portal Links */}
              <div className="p-8 space-y-3">
                <h6 className="font-bold text-[10px] uppercase text-slate-400 tracking-[0.2em] mb-4">Application Portals</h6>
                <a href="#" className="flex items-center justify-between group p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100">
                  <span className="text-sm font-medium text-slate-700">BC Minority Scholarship</span>
                  <div className="flex items-center gap-2 text-[#2F4A8A] text-[10px] font-bold">Click to apply <ExternalLink size={12} /></div>
                </a>
                <a href="#" className="flex items-center justify-between group p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100">
                  <span className="text-sm font-medium text-slate-700">Pudhumai Penn Scheme</span>
                  <div className="flex items-center gap-2 text-[#2F4A8A] text-[10px] font-bold">Click to apply <ExternalLink size={12} /></div>
                </a>
                <a href="#" className="flex items-center justify-between group p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100">
                  <span className="text-sm font-medium text-slate-700">SC, ST, SCC (2022-2023)</span>
                  <div className="flex items-center gap-2 text-[#2F4A8A] text-[10px] font-bold">Click to apply <ExternalLink size={12} /></div>
                </a>
                <a href="#" className="flex items-center justify-between group p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl transition-all border border-transparent hover:border-blue-100">
                  <span className="text-sm font-medium text-slate-700">SC, ST, SCC (2023-2024)</span>
                  <div className="flex items-center gap-2 text-[#2F4A8A] text-[10px] font-bold">Click to apply <ExternalLink size={12} /></div>
                </a>
              </div>
              
              {/* Guidelines */}
              <div className="p-8 space-y-3">
                <h6 className="font-bold text-[10px] uppercase text-slate-400 tracking-[0.2em] mb-4">Guidelines & Notifications</h6>
                <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-white rounded-2xl transition-all text-sm font-medium group border border-transparent hover:border-slate-200">
                  <span className="flex items-center gap-3"><FileText size={16} className="text-red-500" /> Download Guidelines (PPT)</span>
                  <Download size={14} className="text-slate-400" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-white rounded-2xl transition-all text-sm font-medium group border border-transparent hover:border-slate-200">
                  <span className="flex items-center gap-3"><FileText size={16} className="text-red-500" /> Download Notification</span>
                  <Download size={14} className="text-slate-400" />
                </button>
              </div>

              {/* Application Downloads */}
              <div className="p-8 space-y-3">
                <h6 className="font-bold text-[10px] uppercase text-slate-400 tracking-[0.2em] mb-4">Application Forms</h6>
                <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-white rounded-2xl transition-all text-sm font-medium group border border-transparent hover:border-slate-200">
                  <span className="flex items-center gap-3"><Download size={16} className="text-green-600" /> Freshers (SC, ST, SCC)</span>
                  <FileText size={14} className="text-slate-400" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-white rounded-2xl transition-all text-sm font-medium group border border-transparent hover:border-slate-200">
                  <span className="flex items-center gap-3"><Download size={16} className="text-green-600" /> Renewal (SC, ST, SCC)</span>
                  <FileText size={14} className="text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CONTACT --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-xl mx-auto">
          <Calendar className="mx-auto text-slate-200 mb-8" size={60} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Notice Board</h3>
          <p className="text-slate-500 mb-10 text-sm font-light leading-relaxed">
            Those who wish to apply for, or renew scholarship can have the application forms from the College Office. 
            Duly filled in application should reach the College Office on or before the due date.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#2F4A8A] transition-all shadow-lg">
              ENQUIRE AT COLLEGE OFFICE
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}