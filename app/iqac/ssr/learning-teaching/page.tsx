import React from 'react';
import { Lightbulb, ClipboardCheck, Users, Monitor, ShieldAlert, Award } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { contentImages } from '@/data/image';

const LearningTeaching = () => {
  const metrics = [
    {
      id: "5.1",
      title: "Pedagogical Approaches",
      features: ["Kinesthetic Learning", "Game-based Learning", "Experiential Learning"],
      icon: <Lightbulb className="text-amber-500" />
    },
    {
      id: "5.3",
      title: "Continuous Assessment",
      features: ["MCQs & Portfolios", "Case Study Analysis", "Open Book Exams"],
      icon: <ClipboardCheck className="text-green-500" />
    },
    {
      id: "5.6",
      title: "LMS Integration",
      features: ["Blended Learning", "Digital Repository", "Interactive Content"],
      icon: <Monitor className="text-blue-500" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-8">

      <PageHeader
  title="Learning & Teaching"
  subtitle="Advancing pedagogical excellence through Game-based Learning, LMS integration, and inclusive assessments aligned with the March 2024 NAAC Framework."
  breadcrumb="Home / Academics / Learning-Teaching"
  // Using an image that reflects interactive, ICT-enabled, and collaborative learning
  // image="/newgirlimages/image-61.jpeg" 
  // image="/banner/banner4.jpeg"
  
                  image= {contentImages?.bookImage}
/>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold text-slate-900 uppercase">Process 05: Learning & Teaching</h1>
        <p className="text-slate-500 mt-2">New NAAC Metrics Alignment - March 2024 Framework</p>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Metric Cards */}
        {metrics.map((m) => (
          <div key={m.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
            <span className="absolute top-4 right-4 text-xs font-mono text-slate-300">METRIC {m.id}</span>
            <div className="mb-4 p-3 bg-slate-50 rounded-xl w-fit">{m.icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{m.title}</h3>
            <ul className="space-y-2">
              {m.features.map((f) => (
                <li key={f} className="text-sm text-slate-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Diversity & Grievance Section */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-blue-900 text-white p-8 rounded-3xl">
          <div className="flex items-center mb-4">
            <Users className="mr-3 text-blue-300" />
            <h3 className="text-xl font-bold">Catering to Diversity (5.5)</h3>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            Ensuring inclusive classroom environments through specialized support for 
            differently-abled learners and diverse socio-economic groups.
          </p>
        </div>

        <div className="bg-white border-2 border-dashed border-slate-200 p-8 rounded-3xl">
          <div className="flex items-center mb-4 text-slate-800">
            <ShieldAlert className="mr-3 text-red-500" />
            <h3 className="text-xl font-bold">Academic Grievance (5.4)</h3>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Transparent redressal system for student concerns regarding internal 
            assessments, project evaluations, and teaching methodologies.
          </p>
        </div>
      </div>
      
      <footer className="mt-16 text-center text-slate-400 text-xs tracking-widest uppercase">
        Process Attribute Compliance | SSR Documentation 2026
      </footer>
    </div>
  );
};

export default LearningTeaching;