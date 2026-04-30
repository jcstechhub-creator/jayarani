"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Laptop, 
  Calculator, 
  Coins, 
  Atom, 
  Languages, 
  ArrowRight, 
  GraduationCap,
  Award,
  // Link
} from "lucide-react";
import Link from "next/link";

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Computer Science",
      slug: "computer-science",
      icon: Laptop,
      color: "bg-blue-600",
      description: "Empowering students with cutting-edge technology and software development skills in a digital-first world.",
      features: ["Smart Labs", "Continuous Affiliation", "Tech Workshops"],
      linkmove: "/academics/departments/computer-science"
    },
    {
      name: "Commerce",
      slug: "commerce",
      icon: Coins,
      color: "bg-emerald-600",
      description: "Fostering business acumen and financial expertise through a rigorous curriculum and industry insights.",
      features: ["Professional Ethics", "B.Com CA", "Financial Literacy"],
      linkmove: "/academics/departments/commerce"
    },
    {
      name: "Mathematics",
      slug: "mathematics",
      icon: Calculator,
      color: "bg-orange-600",
      description: "Developing analytical thinking and problem-solving capabilities through the beauty of numbers.",
      features: ["Analytical Research", "Peer Learning", "Competitive Coaching"],
      linkmove: "/academics/departments/maths"
    },
    {
      name: "Physics",
      slug: "physics",
      icon: Atom,
      color: "bg-purple-600",
      description: "Exploring the fundamental laws of the universe through hands-on experimentation and theoretical depth.",
      features: ["Advanced Labs", "Scientific Inquiry", "In-depth Affiliation"], 
      linkmove: "/academics/departments/physics"
    },
    {
      name: "English",
      slug: "english",
      icon: Languages,
      color: "bg-rose-600",
      description: "Nurturing linguistic proficiency and literary appreciation to build global communication leaders.",
      features: ["Soft Skills", "Literature Studies", "Creative Writing"], 
      linkmove: "/academics/departments/english"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Academic Departments"
        subtitle="Diverse streams of knowledge, united by a commitment to women's empowerment."
        breadcrumb="Home / Academics / Departments"
        image={pageImages.academicsDepartments}
      />

      {/* --- AFFILIATION STATUS --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-yellow-600" />
              <span className="text-xs font-bold text-[#2F4A8A] uppercase tracking-[0.3em]">University Recognition</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#1A2E5A] mb-6">Continuous Affiliation</h2>
            <p className="text-slate-600 leading-relaxed font-light">
              Jayarani Arts & Science College for Women is affiliated with <strong>Periyar University, Salem</strong>. 
              Our Departments of Computer Science, Commerce, Mathematics, and Physics have secured 
              continuous affiliation, ensuring a stable and recognized academic journey for our students.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full border-8 border-white shadow-xl flex items-center justify-center bg-blue-50">
               <GraduationCap size={64} className="text-[#2F4A8A]" />
            </div>
          </div>
        </div>
      </section>

      {/* --- DEPARTMENTS GRID --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {departments.map((dept, i) => (
              <div 
                key={i} 
                className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Background Accent */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${dept.color} opacity-[0.03] rounded-full group-hover:scale-[10] transition-transform duration-700`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${dept.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                    <dept.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">{dept.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                    {dept.description}
                  </p>

                  <div className="space-y-3 mb-10">
                    {dept.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${dept.color}`} />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{feat}</span>
                      </div>
                    ))}
                  </div>
                  {/* <button className="flex items-center gap-3 text-sm font-bold text-[#2F4A8A] group-hover:gap-5 transition-all">
    EXPLORE DEPARTMENT <ArrowRight size={18} />
  </button> */}

                <Link href={dept.linkmove} className="cursor-pointer" >
  <button className="flex items-center gap-3 text-sm font-bold text-[#2F4A8A] group-hover:gap-5 transition-all">
    EXPLORE DEPARTMENT <ArrowRight size={18} />
  </button>
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATUTORY NOTE --- */}
      <section className="py-24 bg-[#1A2E5A] text-white px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Outcome Based Education</h3>
          <p className="text-blue-100/60 font-light leading-relaxed mb-10">
            Every department at JCS follows the Choice Based Credit System (CBCS) and Outcome Based 
            Education (OBE) to ensure that our students graduate with industry-ready skills and 
            moral integrity.
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">UG Programmes</div>
            <div className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">CBCS Pattern</div>
          </div>
        </div>
      </section>
    </main>
  );
}