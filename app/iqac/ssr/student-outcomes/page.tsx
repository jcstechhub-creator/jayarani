"use client";

import React from 'react';
import { 
  GraduationCap, Briefcase, TrendingUp, Trophy, 
  Star, ClipboardList, UserCheck, Lightbulb, Medal 
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const StudentOutcomes = () => {
  const primaryOutcomes = [
    {
      id: "8.1",
      title: "Placement & Employment",
      desc: "Graduates secured in professional roles across corporate, public, and social sectors.",
      icon: <Briefcase className="text-blue-600" />
    },
    {
      id: "8.2",
      title: "Academic Progression",
      desc: "Alumni pursuing post-graduation and doctoral research at premier global institutions.",
      icon: <TrendingUp className="text-green-600" />
    },
    {
      id: "8.3",
      title: "Entrepreneurship",
      desc: "Success stories of students establishing self-employment units and startups.",
      icon: <Lightbulb className="text-amber-500" />
    },
    {
      id: "8.4",
      title: "Competitive Exams",
      desc: "Students qualifying in National/State level exams (NET, SLET, GATE, Civil Services).",
      icon: <UserCheck className="text-purple-600" />
    },
    {
      id: "8.6",
      title: "Enrolment Ratio",
      desc: "Maintaining a high demand ratio and inclusive admission across all departments.",
      icon: <Users className="text-cyan-600" />
    },
    {
      id: "8.7",
      title: "Graduation Rate",
      desc: "The high success ratio of students completing their degrees within the stipulated time.",
      icon: <GraduationCap className="text-indigo-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Student Success & Outcomes"
        subtitle="Tracking institutional impact through graduation excellence, professional placements, and lifelong alumni success."
        breadcrumb="Home / Quality / Student-Outcomes"
        image={pageImages.adminSecretary}
      />
   
      <main className="max-w-7xl mx-auto py-16 px-6">
        {/* Metric Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            Outcome Attribute 08 | SSR Compliance 2026
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Institutional Impact Metrics</h2>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Outcome Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primaryOutcomes.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">{item.icon}</div>
                <span className="text-[10px] font-mono font-bold text-slate-300">METRIC {item.id}</span>
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Extended Success Indicators: Awards & Experience */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          
          {/* Awards Block (Metric 8.5) */}
          <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <Medal className="text-amber-500 mr-3 w-8 h-8" />
                <h2 className="text-2xl font-bold text-slate-800">Awards & Recognitions (8.5)</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-xl">
                Jayarani College celebrates student excellence in both <strong>Curricular</strong> and 
                <strong> Extended-curricular</strong> areas. Our students consistently secure top 
                ranks and medals at Inter-University, State, and National levels.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Academic Ranks", "Cultural Laurels", "Sports Medals", "Community Service Awards"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Trophy className="absolute -right-10 -bottom-10 w-64 h-64 text-slate-50 opacity-50" />
          </div>

          {/* Learning Experience Survey Block (Metric 8.8) */}
          <div className="bg-indigo-900 text-white p-10 rounded-[3rem] flex flex-col justify-between shadow-2xl shadow-indigo-200">
            <div>
              <div className="flex items-center mb-6">
                <Star className="text-amber-400 mr-3 w-8 h-8" />
                <h2 className="text-2xl font-bold">Alumni Experience</h2>
              </div>
              <p className="text-indigo-100 text-sm leading-relaxed mb-8">
                <strong>Metric 8.8:</strong> Systematic Learning Experience Surveys are conducted 
                annually to gauge the impact of our pedagogy on professional career growth 
                and personal development.
              </p>
            </div>
            <button className="w-full py-4 bg-white text-indigo-900 hover:bg-indigo-50 rounded-2xl font-bold text-sm transition-all transform hover:scale-[1.02] shadow-lg">
              Participation Portal
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-center border-t border-slate-200 py-12 bg-white">
        <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase font-bold">
          Outcome Metrics Compliance | Jayarani College © 2026
        </p>
      </footer>
    </div>
  );
};

export default StudentOutcomes;

// Helper to avoid build error if Users is used without import
const Users = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);