"use client";

import PageHeader from "@/app/components/PageHeader";
import {
  ShieldCheck,
  Heart,
  Users,
  Sparkles,
  Lightbulb,
  Activity,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Women Empowerment Cell"
        subtitle="Inspiring confidence, leadership, and independence among women students"
        breadcrumb="Home / Cells"
        // image="/newgirlimages/image-97.jpeg"
        image="/banner/banner4.jpeg"
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Empowering Women for a Better Future
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Women Empowerment Cell (WEC) is a strong pillar of support,
              helping female students grow academically, socially, and personally.
              It nurtures confidence, independence, and leadership qualities.
            </p>

            <p className="text-gray-600 mt-4">
              Through awareness programs, mentoring, and activities, the cell
              ensures every student is prepared to face challenges and succeed
              in life.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/newgirlimages/image-100.jpeg"
              alt="Women Empowerment"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-10">
            Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Women’s Rights Awareness",
                desc: "Educating students about their rights and empowering them to act confidently.",
              },
              {
                icon: Heart,
                title: "Safety & Well-being",
                desc: "Promoting personal safety, hygiene, and overall wellness.",
              },
              {
                icon: Users,
                title: "Support Growth",
                desc: "Providing guidance for personal and professional development.",
              },
              {
                icon: Sparkles,
                title: "Celebrate Women",
                desc: "Recognizing achievements and milestones of women.",
              },
              {
                icon: Lightbulb,
                title: "Encourage Aspirations",
                desc: "Motivating students to pursue dreams and ambitions.",
              },
              {
                icon: Activity,
                title: "Positive Environment",
                desc: "Creating a safe and supportive space for growth.",
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
            Activities & Programs
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Awareness Programs",
                desc: "Workshops and seminars on women's rights and legal awareness.",
              },
              {
                title: "Health & Safety Seminars",
                desc: "Sessions on self-defense, hygiene, mental health, and wellness.",
              },
              {
                title: "Fitness & Well-being",
                desc: "Yoga, meditation, and fitness programs for physical and mental health.",
              },
              {
                title: "Celebrations & Events",
                desc: "International Women’s Day, cultural programs, and competitions.",
              },
              {
                title: "Counseling & Guidance",
                desc: "Career guidance, personal mentoring, and peer support groups.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-red-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="bg-red-900 text-white p-3 rounded-md">
                  <Sparkles className="w-5 h-5" />
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

      {/* Impact Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            Impact & Achievements
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The Women Empowerment Cell has created a strong impact by building
            confidence, awareness, and leadership among students. It has become
            a safe and inspiring space where women grow into independent and
            empowered individuals.
          </p>

          <p className="text-gray-600 mt-4">
            Through continuous programs and support, students are equipped with
            life skills, emotional strength, and the ability to contribute
            meaningfully to society.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Empowering Women, Shaping the Future
            </h2>
            <p className="text-white/90">
              Join us in building a strong, confident, and empowered generation
              of women leaders.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}