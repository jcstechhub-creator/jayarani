import React from 'react';
import PageHeader from "@/app/components/PageHeader";
import { activityImages } from "@/data/image";
import { ShieldAlert, Users, Truck, MapPin, Award, Star, Info } from 'lucide-react';

const RoadSafetyClub = () => {
  const initiatives = [
    {
      id: "6.6",
      title: "Community Outreach",
      desc: "Road safety awareness campaigns and rallies conducted in adopted UBA villages.",
      icon: <MapPin className="w-6 h-6 text-red-600" />
    },
    {
      id: "6.1",
      title: "Student Engagement",
      desc: "Active participation in technical and domain-related safety clubs and activities.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      id: "8.5",
      title: "Awards & Recognition",
      desc: "Institutional and individual recognitions for contributions to public safety.",
      icon: <Award className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "10.1",
      title: "Sustainability Impact",
      desc: "Promoting carbon sequestration through optimized traffic flow and green commuting.",
      icon: <Truck className="w-6 h-6 text-green-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <PageHeader
        title="Road Safety Club"
        subtitle="Empowering students to advocate for traffic safety"
        breadcrumb="Home / Clubs"
        image={activityImages.roadSafetyClub}
      />

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Metric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {initiatives.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-300">
                METRIC {item.id}
              </div>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-orange-50">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Impact Dashboard */}
        <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-[#F59E0B] mb-4">
                <Star className="w-5 h-5 fill-[#F59E0B]" />
                <span className="font-bold uppercase tracking-widest text-xs">Community Impact Analysis</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Driving Change</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                As part of our commitment to Attribute 06, we document the impact of our club 
                on local communities, including traffic rule adherence and safety awareness scores.
              </p>
              <div className="flex space-x-8">
                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <span className="block text-3xl font-bold">15+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Annual Rallies</span>
                </div>
                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <span className="block text-3xl font-bold">5000+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">People Impacted</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h4 className="font-bold mb-6 flex items-center">
                <Info className="mr-3 text-[#F59E0B]" />
                Upcoming Campaigns
              </h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>"Wear a Helmet" Rally</span>
                  <span className="text-[#F59E0B]">July 2026</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Traffic Rule Workshop</span>
                  <span className="text-[#F59E0B]">Sept 2026</span>
                </li>
              </ul>
              <button className="w-full mt-8 py-3 bg-[#F59E0B] hover:bg-orange-500 text-slate-900 rounded-xl font-bold transition-all uppercase tracking-widest text-xs">
                View Community Impact Report
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-600 rounded-full blur-[120px] opacity-10"></div>
        </section>

        {/* SSR Compliance Disclaimer */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-[10px] italic tracking-wider">
            * Documentation compliant with New NAAC (March 2024) Framework for Community Engagement (Metric 6.6 & 6.1).
          </p>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.4em] uppercase font-bold">
          Jayarani College | Social Responsibility 2026
        </p>
      </footer>
    </div>
  );
};

export default RoadSafetyClub;