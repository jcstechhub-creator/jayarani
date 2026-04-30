"use client";

import React from "react";
import { Book, FileText, Info, Search, Library, Hash, GraduationCap } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";

const PublicationsBooks = () => {
  const pageImages = {
    libraryHero: "/newgirlimages/image-10.jpeg",
    proceedingsCover: "/newgirlimages/image-50.jpeg", // A3I 2025 related
  };

  const libraryRules = [
    { text: "Students can borrow up to three books using their ID card.", icon: <Info size={18} /> },
    { text: "Faculty members are permitted to borrow up to five books.", icon: <GraduationCap size={18} /> },
    { text: "Standard loan period is two weeks with options for renewal.", icon: <Search size={18} /> },
    { text: "An overdue fine of ₹1 per day is charged for late returns.", icon: <Info size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <PageHeader
        title="Books & Publications"
        subtitle="Exploring the intellectual landscape and research output of Jayarani College."
        breadcrumb="Home / Publication / Books"
        image={pageImages.libraryHero}
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-24">

        {/* Section 1: Featured Publication */}
        <section className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-8 lg:p-16 border border-gray-100">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-blue-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={pageImages.proceedingsCover}
                alt="A3I 2025 Proceedings"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-yellow-400 mb-1">
                  <Hash size={16} />
                  <span className="text-xs font-mono font-bold tracking-widest">ISBN 978-93-342-2982-0</span>
                </div>
                <p className="text-white text-sm font-medium">Edition: 2025</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="bg-red-100 text-red-900 text-xs font-bold px-4 py-1 rounded-full tracking-widest">LATEST RELEASE</span>
            <h2 className="text-4xl font-heading font-bold text-gray-900 leading-tight">
              AI, Analytics & Articulation: The Future of Business & Communication
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              This comprehensive repository contains groundbreaking research and innovative ideas addressing
              the most pressing challenges in the digital age. It serves as a bridge
              between researchers and the intellectual world.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-4 border-blue-900 pl-4">
                <h4 className="font-bold text-gray-900">Research Areas</h4>
                <p className="text-sm text-gray-500">AI, Data Science, Corporate Communication</p>
              </div>
              <div className="border-l-4 border-red-900 pl-4">
                <h4 className="font-bold text-gray-900">Contributors</h4>
                <p className="text-sm text-gray-500">Academicians, Subject Experts & Students</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Library & Resources */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-red-900 p-3 rounded-2xl">
              <Library className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Library Resources & Regulations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Borrowing Rules */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {libraryRules.map((rule, idx) => (
                <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="text-red-900 bg-red-50 p-2 rounded-lg">{rule.icon}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{rule.text}</p>
                </div>
              ))}
            </div>

            {/* Reference Note */}
            <div className="bg-blue-900 rounded-3xl p-8 text-white">
              <Book className="w-10 h-10 mb-6 text-blue-200" />
              <h3 className="text-xl font-bold mb-4">Reference Section</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Dictionaries, yearbooks, and encyclopedias labeled as **Reference** will not be lent.
                Please use these materials within the library premises.
              </p>
              <div className="text-xs font-mono text-blue-300 uppercase tracking-widest bg-white/10 p-3 rounded-xl">
                Open: 9.30 AM - 4.30 PM
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: User Responsibility */}
        <section className="bg-red-900 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText /> Care of Materials
              </h3>
              <p className="text-red-100 leading-relaxed">
                Cleanliness and preservation are personal responsibilities. Borrowers are held liable for any
                markings or damage to books. If a book is lost, the cost of replacing the set
                along with a fine will be recovered.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-red-200 text-sm italic">
                "All students must return books a week before the last working day of the semester."
              </p>
            </div>
          </div>
          <Library className="absolute -left-10 -bottom-10 w-64 h-64 text-white/5 -rotate-12" />
        </section>

      </div>
    </div>
  );
};

export default PublicationsBooks;