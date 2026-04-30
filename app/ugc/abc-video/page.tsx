"use client";

import PageHeader from "@/app/components/PageHeader";
import { PlayCircle, Info } from "lucide-react";

export default function ABCVideoPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader
        title="ABC Video Guide"
        subtitle="Step-by-step video instructions for registering and managing your Academic Bank of Credits."
        breadcrumb="Home / UGC / ABC Video"
        // image="/newgirlimages/image-50.jpeg"
        image="/banner/banner4.jpeg"
      />

      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="aspect-video bg-slate-900 flex items-center justify-center group cursor-pointer relative">
            {/* Placeholder for Video Player */}
            <PlayCircle size={80} className="text-white/20 group-hover:text-white/50 transition-all group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://drive.google.com/file/d/1L_QMCPtwm4sLnavu7X8WMloLIRNjo4-D/view?usp=drive_link"
                target="_blank"
                className="px-8 py-3 bg-red-600 text-white rounded-full font-bold shadow-xl hover:bg-red-700 transition"
              >
                Watch Instruction Video
              </a>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-2 text-blue-600 mb-3">
              <Info size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Tutorial</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">How to register for ABC?</h2>
            <p className="mt-4 text-slate-600">
              This video provides a step-by-step walkthrough for students to link their Aadhaar
              and verify their UMIS numbers for the Academic Bank of Credits[cite: 360, 1642].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}