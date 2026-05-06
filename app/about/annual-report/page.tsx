"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  FileText, 
  Download, 
  Eye,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  X
} from "lucide-react";

// Corrected PDF Data object
export const pdfData = {
  "annual-report": "/pdf/annual-report.pdf",
  "anti-ragging": "/pdf/anti-ragging.pdf",
  "letter": "/pdf/letter.pdf",
};

// Dynamic import for the preview component
const MagazinePreview = dynamic(() => import("../../components/MagazinePreview"), {
  ssr: false,
  loading: () => <div className="aspect-[3/4] bg-gray-100 animate-pulse rounded-xl" />,
});

export default function AnnualReport() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const reportPath = pdfData["annual-report"];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* FULL SCREEN MODAL VIEW */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button 
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 z-50 bg-red-600 text-white p-2 rounded-full hover:rotate-90 transition-all"
            >
              <X size={24} />
            </button>
            <iframe src={`${reportPath}#toolbar=0`} className="w-full h-full" />
          </div>
        </div>
      )}

      <PageHeader 
        title="Annual Reports"
        subtitle="A comprehensive record of our academic journey and milestones."
        breadcrumb="Home / About / Annual Report"
        image={pageImages.aboutAnnualReport}
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              
              {/* CONTENT SIDE */}
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                  <TrendingUp size={14} /> Current Session
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E5A] mb-6">
                  Annual Report <br /> Academic Year 2025-26
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8 font-light text-lg">
                  Access the complete academic report including faculty achievements, 
                  student milestones, and our strategic growth roadmap for the upcoming year.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {/* Download Action */}
                  <a 
                    href={reportPath} 
                    download 
                    className="flex items-center gap-3 bg-[#2F4A8A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1A2E5A] transition-all shadow-lg shadow-blue-900/20"
                  >
                    <Download size={20} /> Download PDF
                  </a>
                  
                  {/* Preview Trigger */}
                  <button 
                    onClick={() => setIsPreviewOpen(true)}
                    className="flex items-center gap-2 text-[#2F4A8A] px-8 py-4 font-bold hover:bg-slate-50 rounded-xl transition-all"
                  >
                    <Eye size={18} /> Interactive View
                  </button>
                </div>
              </div>

              {/* VISUAL PREVIEW SIDE */}
              <div className="bg-[#2F4A8A] p-12 lg:p-20 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-5">
                   <FileText size={400} className="text-white -rotate-12 translate-x-10" />
                </div>
                
                {/* The "Magazine Card" Preview */}
                <div className="relative z-10 group cursor-pointer" onClick={() => setIsPreviewOpen(true)}>
                  <div className="bg-white p-4 pb-8 rounded-xl shadow-2xl transform group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500 w-64 h-80 overflow-hidden border-t-8 border-red-700">
                    <div className="w-full h-full rounded-md overflow-hidden border border-gray-100 mb-2">
                       {/* Showing page 1 of the actual PDF */}
                       <MagazinePreview pdfPath={reportPath} />
                    </div>
                    <div className="flex justify-between items-center px-1">
                       <p className="text-[10px] font-black text-gray-400">REF: AR-2026</p>
                       <ArrowRight size={14} className="text-blue-900" />
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 p-4 rounded-2xl shadow-xl font-black text-center leading-none">
                    <p className="text-sm">NEW</p>
                    <p className="text-[10px]">ISSUE</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}