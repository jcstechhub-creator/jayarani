"use client";

import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
// import PageHeader from "@/components/PageHeader";
import {
  Target,
  Briefcase,
  Users,
  Brain,
  Award,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

import {
  FileText,
  Laptop,
  Mic,
  MessageSquare,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Capacity Building Trainings"
        subtitle="Empowering students with skills, confidence, and career readiness"
        breadcrumb="Home / Training & Placement"
        image={pageImages.placementTraining}
      />

      {/* Intro + Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-900">
              Training & Placement Cell
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Training and Placement Cell at Jayarani College plays a vital role in preparing students for real-world careers through structured training programs.
            </p>
            <p className="mt-4 text-gray-600">
              These programs focus on technical knowledge, soft skills, and confidence-building to make students industry-ready.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/newgirlimages/image-91.jpeg"
              alt="Training"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-red-900 text-center">
            Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                text: "Enhance employability and career readiness",
              },
              {
                icon: Users,
                text: "Strengthen communication and leadership skills",
              },
              {
                icon: Brain,
                text: "Build technical competence",
              },
              {
                icon: Award,
                text: "Boost confidence for interviews",
              },
              {
                icon: Target,
                text: "Promote professional ethics",
              },
              {
                icon: Lightbulb,
                text: "Create career awareness",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 mx-auto text-red-900 mb-4" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-red-900 text-center">
            Key Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Workshops & Hands-on Sessions",
              "Industry Expert Interactions",
              "Mock Interviews & Group Discussions",
              "Online Certifications",
              "Soft Skills Development",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm"
              >
                <CheckCircle className="text-green-600" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
  

{/* Programs */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-6 space-y-6">
    <h2 className="text-3xl font-bold mb-6 text-red-900 text-center">
      Programs & Activities
    </h2>

    {[
      {
        title: "Aptitude Training",
        desc: "Quantitative aptitude, reasoning, verbal ability, and problem-solving skills.",
        icon: Brain,
      },
      {
        title: "Resume & Interview Preparation",
        desc: "Professional resume creation and interview techniques.",
        icon: FileText,
      },
      {
        title: "Soft Skills Development",
        desc: "Communication, leadership, teamwork, and time management.",
        icon: Users,
      },
      {
        title: "Industry-Specific Skills",
        desc: "Technical training and corporate readiness programs.",
        icon: Laptop,
      },
      {
        title: "Guest Lectures",
        desc: "Insights from industry professionals and experts.",
        icon: Mic,
      },
      {
        title: "Mock GD & Psychometric Tests",
        desc: "Practice for recruitment processes and personality evaluation.",
        icon: MessageSquare,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
      >
        {/* Icon Box */}
        <div className="bg-red-900 text-white p-3 rounded-md">
          <item.icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  

      {/* Conclusion */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
               {/* <div className="bg-blue-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Conclusion
            </h2>
            <p className="text-white/90 leading-relaxed">
              These initiatives empower students with essential skills, confidence, and leadership qualities, ensuring they succeed in their careers and contribute meaningfully to society.
            </p>
          </div> */}
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Empowering Future Leaders
            </h2>
            <p className="text-white/90">
              These training initiatives ensure students are confident, skilled, and ready to succeed in their careers and beyond.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}