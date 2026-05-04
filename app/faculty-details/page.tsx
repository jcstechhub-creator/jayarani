"use client";

import React, { useState } from "react";
import { GraduationCap, ShieldCheck, Award, BookOpen, UserCheck, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { pageImages } from "@/data/image";
// import PageHeader from "../components/PageHeader";

const FacultyDetailsPremium = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const facultyData = [
    { id: 1, name: "Dr. Sr. A. Jothi Mary", qual: "M.Com., M.Ed., M.Phil., Ph.D.", desig: "Secretary", dept: "Administration", honors: "FIHM Management" },
    { id: 2, name: "Dr. Sr. A. Jenitta", qual: "M.E., Ph.D.", desig: "Principal", dept: "Administration", honors: "Principal I/C" },
    { id: 3, name: "Dr. D. Arul Pon Daniel", qual: "MCA, MBA, Ph.D., BCS", desig: "Vice Principal & Asst. Professor", dept: "Computer Science", honors: "IQAC Coordinator" },
    { id: 4, name: "Ms. M. Syedalifathima", qual: "M.Sc., M.Phil.", desig: "Asst. Professor & Head", dept: "Computer Science", honors: "NIRF & AISHE Coordinator" },
    { id: 5, name: "Ms. C. Sariga", qual: "MCA., M.Phil.", desig: "Asst. Professor", dept: "Computer Science", honors: "JCS Tech Hub" },
    { id: 6, name: "Ms. A. Ancy Buela", qual: "MCA", desig: "Asst. Professor", dept: "Computer Science", honors: "MOOC Programmes" },
    { id: 7, name: "Dr. N. Shanthi", qual: "M.Com., M.Phil., Ph.D., NET", desig: "Asst. Professor & Head", dept: "Commerce", honors: "Senior Faculty" },
    { id: 8, name: "Ms. S. Sathya", qual: "M.Com., M.Phil.", desig: "Asst. Professor", dept: "Commerce", honors: "Dean of Students" },
    { id: 9, name: "Ms. M. Jothilakshmi", qual: "M.Com., M.Phil., B.Ed.", desig: "Asst. Professor", dept: "Commerce", honors: "Scholarship Coordinator" },
    { id: 10, name: "Ms. S. Karthika", qual: "M.Com., B.Ed.", desig: "Asst. Professor", dept: "Commerce", honors: "Placement Cell" },
    { id: 11, name: "Ms. R. Kalaivani", qual: "M.Com.", desig: "Asst. Professor", dept: "Commerce", honors: "Dept. Coordinator" },
    { id: 12, name: "Dr. C. Bavithra", qual: "M.Sc., M.Phil., Ph.D.", desig: "Asst. Professor & Head", dept: "Mathematics", honors: "Public Relations Officer" },
    { id: 13, name: "Ms. T. Poornima", qual: "M.Sc., M.Phil.", desig: "Asst. Professor", dept: "Mathematics", honors: "NAAC Coordinator" },
    { id: 14, name: "Ms. N. Sabana Banu", qual: "M.Sc., M.Phil.", desig: "Asst. Professor", dept: "Mathematics", honors: "Science Club" },
    { id: 15, name: "Dr. S. Vimala", qual: "M.A., M.Phil, NET., Ph.D.", desig: "Asst. Professor & Head", dept: "Tamil", honors: "Literary Club" },
    { id: 16, name: "Ms. C. Priyadharshini", qual: "M.A., M.Phil.", desig: "Asst. Professor & Head", dept: "English", honors: "Magazine Editor" },
    { id: 17, name: "Ms. R. Pooja", qual: "M.A.", desig: "Asst. Professor", dept: "English", honors: "Placement Support" },
    { id: 18, name: "Ms. M. Aalees Simron", qual: "M.A.", desig: "Asst. Professor", dept: "English", honors: "Fine Arts" },
    { id: 19, name: "Ms. T. Jagateswari", qual: "M.L.I.S., M.A., M.Phil.", desig: "Librarian", dept: "Support Staff", honors: "Library Head" },
    { id: 20, name: "Mr. A. Victor Emmanuvel", qual: "M.P.Ed.", desig: "Physical Director", dept: "Support Staff", honors: "Sports Day Convener" }
  ];

  const depts = ["All", "Administration", "Computer Science", "Commerce", "Mathematics", "English", "Tamil", "Support Staff"];
  const filtered = activeFilter === "All" ? facultyData : facultyData.filter(f => f.dept === activeFilter);

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-32">
<PageHeader
  title="Faculty Details"
  subtitle="Meet our dedicated and experienced faculty members who are committed to delivering quality education and guiding students toward success."
  breadcrumb="Home / Academics / Faculty"
  image={pageImages.genericPage}
/>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 border-y border-slate-200 mt-20 mb-20 divide-x divide-slate-200">
          {[
            { label: "Faculty Members", val: "20" },
            { label: "Academic Years", val: "2026-27" },
            { label: "Institutional Award", val: "RAMS 2025" },
            { label: "Legacy", val: "180 Years" }
          ].map((s, i) => (
            <div key={i} className="p-10 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{s.label}</p>
              <p className="text-2xl font-serif italic text-[#2F4A8A]">{s.val}</p>
            </div>
          ))}
        </div>

        {/* Professional Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-serif text-slate-900">Academic Directory</h2>
            <p className="text-slate-500 text-sm italic mt-1">Organized by specialization and administrative responsibility.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {depts.map(d => (
              <button 
                key={d}
                onClick={() => setActiveFilter(d)}
                className={`px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-all rounded-full border ${
                  activeFilter === d 
                  ? "bg-[#2F4A8A] text-white border-[#2F4A8A] shadow-xl shadow-blue-900/20" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Text-Centric Faculty Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between border-t-4 border-t-[#2F4A8A]">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                   <div className={`p-3 rounded-xl ${item.dept === 'Administration' ? 'bg-red-50 text-red-900' : 'bg-blue-50 text-[#2F4A8A]'}`}>
                      {item.dept === 'Administration' ? <ShieldCheck size={20} /> : <BookOpen size={20} />}
                   </div>
                   <span className="px-3 py-1 bg-slate-50 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                      {item.dept}
                   </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#2F4A8A] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#2F4A8A] text-[10px] font-black uppercase tracking-widest mt-1">
                    {item.desig}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50">
                   <p className="text-slate-500 text-xs leading-relaxed italic mb-4">
                      {item.qual}
                   </p>
                   <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                      <Award size={12} className="text-red-900/40" />
                      {item.honors}
                   </div>
                </div>
              </div>

              <div className="mt-8">
                 <button className="text-[10px] font-bold text-[#2F4A8A] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Academic Profile <ArrowUpRight size={14} />
                 </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Legacy Callout[cite: 2, 4] */}
        <div className="mt-40 border-t border-slate-200 pt-20 grid lg:grid-cols-2 gap-20">
           <div className="space-y-6">
              <h2 className="text-5xl font-serif leading-tight text-slate-900">
                A Legacy of <br />
                <span className="italic text-[#2F4A8A]">Scholarly Guidance</span>
              </h2>
              <p className="text-slate-500 leading-loose">
                Established in 2019, Jayarani College for Women is a distinguished institution associated 
                with Periyar University, Salem. Our faculty draw upon a 180-year global mission 
                to nurture visionary leaders and agents of transformative change.
              </p>
           </div>
           <div className="bg-[#2F4A8A] rounded-[3rem] p-12 text-white flex flex-col justify-between shadow-3xl relative overflow-hidden">
              <GraduationCap size={48} className="text-white/20 mb-12" />
              <div className="relative z-10">
                 <p className="text-2xl font-serif italic mb-8">
                   "We prepare graduates to emerge not only as proficient professionals but as conscientious citizens."
                 </p>
                 <a href="mailto:jayaranicollegesalem@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2F4A8A] rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-red-50 transition-all">
                    Contact Academic Office <ArrowUpRight size={16} />
                 </a>
              </div>
              {/* Subtle background icon */}
              <UserCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 -rotate-12" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetailsPremium;