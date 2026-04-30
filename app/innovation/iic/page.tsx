"use client";

import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import {
  Lightbulb,
  Rocket,
  Users,
  Network,
  Brain,
  FlaskConical,
  Target,
  Calendar,
  MessageSquare,
  Factory,
  GraduationCap,
  Trophy,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

export default function IICPage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Institution's Innovation Council (IIC)"
        subtitle="Fostering innovation, creativity, and entrepreneurship"
        breadcrumb="Home / Innovation Council"
        image={pageImages.innovationIic}
      />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              About IIC
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Institution's Innovation Council (IIC) at Jayarani College, Salem, established in 2022–23 under the Ministry of Education's Innovation Cell (MIC), promotes innovation, creativity, and entrepreneurship among students and faculty.
            </p>
            <p className="mt-4 text-gray-600">
              It nurtures ideas, transforms them into real-world solutions, and empowers students to lead future innovations.
            </p>
          </div>

          <div>
            <img
              src="/newgirlimages/image-72.jpeg"
              alt="Innovation"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-12">
            Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, text: "Promote innovation culture and creative thinking" },
              { icon: Rocket, text: "Encourage entrepreneurship and startups" },
              { icon: Target, text: "Support idea development and incubation" },
              { icon: Network, text: "Collaborate with industry and academia" },
              { icon: Brain, text: "Enhance innovation and research skills" },
              { icon: FlaskConical, text: "Encourage research for real-world solutions" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg">
                <div className="bg-blue-900 text-white p-3 rounded-md w-fit mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functioning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
            Functioning of IIC
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Calendar, text: "Regular meetings to review and plan innovation activities" },
              { icon: MessageSquare, text: "Brainstorming sessions and idea generation workshops" },
              { icon: Users, text: "Mentorship for students and faculty projects" },
              { icon: Factory, text: "Industry collaborations and exposure" },
              { icon: GraduationCap, text: "Skill-building and capacity development programs" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="bg-blue-900 text-white p-2 rounded-md">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
            Key Activities
          </h2>

          {[
            {
              title: "Innovation Awareness Programs",
              icon: BookOpen,
              desc: "Seminars, guest lectures, and workshops on innovation and entrepreneurship.",
            },
            {
              title: "Competitions & Hackathons",
              icon: Trophy,
              desc: "Idea challenges, business plan contests, and hackathons.",
            },
            {
              title: "Startup Support",
              icon: Rocket,
              desc: "Mentorship, business planning, and funding guidance.",
            },
            {
              title: "Industry Talks & Visits",
              icon: Factory,
              desc: "Insights from entrepreneurs and industry exposure.",
            },
            {
              title: "Research & Development",
              icon: FlaskConical,
              desc: "Encouraging interdisciplinary research projects.",
            },
            {
              title: "Skill Development Workshops",
              icon: Brain,
              desc: "Training in design thinking, prototyping, and IPR.",
            },
            {
              title: "Innovation Day",
              icon: Calendar,
              desc: "Annual showcase of projects and startups.",
            },
            {
              title: "Internships & Opportunities",
              icon: Users,
              desc: "Industry internships and research exposure.",
            },
            {
              title: "IPR Awareness",
              icon: ShieldCheck,
              desc: "Workshops on patents and intellectual property rights.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-5 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="bg-red-900 text-white p-3 rounded-md h-fit">
                <item.icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Driving Innovation for the Future 🚀
            </h2>
            <p className="text-white/90">
              The IIC at Jayarani College empowers students to transform ideas into impactful innovations through mentorship, collaboration, and real-world exposure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}