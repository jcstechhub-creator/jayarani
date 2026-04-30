"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  ShieldCheck, 
  Lightbulb, 
  Gavel, 
  Target, 
  BookOpen, 
  Handshake, 
  Globe, 
  Search,
  Scale,
  Award,
  Users
} from "lucide-react";

export default function IPRCellPage() {
  const objectives = [
    "To Orient the Faculty, Research Scholars and Students on the importance of IPR through Workshops/Seminars",
    "To Organize Periodic meetings with the experts from Patent Information Centre for Identifying patentable Inventions",
    "To Guide and Support the common public in obtaining protection for their Creative Ideas/Inventions",
    "To Create Conducive Ambience for the Development of Intellectual Property (IP)",
    "To Facilitate proper understanding of a wide range of legal concepts with regard to Copyrights, Trademarks, Patents, Geographical Indication, and Industrial Designs and Models"
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Intellectual Property Rights (IPR) Cell"
        subtitle="Protecting innovation and nurturing the research culture for a knowledge-driven economy."
        breadcrumb="Home / Innovation / IPR Cell"
        image={pageImages.innovationIpr}
      />

      {/* --- OVERVIEW SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Research & Development</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Safeguarding <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Innovation & Creativity</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg text-justify">
              <p>
                Protection and management of Intellectual Property (IP) have become a major challenge for countries across the globe as patents are considered as indicators of technological development and trends in R & D.
              </p>
              <p>
                Realizing the potential of knowledge as the main creator of wealth in the emerging world economy, most of the nations in the world work on projects that would help improve the economy and protect their Intellectual Property.
              </p>
              <div className="p-6 bg-blue-50 border-l-4 border-[#2F4A8A] rounded-r-2xl text-base italic">
                "Realizing the potential of Higher Education Institutions in incubating ideas and providing solutions, the IPR Cell is committed to converting society-friendly research concepts to valuable patents."
              </div>
            </div>
          </div>

          <div className="bg-[#1A2E5A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <ShieldCheck className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-yellow-400" /> Objectives
              </h3>
              <ul className="space-y-6">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[10px] font-bold text-yellow-400">{i + 1}</span>
                    </div>
                    <p className="text-sm font-light text-blue-100/90 leading-relaxed">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & SCOPE --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-[#1A2E5A] mb-6 flex items-center gap-3">
                  <Lightbulb className="text-[#2F4A8A]" /> Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed font-light mb-8">
                  The Intellectual Property Rights (IPR) Cell of Sacred Heart College is established with a view to promote innovation and research culture on the campus, faculty and students-led start-ups and ventures and help them to protect and respect intellectual property.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-bold text-[#1A2E5A] text-sm mb-2">Translation</h5>
                    <p className="text-xs text-slate-500">Converting innovation into value-added products and services for society.</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-bold text-[#1A2E5A] text-sm mb-2">Market Feasibility</h5>
                    <p className="text-xs text-slate-500">Studying and exploring the commercial viability of research outcomes.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2F4A8A] rounded-[3rem] rotate-3 opacity-10" />
                  <img 
                    src="/newgirlimages/image-74.jpeg" 
                    alt="Innovation" 
                    className="rounded-[3rem] relative z-10 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GOVERNANCE & INITIATIVES --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Governance & Academic Outreach</h3>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all group">
              <Users className="text-[#2F4A8A] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">Research Committee</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                The IPR Cell functions directly under the Research Committee of the college, ensuring that intellectual protection is integrated into every stage of the academic research lifecycle.
              </p>
            </div>
            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all group">
              <BookOpen className="text-[#2F4A8A] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">IQAC Collaboration</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                IQAC, in association with the IPR Cell, regularly organizes specialized seminars to propagate the importance of IPR among the teaching community, fostering a culture of compliance and protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEGAL FRAMEWORK SECTION --- */}
      <section className="py-24 bg-[#1A2E5A] text-white relative overflow-hidden">
        <Scale className="absolute top-0 right-0 p-10 opacity-5" size={300} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Comprehensive IP Domains</h3>
            <p className="text-blue-200/60 font-light mt-2 italic text-sm">Legal concepts and protections facilitated by the cell</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Patents", "Trademarks", "Copyrights", "Industrial Designs", "Geographical Indication"].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <Gavel className="text-yellow-400 mb-4" size={24} />
                <span className="text-xs font-bold uppercase tracking-widest text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <Search className="mx-auto text-slate-200 mb-8" size={64} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Seeking Patent Protection?</h3>
          <p className="text-slate-500 font-light leading-relaxed mb-10">
            If you have a creative idea or a research-led invention, our IPR Cell provides 
            end-to-end support for identifying and filing patentable inventions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
              Consult the IPR Cell
            </button>
            <button className="border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
              Download Guidelines
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}