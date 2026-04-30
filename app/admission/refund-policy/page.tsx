"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  Scale, 
  Clock, 
  AlertCircle, 
  FileText, 
  CheckCircle2,
  CalendarDays,
  HelpCircle,
  ArrowDownToLine,
  ShieldCheck
} from "lucide-react";
import { pageImages } from "@/data/image";

export default function FeeRefundPolicy() {
  // Synchronized with UGC 2025-26 Guidelines from PDF  
  const refundSchedule = [
    { period: "15 days or more before the formally notified last date of admission", refund: "100%", status: "Full Refund*" },
    { period: "Less than 15 days before the formally notified last date of admission", refund: "90%", status: "Minor Deduction" },
    { period: "Within 15 days after the formally notified last date of admission", refund: "80%", status: "Partial Deduction" },
    { period: "15 days to 30 days after the formally notified last date of admission", refund: "50%", status: "Heavy Deduction" },
    { period: "More than 30 days after the formally notified last date of admission", refund: "0%", status: "No Refund" },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="UGC Fee Refund Policy"
        subtitle="Standardized guidelines for academic session 2025-26 as per University Grants Commission norms."
        breadcrumb="Home / Admission / Refund Policy"
        // image="/newgirlimages/image-2.jpeg"
        // image="/banner/banner4.jpeg"
          image={pageImages.adminSecretary}
      />

      {/* --- REGULATORY ALIGNMENT --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">UGC Compliance 2025-26</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Academic Session <br />
                <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Refund Guidelines</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light mb-8">
                <p>
                  In accordance with the <strong>University Grants Commission (UGC)</strong> guidelines for the academic session 2025-26, Jayarani College follows a strict transparency protocol for fee reimbursements.
                </p>
                <p className="text-base">
                  These rules apply to all recognized programs and ensure that student withdrawals are handled with standardized financial fairness.
                </p>
              </div>
              <div className="flex items-center gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <ShieldCheck className="text-[#2F4A8A] shrink-0" size={24} />
                <p className="text-sm font-medium text-slate-700 italic">
                  "Institutional compliance with UGC 2018/2024-25 regulations is mandatory." 
                </p>
              </div>
            </div>

            <div className="bg-[#1A2E5A] p-10 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
               <Clock className="absolute -bottom-10 -right-10 text-white/5" size={250} />
               <h3 className="text-2xl font-bold mb-6 relative z-10">Key Policy Highlights</h3>
               <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-[#1A2E5A]" size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Zero Cancellation Fee*</p>
                        <p className="text-xs text-blue-100/70 mt-1">Full refund for cancellations made up to 30 September 2025.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-blue-400 flex items-center justify-center shrink-0">
                        <Scale className="text-white" size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Processing Fee Cap</p>
                        <p className="text-xs text-blue-100/70 mt-1">Maximum deduction of ₹1,000 as a processing charge for early withdrawals.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-red-400 flex items-center justify-center shrink-0">
                        <AlertCircle className="text-white" size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Late Withdrawal</p>
                        <p className="text-xs text-blue-100/70 mt-1">Cancellations after 31 October 2025 follow the UGC 2018 regulation norms.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REFUND PERCENTAGE TABLE --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2 block">Standardized Schedule</span>
            <h3 className="text-3xl font-bold text-[#1A2E5A] mb-4">Refund Percentage Table</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Notice Period</th>
                  <th className="p-8 text-xs font-bold text-[#2F4A8A] uppercase tracking-widest text-center">Refund Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {refundSchedule.map((item, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="p-8 text-sm font-medium text-slate-600 group-hover:text-[#1A2E5A] transition-colors leading-relaxed">
                      {item.period}
                    </td>
                    <td className="p-8 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`inline-block px-5 py-2 rounded-full font-black text-sm tracking-widest ${item.refund === '0%' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>
                          {item.refund}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{item.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-8 bg-red-50 rounded-[2rem] border border-red-100 flex gap-6 items-center">
             <AlertCircle className="text-red-600 shrink-0 hidden md:block" size={32} />
             <div>
                <p className="text-xs text-red-900 leading-relaxed font-bold uppercase tracking-widest mb-1">Important Statutory Note</p>
                <p className="text-sm text-red-800/80 font-light italic">
                  Violations of this refund policy may attract punitive actions from the UGC against the institution. All timelines are calculated from the formally notified last date of admission.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- FORMAL WITHDRAWAL PROCESS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Formal Withdrawal Terms</h3>
            <p className="text-slate-400 text-sm mt-2">Compliance steps for students and parents</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <FileText className="text-[#2F4A8A] shrink-0" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  A formal written application for withdrawal must be submitted to the Principal's office.
                </p>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <CalendarDays className="text-[#2F4A8A] shrink-0" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Refund eligibility is strictly determined by the date of receipt of the formal notice.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <Scale className="text-[#2F4A8A] shrink-0" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  The institution shall deduct a maximum of ₹1,000 as processing charges from the 100% refund tier.
                </p>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <HelpCircle className="text-[#2F4A8A] shrink-0" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cancellations occurring more than 30 days after the admission deadline result in 0% reimbursement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <HelpCircle className="mx-auto text-slate-200 mb-8" size={64} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Need Assistance with Withdrawal?</h3>
          <p className="text-slate-500 font-light mb-10 leading-relaxed">
            For queries regarding the refund process or to check the status of your application, 
            please contact the Office of the Treasurer or visit the administrative block.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
              Contact Registrar
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
              <ArrowDownToLine size={16} /> Download Refund Form
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}