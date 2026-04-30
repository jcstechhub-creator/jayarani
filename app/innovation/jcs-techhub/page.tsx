import React from 'react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';
import { 
  Cpu, 
  Rocket, 
  Code2, 
  Lightbulb, 
  Microscope, 
  Globe, 
  Zap, 
  Layers,
  ShieldCheck,
  Workflow
} from 'lucide-react';

const JCSTechHub = () => {
  // Theme Color Reference:
  // Academic Blue: #1E3A8A (Innovation Governance)
  // Metric Gold: #F59E0B (Excellence & Startups)
  // Tech Slate: #475569 (Infrastructure)

  const focusAreas = [
    {
      id: "9.8",
      title: "Incubation Center",
      desc: "Nurturing student-led start-ups from ideation to minimum viable product (MVP) stages.",
      icon: <Rocket className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "9.6",
      title: "IPR & Patent Support",
      desc: "Facilitating the filing of copyrights and patents for technical innovations developed on campus.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      id: "5.7",
      title: "Software Development Cell",
      desc: "In-house development of institutional e-governance tools and industry-consultancy projects.",
      icon: <Code2 className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "6.1",
      title: "Advanced Computing",
      desc: "State-of-the-art infrastructure for AI, Data Science, and Cybersecurity workshops.",
      icon: <Cpu className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      
      {/* ✅ Corrected Academic PageHeader */}
      <PageHeader 
        title="JCS Tech Hub"
        subtitle="The nucleus of innovation and digital transformation, driving research-led entrepreneurship and high-impact technical skill development."
        breadcrumb="Home / Innovation / Tech-Hub"
        image={pageImages.innovationJcsTechhub}
      />

      <main className="max-w-7xl mx-auto py-20 px-6">
        
        {/* Innovation Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {focusAreas.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-slate-50 text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#F59E0B] transition-colors">
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

        {/* Strategic Innovation Framework */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="border-l-8 border-[#F59E0B] pl-8">
              <h2 className="text-4xl font-black text-[#1A2E5A] mb-4 uppercase tracking-tight">
                Innovation & <br/><span className="text-[#F59E0B]">Ideation Lab</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Our Tech Hub serves as a "Living Laboratory" where students apply theoretical knowledge 
                to solve real-world community challenges, satisfying the NAAC requirements for 
                <strong> Technology Transfer (Metric 9.7)</strong>.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Rapid Prototyping Unit", icon: <Zap className="w-4 h-4" /> },
                { label: "Full-Stack Development Bootcamps", icon: <Layers className="w-4 h-4" /> },
                { label: "Industry Mentor-Connect Program", icon: <Workflow className="w-4 h-4" /> }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A2E5A] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <Lightbulb className="text-[#F59E0B] w-12 h-12 mb-6 fill-[#F59E0B]" />
              <h3 className="text-3xl font-bold mb-6 italic">Incubation Outcomes</h3>
              <div className="space-y-8">
                <div className="flex items-end gap-4">
                  <span className="text-6xl font-black text-white">05+</span>
                  <span className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-2">Student Start-ups Filings</span>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <span className="block text-2xl font-bold">12+</span>
                    <span className="text-[10px] text-[#F59E0B] font-black uppercase tracking-widest">Active IPR Projects</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">100%</span>
                    <span className="text-[10px] text-[#F59E0B] font-black uppercase tracking-widest">Digital Compliance</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-10"></div>
            <Globe className="absolute top-10 right-10 w-32 h-32 text-white/5" />
          </div>
        </section>

        {/* Call to Action: Quality & SSR Documentation */}
        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-emerald-50 rounded-full">
              <Microscope className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-left">
              <h4 className="font-black text-[#1A2E5A] uppercase tracking-tight">Technical SSR Repository</h4>
              <p className="text-sm text-slate-500 font-medium">Documentation for Metric 9.2 (Publications) & 9.8 (Startups)</p>
            </div>
          </div>
          <button className="w-full md:w-auto px-10 py-4 bg-[#1A2E5A] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg active:scale-95">
            Submit Project Proposal
          </button>
        </div>

        {/* Framework Compliance Note */}
        <div className="mt-24 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-400 text-[10px] italic tracking-[0.2em] font-bold uppercase">
            * Compliance: New NAAC Binary Metrics (March 2024) | Attribute 09: Innovation Outcomes
          </p>
        </div>
      </main>

      <footer className="py-16 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.5em] uppercase font-black">
          Jayarani College | JCS Tech Hub 2026
        </p>
      </footer>
    </div>
  );
};

export default JCSTechHub;