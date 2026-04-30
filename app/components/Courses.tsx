import Link from "next/link";
import React from "react";
import { commoncourse, courseImages } from "../../data/image";

import {
  BookOpen,
  Laptop,
  Calculator,
  Brain,
  TrendingUp,
  Globe,
} from "lucide-react";

function Courses() {
  const courses = [
    { name: "B.A. English", desc: "Language, literature & communication", path: "/admission/programs/bsc/ba-english", icon: BookOpen, image: "/courses/ug_ba_english.png" },
    { name: "B.Com. General", desc: "Business, finance & accounting basics", path: "/admission/programs/bsc/bcom", icon: TrendingUp, image: "/courses/ug_bcom.png" },
    // { name: "B.Com. CA", desc: "Commerce integrated with IT", path: "/admission/programs/bsc/bcom-ca", icon: Laptop, image: "/courses/ug_bcom_ca.png" },
    { name: "B.Sc. Computer Science", desc: "Core computing & programming", path: "/admission/programs/bsc/bsc-cs", icon: Laptop, image: "/courses/ug_bsc_cs.png" },
    { name: "B.Sc. Computer Science (AI & DS)", desc: "AI & Data Science specialization", path: "/admission/programs/bsc/bsc-ai-ds", icon: Brain, image: "/courses/ug_bsc_aids.png" },
    { name: "B.Sc. Mathematics", desc: "Mathematics & analytical thinking", path: "/admission/programs/bsc/bsc-maths", icon: Calculator, image: "/courses/ug_bsc_maths.png" },
    { name: "B.Sc. Physics", desc: "Fundamentals of physical sciences", path: "/admission/programs/bsc/bsc-physics", icon: Globe, image: "/courses/ug_bsc_physics.png" },

  ];

  const features = [
    {
      title: "Life at JCSss",
      desc: "At Jayarani College, life is more than just lectures and labs...",
      image: "/newgirlimages/image-100.jpeg",
    },
    {
      title: "Collaborate at JCS",
      desc: "We believe in industry-academia partnerships to drive innovation.",
      image: "/newgirlimages/image-50.jpeg",
    },
    {
      title: "Studying at JCS",
      desc: "Join our vibrant community of learners and innovators",
      image: "/newgirlimages/image-10.jpeg",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-16 pb-40 sm:pb-48 md:pb-56 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Welcome to{" "}
            <span className="text-red-900">Jayarani College</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
            Where knowledge meets empowerment, and every woman is inspired to
            achieve excellence.
          </p>
        </div>

        {/* FEATURES */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20 md:gap-10">
          {features.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-visible">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 sm:h-72 object-cover rounded-2xl"
              />

              {/* FLOATING CARD (HALF DESIGN KEPT) */}
              <div
                className="
                absolute 
                -bottom-12 sm:-bottom-16 md:-bottom-20 
                left-0 right-0 
                mx-3 sm:mx-4 
                p-4 sm:p-5 
                rounded-xl 
                bg-blue-900/90 
                backdrop-blur-md 
                border border-white/20 
                text-white 
                transition 
                group-hover:bg-blue-900/80
              "
              >
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-16 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Explore to{" "}
            <span className="text-red-900">Our Programmes</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
            Choose from a wide range of programs designed to empower students.
          </p>
        </div>

        {/* COURSES GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <Link
                href={c.path}
                key={c.name}
                className="group relative rounded-2xl overflow-hidden shadow-md"
              >
                {/* Image */}
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-56 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{c.name}</h3>

                  <p className="text-xs sm:text-sm text-white/80 mt-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
                    {c.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* MORE BUTTON */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 flex justify-center sm:justify-end">
          <Link
            href="/admission/programs"
            className="text-red-900 font-semibold text-sm"
          >
            More Programmes →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Courses;