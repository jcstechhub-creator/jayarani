"use client";

import React from 'react';
import { 
  Lightbulb, ClipboardCheck, Users, Monitor, 
  ShieldAlert, Briefcase, Microscope, GraduationCap 
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const LearningTeaching = () => {
  const metrics = [
    {
      id: "5.1",
      title: "Pedagogical Approaches",
      features: ["Kinesthetic & Game-based Learning", "Experiential & Blended Modes", "Participative Learning"],
      icon: <Lightbulb className="text-amber-500" />
    },
    {
      id: "5.2",
      title: "Internships & Field Projects",
      features: ["Mandatory Industry Internships", "Field Work & Community Projects", "Research-based Dissertations"],
      icon: <Briefcase className="text-indigo-500" />
    },
    {
      id: "5.3",
      title: "Assessment Process",
      features: ["Continuous Internal Evaluation", "Case Study Assessments", "Open Book & MCQ Exams"],
      icon: <ClipboardCheck className="text-green-500" />
    },
    {
      id: "5.4",
      title: "Industry Academia Linkage",
      features: ["MOU-based Collaborations", "Expert Guest Lectures", "Industrial Consultancy"],
      icon: <Microscope className="text-rose-500" />
    },
    {
      id: "5.5",
      title: "Catering to Diversity",
      features: ["Remedial Coaching", "Advanced Learner Programs", "Divyangjan Support Systems"],
      icon: <Users className="text-purple-500" />
    },
    {
      id: "5.6",
      title: "LMS Integration",
      features: ["Cloud-based Content Delivery", "Digital Repository Access", "Automated Feedback Loops"],
      icon: <Monitor className="text-blue-500" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Learning & Teaching"
        subtitle="Advancing pedagogical excellence through innovative methodologies, industry immersion, and inclusive digital integration."
        breadcrumb="Home / Academics / Learning-Teaching"
        image={pageImages.adminSecretary}
      />

      {/* Main Framework Section */}
      <main className="max-w-7xl mx-auto py-16 px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Process Attribute Compliance</h2>
          <p className="text-slate-500 mt-2">New NAAC Metrics Alignment - March 2024 Framework</p>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Process Metric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((m) => (
            <div key={m.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-300">
              <span className="absolute top-6 right-6 text-[10px] font-bold font-mono text-slate-300 bg-slate-50 px-2 py-1 rounded">
                METRIC {m.id}
              </span>
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-50 transition-colors">
                {m.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{m.title}</h3>
              <ul className="space-y-3">
                {m.features.map((f) => (
                  <li key={f} className="text-sm text-slate-600 flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 shrink-0"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Detailed Insight Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
            <div className="relative z-10">
              <GraduationCap className="w-12 h-12 text-blue-300 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Student-Centric Methods</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Our teaching philosophy shifts focus from "What to learn" to "How to apply." 
                By integrating Industry Linkages (5.4) and Field Projects (5.2), we ensure 
                graduates possess both theoretical depth and professional readiness.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-semibold">Project-Based Learning</div>
                <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-semibold">Social Responsibility</div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <div className="flex items-center mb-4 text-slate-800">
                <ShieldAlert className="mr-3 text-red-500" />
                <h3 className="text-xl font-bold">Academic Grievance Redressal</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                As per Attribute 5.4, we maintain a transparent, time-bound system for 
                addressing student concerns regarding internal evaluations and project marks 
                to ensure absolute fairness.
              </p>
            </div>
            
            <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
              <h4 className="font-bold text-green-900 mb-2">Impact Highlight</h4>
              <p className="text-green-700 text-sm">
                92% of our programs include field-based learning components, directly 
                contributing to higher employability and research capability.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="pb-20 text-center text-slate-400 text-xs tracking-[0.2em] uppercase">
        Jayarani College | Process Attribute Compliance Series 2026
      </footer>
    </div>
  );
};

export default LearningTeaching;