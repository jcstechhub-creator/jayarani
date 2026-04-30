import React from 'react';
import PageHeader from "@/app/components/PageHeader";
import { activityImages } from "@/data/image";
import { Book, Library, Users, PenTool, Award, Star, FileText, Info } from 'lucide-react';

const ReaderClub = () => {
  // Theme Color Reference:
  // Academic Blue: #1E3A8A (Primary Governance)
  // Metric Gold: #F59E0B (Excellence & Achievement)
  // Documentation Slate: #475569 (Administrative Detail)

  const initiatives = [
    {
      id: "6.1",
      title: "Literary Societies",
      desc: "Regular book review sessions and domain-related activities to foster a reading culture.",
      icon: <Library className="w-6 h-6 text-[#1E3A8A]" />
    },
    {
      id: "1.8",
      title: "IKS Documentation",
      desc: "Exploring Indian Knowledge Systems through classical and contemporary Indian literature.",
      icon: <Book className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "8.5",
      title: "Literary Awards",
      desc: "Recognizing student success in essay writing, poetry, and debate competitions.",
      icon: <Award className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "6.6",
      title: "Community Literacy",
      desc: "Mobile library initiatives and reading camps in adopted UBA villages.",
      icon: <Users className="w-6 h-6 text-[#475569]" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <PageHeader
        title="Reader Club"
        subtitle="Cultivating critical thinking and a lifelong passion for literature"
        breadcrumb="Home / Clubs"
        image={activityImages.readerClub}
      />

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Metric Grid: White & Slate Theme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {initiatives.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-[#F59E0B]/30 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-300">
                METRIC {item.id}
              </div>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-[#F59E0B]/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#1E3A8A] text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Documentation Section: Dark Slate & Gold */}
        <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-2 text-[#F59E0B] mb-6">
                <FileText className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">SSR Process Documentation</span>
              </div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">The Power of the Written Word</h2>
              <p className="text-slate-400 mb-10 leading-relaxed italic border-l-2 border-[#F59E0B] pl-6">
                "Our club provides a platform for intellectual discourse and the exploration of diverse 
                perspectives, satisfying the new NAAC criteria for cultural situatedness."
              </p>
              
              <div className="flex space-x-12">
                <div className="text-center">
                  <span className="block text-4xl font-black text-white">20+</span>
                  <span className="text-[10px] text-[#F59E0B] uppercase font-bold tracking-widest mt-1 block">Monthly Reviews</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-black text-white">75%</span>
                  <span className="text-[10px] text-[#F59E0B] uppercase font-bold tracking-widest mt-1 block">Process Weight </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-inner">
              <h4 className="font-bold mb-8 flex items-center text-white uppercase tracking-wider">
                <Info className="mr-3 text-[#F59E0B] w-5 h-5" />
                Reader Club Events
              </h4>
              <ul className="space-y-6">
                <li className="flex justify-between items-center group cursor-default">
                  <span className="text-slate-300 font-medium group-hover:text-[#F59E0B] transition-colors">Author Talk Series</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Bi-Monthly</span>
                </li>
                <li className="flex justify-between items-center group cursor-default">
                  <span className="text-slate-300 font-medium group-hover:text-[#F59E0B] transition-colors">Creative Writing Workshop</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Quarterly</span>
                </li>
              </ul>
              <button className="w-full mt-10 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-900 rounded-2xl font-black text-xs transition-all uppercase tracking-[0.2em] shadow-lg">
                View Literary SSR Data 
              </button>
            </div>
          </div>
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E3A8A] rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>
        </section>

        {/* Framework Compliance Note */}
        <div className="mt-24 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-400 text-[10px] italic tracking-[0.1em] font-bold uppercase">
            * Compliance: New NAAC Binary Metrics (March 19, 2024) for Affiliated Colleges.
          </p>
        </div>
      </main>

      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.5em] uppercase font-black">
          Jayarani College | Quality Assurance 2026
        </p>
      </footer>
    </div>
  );
};

export default ReaderClub;