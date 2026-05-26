"use client";
// import A32026 from "A32026.pdf"; // Your specified import
// import A312026 from "@/assets/images/A31-2026.jpg"; // Your specified import

import React, { useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import { ExternalLink, FileText, Calendar, ArrowUpRight, Layers } from "lucide-react";
import { pageImages } from "@/data/image";

const ConferenceProceedings = () => {
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleViewPdf = (url: any) => {
    setPdfUrl(url);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
      {/* 1. Premium Page Header */}
      <PageHeader
        title="Conference Proceedings"
        subtitle="Access peer-reviewed research indices and official scholarly catalogs from our flagship international conventions."
        breadcrumb="Home / Publication / Proceedings"
        image={pageImages.adminSecretary}
      />

      {/* 2. Premium Grid Content Layout */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-sm font-bold tracking-widest text-[#2F4A8A] uppercase mb-2 flex items-center justify-center md:justify-start gap-2">
            <Layers size={16} className="text-yellow-500" /> Published Volumes
          </h2>
          <p className="text-2xl font-extrabold text-gray-900 tracking-tight">Official Digital Repositories</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Edition 1: A3I 2025 */}
          <div className="group relative bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all duration-500" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-400/10 text-yellow-400 rounded-xl text-xs font-bold uppercase tracking-wider border border-yellow-400/20">
                  <Calendar size={12} /> National Edition
                </div>
                <span className="text-xs font-mono text-slate-500 font-bold group-hover:text-slate-400 transition-colors">A3I 2025</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-100 leading-snug tracking-tight mb-4 group-hover:text-white transition-colors">
                National Conference on AI, Analytics & Articulation: The Future of Business & Communication
              </h3>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <a 
                href="https://doi.org/10.5281/zenodo.18668681" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700/50 transition-all"
              >
                Index DOI <ExternalLink size={13} className="opacity-60" />
              </a>
            </div>
          </div>

          {/* Edition 2: A3I 2026 */}
          <div className="group relative bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-500" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-400/10 text-emerald-400 rounded-xl text-xs font-bold uppercase tracking-wider border border-emerald-400/20">
                  <Calendar size={12} /> International Edition
                </div>
                <span className="text-xs font-mono text-slate-500 font-bold group-hover:text-slate-400 transition-colors">A3I 2026</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-100 leading-snug tracking-tight mb-4 group-hover:text-white transition-colors">
                International Conference on Analytics, Articulation & AI: The Prospects for Industry and Collaboration
              </h3>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a 
                href="https://doi.org/10.5281/zenodo.20390888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700/50 transition-all grow text-center"
              >
                Index DOI <ExternalLink size={13} className="opacity-60" />
              </a>
<button 
  onClick={() => handleViewPdf("/A32026.pdf")}
  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2F4A8A] to-[#1f3566] text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer"
>
  <FileText size={14} />
  View Full Book PDF
</button>
              {/* <button 
                onClick={() => handleViewPdf(A32026)}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2F4A8A] to-[#1f3566] hover:from-[#3b5ca6] hover:to-[#2F4A8A] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] cursor-pointer grow text-center"
              >
                <FileText size={14} />
                View Full Book PDF
              </button> */}
            </div>
          </div>

        </div>
      </div>

      {/* 3. Immersive Glassmorphic Modal PDF Viewer */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999] p-4 transition-all duration-300">
          <div className="w-full h-full max-w-7xl max-h-[92vh] bg-white rounded-2xl overflow-hidden relative shadow-2xl flex flex-col border border-white/10 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Context Header Control Deck */}
            <div className="flex items-center justify-between bg-slate-900 text-white px-6 py-4 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <FileText className="text-yellow-400" size={20} />
                <span className="text-sm font-semibold tracking-tight truncate max-w-xs sm:max-w-md">A3I 2026 Document Library Viewer</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer uppercase tracking-wider"
              >
                Close View
              </button>
            </div>

            {/* Embedded Sandbox Environment Component */}
            <div className="w-full h-full bg-slate-100 relative">
              <iframe
                src={`${pdfUrl}`} 
                className="w-full h-full border-0 absolute inset-0" 
                allow="autoplay"
                title="A3I Scholarly Catalogue Viewer"
              ></iframe>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ConferenceProceedings;