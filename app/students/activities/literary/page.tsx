"use client";

import PageHeader from "@/app/components/PageHeader";
import { activityImages, contentImages } from "@/data/image";
import {
  BookOpen,
  Mic,
  PenTool,
  Users,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { pageImages } from '@/data/image'
export default function Page() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="The Literary Club"
        subtitle="A vibrant space for language, creativity, and expression"
        breadcrumb="Home / Clubs"
        // image={activityImages.literary}
        
                        image={pageImages.adminSecretary}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              A Hub for Literary Excellence
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Literary Club at Jayarani College is a dynamic platform for
              students passionate about language, literature, and expression.
              It nurtures creativity and builds strong communication skills
              in both Tamil and English.
            </p>

            <p className="text-gray-600 mt-4">
              Through engaging activities like debates, poetry, and writing,
              students develop confidence, analytical thinking, and a deep
              appreciation for literature.
            </p>
          </div>

          <div>
            <img
              src={activityImages.literatureIntro}
              alt="Literary Club"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Vision & Goals */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-10">
            Vision & Goals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Language Mastery",
                desc: "Enhancing proficiency in Tamil and English with clarity and expression.",
              },
              {
                icon: Lightbulb,
                title: "Critical Thinking",
                desc: "Encouraging debates and discussions to sharpen analytical skills.",
              },
              {
                icon: PenTool,
                title: "Creative Expression",
                desc: "Promoting poetry, storytelling, and essay writing.",
              },
              {
                icon: Mic,
                title: "Public Speaking",
                desc: "Building confidence in communication and presentations.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "Fostering teamwork through literary activities.",
              },
              {
                icon: MessageCircle,
                title: "Literary Appreciation",
                desc: "Exploring rich traditions of Tamil and English literature.",
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
            Activities & Initiatives
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Speech & Elocution",
                desc: "Competitions and training sessions to improve public speaking.",
              },
              {
                title: "Debate Sessions",
                desc: "Weekly debates and intercollegiate competitions.",
              },
              {
                title: "Essay Writing",
                desc: "Monthly writing contests on various themes.",
              },
              {
                title: "Poetry & Creative Writing",
                desc: "Poetry recitations and creative workshops.",
              },
              {
                title: "Book Clubs",
                desc: "Literary discussions on classic and modern works.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-red-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="bg-red-900 text-white p-3 rounded-md">
                  <BookOpen className="w-5 h-5" />
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

      {/* Achievements */}
      <section className="py-16 bg-red-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            Achievements & Impact
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The Literary Club has nurtured confident speakers, talented writers,
            and passionate readers. Students have achieved recognition in
            debates, essay competitions, and literary events at state and
            national levels.
          </p>

          <p className="text-gray-600 mt-4">
            The club continues to inspire creativity, intellectual growth, and
            a deep love for literature, shaping the cultural identity of the
            college.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Discover the Power of Words
            </h2>
            <p className="text-white/90">
              Join the Literary Club and explore creativity, communication,
              and confidence through language.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}