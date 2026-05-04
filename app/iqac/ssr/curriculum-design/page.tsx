import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';
import { BookOpen, GraduationCap, Laptop, Landmark, Target } from 'lucide-react';
import React from 'react';

const CurriculumDesign = () => {
  const pillars = [
    {
      title: "Outcome-Based Curriculum",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      description: "Moving beyond traditional rote learning to a system defined by measurable Program Outcomes (PO) and Course Outcomes (CO).",
      details: ["Competency-based evaluation", "Student-centric learning paths", "Continuous quality improvement"]
    },
    {
      title: "Practical & Industry Focus",
      icon: <Laptop className="w-8 h-8 text-green-600" />,
      description: "Bridging the gap between academia and the professional world through hands-on training and real-world application.",
      details: ["Industry-vetted syllabus", "Mandatory internships", "Project-based assessments"]
    },
    {
      title: "Indian Knowledge System (IKS)",
      icon: <Landmark className="w-8 h-8 text-red-600" />,
      description: "Integrating traditional wisdom with modern science, with a deep focus on Tamil Nadu's rich cultural and linguistic heritage.",
      details: ["Tamil Classical Literature", "Ethical Governance (Aram)", "Indigenous scientific methods"]
    }
  ];

  return (
    <>
      <PageHeader
        title="Curriculum Design & Development"
        subtitle="Empowering students through Outcome-Based Education, industry readiness, and cultural rootedness."
        breadcrumb="Home / Academics / Curriculum"
        image={pageImages.adminSecretary}
      />

      <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen mb-20">
        
        {/* Core Philosophy Section */}
        <section className="mt-12 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Academic Philosophy</h2>
          <p className="text-gray-600 leading-relaxed">
            At Jayarani College, our curriculum is designed to be a dynamic roadmap. We blend 
            modern employability standards with the profound values of the Indian Knowledge System 
            to produce graduates who are globally competitive and culturally grounded.
          </p>
        </section>

        {/* The Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6 bg-gray-50 w-fit p-4 rounded-xl">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-3">
                {pillar.details.map((item, i) => (
                  <li key={i} className="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Focus on Tamil Nadu / IKS Section */}
        <section className="mt-20 bg-blue-900 rounded-3xl p-10 text-white overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Regional Heritage & IKS</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Consistent with the National Education Policy, we prioritize the 
                <strong> Indian Knowledge System</strong>, specifically highlighting the contributions 
                of Tamil culture, Sangam literature, and the ethical frameworks provided by 
                classical Tamil scholars.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm font-bold">Tamil Heritage</p>
                  <p className="text-xs text-blue-200">Integrated Literature & History</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm font-bold">Ethical Living</p>
                  <p className="text-xs text-blue-200">Virtue-based Curriculum</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
               <GraduationCap className="w-64 h-64 text-white/10 absolute -right-10 -bottom-10" />
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                 <h4 className="font-bold mb-4 flex items-center gap-2">
                   <BookOpen className="w-5 h-5" /> Curricular Highlights
                 </h4>
                 <ul className="space-y-4 text-sm text-blue-50">
                    <li>• Industry-Integrated Vocational Courses</li>
                    <li>• Value-added courses on Traditional Ethics</li>
                    <li>• Skill-based workshops for Tamil Arts</li>
                    <li>• Community-driven practical projects</li>
                 </ul>
               </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="mt-20 text-center text-gray-400 text-xs uppercase tracking-[0.2em]">
          Jayarani College | Academic Excellence Series 2026
        </footer>
      </div>
    </>
  );
};

export default CurriculumDesign;