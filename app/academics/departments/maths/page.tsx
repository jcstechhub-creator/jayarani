"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Calculator, 
  Binary, 
  LineChart, 
  Sigma, 
  Shapes,
  Lightbulb,
  GraduationCap,
  BookOpenCheck,
  Divide
} from "lucide-react";

export default function MathematicsPage() {
  const learningOutcomes = [
    { 
      title: "Analytical Reasoning", 
      icon: Sigma, 
      desc: "Developing the ability to identify patterns and solve complex quantitative problems." 
    },
    { 
      title: "Statistical Modeling", 
      icon: LineChart, 
      desc: "Application of mathematical theories to real-world data and economic forecasting." 
    },
    { 
      title: "Abstract Algebra", 
      icon: Shapes, 
      desc: "Exploring structural properties of algebraic systems and logical frameworks." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Dept. of Mathematics"
        subtitle="Exploring the universal language of logic, patterns, and precision."
        breadcrumb="Home / Academics / Departments / Maths"
        image={pageImages.academicsDepartmentMaths}
      />

      {/* --- DEPARTMENT OVERVIEW --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Foundation of Science</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Precision in <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Logical Thought</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              The Department of Mathematics at Jayarani College fosters an environment where numbers 
              transform into insights. Established to empower women with strong analytical skills, 
              our department provides a rigorous academic foundation that prepares students for 
              careers in research, data science, actuarial studies, and education.
            </p>
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <Divide className="text-[#2F4A8A] shrink-0" size={24} />
              <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                "Mathematics is not about numbers, equations, or algorithms; it is about 
                understanding the deep structure of the universe."
              </p>
            </div>
          </div>

          <div className="bg-[#1A2E5A] p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <Calculator className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            <h3 className="text-2xl font-bold mb-8">Academic Excellence</h3>
            <div className="space-y-6 relative z-10">
              {[
                { label: "Pure and Applied Mathematics", icon: BookOpenCheck },
                { label: "Competitive Exam Coaching", icon: Lightbulb },
                { label: "Mathematical Research Cell", icon: GraduationCap }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                    <pill.icon size={20} className="text-white group-hover:text-[#1A2E5A]" />
                  </div>
                  <span className="font-medium tracking-wide">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- LEARNING OUTCOMES --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Core Competencies</h3>
            <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">Bridging Theory and Practice</p>
            <div className="h-1 w-12 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {learningOutcomes.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-[#2F4A8A]" />
                </div>
                <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">{item.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAREER PATHWAYS --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1A2E5A] rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <Binary className="absolute top-0 left-0 opacity-5" size={200} />
          <h3 className="text-3xl font-bold mb-6">Future Opportunities</h3>
          <p className="text-blue-100/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Our graduates find success in diverse sectors including Civil Services, 
            Banking, IT Sectors as Data Analysts, and Prestigious Research Institutes globally.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Research", "Banking", "Analytics", "Teaching"].map((job) => (
              <div key={job} className="px-6 py-3 border border-white/10 rounded-xl bg-white/5 text-xs font-bold uppercase tracking-widest">
                {job}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Join the Department</h3>
          <p className="text-slate-500 mb-10 text-sm font-light">
            Embark on a journey to master the language of the universe. Applications are open for the upcoming academic session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#2F4A8A] transition-all shadow-lg">
              Enroll Now
            </button>
            <button className="flex items-center gap-2 text-[#2F4A8A] font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-slate-50 rounded-xl transition-all">
              Download Syllabus
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}