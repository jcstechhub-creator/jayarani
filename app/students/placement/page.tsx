import React from 'react';
// import { PageHeader } from '@/components/PageHeader';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Building2, 
  GraduationCap, 
  Award, 
  Star, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const PlacementPage = () => {
  // Theme Color Reference:
  // Academic Blue: #1E3A8A (Governance)
  // Metric Gold: #F59E0B (Excellence)
  // Success Green: #10B981 (Employment)

  const placementMetrics = [
    {
      id: "8.1",
      title: "Campus Placements",
      desc: "Documenting the percentage of graduates securing professional roles in diverse sectors.",
      icon: <Briefcase className="w-6 h-6 text-[#1E3A8A]" />
    },
    {
      id: "5.7",
      title: "Industry Linkages",
      desc: "Functional MoUs with corporate partners for internships and on-the-job training.",
      icon: <Building2 className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      id: "8.2",
      title: "Higher Education",
      desc: "Tracking students progressing to premier national and international universities.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "8.5",
      title: "Competitive Success",
      desc: "Support for students qualifying in State/National level competitive examinations.",
      icon: <Award className="w-6 h-6 text-indigo-600" />
    }
  ];

  const trainingModules = [
    "Aptitude & Logical Reasoning",
    "Soft Skills & Communication",
    "Technical Interview Prep",
    "Mock Group Discussions",
    "Personality Development",
    "Resume Building Workshops"
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      
      {/* ✅ Corrected Academic PageHeader */}
      <PageHeader
        title="Training & Placement"
        subtitle="Bridging the gap between academic learning and professional excellence through strategic industry linkages and robust career support."
        breadcrumb="Home / Students / Placement"
        image={pageImages.studentsPlacement}
      />

      <main className="max-w-7xl mx-auto py-20 px-6">
        
        {/* Metric Grid: NAAC Attribute 08 Focus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {placementMetrics.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-slate-50 text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#F59E0B] transition-colors">
                METRIC {item.id}
              </div>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#1E3A8A] text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Training Strategy Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black text-[#1A2E5A] mb-4 uppercase tracking-tight">Career Readiness <br/><span className="text-[#F59E0B]">Training Program</span></h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Our systematic training approach ensures that every student is equipped with the 
                necessary "Soft Skills" and "Technical Competencies" required for Industry 4.0.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trainingModules.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-bold text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
            
            <button className="flex items-center gap-2 text-[#1E3A8A] font-black uppercase tracking-widest text-xs border-b-2 border-[#F59E0B] pb-1 hover:gap-4 transition-all">
              Download Placement Brochure <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#1A2E5A] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <Star className="text-[#F59E0B] w-12 h-12 mb-6 fill-[#F59E0B]" />
              <h3 className="text-3xl font-bold mb-6 italic">Placement Highlights</h3>
              <div className="space-y-8">
                <div className="flex items-end gap-4">
                  <span className="text-6xl font-black text-white">85%</span>
                  <span className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-2">Annual Placement Record</span>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <span className="block text-2xl font-bold">50+</span>
                    <span className="text-[10px] text-[#F59E0B] font-black uppercase tracking-widest">Recruiting Partners</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold">LPA 4.5</span>
                    <span className="text-[10px] text-[#F59E0B] font-black uppercase tracking-widest">Average Package</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#F59E0B] rounded-full blur-[120px] opacity-10"></div>
          </div>
        </section>

        {/* SSR Compliance Section */}
        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-50 rounded-full">
              <Users className="w-8 h-8 text-[#1E3A8A]" />
            </div>
            <div>
              <h4 className="font-black text-[#1A2E5A] uppercase tracking-tight">Student Progression Tracking</h4>
              <p className="text-sm text-slate-500 font-medium">Metric 8.2 | Evidence-based career monitoring</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-[#1E3A8A] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg active:scale-95">
            View Alumni Success Stories
          </button>
        </div>

        {/* Framework Compliance Note */}
        <div className="mt-20 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-400 text-[10px] italic tracking-[0.2em] font-bold uppercase">
            * Compliance: New NAAC Binary Metrics (March 2024) | Attribute 08: Student Outcomes
          </p>
        </div>
      </main>

      <footer className="py-16 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.5em] uppercase font-black">
          Jayarani College | Career Excellence 2026
        </p>
      </footer>
    </div>
  );
};

export default PlacementPage;