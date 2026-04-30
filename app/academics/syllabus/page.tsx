"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  BookOpen, 
  Download, 
  FileText, 
  Layers, 
  GraduationCap, 
  Library,
  Info,
  ExternalLink
} from "lucide-react";

// import { FileText, Download } from "lucide-react";

export default function SyllabusPage() {
const syllabusData = [
  {
    dept: "Syllabus for Affiliated Colleges",
    courses: [
      {
        name: "Academic Year 2025 Onwards",
        year: "2025",
        link: "https://www.periyaruniversity.ac.in/SyllabusAffi2025.php",
      },
      {
        name: "Academic Year 2024 Onwards",
        year: "2024",
        link: "https://www.periyaruniversity.ac.in/SyllabusAffi2024.php",
      },
      {
        name: "Academic Year 2023 Onwards",
        year: "2023",
        link: "https://www.periyaruniversity.ac.in/SyllabusAffi2023.php",
      },
    ],
  },
];


  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Curriculum & Syllabus"
        subtitle="Access the comprehensive academic roadmap for your chosen discipline."
        breadcrumb="Home / Academics / Syllabus"
        image={pageImages.academicsSyllabus}
      />

      {/* --- ACADEMIC STRUCTURE SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Academic Framework</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
                Choice Based <br />
                <span className="text-[#2F4A8A]/50 italic font-light tracking-tight">Credit System (CBCS)</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                Jayarani College follows the CBCS pattern prescribed by Periyar University. 
                This flexible system allows students to choose from a wide range of elective 
                and core subjects, fostering a multidisciplinary learning environment.
              </p>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Layers className="text-[#2F4A8A]" size={20} />
                </div>
                <p className="text-sm font-medium text-slate-700 uppercase tracking-tighter">
                  Outcome Based Education (OBE) Integration
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1A2E5A] p-8 rounded-3xl text-white flex flex-col justify-between h-64">
                <BookOpen className="text-yellow-400" size={32} />
                <div>
                  <h4 className="text-xl font-bold">Standardized</h4>
                  <p className="text-blue-100/60 text-xs mt-2">Aligned with University norms.</p>
                </div>
              </div>
              <div className="bg-slate-100 p-8 rounded-3xl flex flex-col justify-between h-64 mt-12">
                <GraduationCap className="text-[#2F4A8A]" size={32} />
                <div>
                  <h4 className="text-xl font-bold text-[#1A2E5A]">Diverse</h4>
                  <p className="text-slate-500 text-xs mt-2">Arts, Science, & Commerce.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SYLLABUS DOWNLOADS --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Library className="text-yellow-600" size={32} />
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Year Based Syllabus</h3>
          </div>

       <div className="grid md:grid-cols-1 gap-8">
      {syllabusData.map((section, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
        >
          <h4 className="text-xl font-bold text-[#2F4A8A] mb-6 border-b border-slate-100 pb-4">
            {section.dept}
          </h4>

          <div className="space-y-4">
            {section.courses.map((course, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group hover:bg-blue-50 transition-colors"
              >
                {/* Left Content */}
                <div className="flex items-center gap-4">
                  <FileText
                    className="text-slate-400 group-hover:text-[#2F4A8A]"
                    size={20}
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {course.name}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                      Academic Year: {course.year}
                    </p>
                  </div>
                </div>

                {/* Download Button */}
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm text-[#2F4A8A] hover:bg-[#2F4A8A] hover:text-white transition-all text-sm font-semibold"
                >
                  <Download size={16} />
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* --- EXTERNAL RESOURCES --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Info className="mx-auto text-slate-200 mb-6" size={48} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4 text-center">University Regulations</h3>
          <p className="text-slate-500 font-light leading-relaxed mb-10">
            For the most up-to-date university-wide regulations and special ordinances, 
            please visit the official Periyar University academic portal.
          </p>
          <a 
            href="https://www.periyaruniversity.ac.in/" 
            target="_blank" 
            className="inline-flex items-center gap-2 bg-[#2F4A8A] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#1A2E5A] transition-all"
          >
            PERIYAR UNIVERSITY PORTAL <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}