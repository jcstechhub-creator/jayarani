import React from 'react';
import { GraduationCap, Briefcase, TrendingUp, Trophy, Star, ClipboardList } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';

const StudentOutcomes = () => {
  const primaryOutcomes = [
    {
      id: "8.1",
      title: "Placement & Employment",
      desc: "Percentage of graduates securing professional roles in diverse sectors.",
      icon: <Briefcase className="text-blue-600" />
    },
    {
      id: "8.2",
      title: "Academic Progression",
      desc: "Track record of students pursuing higher education at premier institutions.",
      icon: <TrendingUp className="text-green-600" />
    },
    {
      id: "8.7",
      title: "Graduation Rate",
      desc: "The success ratio of students completing their degrees against total enrollment.",
      icon: <GraduationCap className="text-indigo-600" />
    },
    {
      id: "8.8",
      title: "Alumni Experience",
      desc: "Comprehensive surveys measuring long-term learning and career success.",
      icon: <Star className="text-amber-500" />
    }
  ];

  return (
    <>
    <PageHeader
  title="Student Success & Outcomes"
  subtitle="Measuring institutional impact through graduation rates, professional placements, and lifelong learning—aligned with the 75% NAAC weightage for Process and Outcomes."
  breadcrumb="Home / Quality / Student-Outcomes"
  // Using an image that reflects professional graduation, success, and career transition
  // image="/newgirlimages/image-30.jpeg" 
  image="/banner/banner4.jpeg"
/>
   
    <div className="bg-slate-50 min-h-screen p-8 font-sans">
      {/* Dynamic Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
          Outcome Attribute 08 | March 2024 Framework
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Student Success & Outcomes</h1>
        <p className="text-slate-500 max-w-2xl mx-auto italic">
          "Measuring the institutional impact on student graduation, career progression, 
          and life-long learning experiences."
        </p>
      </div>

      {/* Outcome Statistics Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {primaryOutcomes.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">{item.icon}</div>
              <span className="text-[10px] font-mono font-bold text-slate-300">METRIC {item.id}</span>
            </div>
            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Extended Success Indicators */}
      <div className="max-w-6xl mx-auto mt-12 grid lg:grid-cols-3 gap-8">
        
        {/* Entrepreneurship Block */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex items-center mb-8">
            <Trophy className="text-blue-900 mr-3 w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-800">Competitive Excellence</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-blue-600 text-sm uppercase tracking-wide">Career & Exams (8.3 & 8.4)</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Documentation of students qualifying in competitive exams and establishing 
                self-employment ventures or entrepreneurship units.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-blue-600 text-sm uppercase tracking-wide">Awards & Prizes (8.5)</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Recognition in curricular and extended-curricular activities at 
                State, National, and International levels.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Experience Survey Block */}
        <div className="bg-indigo-900 text-white p-10 rounded-[3rem] flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-6">
              <ClipboardList className="text-blue-300 mr-3 w-6 h-6" />
              <h2 className="text-2xl font-bold">Feedback Loop</h2>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed mb-8">
              Systematic Learning Experience Surveys (Metric 8.8) are conducted with current 
              students and alumni to ensure continuous quality improvement.
            </p>
          </div>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-sm transition-colors uppercase tracking-widest">
            Participate in Survey
          </button>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <footer className="mt-20 text-center border-t border-slate-200 pt-8">
        <p className="text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium">
          Outcome Metrics Compliance | Jayarani College SSR 2026
        </p>
      </footer>
    </div>
     </>
  );
};

export default StudentOutcomes;