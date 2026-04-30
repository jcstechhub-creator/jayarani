import React from 'react';
import PageHeader from '@/app/components/PageHeader'; // Assuming standard project path
import { pageImages } from '@/data/image';
import { DollarSign, Briefcase, GraduationCap, TrendingUp, Award, Star, FileText, Info, Zap } from 'lucide-react';

const EarnWhileLearn = () => {
  // Theme Color Reference:
  // Academic Blue: #1E3A8A 
  // Metric Gold: #F59E0B 
  // Documentation Slate: #475569

  const opportunities = [
    {
      id: "9.8",
      title: "Campus Start-up Units",
      desc: "Student-led micro-enterprises supported by the JCS Tech Hub and Incubation center.",
      icon: <Zap className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "5.5",
      title: "Work-Study Program",
      desc: "Part-time institutional roles in Library, Lab maintenance, and Administrative support.",
      icon: <Briefcase className="w-6 h-6 text-[#1E3A8A]" />
    },
    {
      id: "1.5",
      title: "Skill-Based Earnings",
      desc: "Opportunities in content writing, graphic design, and technical support for college projects.",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />
    },
    {
      id: "6.1",
      title: "EDC Initiatives",
      desc: "Earn through exhibitions, sales of student-made products, and technical consultancy.",
      icon: <DollarSign className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      
      {/* ✅ Corrected Academic PageHeader */}
      <PageHeader 
        title="Earn While You Learn"
        subtitle="Empowering students through financial self-reliance and professional skill integration, fostering a culture of entrepreneurship and inclusive growth."
        breadcrumb="Home / Innovation / EWYL"
        image={pageImages.innovationLearnWhileEarn}
      />

      <main className="max-w-7xl mx-auto py-20 px-6">
        {/* Metric Grid: White & Slate Theme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {opportunities.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-[#F59E0B]/30 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#F59E0B] transition-colors">
                METRIC {item.id}
              </div>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#1A2E5A] text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Impact & Documentation Section: Dark Slate & Gold */}
        <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 text-[#F59E0B] mb-6">
                <GraduationCap className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">Financial Empowerment Metric</span>
              </div>
              <h2 className="text-4xl font-black mb-8 tracking-tight uppercase leading-tight">
                Social <br />Sustainability
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed italic border-l-4 border-[#F59E0B] pl-6">
                "Our EWYL program ensures that financial constraints never hinder academic 
                potential, satisfying the new NAAC criteria for inclusive education (Metric 5.5)."
              </p>
              
              <div className="flex space-x-12">
                <div className="text-center">
                  <span className="block text-5xl font-black text-white">50+</span>
                  <span className="text-[10px] text-[#F59E0B] uppercase font-bold tracking-widest mt-2 block">Students Enrolled</span>
                </div>
                <div className="text-center">
                  <span className="block text-5xl font-black text-white">100%</span>
                  <span className="text-[10px] text-[#F59E0B] uppercase font-bold tracking-widest mt-2 block">Skills Gained</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-inner">
              <h4 className="font-bold mb-8 flex items-center text-white uppercase tracking-widest text-sm">
                <Info className="mr-3 text-[#F59E0B] w-5 h-5" />
                Program Highlights
              </h4>
              <ul className="space-y-6">
                <li className="flex justify-between items-center group cursor-default">
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-wider group-hover:text-[#F59E0B] transition-colors">Skill-Based Remuneration</span>
                  <span className="text-[9px] font-bold text-slate-500 border border-slate-700 px-2 py-0.5 rounded uppercase tracking-tighter">Verified</span>
                </li>
                <li className="flex justify-between items-center group cursor-default">
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-wider group-hover:text-[#F59E0B] transition-colors">Career Readiness (Metric 8.1)</span>
                  <span className="text-[9px] font-bold text-slate-500 border border-slate-700 px-2 py-0.5 rounded uppercase tracking-tighter">Active</span>
                </li>
              </ul>
              <button className="w-full mt-10 py-5 bg-[#F59E0B] hover:bg-white text-slate-900 rounded-2xl font-black text-xs transition-all uppercase tracking-[0.2em] shadow-lg active:scale-95">
                Download EWYL SSR Data
              </button>
            </div>
          </div>
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E3A8A] rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>
        </section>

        {/* Framework Compliance Note */}
        <div className="mt-24 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-400 text-[10px] italic tracking-[0.1em] font-bold uppercase">
            * Compliance: New NAAC Binary Metrics (March 19, 2024) | Attribute 09 (Innovation) & Attribute 05 (Student Support).
          </p>
        </div>
      </main>

      <footer className="py-16 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.5em] uppercase font-black">
          Jayarani College | Student Empowerment 2026
        </p>
      </footer>
    </div>
  );
};

export default EarnWhileLearn;