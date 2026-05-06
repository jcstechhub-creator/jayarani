"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import PageHeader from "@/app/components/PageHeader";
import { 
  Award, 
  BookOpen, 
  Cpu, 
  ShieldCheck, 
  Microscope, 
  Quote, 
  X, 
  ArrowUpRight,
  Globe,
  Users
} from "lucide-react";
import { pageImages } from "@/data/image";

// Dynamic import for PDF preview to fix build errors
const MagazinePreview = dynamic(() => import("../../components/MagazinePreview"), {
  ssr: false,
  loading: () => <div className="aspect-[3/4] bg-gray-100 animate-pulse rounded-2xl" />,
});

export const mag: string[] = [
   "/pdf/2026-april.pdf",
  "/pdf/2026-march.pdf",
  "/pdf/2026-feb.pdf",
  "/pdf/2026-jan.pdf",

  "/pdf/2025-oct.pdf",
  "/pdf/2025-sep.pdf",
  "/pdf/2025-aug.pdf",
  "/pdf/2025-july.pdf",
  "/pdf/2025-june.pdf",
  "/pdf/2025-may.pdf",

  "/pdf/2024-nov.pdf",
  "/pdf/2024-oct.pdf",
  "/pdf/2024-sep.pdf",
  "/pdf/2024-aug.pdf",
];

const CollegeMagazine: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentPdf, setCurrentPdf] = useState<string>("");

  const formatName = (path: string): string => {
    const fileName = path.split("/").pop()?.replace(".pdf", "") || "";
    const [year, month] = fileName.split("-");
    const monthNames: Record<string, string> = {
      aug: "August", sep: "September", oct: "October", nov: "November",
      may: "May", june: "June", july: "July",
    };
    return `${monthNames[month] || month} ${year}`;
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20 font-sans">
      {/* PDF MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm">
          <div className="w-full max-w-5xl h-[92vh] bg-white rounded-3xl overflow-hidden relative shadow-2xl">
            <button onClick={() => setOpen(false)} className="absolute top-5 right-5 bg-red-600 text-white p-2 rounded-full z-50 hover:bg-red-700 transition-all">
              <X size={24} />
            </button>
            <iframe src={`${currentPdf}#toolbar=0`} className="w-full h-full border-none" title="Magazine" />
          </div>
        </div>
      )}

      <PageHeader
        title="JCS Magazine 2026"
        subtitle="Celebrating excellence, innovation, and a legacy of empowerment."
        breadcrumb="Home / Publication / Magazine"
        image={pageImages.adminSecretary}
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-20">
              <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <Quote className="w-12 h-12 text-red-100 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">"If you dream it, you can achieve it!"</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
              "Our mission is to foster an atmosphere of inspiration and innovation..."
            </p>
            <div>
              <p className="font-bold text-red-900">Rev. Dr. Jothi Mary FIHM</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Secretary & Patron</p>
            </div>
          </div>
        </section>
        
        {/* TOP SECTION: AWARD & HERITAGE (BENTO GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Award Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#1A237E] to-[#121858] rounded-[2rem] p-10 text-white relative overflow-hidden shadow-xl">
            <div className="bg-[#FFD600]/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
              <Award className="text-[#FFD600] w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Academic Institution Award 2025-2026</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl">
              Recognized for our "Commitment to Academic Reform and Improvement." This prestigious award celebrates our continuous pursuit of excellence in the higher education landscape.
            </p>
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold">Presented by Hans Business Analytics</p>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          </div>

          {/* Heritage Card */}
          <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black text-red-800 uppercase tracking-[0.2em] mb-4">Our Heritage</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Rooted in the 1844 mission of the <span className="font-bold text-gray-900">Immaculate Sisters</span>, Jayarani College carries forward a legacy of 180 years in women's education.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-700 font-bold">18</div>
                <p className="text-sm font-medium text-gray-700">Provinces & Global Outreach</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-700 font-bold">1k</div>
                <p className="text-sm font-medium text-gray-700">Sisters Serving Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* RESEARCH & ARTICULATION SECTION */}
        <section>
          <div className="mb-10">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">Research & Articulation</h2>
            <p className="text-gray-400 italic text-sm">Highlights from the A2I 2025 National Conference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI in Healthcare */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                <Microscope size={32} />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">AI in Healthcare</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Exploring malignant cell growth detection using k-neighbourhood analysis and XGBoost learning.
              </p>
            </div>

            {/* FemGuard Project */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">FemGuard Project</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A standalone SIM-based wearable security device developed for women's safety in offline environments.
              </p>
            </div>

            {/* Next-Gen Commerce */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                <Cpu size={32} />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">Next-Gen Commerce</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Revolutionizing business models through machine learning and AI-powered customer segmentation.
              </p>
            </div>
          </div>
        </section>

        {/* ACADEMIC EXCELLENCE (TAGS) */}
        <section className="text-center pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Academic Excellence</h2>
          <p className="text-gray-500 text-sm mb-8">Developing human capital with a first-class mindset.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["COMMERCE", "COMPUTER SCIENCE", "MATHEMATICS", "ENGLISH", "PHYSICS"].map((dept) => (
              <span key={dept} className="bg-red-50 text-red-900 px-6 py-2 rounded-full text-[10px] font-black tracking-widest border border-red-100">
                {dept}
              </span>
            ))}
          </div>
        </section>

        {/* MAGAZINE ARCHIVE (The Slider/Grid) */}
        <section className="pt-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-red-900 p-3 rounded-2xl shadow-lg shadow-red-900/20">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Archived Editions</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {mag.map((pdfPath, index) => (
           <div 
  key={index} 
  onClick={() => { 
    setCurrentPdf(pdfPath);
    setOpen(true);
  }} 
  className="group cursor-pointer"
>
           <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden border border-gray-200 relative mb-4 group-hover:border-red-400 group-hover:shadow-2xl transition-all duration-500">
                  <MagazinePreview pdfPath={pdfPath} />
                  <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center ">
                    <div className="bg-white text-red-900 p-3 rounded-full shadow-xl">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
                <p className="text-center text-[10px] font-black text-gray-400 group-hover:text-red-900 uppercase tracking-widest transition-colors">
                  {formatName(pdfPath)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollegeMagazine;