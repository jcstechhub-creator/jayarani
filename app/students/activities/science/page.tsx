"use client";

import PageHeader from "@/app/components/PageHeader";
import { activityImages } from "@/data/image";
import {
  Atom,
  Lightbulb,
  Microscope,
  BookOpen,
  Users,
  Activity,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Science Club"
        subtitle="Igniting curiosity, innovation, and scientific thinking"
        breadcrumb="Home / Clubs"
        image={activityImages.science}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Exploring the Wonders of Science
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Science Club at Jayarani College is a vibrant platform that
              nurtures curiosity, innovation, and scientific thinking among
              students. It encourages learners to explore beyond textbooks
              and understand real-world applications of science.
            </p>

            <p className="text-gray-600 mt-4">
              Through engaging activities, discussions, and hands-on learning,
              students develop analytical skills, creativity, and a deeper
              appreciation for scientific advancements.
            </p>
          </div>

          <div>
            <img
              src={activityImages.scienceIntro}
              alt="Science Club"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-10">
            Our Aspirations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Atom,
                title: "Scientific Knowledge",
                desc: "Enhancing understanding of scientific concepts and real-world applications.",
              },
              {
                icon: Activity,
                title: "Hands-on Learning",
                desc: "Encouraging active participation through practical activities.",
              },
              {
                icon: Microscope,
                title: "Research Skills",
                desc: "Developing research ability and scientific communication.",
              },
              {
                icon: BookOpen,
                title: "Latest Discoveries",
                desc: "Keeping students updated with modern scientific advancements.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Encouraging creativity and problem-solving through projects.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "Promoting teamwork and knowledge sharing among students.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <div className="bg-red-100 text-red-900 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <item.icon className="w-6 h-6" />
                </div>

                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-10">
            Core Activities
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Weekly Science Quiz",
                desc: "Interactive quizzes during assembly to boost scientific awareness.",
              },
              {
                title: "Science Charades",
                desc: "Creative mono acting of scientific terms for fun learning.",
              },
              {
                title: "Student Seminars",
                desc: "Presentations on scientific topics with discussions and Q&A.",
              },
              {
                title: "Scientific News Display",
                desc: "Showcasing latest developments in science and technology.",
              },
              {
                title: "Magazine Review",
                desc: "Analyzing science journals and sharing global insights.",
              },
              {
                title: "Inventors & Inventions",
                desc: "Creative charts highlighting key discoveries and scientists.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-red-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="bg-red-900 text-white p-3 rounded-md">
                  <Atom className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            Impact & Achievements
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The Science Club has inspired students to explore science beyond
            academics. It builds confidence, enhances analytical thinking, and
            strengthens communication skills.
          </p>

          <p className="text-gray-600 mt-4">
            Students actively participate in science fairs and competitions,
            gaining recognition and contributing to the college’s academic
            excellence.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Discover, Explore, Innovate
            </h2>
            <p className="text-white/90">
              Join the Science Club and unlock your potential through curiosity,
              creativity, and scientific discovery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}