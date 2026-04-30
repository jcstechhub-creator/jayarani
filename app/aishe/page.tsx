"use client";

import React, { useState } from 'react';
import { 
  FileCheck, 
  ExternalLink, 
  Award,  
  ShieldCheck, 
  Calendar, 
  Building2,
  DownloadCloud,
  X
} from 'lucide-react';
 
import { aishe } from "../../data/image";

export default function AISHECompliancePage() {
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  const aisheCertificates = [
    {
      year: "2024 - 2025",
      refNo: "C-63065-2024",
      submittedBy: "SYEDALIFATHIMA M",
      dated: "28/08/2025",
      signatory: "Ms. Navanita Gogoi",
      status: "Verified & Submitted",
      pdfUrl: aishe[0],
      thumbnail: aishe[0]
    },
    {
      year: "2023 - 2024",
      refNo: "C-63065-2023",
      submittedBy: "SYEDALIFATHIMA M",
      dated: "23/12/2024",
      signatory: "Ms. Navanita Gogoi",
      status: "Successfully Submitted",
      pdfUrl: aishe[1],
      thumbnail: aishe[1]
    },
    {
      year: "2022 - 2023",
      refNo: "C-63065-2022",
      submittedBy: "SYEDALIFATHIMA M",
      dated: "12/02/2024",
      signatory: "Shri R. Rajesh",
      status: "Successfully Uploaded",
      pdfUrl: aishe[2],
      thumbnail: aishe[2]
    },
    {
      year: "2019 - 2020",
      refNo: "C-63065-2019",
      submittedBy: "Mr. A. Thirumavalavan",
      dated: "20/02/2020",
      signatory: "Madan Mohan",
      status: "Successfully Uploaded",
      pdfUrl: aishe[3],
      thumbnail: aishe[3]
    }
  ];

  const handleOpenPdf = (url: string) => {
    setSelectedPdf(url);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans">
      {/* Hero Section */}
      <div className="bg-[#1A2E5A] text-white py-20 px-10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
              <ShieldCheck className="w-12 h-12 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">AISHE Certifications</h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                All India Survey on Higher Education Compliance
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="px-4 py-2 bg-yellow-400 text-[#1A2E5A] rounded-full font-bold text-xs uppercase tracking-widest">
              College Code: C-63065
            </span>
            <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full font-medium text-xs uppercase tracking-widest">
              Ministry of Education, Govt. of India 
            </span>
          </div>
        </div>
        <Building2 className="absolute right-[-40px] bottom-[-40px] w-80 h-80 text-white/5" />
      </div>

      {/* Main Compliance Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4 uppercase tracking-[0.2em]">
            Annual Survey Submissions
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Official certifications issued by the Department of Higher Education, Statistics Division, New Delhi for the successful institutional data upload.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aisheCertificates.map((cert, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2F4A8A] group-hover:bg-[#2F4A8A] group-hover:text-white transition-colors">
                  <FileCheck size={28} />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Academic Year</span>
                  <p className="text-2xl font-black text-[#1A2E5A]">{cert.year}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase">Reference Number</span>
                  <span className="text-sm font-mono font-bold text-[#2F4A8A]">{cert.refNo}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase">Submitted By</span>
                  <span className="text-sm font-medium text-slate-700">{cert.submittedBy}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase">Dated</span>
                  <span className="text-sm font-medium text-slate-700">{cert.dated}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cert.status}</span>
                </div>
                <button 
                  onClick={() => handleOpenPdf(cert.pdfUrl)}
                  className="flex items-center gap-2 text-[#2F4A8A] font-bold text-[11px] uppercase tracking-widest hover:text-blue-700 transition-colors"
                >
                  <DownloadCloud size={16} /> View PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PDF MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
          <div className="w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden relative shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors shadow-lg"
            >
              <X size={24} />
            </button>
            <iframe
              src={selectedPdf}
              className="w-full h-full border-none"
              allow="autoplay"
              title="PDF Preview"
            ></iframe>
          </div>
        </div>
      )}

      {/* Official Signatories Section */}
      <section className="py-20 bg-slate-50 px-6 rounded-t-[4rem]">
        <div className="max-w-5xl mx-auto text-center">
          <Award className="w-12 h-12 text-slate-200 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-[#1A2E5A] mb-10 uppercase tracking-[0.1em]">Verification Authorities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6">
              <p className="text-sm font-bold text-slate-700 mb-1">Ms. Navanita Gogoi</p>
              <p className="text-[10px] text-slate-400 uppercase font-medium">Deputy Director General (2024-25) </p>
            </div>
            <div className="p-6 border-x border-slate-200">
              <p className="text-sm font-bold text-slate-700 mb-1">Shri R. Rajesh</p>
              <p className="text-[10px] text-slate-400 uppercase font-medium">Deputy Director General (2022-23) </p>
            </div>
            <div className="p-6">
              <p className="text-sm font-bold text-slate-700 mb-1">Madan Mohan</p>
              <p className="text-[10px] text-slate-400 uppercase font-medium">Deputy Director General (2019-20) </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Footer */}
      <footer className="py-12 text-center text-slate-400 text-[10px] uppercase tracking-[0.3em]">
        <p>© 2026 Jayarani Arts & Science College for Women. Salem - 636002</p>
        <p className="mt-2 text-slate-300">Data verified as per Govt. of India AISHE Portals </p>
      </footer>
    </div>
  );
}