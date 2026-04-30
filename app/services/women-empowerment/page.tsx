"use client";

import PageHeader from "@/app/components/PageHeader";
import {
  ShieldCheck,
  Heart,
  Users,
  Award,
  Lightbulb,
  Activity,
  BookOpen,
  Smile,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Women Empowerment Cell"
        subtitle="Empowering women to lead, inspire, and succeed"
        breadcrumb="Home / Women Empowerment Cell"
        // image="/newgirlimages/image-67.jpeg"
        image="/banner/banner4.jpeg"
      />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              About the Cell
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Women Empowerment Cell (WEC) is a dynamic platform dedicated to
              nurturing confidence, independence, and leadership among female students.
              It supports their academic, personal, and social growth through structured
              initiatives and guidance.
            </p>

            <p className="mt-4 text-gray-600">
              Through education, awareness, and mentorship, WEC empowers women to become
              strong individuals and impactful contributors to society.
            </p>
          </div>

          <img
            src="/newgirlimages/image-106.jpeg"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-10">
            Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                text: "Promote awareness on women's rights",
              },
              {
                icon: Heart,
                text: "Enhance safety, health, and well-being",
              },
              {
                icon: Users,
                text: "Support personal & professional growth",
              },
              {
                icon: Award,
                text: "Celebrate women's achievements",
              },
              {
                icon: Lightbulb,
                text: "Encourage confidence and independence",
              },
              {
                icon: Smile,
                text: "Create a supportive environment",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
              >
                <div className="bg-red-900 text-white w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-4">
                  <item.icon />
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-10">

          <h2 className="text-3xl font-bold text-red-900 text-center">
            Activities & Initiatives
          </h2>

          {/* Activity Blocks */}
          {[
            {
              title: "Women’s Rights Awareness",
              icon: BookOpen,
              desc: "Workshops, seminars, and discussions on legal rights and protections.",
              image: "/newgirlimages/image-107.jpeg",
            },
            {
              title: "Safety, Health & Hygiene",
              icon: ShieldCheck,
              desc: "Sessions on self-defense, mental health, hygiene, and wellness.",
              image: "/newgirlimages/image-108.jpeg",
            },
            {
              title: "Fitness & Well-being",
              icon: Activity,
              desc: "Yoga, meditation, fitness programs, and healthy lifestyle initiatives.",
              image: "/newgirlimages/image-100.jpeg",
            },
            {
              title: "Celebrating Women",
              icon: Award,
              desc: "Events for Women’s Day, Girl Child Day, competitions & cultural programs.",
              image: "/newgirlimages/image-109.jpeg",
            },
            {
              title: "Guidance & Counseling",
              icon: Users,
              desc: "Career counseling, mentorship, and peer support programs.",
              image: "/newgirlimages/image-90.jpeg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl shadow-md"
            >
              {/* Image */}
              <img
                src={item.image}
                className="rounded-xl h-60 w-full object-cover"
              />

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-900 text-white p-2 rounded-md">
                    <item.icon />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Impact & Achievements
            </h2>
            <p className="text-white/90 leading-relaxed">
              The Women Empowerment Cell has created a strong foundation of confidence,
              awareness, and leadership among students. Through continuous initiatives,
              it has empowered women with life skills, safety knowledge, and the courage
              to achieve their dreams.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}