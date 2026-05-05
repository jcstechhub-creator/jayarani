"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import PageHeader from "@/app/components/PageHeader";
import { BookOpen, Quote, X } from "lucide-react";
import { pageImages } from "@/data/image";

// DYNAMIC IMPORT: This prevents the "DOMMatrix is not defined" error
const MagazinePreview = dynamic(() => import("@/app/components/MagazinePDF"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 w-full h-full" />
});

export const mag = [
  "/pdf/2024-aug.pdf",
  "/pdf/2024-sep.pdf",
  "/pdf/2024-oct.pdf",
  "/pdf/2024-nov.pdf",
  "/pdf/2025-may.pdf",
  "/pdf/2025-june.pdf",
  "/pdf/2025-july.pdf",
  "/pdf/2025-aug.pdf",
  "/pdf/2025-sep.pdf",
  "/pdf/2025-oct.pdf",
];

const CollegeMagazine = () => {
  const [open, setOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState("");

  const openMagazine = (url: string) => {
    setCurrentPdf(url);
    setOpen(true);
  };

  const formatName = (path: string) => {
    if (!path) return "";
    const fileName = path.split('/').pop()?.replace('.pdf', '') || "";
    const [year, month] = fileName.split('-');
    
    const monthNames: Record<string, string> = { 
        aug: "August", sep: "September", oct: "October", nov: "November", 
        may: "May", june: "June", july: "July" 
    };
    
    return `${monthNames[month] || month} ${year}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* PDF MODAL VIEWER */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
          onContextMenu={(e) => e.preventDefault()} 
        >
          <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl overflow-hidden relative shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-50 transition-colors"
            >
              <X size={24} />
            </button>

            <iframe
              src={`${currentPdf}#toolbar=0`}
              className="w-full h-full"
              title="Magazine Viewer"
            ></iframe>
          </div>
        </div>
      )}

      <PageHeader
        title="JCS Magazine 2026"
        subtitle="Celebrating excellence, innovation, and a legacy of empowerment."
        breadcrumb="Home / Publication / Magazine"
        image={pageImages.adminSecretary}
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-24">
        {/* Secretary Welcome */}
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

        {/* MAGAZINE ARCHIVE */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-red-900 p-3 rounded-2xl">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Archived Editions</h2>
              <p className="text-gray-500">Click on an issue to read the digital version</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mag.map((pdfPath, index) => (
              <div key={index} onClick={() => openMagazine(pdfPath)} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden border border-gray-200 relative mb-3 group-hover:border-red-400 group-hover:shadow-lg transition-all">
                  
                  {/* Loaded only on client */}
                  <MagazinePreview pdfPath={pdfPath} />

                  <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />

                  <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <span className="bg-white text-red-900 px-4 py-2 rounded-lg font-bold text-xs shadow-xl">Read PDF</span>
                  </div>
                </div>
                
                <p className="text-center text-xs font-bold text-gray-500 group-hover:text-red-900 transition-colors uppercase">
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