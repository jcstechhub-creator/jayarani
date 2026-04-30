"use client";

import React from "react";
import {
  BookOpen,
  Calendar,
  FileText,
  Users,
  GraduationCap,
  Award,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";

export default function AcademicsPage() {
  const academicFeatures = [
    {
      title: "Departments",
      desc: "Explore our diverse range of specialized departments led by industry experts.",
      icon: BookOpen,
      path: "/academics/departments",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Academic Calendar",
      desc: "Stay updated with key dates, semester schedules, and examination timelines.",
      icon: Calendar,
      path: "/academics/calendar",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Syllabus & Curriculum",
      desc: "Detailed POs, COs, and curriculum frameworks for all undergraduate programs.",
      icon: FileText,
      path: "/academics/syllabus",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Faculty Excellence",
      desc: "Profiles of our dedicated educators committed to academic and moral growth.",
      icon: Users,
      path: "/faculty-details",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* --- HERO SECTION --- */}

      <PageHeader
        title="Academic Council"
        subtitle="The apex body responsible for maintaining the standard of education and academic integrity."
        breadcrumb="Home / About / Academic Council"
        image={pageImages.aboutAcademicCouncil}
      />
      {/* <section className="bg-[#2F4A8A] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic Excellence
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Nurturing intellectual curiosity and professional competence through 
            a holistic and rigorous educational framework at Jayarani College.
          </p>
        </div>
      </section> */}

      {/* --- OVERVIEW & STATS --- */}
      <section className="max-w-7xl mx-auto px-6 mt-10 z-50 ">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#2F4A8A] font-bold text-sm uppercase tracking-widest">Our Approach</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Empowering Women Through Knowledge</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our academic programs are designed to align with the latest industry trends and university standards.
                We focus on Outcome Based Education (OBE) to ensure every student achieves specific Program Outcomes (POs)
                and Course Outcomes (COs).
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Award className="text-yellow-600 w-5 h-5" />
                  </div>
                  <span className="font-semibold text-gray-700">NAAC Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <GraduationCap className="text-blue-600 w-5 h-5" />
                  </div>
                  <span className="font-semibold text-gray-700">OBE Framework</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-[#2F4A8A]">08+</h3>
                <p className="text-sm text-gray-500 font-medium">Departments</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-[#2F4A8A]">100%</h3>
                <p className="text-sm text-gray-500 font-medium">Academic Support</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-[#2F4A8A]">Digital</h3>
                <p className="text-sm text-gray-500 font-medium">Classrooms</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-[#2F4A8A]">OBE</h3>
                <p className="text-sm text-gray-500 font-medium">Curriculum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK NAV GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">Academic Resources</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicFeatures.map((feature, i) => (
            <Link
              key={i}
              href={feature.path}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {feature.desc}
              </p>
              <div className="flex items-center text-[#2F4A8A] font-bold text-xs uppercase tracking-wider">
                Explore Now <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}