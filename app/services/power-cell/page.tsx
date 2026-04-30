"use client";

import PageHeader from "@/app/components/PageHeader";
import {
  Heart,
  Users,
  Lightbulb,
  ShieldCheck,
  Smile,
  BookOpen,
  Sparkles,
  Activity,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Infant Jesus Power Cell"
        subtitle="Nurturing faith, values, and a meaningful life"
        breadcrumb="Home / Infant Jesus Power Cell"
        // image="/newgirlimages/image-69.jpeg"
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
              The Infant Jesus Power Cell at Jayarani College is a spiritual
              and value-based initiative that strengthens the faith life of students.
              It builds a foundation of discipline, devotion, and moral values.
            </p>

            <p className="mt-4 text-gray-600">
              Through prayer, reflection, and service, students are inspired to
              grow closer to God while cultivating kindness, humility, and respect.
            </p>

            <p className="mt-4 text-gray-600">
              The cell guides students to live a meaningful, service-oriented life
              following the path of simplicity and faith.
            </p>
          </div>

          <img
            src="/newgirlimages/image-95.jpeg"
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
                icon: Heart,
                text: "Spiritual growth through prayer and reflection",
              },
              {
                icon: ShieldCheck,
                text: "Build moral values like honesty and compassion",
              },
              {
                icon: Users,
                text: "Promote unity and teamwork",
              },
              {
                icon: Lightbulb,
                text: "Develop positive attitude and resilience",
              },
              {
                icon: Smile,
                text: "Encourage service and kindness",
              },
              {
                icon: Sparkles,
                text: "Strengthen social responsibility",
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
            Activities & Programs
          </h2>

          {[
            {
              title: "Spiritual Enrichment",
              icon: BookOpen,
              desc: "Prayer meetings, rosary, gospel sharing, and spiritual talks to strengthen faith.",
              image: "/newgirlimages/image-13.jpeg",
            },
            {
              title: "Value Education",
              icon: Heart,
              desc: "Workshops, discussions, and skits promoting honesty, humility, and compassion.",
              image: "/newgirlimages/image-109.jpeg",
            },
            {
              title: "Community Outreach",
              icon: Users,
              desc: "Visits to orphanages, charity drives, and volunteering for social causes.",
              image: "/newgirlimages/image-97.jpeg",
            },
            {
              title: "Faith Celebrations",
              icon: Sparkles,
              desc: "Holy mass, feast celebrations, cultural programs, and competitions.",
              image: "/newgirlimages/image-98.jpeg",
            },
            {
              title: "Well-being & Guidance",
              icon: Activity,
              desc: "Counseling, stress management, and peer support activities.",
              image: "/newgirlimages/image-99.jpeg",
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
              Guiding Young Minds
            </h2>
            <p className="text-white/90 leading-relaxed">
              The Infant Jesus Power Cell nurtures students to live with faith,
              humility, and purpose. It empowers them to grow spiritually while
              becoming responsible, compassionate individuals who contribute
              positively to society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}