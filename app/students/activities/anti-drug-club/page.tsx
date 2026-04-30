import React from 'react';
import PageHeader from "@/app/components/PageHeader";
import { activityImages, contentImages } from "@/data/image";
import { ShieldCheck, Trophy, Heart, Users, Zap, Award, Info } from 'lucide-react';
import { pageImages } from '@/data/image'
const AntiDrugSports = () => {
  const activities = [
    {
      id: "6.4",
      title: "Mental Health & Wellness",
      desc: "Promoting sports and meditation as core alternatives to substance abuse.",
      icon: <Heart className="w-6 h-6 text-red-600" />
    },
    {
      id: "6.6",
      title: "Community Awareness",
      desc: "Drug-free village campaigns conducted under Unnat Bharat Abhiyan (UBA).",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      id: "8.5",
      title: "Excellence Awards",
      desc: "Recognizing student ambassadors for their role in social sensitization.",
      icon: <Award className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "5.5",
      title: "Inclusive Support",
      desc: "Catering to student diversity through peer counseling and sports mentorship.",
      icon: <Zap className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <PageHeader
        title="Anti-Drug Club"
        subtitle="Integrating physical excellence with social awareness"
        breadcrumb="Home / Clubs"
        // image={activityImages.antiDrugClub}
        
                        image={pageImages.adminSecretary}
      />

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Metric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {activities.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-300">
                METRIC {item.id}
              </div>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-red-50">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Strategic Impact Dashboard */}
        <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-[#F59E0B] mb-4">
                <Trophy className="w-5 h-5 fill-[#F59E0B]" />
                <span className="font-bold uppercase tracking-widest text-xs">Sustainability Outcome (Attribute 10)</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Social Sustainability</h2>
              <p className="text-slate-400 mb-8 leading-relaxed italic">
                "Our mission is to create a disease-free village environment through 
                consistent student-led sports and awareness interventions."
              </p>
              <div className="flex space-x-8">
                <div className="border-l-4 border-red-600 pl-4">
                  <span className="block text-3xl font-bold">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Campus Vigilance</span>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <span className="block text-3xl font-bold">05+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Adopted Villages</span>
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
                  <span>Anti-Drug Marathon</span>
                  <span className="text-red-400">Aug 2026</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Awareness via Street Play</span>
                  <span className="text-red-400">Oct 2026</span>
                </li>
              </ul>
              <button className="w-full mt-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all uppercase tracking-widest text-xs">
                View Awareness Reports
              </button>
            </div>
          </div>
        </section>

        {/* Compliance Footer */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-[10px] italic tracking-wider uppercase font-bold">
            * Documentation compliant with New NAAC (March 19, 2024) Framework for Affiliated Colleges.
          </p>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.4em] uppercase font-bold">
          Jayarani College | Quality & Social Ethics 2026
        </p>
      </footer>
    </div>
  );
};

export default AntiDrugSports;