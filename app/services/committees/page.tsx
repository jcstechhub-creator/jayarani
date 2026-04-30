"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { 
  ShieldAlert, 
  Scale, 
  Users, 
  Gavel, 
  ClipboardCheck, 
  HeartHandshake,
  CheckCircle2,
  FileText
} from "lucide-react";

export default function CommitteesPage() {
  const committees = [
    {
      name: "Anti-Ragging Committee",
      id: "arc",
      icon: ShieldAlert,
      color: "border-t-red-500",
      head: "Principal (Chairperson)",
      desc: "Following the Hon'ble Supreme Court judgment, this committee monitors and takes immediate action to prevent ragging, ensuring a safe haven for freshers.",
      points: [
        "Surprise inspections at hostels and canteens",
        "Collection of anti-ragging undertakings",
        "Sensitization meetings with police officials",
        "Zero-tolerance implementation of UGC 2009 regulations"
      ]
    },
    {
      name: "Discipline Committee",
      id: "dc",
      icon: Gavel,
      color: "border-t-[#2F4A8A]",
      head: "Vice President & HODs",
      desc: "Maintaining the moral fabric of the institution by enforcing the Code of Ethics for students and staff on and off campus.",
      points: [
        "Monitoring student conduct and behavior",
        "Enforcing campus dress code and punctuality",
        "Inquiry into disciplinary violations",
        "Upholding the canons of good behavior"
      ]
    },
    {
      name: "Grievance Redressal Cell",
      id: "grc",
      icon: Scale,
      color: "border-t-yellow-500",
      head: "Senior Faculty Members",
      desc: "A transparent mechanism for students and staff to voice concerns. Requests and complaints are resolved with a spirit of 'give and take'.",
      points: [
        "Management of physical complaint/suggestion boxes",
        "Unbiased investigation of reported issues",
        "Mediation between students and departments",
        "Ensuring prompt resolution of concerns"
      ]
    },
    {
      name: "Internal Complaints Committee",
      id: "icc",
      icon: HeartHandshake,
      color: "border-t-green-500",
      head: "Presiding Officer",
      desc: "Dedicated to gender sensitization and ensuring a workplace/campus free from harassment and discrimination.",
      points: [
        "Prevention of gender-based discrimination",
        "Organizing gender awareness workshops",
        "Safe and confidential reporting mechanism",
        "Adhering to Supreme Court 'POSH' guidelines"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Institutional Committees"
        subtitle="The statutory bodies ensuring safety, discipline, and fair governance at Jayarani College."
        breadcrumb="Home / Services / Committees"
        // image="/newgirlimages/image-68.jpeg"
        image="/banner/banner4.jpeg"
      />

      {/* --- STATUTORY MANDATE SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Commitment</span>
              <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Governance through <br />
                <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Vigilance & Ethics</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Jayarani Arts & Science College for Women strictly adheres to the regulations of the UGC 
                and the directives of the Hon'ble Supreme Court. Our committees are active, 
                impartial, and committed to maintaining a "Zero-Tolerance" campus.
              </p>
            </div>
            <div className="bg-[#2F4A8A] p-10 rounded-[2.5rem] text-white relative overflow-hidden">
               <ClipboardCheck className="absolute -bottom-10 -right-10 text-white/5" size={240} />
               <h3 className="text-xl font-bold mb-6">Committee Functions</h3>
               <div className="space-y-4 relative z-10">
                  {[
                    "Regular statutory meetings and reporting",
                    "Immediate response to formal complaints",
                    "Surprise inspections across vital points",
                    "Adherence to TN Anti-Ragging Act"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-yellow-400" />
                      <span className="text-sm font-medium opacity-90">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMMITTEES GRID --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {committees.map((committee, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-3xl p-10 border-t-8 ${committee.color} shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#2F4A8A] transition-colors">
                    <committee.icon className="text-[#2F4A8A] group-hover:text-yellow-400" size={28} />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{committee.id}</span>
                </div>
                
                <h4 className="text-2xl font-bold text-[#1A2E5A] mb-2">{committee.name}</h4>
                <p className="text-xs font-bold text-[#2F4A8A] mb-6 uppercase tracking-widest">Chair: {committee.head}</p>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
                  {committee.desc}
                </p>

                <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                  {committee.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-yellow-500 mt-2 shrink-0" />
                      <span className="text-xs text-slate-600 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REPORTING MECHANISM --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto p-12 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
          <FileText className="mx-auto text-slate-200 mb-8" size={64} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Filing a Complaint</h3>
          <p className="text-slate-500 font-light leading-relaxed mb-10">
            Jayarani College ensures total confidentiality for all complaints. Any false or frivolous 
            anonymous complaints without signatures will be rejected, but legitimate concerns will be 
            addressed with urgency and unbiased investigation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#2F4A8A] text-white px-10 py-4 rounded-xl font-bold text-sm tracking-widest hover:bg-[#1A2E5A] transition-all">
              SUBMIT GRIEVANCE ONLINE
            </button>
            <button className="flex items-center gap-2 text-[#2F4A8A] font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-slate-50 rounded-xl transition-all">
              Anti-Ragging Helpline
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}