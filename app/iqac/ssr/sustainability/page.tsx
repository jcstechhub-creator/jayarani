"use client";

import React from 'react';
import { 
  Leaf, 
  Droplets, 
  Wind, 
  Recycle, 
  Users, 
  BarChart3, 
  Globe, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const SustainabilityOutcomes = () => {
  const metrics = [
    {
      id: "10.1",
      title: "Community Eco-Activities",
      desc: "Extension activities including UBA village adoption for clean energy and environmental literacy.",
      icon: <Users className="text-emerald-600" />
    },
    {
      id: "10.2",
      title: "Waste & Water Management",
      desc: "Implementation of 3R principles, E-waste disposal, and comprehensive water budgeting/harvesting.",
      icon: <Droplets className="text-blue-600" />
    },
    {
      id: "10.3",
      title: "Progressing towards Net Zero",
      desc: "Strategic adoption of solar energy, LED lighting, and carbon footprint reduction targets.",
      icon: <Zap className="text-amber-500" />
    },
    {
      id: "10.4",
      title: "Green Audits & Initiatives",
      desc: "Annual Energy, Environment, and Green Audits with actionable compliance reports.",
      icon: <BarChart3 className="text-green-600" />
    },
    {
      id: "10.5",
      title: "Industry & NGO Collaborations",
      desc: "MoUs with environmental agencies for technical waste recycling and conservation projects.",
      icon: <Globe className="text-cyan-600" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Sustainability Outcomes"
        subtitle="Advancing institutional environmental stewardship through Net Zero transition, scientific water budgeting, and community-led conservation."
        breadcrumb="Home / Quality / Sustainability"
        image={pageImages.adminSecretary}
      />

      <main className="max-w-7xl mx-auto py-16 px-6">
        {/* Metric Compliance Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] mb-4">
            Outcome Attribute 10 | NAAC Compliance 2026
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Environmental Stewardship</h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 5 Pillar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((item) => (
            <div key={item.id} className="bg-emerald-50/30 p-8 rounded-[2.5rem] border border-emerald-100 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-white px-2 py-1 rounded-md border border-emerald-50">
                  METRIC {item.id}
                </span>
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Strategic Block */}
        <section className="mt-20 grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-emerald-400 mb-6">
                <Wind className="w-8 h-8" />
                <h3 className="text-3xl font-bold tracking-tight">Net Zero Roadmap</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8">
                In alignment with <strong>Metric 10.3</strong>, the institution has initiated a decarbonization 
                strategy. This includes migrating to 100% renewable energy sources and enhancing 
                <strong> Carbon Sequestration</strong> through campus-wide biodiversity preservation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="block text-2xl font-bold text-emerald-400">85%</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Renewable Energy</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="block text-2xl font-bold text-emerald-400">Zero</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Single-use Plastic</span>
                </div>
              </div>
            </div>
            <Leaf className="absolute -right-16 -bottom-16 w-64 h-64 text-white/5 rotate-12" />
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex-1">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-blue-600 w-8 h-8" />
                <h3 className="text-xl font-bold text-slate-800">Water Budgeting & Management</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                <strong>Metric 10.2:</strong> Our water management protocols involve scientific 
                groundwater recharging and automated sensors to prevent wastage, ensuring 
                institutional resilience against local water scarcity.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-lg border border-blue-100 uppercase">Recycling</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-lg border border-blue-100 uppercase">Sensors</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-lg border border-blue-100 uppercase">Rainwater</span>
              </div>
            </div>

            <div className="bg-emerald-900 p-10 rounded-[3rem] text-white flex-1">
              <h4 className="font-bold text-emerald-400 mb-2 uppercase text-xs tracking-widest">Industry & NGO Collab (10.5)</h4>
              <p className="text-sm text-emerald-100 leading-relaxed">
                Strategic partnerships enable us to process specialized E-waste and conduct 
                certified Environmental Audits, bridging the gap between policy and practice.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 text-center border-t border-slate-100 py-12 bg-slate-50">
        <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase font-bold">
          Sustainability Metrics Compliance | Jayarani College © 2026
        </p>
      </footer>
    </div>
  );
};

export default SustainabilityOutcomes;