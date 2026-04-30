"use client";

import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import {
  Briefcase,
  Building,
  GraduationCap,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Career Development Programmes"
        subtitle="Empowering students with skills, exposure, and career success"
        breadcrumb="Home / Training & Placement"
        image={pageImages.placementCareer}
      />

      {/* Intro + Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-900">
              Career Development at Jayarani
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Training and Placement Cell empowers students through structured
              career programmes that enhance skills, knowledge, and real-world exposure.
            </p>
            <p className="mt-4 text-gray-600">
              We prepare students to succeed in corporate, entrepreneurship, and academic careers.
            </p>
          </div>

          <img
            src="/newgirlimages/image-82.jpeg"
            alt="Career"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Career Guidance */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <img
            src="/newgirlimages/image-83.jpeg"
            alt="Guidance"
            className="rounded-2xl shadow-lg"
          />

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-900">
              Career Guidance & Counselling
            </h2>

            {[
              "One-on-one mentorship for career planning",
              "Resume building and interview training",
              "Guidance for corporate, entrepreneurship, and academics",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-3">
                <CheckCircle className="text-green-600" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Industry Exposure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold mb-10 text-red-900 text-center">
            Industry Exposure
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Industrial visits to IT & corporate companies",
              "Exposure to AI, Data Science, and tech",
              "Visits to media, finance & research sectors",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-red-900 text-white w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-4">
                  <Building />
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Internships + Image */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-900">
              Internship Programmes
            </h2>

            {[
              "Real-world practical experience",
              "Build industry connections",
              "Understand workplace culture",
              "Boost placement opportunities",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-3">
                <CheckCircle className="text-green-600" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <img
            src="/newgirlimages/image-84.jpeg"
            alt="Internship"
            className="rounded-2xl shadow-lg"
          />

        </div>
      </section>

      {/* Higher Education */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-red-900 text-center">
            Higher Education Guidance
          </h2>

          {[
            "Postgraduate course selection guidance",
            "Scholarship and study abroad support",
            "Academic growth resources",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
              <div className="bg-red-900 text-white p-2 rounded-md">
                <GraduationCap />
              </div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitive Exams */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-red-900 text-center">
            Competitive Exam Preparation
          </h2>

          {[
            "Coaching for UPSC, GATE, CAT, GRE",
            "Mock tests and study materials",
            "Expert strategies and preparation tips",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
              <div className="bg-red-900 text-white p-2 rounded-md">
                <BookOpen />
              </div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Start Your Career Journey Today
            </h2>
            <p className="text-white/90">
              Gain skills, confidence, and opportunities to succeed in your future career.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}