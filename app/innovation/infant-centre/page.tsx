"use client";

import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import {
  Rocket,
  Lightbulb,
  Cpu,
  Users,
  Network,
  Megaphone,
  Bot,
  Code,
  Globe,
  Presentation,
  GraduationCap,
} from "lucide-react";

export default function InnovationCentrePage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Infant Innovation Centre"
        subtitle="Transforming ideas into impactful innovations and startups"
        breadcrumb="Home / Innovation Centre"
        image={pageImages.innovationInfantCentre}
      />

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              A Hub of Innovation & Creativity
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Infant Innovation Centre at Jayarani College, Salem, stands as a beacon of ingenuity and transformative learning, enabling students to convert ideas into real-world solutions.
            </p>
            <p className="mt-4 text-gray-600">
              It acts as a launchpad for ideation, prototyping, and entrepreneurship, supported by mentorship, collaboration, and cutting-edge learning opportunities.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/newgirlimages/image-73.jpeg"
              alt="Innovation Lab"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Vision / Objectives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-12">
            Vision & Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "Innovation Ecosystem",
                text: "Drive research, creativity, and entrepreneurship through IIC and Media collaboration.",
              },
              {
                icon: Lightbulb,
                title: "Student Innovation",
                text: "Encourage ideation, prototype building, and real-world problem solving.",
              },
              {
                icon: Rocket,
                title: "Startup Enablement",
                text: "Support students in launching startups with mentorship and incubation.",
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "Promote interdisciplinary teamwork and creative problem-solving.",
              },
              {
                icon: GraduationCap,
                title: "Entrepreneurship Skills",
                text: "Train students in business strategy, funding, and market analysis.",
              },
              {
                icon: Megaphone,
                title: "Media & Visibility",
                text: "Showcase student innovation through digital and media platforms.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              >
                <div className="bg-blue-900 text-white p-3 rounded-md w-fit mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
            Operational Framework
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Ideation to Prototyping with real tools",
              "Expert mentorship from faculty & industry leaders",
              "Startup incubation & business model development",
              "Interdisciplinary collaboration",
              "Networking with entrepreneurs & investors",
              "Media exposure through digital platforms",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm"
              >
                <div className="bg-blue-900 text-white p-2 rounded-md">
                  <CheckIcon />
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-12">
            Signature Activities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Robotics Contest",
                text: "Build robots and solve real-world challenges.",
              },
              {
                icon: Code,
                title: "Hackathons",
                text: "Develop innovative solutions in competitive environments.",
              },
              {
                icon: Globe,
                title: "Social Media Campaigns",
                text: "Showcase projects and build digital presence.",
              },
              {
                icon: Rocket,
                title: "Startup Incubation",
                text: "Mentorship from idea to business launch.",
              },
              {
                icon: Cpu,
                title: "Workshops",
                text: "AI, IoT, Blockchain & future tech training.",
              },
              {
                icon: Presentation,
                title: "Innovation Expo",
                text: "Present projects to industry & investors.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="bg-red-900 text-white p-3 rounded-md w-fit mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Building Future Innovators 🚀
            </h2>
            <p className="text-white/90">
              The Infant Innovation Centre transforms Jayarani College into a hub of creativity, collaboration, and entrepreneurship—empowering students to make a real-world impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* Small reusable icon */
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}