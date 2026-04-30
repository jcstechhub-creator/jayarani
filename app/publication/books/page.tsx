"use client";

import React from "react";
import { Book, FileText, Info, Search, Library, Hash, GraduationCap, Users, Cpu, Award, Globe, UserCheck } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { contentImages, pageImages } from "@/data/image";

const PublicationsBooks = () => {
  const assets = {
    libraryHero: pageImages.adminSecretary,
    proceedingsCover: "/newgirlimages/image-50.jpeg", 
    iotBookFull: contentImages?.bookImage, // The optimized high-res "Full Wrapper B5 IoT"
  };

  const libraryRules = [
    { text: "Students can borrow up to three books using their ID card[cite: 3].", icon: <Users size={18} /> },
    { text: "Faculty members are permitted to borrow up to five books[cite: 3].", icon: <GraduationCap size={18} /> },
    { text: "Standard loan period is two weeks with options for renewal[cite: 3].", icon: <Search size={18} /> },
    { text: "An overdue fine of ₹1 per day is charged for late returns[cite: 3].", icon: <Info size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-24">
      <PageHeader
        title="Institutional Publications"
        subtitle="Showcasing the global research impact and scholarly works of our faculty."
        breadcrumb="Home / Publication / Books"
        image={assets.libraryHero}
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-32">

        {/* SECTION 1: FULL SIZE BOOK SHOWCASE (SPOTLIGHT) */}
        <section className="relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* The Full Size Image */}
            <div className="lg:col-span-7 group">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white p-4">
                <img
                  src={assets.iotBookFull}
                  alt="Full Wrapper - Internet of Things and Embedded Systems"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-8 right-8">
                  <span className="bg-[#0d2a21] text-white px-4 py-2 rounded-xl text-[10px] font-black tracking-widest shadow-xl">
                    FULL WRAPPER DISPLAY
                  </span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                  <Hash size={14} className="text-orange-600" />
                  <span className="text-[11px] font-mono font-bold text-slate-600">ISBN: 978-93-6492-724-6</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                  <Globe size={14} className="text-blue-600" />
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">SK Research Group of Companies</span>
                </div>
              </div>
            </div>

            {/* Author Biography & Details */}
            <div className="lg:col-span-5 sticky top-24">
              <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Major Academic Work</span>
              <h2 className="text-5xl font-serif text-slate-900 leading-tight mb-8">
                Internet of Things (IoT) and <br />
                <span className="italic text-[#0d2a21]">Embedded Systems</span>
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 uppercase tracking-tighter">
                    <UserCheck size={18} className="text-orange-600" /> About the Author
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    <strong>Dr. D. Arul Pon Daniel</strong> (Ph.D., Periyar University) serves as the 
                    Deputy Principal and Assistant Professor in the Department of Computer Science (AI & DS) 
                    at Jayarani Arts & Science College for Women.
                  </p>
                  <div className="flex gap-4 border-t border-slate-50 pt-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">7</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Books</p>
                    </div>
                    <div className="w-px h-8 bg-slate-100 mx-2 self-center" />
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">25</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Journals</p>
                    </div>
                    <div className="w-px h-8 bg-slate-100 mx-2 self-center" />
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">2020</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Excellence Award</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#0d2a21] rounded-3xl text-white">
                    <Cpu size={24} className="text-orange-400 mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Core Areas</p>
                    <p className="text-xs font-bold leading-relaxed">Blockchain, IoT & Data Visualization</p>
                  </div>
                  <div className="p-6 bg-slate-900 rounded-3xl text-white">
                    <Award size={24} className="text-blue-400 mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Impact</p>
                    <p className="text-xs font-bold leading-relaxed">Outstanding Reviewer Award (Elsevier)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: LIBRARY REGS[cite: 3] */}
        <section className="pt-20 border-t border-slate-100">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-[#2F4A8A] p-3 rounded-2xl shadow-xl shadow-blue-900/10">
                <Library className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Library Regulations</h2>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest hidden md:block">Reference Section: 09:30 - 04:30[cite: 3]</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {libraryRules.map((rule, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-slate-50 hover:border-b-[#2F4A8A]">
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-[#2F4A8A] group-hover:text-white transition-colors">
                  {rule.icon}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CARE OF MATERIALS */}
        <div className="bg-[#1C1917] rounded-[3.5rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h3 className="text-4xl font-serif mb-6">Preserving our <span className="italic text-slate-400">Intellectual Assets</span></h3>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  Borrowers are held liable for any markings or damage to books. 
                  Cleanliness of college building, furniture, and library materials is a personal 
                  responsibility of every student[cite: 3].
                </p>
                <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                   <p className="text-white font-bold text-sm">"Success is a message for our students."[cite: 3]</p>
                </div>
             </div>
             <div className="flex flex-col gap-6">
                <div className="p-8 bg-red-900/20 rounded-[2rem] border border-red-900/30">
                   <p className="text-red-200 text-lg font-serif italic">
                     "All students must return books a week before the last working day of the semester[cite: 3]."
                   </p>
                </div>
                <div className="p-8 bg-blue-900/20 rounded-[2rem] border border-blue-900/30">
                   <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">
                     Replacing lost items requires payment for the entire set plus fine[cite: 3].
                   </p>
                </div>
             </div>
          </div>
          <Book className="absolute -right-10 -bottom-10 w-96 h-96 text-white/5 -rotate-12" />
        </div>

      </div>
    </div>
  );
};

export default PublicationsBooks;