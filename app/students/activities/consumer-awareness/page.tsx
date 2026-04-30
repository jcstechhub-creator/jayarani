import React from 'react';
import PageHeader from "@/app/components/PageHeader";
import { activityImages, contentImages } from "@/data/image";
import { ShoppingBag, ShieldCheck, Scale, Users, FileText, Award, Info, Star } from 'lucide-react';

const ConsumerAwareness = () => {
  // Theme Color Reference:
  // Academic Blue: #1E3A8A (Primary Governance)
  // Metric Gold: #F59E0B (Excellence & Awareness)
  // Documentation Slate: #475569 (Administrative Detail)

  const activities = [
    {
      id: "6.6",
      title: "Community Outreach",
      desc: "Documenting awareness campaigns on consumer rights and digital fraud prevention in local villages.",
      icon: <Users className="w-6 h-6 text-[#1E3A8A]" />
    },
    {
      id: "1.5",
      title: "Practical Orientation",
      desc: "Training students on quality marks (ISI, Agmark) and verifying fair trade practices.",
      icon: <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "8.5",
      title: "Achievement Metrics",
      desc: "Tracking student awards and recognitions in the field of consumer advocacy and social service.",
      icon: <Award className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "5.7",
      title: "Industry-Academia Linkage",
      desc: "Collaboration with legal experts and consumer forums for specialized workshops.",
      icon: <Scale className="w-6 h-6 text-[#475569]" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <PageHeader
        title="Consumer Awareness Club"
        subtitle="Empowering students and the community through education on rights"
        breadcrumb="Home / Clubs"
        // image={activityImages.consumerAwareness}
        
                        image= {contentImages?.bookImage}
      />

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Metric Grid: White & Slate Theme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {activities.map((item, idx) => (
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
              <h2 className="text-4xl font-bold mb-8 tracking-tight">Protecting Consumer Rights</h2>
              <p className="text-slate-400 mb-10 leading-relaxed italic border-l-2 border-[#F59E0B] pl-6">
                "As an affiliated institution, we maintain strict evidence of stakeholder 
                participation and community impact to satisfy the new pre-qualifier metrics."
              </p>
              
              <div className="flex space-x-12">
                <div className="text-center">
                  <span className="block text-4xl font-black text-white">10+</span>
                  <span className="text-[10px] text-[#F59E0B] uppercase font-bold tracking-widest mt-1 block">Annual Events</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-black text-white">75%</span>
                  <span className="text-[10px] text-[#F59E0B] uppercase font-bold tracking-widest mt-1 block">Process Focus</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-inner">
              <h4 className="font-bold mb-8 flex items-center text-white uppercase tracking-wider">
                <Info className="mr-3 text-[#F59E0B] w-5 h-5" />
                Strategic Awareness
              </h4>
              <ul className="space-y-6">
                <li className="flex justify-between items-center group cursor-default">
                  <span className="text-slate-300 font-medium group-hover:text-[#F59E0B] transition-colors">Digital Fraud Protection</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Ongoing</span>
                </li>
                <li className="flex justify-between items-center group cursor-default">
                  <span className="text-slate-300 font-medium group-hover:text-[#F59E0B] transition-colors">Quality Mark Awareness</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Quarterly</span>
                </li>
              </ul>
              <button className="w-full mt-10 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-900 rounded-2xl font-black text-xs transition-all uppercase tracking-[0.2em] shadow-lg">
                View Impact Reports
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

export default ConsumerAwareness;