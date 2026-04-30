import React from 'react';
import PageHeader from "@/app/components/PageHeader";
import { activityImages, contentImages } from "@/data/image";
import { Leaf, Droplets, Wind, Recycle, Globe, BarChart3, Star } from 'lucide-react';
import { pageImages } from '@/data/image'
const EcoClubPage = () => {
  const initiatives = [
    {
      id: "10.4",
      title: "Green & Energy Audits",
      desc: "Student-led participation in periodic environmental impact assessments.",
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "10.2",
      title: "Resource Management",
      desc: "Active water budgeting and paper waste recycling programs on campus.",
      icon: <Recycle className="text-blue-600" />
    },
    {
      id: "10.3",
      title: "Net Zero Path",
      desc: "Documenting carbon sequestration and air pollution mitigation efforts.",
      icon: <Wind className="text-cyan-600" />
    },
    {
      id: "6.6",
      title: "UBA Community Outreach",
      desc: "Conducting cleanliness drives in adopted villages for environmental health.",
      icon: <Globe className="text-indigo-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <PageHeader
        title="Eco-Club"
        subtitle="Pioneering environmental stewardship through student action"
        breadcrumb="Home / Clubs"
        // image={activityImages.ecoClub}
        
                        image={pageImages.adminSecretary}
      />

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Metric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {initiatives.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-300">
                METRIC {item.id}
              </div>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-emerald-50">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Sustainability Dashboard */}
        <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-[#10B981] mb-4">
                <Star className="w-5 h-5 fill-[#10B981]" />
                <span className="font-bold uppercase tracking-widest text-xs">Net Zero Progress tracking</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Environmental Impact</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                As per the March 2024 NAAC updates, we prioritize water budgeting and 
                carbon sequestration to achieve "Excellence" in sustainability metrics.
              </p>
              <div className="flex space-x-8">
                <div className="border-l-4 border-[#10B981] pl-4">
                  <span className="block text-3xl font-bold">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Paper Recycled</span>
                </div>
                <div className="border-l-4 border-[#10B981] pl-4">
                  <span className="block text-3xl font-bold">Net Zero</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Target Roadmap</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h4 className="font-bold mb-6 flex items-center text-[#10B981]">
                <Droplets className="mr-3" />
                Resource Audit Calendar
              </h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Water Budgeting Survey</span>
                  <span className="text-[#10B981]">Bi-Annual</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Green Audit Submission</span>
                  <span className="text-[#10B981]">December</span>
                </li>
              </ul>
              <button className="w-full mt-8 py-3 bg-[#10B981] hover:bg-emerald-600 text-slate-900 rounded-xl font-bold transition-all uppercase tracking-widest text-xs">
                View Green Audit SSR Data
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-600 rounded-full blur-[120px] opacity-10"></div>
        </section>

        {/* SSR Compliance Disclaimer */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-[10px] italic tracking-wider">
            * Documentation compliant with New NAAC (March 2024) Framework for Sustainability Outcomes (Attribute 10).
          </p>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.4em] uppercase font-bold">
          Jayarani College | Quality & Ecology 2026
        </p>
      </footer>
    </div>
  );
};

export default EcoClubPage;