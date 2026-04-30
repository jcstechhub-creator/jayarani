import React from 'react';
import { Leaf, Droplets, Wind, Recycle, Users, BarChart3 } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const SustainabilityOutcomes = () => {
  const metrics = [
    {
      id: "10.2",
      title: "Waste & Water Management",
      desc: "Comprehensive water budgeting and recycling systems for a zero-waste campus.",
      icon: <Droplets className="text-blue-600" />
    },
    {
      id: "10.3",
      title: "Net Zero Progress",
      desc: "Strategic transition towards carbon neutrality and Net Zero energy consumption.",
      icon: <Wind className="text-cyan-600" />
    },
    {
      id: "10.4",
      title: "Green Audits",
      desc: "Periodic assessments of energy, environment, and ecological impact.",
      icon: <BarChart3 className="text-green-600" />
    },
    {
      id: "10.5",
      title: "Eco-Collaborations",
      desc: "Partnerships with NGOs and Industry for environmental sustainability projects.",
      icon: <Recycle className="text-emerald-600" />
    }
  ];

  return (

    <>
    <PageHeader
  title="Sustainability Outcomes"
  subtitle="Pioneering the path to Net Zero through advanced water budgeting, green audits, and community-based eco-initiatives aligned with March 2024 NAAC Attribute 10."
  breadcrumb="Home / Quality / Sustainability"
  // Using an image that highlights a green campus with solar integration or rainwater harvesting systems
  // image="/newgirlimages/image-55.jpeg" 
  // image="/banner/banner4.jpeg"
  
                  image={pageImages.adminSecretary}
/>
    
    <div className="bg-emerald-50/30 min-h-screen p-8 font-sans">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
          Outcome Attribute 10 | Sustainability
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Environmental Sustainability</h1>
        <p className="text-slate-500 max-w-2xl mx-auto italic">
          "Meeting the present needs without compromising the ability of future generations 
          to meet theirs through active green initiatives."
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-emerald-50 rounded-2xl">{item.icon}</div>
              <span className="text-[10px] font-mono font-bold text-emerald-300">METRIC {item.id}</span>
            </div>
            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Community Impact Section */}
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-[3rem] p-10 lg:p-16 shadow-sm border border-emerald-50 overflow-hidden relative">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6 text-emerald-700">
              <Users className="mr-3 w-6 h-6" />
              <h2 className="text-2xl font-bold">Community Sustainability (10.1)</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              Under the Unnat Bharat Abhiyan (UBA), Jayarani College extends its sustainability 
              practices to adopted villages, focusing on clean energy and disease-free environments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                Carbon Sequestration Monitoring
              </div>
              <div className="flex items-center text-sm font-semibold text-slate-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                Paper Waste Recycling Programs
              </div>
            </div>
          </div>
          <div className="bg-emerald-900 rounded-[2.5rem] p-8 text-white relative">
            <Leaf className="absolute top-4 right-4 text-emerald-700 w-12 h-12" />
            <h4 className="text-xl font-bold mb-4">Green Vision 2026</h4>
            <p className="text-emerald-200 text-sm mb-6 leading-relaxed">
              Aligning with the new NAAC "Good" metric category by optimizing 
              air quality and water budgeting.
            </p>
            <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[85%]"></div>
            </div>
            <span className="text-[10px] uppercase mt-2 block text-emerald-400 font-bold">Progress toward Net Zero</span>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center border-t border-emerald-100 pt-8">
        <p className="text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium">
          Binary Framework Compliance | SSR Sustainability Outcomes 2026
        </p>
      </footer>
    </div>
    </>
  );
};

export default SustainabilityOutcomes;