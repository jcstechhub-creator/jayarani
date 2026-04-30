"use client";

import React, { useState } from "react";
// import PageHeader from "@/components/PageHeader";
import { Calendar, Search, Filter, Clock, GraduationCap, AlertTriangle } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";

const AcademicCalendarPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMonth, setActiveMonth] = useState("All");

  // Data extracted from the 2026-2027 Academic Calendar 
  const academicEvents = [
    { date: "2026-06-08", day: "MON", event: "College Reopens for the Academic Year 2026-27", type: "Academic" },
    { date: "2026-06-15", day: "MON", event: "Classes Commence for First Year Students & Freshers Day", type: "Academic" },
    { date: "2026-07-21", day: "TUE", event: "I CIA Exams Begin (Optional)", type: "Examination" },
    { date: "2026-07-24", day: "FRI", event: "I CIA Exams End", type: "Examination" },
    { date: "2026-08-15", day: "SAT", event: "Independence Day & Assumption of the Blessed Virgin Mary", type: "Holiday" },
    { date: "2026-09-15", day: "TUE", event: "II CIA Exams Begin", type: "Examination" },
    { date: "2026-10-06", day: "TUE", event: "Model Semester Exams Begin", type: "Examination" },
    { date: "2026-10-26", day: "MON", event: "Commencement of Semester Theory Examinations", type: "Examination" },
    { date: "2026-12-02", day: "WED", event: "College Reopens for Even Semester", type: "Academic" },
    { date: "2027-02-01", day: "MON", event: "I CIA Exams (Even Semester) Begin", type: "Examination" },
    { date: "2027-03-12", day: "FRI", event: "Graduation Day & Alumni Meet 2026", type: "Academic" },
    { date: "2027-03-15", day: "MON", event: "II CIA Exams (Even Semester) Begin", type: "Examination" },
    { date: "2027-04-06", day: "TUE", event: "Model Exams Begin", type: "Examination" },
    { date: "2027-04-26", day: "MON", event: "Commencement of Semester Theory Examinations", type: "Examination" }
  ];

  const filteredEvents = academicEvents.filter(item =>
    item.event.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader
        title="Academic Calendar"
        subtitle="2026 - 2027 Schedule of Events, Examinations, and Holidays."
        breadcrumb="Home / Academics / Calendar"
        // image="/newgirlimages/image-80.jpeg"
        image="/banner/banner4.jpeg"
      />

      <div className="max-w-7xl mx-auto px-6 mt-12 space-y-8">

        {/* Important Examination Policy Alert */}
        <div className="bg-red-50 border-l-4 border-red-900 p-6 rounded-2xl shadow-sm flex gap-4">
          <AlertTriangle className="text-red-900 shrink-0" size={24} />
          <div>
            <h4 className="font-bold text-red-900">Examination Policy Notice</h4>
            <p className="text-sm text-red-800/80 leading-relaxed">
              80% attendance is a pre-requisite for writing Semester Exams and receiving Scholarships.
              Continuous Internal Assessment (CIA) accounts for 25 marks[cite: 3325].
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search events (e.g., CIA, Holiday)..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#2F4A8A] transition"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {["All", "Academic", "Examination", "Holiday"].map(type => (
              <button
                key={type}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition bg-slate-100 text-slate-600 hover:bg-[#2F4A8A] hover:text-white"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline View  */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Events List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredEvents.map((event, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition group flex items-center gap-6">
                <div className="text-center w-20 shrink-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{event.day}</p>
                  <p className="text-2xl font-black text-[#2F4A8A]">{event.date.split('-')[2]}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
                </div>
                <div className="h-12 w-px bg-slate-100" />
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded ${event.type === 'Examination' ? 'bg-red-50 text-red-900' :
                    event.type === 'Holiday' ? 'bg-green-50 text-green-900' : 'bg-blue-50 text-blue-900'
                    }`}>
                    {event.type}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mt-1">{event.event}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Side Info Cards */}
          <div className="space-y-6">
            {/* Working Hours Card  */}
            <div className="bg-[#2F4A8A] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <Clock className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5" />
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Clock size={20} /> Working Hours
                </h4>
                <p className="text-blue-100 text-3xl font-black mb-2">09:00 AM</p>
                <p className="text-blue-200 font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-4 mb-4">To 03:30 PM</p>
                <p className="text-sm text-blue-100 italic">"Punctuality and attendance are mandatory for academic progress."</p>
              </div>
            </div>

            {/* CIA Weightage Card [cite: 3330] */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 tracking-tight">
                <GraduationCap className="text-red-900" size={20} /> Internal Evaluation
              </h4>
              <div className="space-y-4">
                {[
                  { label: "CIA Tests (Avg of 2)", val: "15 Marks" },
                  { label: "Attendance", val: "5 Marks" },
                  { label: "Assignment/Quiz", val: "5 Marks" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="font-bold text-[#2F4A8A]">{item.val}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Total Internal</span>
                  <span className="font-black text-[#2F4A8A]">25 Marks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarPage;