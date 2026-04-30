import React from "react";
import PageHeader from "../components/PageHeader";
import { BookOpen, Clock, Users, Award, CheckCircle, Star, Target, Briefcase, TrendingUp } from "lucide-react";

interface CoursePageProps {
  title: string;
  code: string;
  duration: string;
  seats: string;
  eligibility: string;
  image: string;
  content: {
    objectives: string[];
    vision?: string;
    mission?: string[];
    features: string[];
    blendedLearning: string;
    activities: string[];
    addOnCourses: string[];
    benefits: string[];
    empowerment: string[];
  };
}

const CoursePage = ({ title, code, duration, seats, eligibility, image, content }: CoursePageProps) => (
  <div className="bg-slate-50 min-h-screen">
    <PageHeader image={image} title={title} subtitle={code} breadcrumb="Home / Courses" />

    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-12">
        
        {/* LEFT CONTENT: Focus on Capabilities */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Core Capabilities */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-900">
            <h2 className="text-2xl text-red-900 font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6" /> What You Will Be Capable Of
            </h2>
            <div className="grid md:grid-cols-1 gap-4">
              {content.objectives.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-lg group hover:bg-red-50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Department Features */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Exclusive Department Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                  <span className="text-slate-600 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Empowerment & Future Scope - HIGH IMPACT SECTION */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-8 rounded-2xl text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-200">
              <TrendingUp className="w-6 h-6" /> Career Scope & Future Growth
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.empowerment.map((e, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-blue-800/50 p-2 rounded-lg h-fit">
                    <Briefcase className="w-5 h-5 text-blue-300" />
                  </div>
                  <p className="text-blue-50 leading-relaxed text-sm">{e}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-red-900">Professional Benefits</h3>
              <ul className="space-y-3">
                {content.benefits.map((b, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex gap-2">
                    <Star className="w-4 h-4 text-yellow-500 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-red-900">Add-On Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {content.addOnCourses.map((c, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-lg text-xs font-bold border border-blue-200 uppercase tracking-wider">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR: Quick Admissions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sticky top-28 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b pb-4 text-center">Course Overview</h3>

            <div className="space-y-6">
              {[
                { icon: Clock, label: "Duration", value: duration, color: "text-blue-600" },
                { icon: Users, label: "Seat Capacity", value: seats, color: "text-green-600" },
                { icon: BookOpen, label: "Entry Eligibility", value: eligibility, color: "text-red-600" },
                { icon: Award, label: "Certificate", value: "Degree + Certifications", color: "text-purple-600" }
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-slate-50 group-hover:bg-white transition-colors shadow-sm`}>
                       <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                  </div>
                  <p className="text-sm font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-red-900 hover:bg-red-800 text-white font-bold rounded-xl shadow-lg shadow-red-900/20 transition-all transform hover:-translate-y-1">
              Apply for Admission
            </button>
            <p className="text-center text-xs text-slate-400 font-medium uppercase tracking-widest">Enrollment Open 2026-27</p>
          </div>
        </div>

      </div>
    </section>
  </div>
);

export default CoursePage;