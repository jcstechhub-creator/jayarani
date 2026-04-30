"use client";

import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import {
  Rocket,
  Lightbulb,
  Users,
  Target,
  Network,
  BookOpen,
  GraduationCap,
  Briefcase,
  TrendingUp,
  UserCheck,
  Scissors,
  Paintbrush,
  Shirt,
} from "lucide-react";

export default function EDCPage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Entrepreneurship Development Cell (EDC)"
        subtitle="Empowering students to become future entrepreneurs"
        breadcrumb="Home / EDC"
        image={pageImages.innovationEdc}
      />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Igniting Entrepreneurial Spirit
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Entrepreneurship Development Cell (EDC) is dedicated to igniting the entrepreneurial spirit within students, equipping them with the tools, insights, and networks to transform ideas into successful ventures.
            </p>
            <p className="mt-4 text-gray-600">
              We inspire, guide, and support students from concept to execution, fostering innovation, resilience, and self-sufficiency.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/newgirlimages/image-71.jpeg"
              alt="Entrepreneurship"
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
              { icon: Lightbulb, text: "Develop entrepreneurial mindset and skills" },
              { icon: BookOpen, text: "Provide workshops and practical training" },
              { icon: Rocket, text: "Support startup creation and innovation" },
              { icon: Users, text: "Encourage collaboration and idea sharing" },
              { icon: Network, text: "Build industry partnerships and mentorship" },
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

      {/* Functionality */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
            Functionality
          </h2>

          {[
            {
              icon: GraduationCap,
              title: "Workshops & Training",
              desc: "Sessions on business strategy, leadership, marketing, and finance.",
            },
            {
              icon: UserCheck,
              title: "Mentoring Program",
              desc: "Guidance from entrepreneurs, executives, and faculty mentors.",
            },
            {
              icon: Briefcase,
              title: "Specialized Courses",
              desc: "Hands-on programs for practical entrepreneurial skills.",
            },
            {
              icon: TrendingUp,
              title: "Business Strategy",
              desc: "Market analysis, scaling, and startup planning sessions.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-900 text-white p-3 rounded-md">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
            Mentorship
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Experienced Entrepreneurs",
                text: "Insights from industry veterans.",
              },
              {
                icon: Briefcase,
                title: "Business Leaders",
                text: "Strategic guidance from professionals.",
              },
              {
                icon: GraduationCap,
                title: "Faculty Mentors",
                text: "Bridging theory and real-world practice.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-red-900 text-white p-3 rounded-md w-fit mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
            Specialized Training Programs
          </h2>

          {[
            {
              icon: Scissors,
              title: "3-Month Beautician Course",
              desc: "Training in threading, waxing, henna, massage, manicure, pedicure, and hair cutting.",
            },
            {
              icon: Paintbrush,
              title: "2-Month Embroidery Course",
              desc: "Creative embroidery techniques for skill development.",
            },
            {
              icon: Shirt,
              title: "Tailoring & Aari Work",
              desc: "Hands-on tailoring with Aari design techniques.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-900 text-white p-3 rounded-md">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Start Your Entrepreneurial Journey 🚀
            </h2>
            <p className="text-white/90">
              Join the EDC and turn your ideas into impactful ventures with mentorship, training, and strong industry support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}