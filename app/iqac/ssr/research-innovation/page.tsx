import React from 'react';
import { Microscope, FileText, Lightbulb, Rocket, Users, Globe } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';

const ResearchInnovation = () => {
  const outcomeMetrics = [
    {
      id: "9.2",
      title: "Research Publications",
      desc: "Scholarly articles published in peer-reviewed, UGC-CARE listed journals.",
      icon: <FileText className="text-blue-600" />
    },
    {
      id: "9.6",
      title: "IPR & Patents",
      desc: "Generation of Intellectual Property Rights and filing of patents/copyrights.",
      icon: <Microscope className="text-purple-600" />
    },
    {
      id: "9.8",
      title: "Student Start-ups",
      desc: "Fostering entrepreneurship through incubation and student-led ventures.",
      icon: <Rocket className="text-orange-600" />
    },
    {
      id: "9.7",
      title: "Research Collaboration",
      desc: "National and international partnerships for technology transfer and joint studies.",
      icon: <Globe className="text-green-600" />
    }
  ];

  return (
    <>
    <PageHeader 
  title="Research & Innovation"
  subtitle="Driving institutional excellence through high-impact research, IPR generation, and community-based innovation aligned with March 2024 NAAC Outcome Attributes."
  breadcrumb="Home / Research / Innovation"
  // Using an image that reflects modern laboratory research, digital innovation, and scholarly collaboration
  // image="/newgirlimages/image-58.jpeg"
  image="/banner/banner4.jpeg" 
/>
    <div className="bg-slate-50 min-h-screen p-8 font-sans">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Outcome Attribute 09</div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">Research & Innovation Outcomes</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Driving institutional excellence through high-impact research, community-based 
          innovation, and the production of Intellectual Property.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomeMetrics.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl">{item.icon}</div>
              <span className="text-[10px] font-bold text-slate-300">METRIC {item.id}</span>
            </div>
            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Innovation Strategy Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-indigo-900 rounded-[3rem] p-10 text-white grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Innovation & Incubation</h2>
            <p className="text-indigo-200 mb-8 leading-relaxed">
              We prioritize community-based research and technology transfer, ensuring that 
              our academic findings provide real-world solutions to local challenges.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-800 p-4 rounded-2xl">
                <span className="block text-xl font-bold">UGC-CARE</span>
                <span className="text-[10px] text-indigo-300 uppercase">Journal Standards</span>
              </div>
              <div className="bg-indigo-800 p-4 rounded-2xl">
                <span className="block text-xl font-bold">IPR Cell</span>
                <span className="text-[10px] text-indigo-300 uppercase">Patent Support</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
            <h4 className="font-bold mb-4 flex items-center">
              <Lightbulb className="mr-2 text-yellow-400 w-5 h-5" />
              Focus Areas for 2026
            </h4>
            <ul className="space-y-3 text-sm text-indigo-100">
              <li className="flex items-center">• External Research Grants (9.1)</li>
              <li className="flex items-center">• Technology Transfer (Community Impact)</li>
              <li className="flex items-center">• National/International Collaborations</li>
              <li className="flex items-center">• Plagiarism-free Quality Publications</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-slate-400 text-[10px] tracking-[0.3em] uppercase">
        Outcome Attribute Compliance | SSR Documentation 2026
      </footer>
    </div>
    
    </>
  );
};

export default ResearchInnovation;