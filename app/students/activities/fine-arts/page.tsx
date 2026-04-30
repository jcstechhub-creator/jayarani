import React from 'react';
import PageHeader from "@/app/components/PageHeader";
import { activityImages } from "@/data/image";
import { Palette, Music, Camera, Theater, Star, Trophy, Users, Heart } from 'lucide-react';

const FineArtsPage = () => {
  // Theme Color Constants for reference in the code
  // Primary Blue: #1E3A8A (Academic)
  // Accent Gold: #F59E0B (Excellence)
  // Engagement Indigo: #4338CA (Process)

  const culturalClubs = [
    {
      title: "Visual Arts & Painting",
      icon: <Palette className="w-6 h-6 text-pink-500" />,
      desc: "Workshops on traditional and modern painting, focusing on Indian Knowledge Systems (IKS Metric 1.8).",
      metric: "6.3"
    },
    {
      title: "Music & Choir",
      icon: <Music className="w-6 h-6 text-indigo-500" />,
      desc: "Vocal and instrumental training, including hymns for inter-religious harmony sessions.",
      metric: "6.3"
    },
    {
      title: "Theater & Drama",
      icon: <Theater className="w-6 h-6 text-blue-600" />,
      desc: "Street plays and stage dramas addressing community issues like health and education (UBA Impact).",
      metric: "6.3"
    },
    {
      title: "Photography Club",
      icon: <Camera className="w-6 h-6 text-slate-600" />,
      desc: "Digital storytelling and documentation of campus events and green initiatives (Metric 10.4).",
      metric: "6.3"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <PageHeader
        title="Fine Arts & Culture"
        subtitle="Advancing cultural situatedness and student participation rates"
        breadcrumb="Home / Clubs"
        image={activityImages.fineArts}
      />

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Core Clubs Grid: Indigo & White Theme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {culturalClubs.map((club, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-slate-50 text-[10px] font-mono font-bold text-slate-300">
                METRIC {club.metric}
              </div>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-indigo-50 transition-colors">
                {club.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{club.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{club.desc}</p>
            </div>
          ))}
        </div>

        {/* Achievement Dashboard: Gold & Slate-900 Theme */}
        <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-2 text-[#F59E0B] mb-6">
                <Trophy className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">Outcome Attribute 08 | Student Outcomes</span>
              </div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Measurable Cultural Excellence</h2>
              <p className="text-slate-400 mb-10 leading-relaxed italic">
                "Graduation rates and student awards in curricular areas are monitored 
                under the Binary Framework to achieve 'Good' or 'Excellence' standing."
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-[#F59E0B] pl-6">
                  <span className="block text-4xl font-black text-white">50+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Annual Awards (8.5)</span>
                </div>
                <div className="border-l-4 border-[#F59E0B] pl-6">
                  <span className="block text-4xl font-black text-white">100%</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Inclusion Policy</span>
                </div>
              </div>
            </div>

            {/* Cultural Calendar Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-inner">
              <div className="flex items-center mb-8">
                <Users className="mr-3 text-[#F59E0B] w-6 h-6" />
                <h4 className="text-xl font-bold">SSR Event Documentation</h4>
              </div>
              <ul className="space-y-6">
                {[
                  { event: "Talent Induction Hunt", date: "Sept" },
                  { event: "Inter-Religious Harmony Fest", date: "Dec" },
                  { event: "Annual Arts Exhibition", date: "Mar" }
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center group">
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item.event}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-[#F59E0B] uppercase">{item.date}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-10 py-4 bg-[#4338CA] hover:bg-[#3730A3] text-white rounded-2xl font-bold text-sm transition-all uppercase tracking-widest">
                Download Cultural SSR Data
              </button>
            </div>
          </div>
          
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4338CA] rounded-full blur-[150px] opacity-20 -mr-20 -mt-20"></div>
        </section>

        {/* Framework Compliance Notice */}
        <div className="mt-24 border-t border-slate-200 pt-10 text-center">
          <div className="flex items-center justify-center space-x-2 text-slate-400 mb-2">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Institutional Situatedness & Uniqueness</span>
          </div>
          <p className="text-slate-400 text-[10px] italic">
            * All engagement metrics (Attribute 06) and award documentation (Attribute 08) 
            comply with the March 19th, 2024 New NAAC Binary Metrics for Affiliated Colleges.
          </p>
        </div>
      </main>

      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.4em] uppercase font-black">
          Jayarani College | Quality Assurance 2026
        </p>
      </footer>
    </div>
  );
};

export default FineArtsPage;