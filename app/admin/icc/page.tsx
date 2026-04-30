"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  ShieldAlert, 
  Gavel, 
  Users, 
  Scale, 
  Mail, 
  AlertTriangle, 
  FileText, 
  Info,
  Clock,
  Heart,
  UserCheck,
  CheckCircle2
} from "lucide-react";

export default function InternalComplaintsCommittee() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Internal Complaints Committee (ICC)"
        subtitle="Ensuring a safe, respectful, and protected environment for all women in our institution."
        breadcrumb="Home / Student Support / ICC"
        image={pageImages.adminIcc}
      />

      {/* --- COMPLIANCE OVERVIEW --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Regulatory Compliance</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Constitutional <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Framework & Functions</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg text-justify">
              <p>
                In compliance with the UGC Regulations, the institution has constituted an Internal Complaints Committee (ICC) to deal with complaints of sexual harassment.
              </p>
              <p>
                The ICC functions as per the principles of natural justice, confidentiality, and fairness. It ensures a time-bound and transparent Redressal mechanism. Any woman employee or student who feels aggrieved can approach the ICC for support.
              </p>
              <div className="p-6 bg-blue-50 border-l-4 border-[#2F4A8A] rounded-r-2xl text-base italic">
                "The Coordinator of the ICC shall receive written complaints of sexual harassment on behalf of the ICC and shall coordinate the ICC's deliberations on the complaints received."
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1A2E5A] mb-6 flex items-center gap-2">
              <ShieldAlert className="text-[#2F4A8A]" /> Committee Procedures
            </h3>
            <div className="grid gap-4">
              {[
                "Upon receipt of a complaint, the ICC shall conduct a preliminary inquiry to ascertain the truth of the allegations by collecting documentary evidence and recording statements.",
                "The ICC shall then submit the preliminary inquiry report to the Principal. If allegations do not constitute sexual harassment, it may be referred to the Grievance Redressal Cell.",
                "When harassment occurs by a third party or outsider, the ICC shall take necessary and reasonable steps to assist the affected person.",
                "The ICC follows procedures prescribed in UGC Regulations 2015 and the Sexual Harassment Act for timely inquiry.",
                "If allegations are found false or malicious, the complainant shall be liable to punishment as per UGC provisions."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                   <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-[#2F4A8A]">{i + 1}</span>
                   </div>
                   <p className="text-sm text-slate-500 font-light">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY & DEFINITION --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
               <UserCheck className="text-[#2F4A8A] mb-6" size={32} />
               <h4 className="text-2xl font-bold text-[#1A2E5A] mb-6">Who can approach for help?</h4>
               <p className="text-slate-600 leading-relaxed font-light mb-8">
                Any female employee (faculty member, student, or non-teaching staff member) of Loyola College of Arts & Science, Mettala, can seek Redressal from the ICC.
               </p>
               <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">Definition of Sexual Harassment</h4>
               <ul className="space-y-4 text-sm text-slate-500">
                  <li className="flex gap-3"><span>a)</span> Physical contact and advances</li>
                  <li className="flex gap-3"><span>b)</span> A demand or request for sexual favours</li>
                  <li className="flex gap-3"><span>c)</span> Making sexually colour remarks (including jokes, text messages, calls etc.)</li>
                  <li className="flex gap-3"><span>d)</span> Showing pornography (books, paintings, films containing ‘indecent representation of women’)</li>
                  <li className="flex gap-3"><span>e)</span> Any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature</li>
               </ul>
            </div>

            <div className="bg-[#1A2E5A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
               <Scale className="absolute -bottom-10 -right-10 text-white/5" size={240} />
               <h4 className="text-2xl font-bold mb-8">Statutory Coverage</h4>
               <p className="text-blue-100/70 font-light mb-8 italic">Under the Act, the following also constitute sexual harassment:</p>
               <div className="space-y-6 relative z-10">
                  {[
                    "Implied or explicit promise of preferential treatment in employment",
                    "Implied or explicit threat of detrimental treatment in employment",
                    "Implied or explicit threat concerning present or future employment status",
                    "Interference with work or creating an intimidating or offensive work environment",
                    "Humiliating treatment likely to affect health or safety"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                      <p className="text-sm font-light text-blue-50">{item}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INQUIRY PROCESS --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Inquiry Process</h3>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: Clock, title: "90 Days", desc: "The inquiry shall be completed within 90 days from the date of the complaint." },
               { icon: FileText, title: "10 Days", desc: "The ICC shall provide a report of findings to the Principal within 10 days of completion." },
               { icon: Gavel, title: "Action", desc: "If proved, the ICC shall recommend punitive actions against the respondent." },
               { icon: Scale, title: "60 Days", desc: "The Principal shall act upon the recommendation within 60 days of receiving it." }
             ].map((item, i) => (
               <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl text-center shadow-sm hover:shadow-lg transition-all group">
                  <item.icon className="mx-auto text-[#2F4A8A] mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h5 className="font-bold text-[#1A2E5A] mb-2">{item.title}</h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CONSEQUENCES SECTION --- */}
      <section className="py-24 bg-[#1A2E5A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Possible Actions against the Accused</h3>
            <p className="text-blue-200/60 font-light mb-10 leading-relaxed">
              Depending on the severity of the case, punitive action may take any of the following forms as per institution regulations.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {["Warning", "Written apology", "Bond of good behavior", "Suspension", "Dismissal", "Stoppage of increments"].map((act, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 text-xs font-medium">
                    <AlertTriangle size={14} className="text-red-500" /> {act}
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10">
            <div className="flex items-center gap-3 text-yellow-400 mb-6 font-bold uppercase tracking-widest text-xs">
              <Info size={16} /> Caveat
            </div>
            <p className="text-lg leading-relaxed font-light text-blue-50 italic">
              "All female faculty members, non-teaching staff, and students must bear in mind that such complaints are of an extremely serious nature and should, under no circumstances, be made frivolously. This platform should not be misused to settle personal scores or for any other non-genuine reason."
            </p>
          </div>
        </div>
      </section>

      {/* --- REPORTING CHANNELS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 shadow-inner grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-[#1A2E5A] mb-6">How to Lodge a Complaint?</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-10">
                Complaints of sexual harassment can be submitted in written form (online/offline) to the ICC. 
                A confidential complaint box and official email ID are made available for easy access. 
                The ICC will acknowledge the complaint and conduct an impartial inquiry.
              </p>
              <div className="p-8 bg-white rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center gap-8 group">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Official Email for Complaints</p>
                  <p className="text-xl font-black text-[#1A2E5A] group-hover:text-[#2F4A8A] transition-colors">principal@jcs.edu.in</p>
                  <p className="text-xs text-red-500 font-medium mt-2">Your complaint will be kept CONFIDENTIAL.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[#1A2E5A] flex items-center gap-2">
                <Heart className="text-red-500" /> Women Empowerment Cell
              </h4>
              <p className="text-sm text-slate-500 font-light italic mb-6">Regularly organizing awareness and outreach programmes:</p>
              <div className="grid gap-3">
                 {[
                   "Workshops on gender sensitization and legal literacy.",
                   "Training sessions on self-defence and safety measures.",
                   "Health and wellness programmes focusing on physical and mental well-being.",
                   "Observance of International Women’s Day and other gender-related events."
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <p className="text-sm text-slate-600 font-medium">{item}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}