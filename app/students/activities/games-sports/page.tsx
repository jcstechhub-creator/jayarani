import React from 'react';
import PageHeader from "@/app/components/PageHeader";
import { activityImages, contentImages } from "@/data/image";
import { Trophy, Activity, Users, Map, Award, Star, Heart } from 'lucide-react';

const SportsPage = () => {
  const sportsInitiatives = [
    {
      id: "6.5",
      title: "Sports Clubs & Teams",
      desc: "University-affiliated teams for Football, Cricket, Volleyball, and Athletics.",
      icon: <Activity className="w-6 h-6 text-red-600" />
    },
    {
      id: "8.5",
      title: "Competitive Excellence",
      desc: "Documented success in State and National level tournaments and sports meets.",
      icon: <Trophy className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "3.1",
      title: "Physical Infrastructure",
      desc: "Standardized courts and gymnasium facilities maintained for student training.",
      icon: <Map className="w-6 h-6 text-blue-600" />
    },
    {
      id: "6.4",
      title: "Wellbeing Integration",
      desc: "Combining physical sports with mental health and meditation programs.",
      icon: <Heart className="w-6 h-6 text-pink-500" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <PageHeader
        title="Games & Sports"
        subtitle="Fostering competitive spirit and physical excellence"
        breadcrumb="Home / Clubs"
        // image={activityImages.gamesSports}
        
                        image= {contentImages?.bookImage}
      />

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Metric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sportsInitiatives.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-300">
                METRIC {item.id}
              </div>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-50">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Achievement Dashboard */}
        <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-[#F59E0B] mb-4">
                <Award className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-xs">Outcome Attribute 08 | Achievement Tracking</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Success on the Field</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                As an affiliated institution, we maintain detailed records of student participation 
                and graduation rates influenced by sports scholarship and excellence.
              </p>
              <div className="flex space-x-8">
                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <span className="block text-3xl font-bold">25+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">State/National Medals</span>
                </div>
                <div className="border-l-4 border-[#F59E0B] pl-4">
                  <span className="block text-3xl font-bold">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Annual Sports Audit</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h4 className="font-bold mb-6 flex items-center">
                <Users className="mr-3 text-[#F59E0B]" />
                Upcoming Tournaments
              </h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Annual Athletics Meet</span>
                  <span className="text-[#F59E0B]">Oct 2026</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Inter-Collegiate Volley Fest</span>
                  <span className="text-[#F59E0B]">Jan 2027</span>
                </li>
              </ul>
              <button className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all uppercase tracking-widest text-xs">
                View Sports SSR Report
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-10"></div>
        </section>

        {/* Compliance Note */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-[10px] italic tracking-wider">
            * Documentation compliant with March 19, 2024 NAAC Binary Metrics for Affiliated Colleges (Metric 6.5 & 8.5).
          </p>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.4em] uppercase font-bold">
          Jayarani College | Quality & Outcomes 2026
        </p>
      </footer>
    </div>
  );
};

export default SportsPage;