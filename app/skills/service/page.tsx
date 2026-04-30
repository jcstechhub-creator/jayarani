"use client";

import PageHeader from "@/app/components/PageHeader";
import {
  HeartHandshake,
  Users,
  TreePine,
  Megaphone,
  Gift,
  Mic,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export default function ServiceAssociationsPage() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Service Associations"
        subtitle="Building responsible leaders through service and community engagement"
        breadcrumb="Home / Associations"
        // image="/newgirlimages/image-61.jpeg"
        image="/banner/banner4.jpeg"
      />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Service Associations at Jayarani College
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The service associations at Jayarani College—namely the NSS (National Service Scheme), YRC (Youth Red Cross), RRC (Red Ribbon Club), and Rotaract Club—serve as beacons of social responsibility and leadership.
            </p>
            <p className="mt-4 text-gray-600">
              These associations empower students to make a tangible difference, develop critical leadership skills, and contribute meaningfully to society.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/newgirlimages/image-101.jpeg"
              alt="Service Activities"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
            Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HeartHandshake,
                text: "Inculcate a spirit of service and civic responsibility",
              },
              {
                icon: Users,
                text: "Enhance social awareness and active participation",
              },
              {
                icon: TreePine,
                text: "Promote volunteerism and teamwork",
              },
              {
                icon: CheckCircle,
                text: "Develop leadership and collaboration skills",
              },
              {
                icon: Gift,
                text: "Contribute to community welfare",
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
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
            Core Activities & Functionalities
          </h2>

          {[
            {
              title: "Blood Donation Camps",
              icon: HeartHandshake,
              desc: "Organized by all service associations to support hospitals and save lives.",
              points: [
                "On-campus blood donation drives with medical teams",
                "Awareness on life-saving importance of blood donation",
                "Recognition of student donors",
              ],
            },
            {
              title: "Tree Plantation Drives",
              icon: TreePine,
              desc: "Led by NSS and Rotaract Club to promote sustainability.",
              points: [
                "Tree planting initiatives inside and outside campus",
                "Maintenance and care of saplings",
                "Collaboration with environmental groups",
              ],
            },
            {
              title: "Awareness Rallies",
              icon: Megaphone,
              desc: "Conducted by NSS, YRC, and RRC for social awareness.",
              points: [
                "Public awareness on health, road safety, environment",
                "Distribution of educational pamphlets",
                "Collaboration with NGOs and authorities",
              ],
            },
            {
              title: "Charity Drives & Alms Giving",
              icon: Gift,
              desc: "Helping underprivileged communities through donations.",
              points: [
                "Clothes, food, and educational supply donation",
                "Visits to elderly homes and shelters",
                "Festival-based charity events",
              ],
            },
            {
              title: "Motivational Talks & Workshops",
              icon: Mic,
              desc: "Organized by YRC and RRC to educate and inspire.",
              points: [
                "Guest sessions by experts and social activists",
                "Leadership and stress management workshops",
                "Health awareness programs (HIV, mental health)",
              ],
            },
            {
              title: "Disaster Relief Fundraising",
              icon: AlertTriangle,
              desc: "Support for natural disaster-affected regions.",
              points: [
                "Fundraising and donation drives",
                "Supply distribution to affected areas",
                "Coordination with relief organizations",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex gap-5"
            >
              {/* Icon */}
              <div className="bg-blue-900 text-white p-3 rounded-md h-fit">
                <item.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>

                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Impact & Achievements
            </h2>
            <p className="text-white/90 leading-relaxed">
              The service associations at Jayarani College have left an indelible mark on society. From saving lives through blood donation to promoting environmental sustainability and supporting disaster relief, students actively contribute to meaningful change. These initiatives reflect compassion, leadership, and a strong commitment to community development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}