"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { Award, BookOpen, Cpu, ShieldCheck, Microscope, Users, Quote } from "lucide-react";
import { pageImages } from "@/data/image";

const CollegeMagazine = () => {
  const magazineImages = {
    hero:  pageImages.adminSecretary,
    award: "/newgirlimages/award_2025.jpg",
    conference: "/newgirlimages/image-50.jpeg",
  };

  return ( 
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHeader
        title="JCS Magazine 2026"
        subtitle="Celebrating excellence, innovation, and a legacy of empowerment."
        breadcrumb="Home / Publication / Magazine"
        image={magazineImages.hero}
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-16">

        {/* Section 1: Secretary's Welcome */}
        <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <Quote className="w-12 h-12 text-red-100 mb-6" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              "If you dream it, you can achieve it!"
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
              "Our mission is to foster an atmosphere of inspiration and innovation,
              where young women realize their goals and change the world.
              Together, let's reimagine a world of boundless possibilities."
            </p>
            <div>
              <p className="font-bold text-red-900">Rev. Dr. Jothi Mary FIHM</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Secretary & Patron</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-20 -mt-20 opacity-50" />
        </section>

        {/* Section 2: Achievement Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Award Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white flex flex-col justify-between">
            <div>
              <div className="bg-yellow-400/20 w-fit p-3 rounded-2xl mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Academic Institution Award 2025-2026</h3>
              <p className="text-gray-300 text-lg">
                Recognized for our <strong>"Commitment to Academic Reform and Improvement."</strong>
                This prestigious award celebrates our continuous pursuit of excellence in the higher education landscape.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
              <span className="text-sm uppercase tracking-tighter text-gray-400">Presented by RAMS Business Analytics</span>
            </div>
          </div>

          {/* Legacy Card */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-red-900 font-bold uppercase text-sm tracking-widest mb-4">Our Heritage</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Rooted in the 1844 mission of the <strong>Immaculate Sisters</strong>,
              Jayarani College carries forward a legacy of 180 years in women's education.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-900 font-bold">18</div>
                <p className="text-sm font-medium">Provinces & Global Outreach</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-900 font-bold">1k</div>
                <p className="text-sm font-medium">Sisters Serving Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: A3I Conference Highlights */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Research & Articulation</h2>
              {/* FIXED: Removed extra bracket and added closing > */}
              <p className="text-gray-500 mt-2 italic">Highlights from the A3I 2025 National Conference</p>
            </div>
            <div className="hidden md:block text-right">
              {/* FIXED: Added missing < for the closing tag */}
              <p className="text-xs font-mono text-gray-400 uppercase">ISBN: 978-93-342-2982-0</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Healthcare */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
              <Microscope className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">AI in Healthcare</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Exploring malignant cell growth detection using 8-neighbourhood analysis and XGBoost learning.
              </p>
            </div>

            {/* FemGuard */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
              <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">FemGuard Project</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                A standalone GSM-based wearable security device developed for women's safety in offline environments.
              </p>
            </div>

            {/* Next-Gen Commerce */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
              <Cpu className="w-10 h-10 text-purple-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">Next-Gen Commerce</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Revolutionizing business models through machine learning and AI-powered customer segmentation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Academic Pillars */}
        <section className="py-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900">Academic Excellence</h3>
            <p className="text-gray-500 mt-2">Developing human capital with a first-class mindset.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-red-900">
            {["COMMERCE", "COMPUTER SCIENCE", "MATHEMATICS", "ENGLISH", "PHYSICS"].map(dept => (
              <span key={dept} className="px-6 py-2 bg-red-50 rounded-full tracking-widest">{dept}</span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CollegeMagazine;